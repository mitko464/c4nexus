import { useLocation } from "react-router";
import { useEffect, useRef, useState, createContext } from "react";

const ProductContext = createContext();

const EMPTY_PRODUCTS_STATE = {
    title: '',
    description: '',
    products: [],
    totalItems: 0,
    pages: {
        next: null,
        last: null
    }
}

export const ProductProvider = ({ children }) => {
    const location = useLocation();
    const routeCategory = location.pathname.slice(1);
    const category = routeCategory === "shoes" ? "shoes" : "bags";
    const [currentPage, setCurrentPage] = useState(1);

    const [productData, setProductData] = useState(EMPTY_PRODUCTS_STATE);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const previousCategoryRef = useRef(category);

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        if (previousCategoryRef.current !== category) {
            previousCategoryRef.current = category;

            if (currentPage !== 1) {
                setCurrentPage(1);
                setProductData(EMPTY_PRODUCTS_STATE);
            }
        }

        const fetchProducts = async () => {
            try {
                const [categoryResponse, productsResponse] = await Promise.all([
                    fetch(`/api/categories?slug=${category}`),
                    fetch(`/api/products?category=${category}&_page=${currentPage}&_per_page=10`)
                ]);

                if (!categoryResponse.ok || !productsResponse.ok) {
                    throw new Error('Fetch failed!');
                }

                const [categoryResult, productsResult] = await Promise.all([
                    categoryResponse.json(),
                    productsResponse.json()
                ]);

                const currentCategory = categoryResult?.[0] ?? {};
                const products = productsResult?.data || [];

                setProductData(prev => {
                    return {
                        title: currentCategory.title || "Products",
                        description: currentCategory.description || "Browse products.",
                        products: currentPage === 1 ? products : [...prev.products, ...products],
                        totalItems: Number(productsResult?.items) || products.length,
                        pages: {
                            next: productsResult.next,
                            last: productsResult.last
                        }
                    }
                });

            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchProducts();
    }, [category, currentPage]);

    return (
        <ProductContext.Provider value={{
            isLoading,
            setIsLoading,
            productData,
            error,
            isAddedToCart,
            setIsAddedToCart,
            currentPage,
            setCurrentPage,
            category
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContext }