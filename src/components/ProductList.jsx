import { useProducts } from "../hooks/useProducts"
import { useFilters } from "../hooks/useFilters";
import { useMemo, useState } from "react";
import LoadMoreButton from "./LoadMoreButton"
import ProductCard from "./ProductCard"
import SortSelector from "./SortSelector"
import { MdErrorOutline } from "react-icons/md";

const ProductList = ({ onAddToCart }) => {
    const { productData, isLoading } = useProducts();
    const { filteredFetchData, hasActiveFilters } = useFilters();
    const [sortBy, setSortBy] = useState("relevance");

    const products = useMemo(
        () => hasActiveFilters ? (filteredFetchData?.data || []) : (productData?.products || []),
        [hasActiveFilters, filteredFetchData?.data, productData?.products]
    );

    const totalItems = hasActiveFilters
        ? (filteredFetchData?.items ?? products.length)
        : (productData?.totalItems ?? products.length);

    const sortedProducts = useMemo(() => {
        const list = [...products];

        switch (sortBy) {
            case "alphabetical-des":
                return list.sort((firstProduct, secondProduct) => firstProduct.title.localeCompare(secondProduct.title));
            case "alphabetical-asc":
                return list.sort((firstProduct, secondProduct) => secondProduct.title.localeCompare(firstProduct.title));
            case "price-asc":
                return list.sort((firstProduct, secondProduct) => firstProduct.price - secondProduct.price);
            case "price-desc":
                return list.sort((firstProduct, secondProduct) => secondProduct.price - firstProduct.price);
            default:
                return list;
        }
    }, [products, sortBy]);

    return (
        <>
            {products.length &&
                <div className="product-list__wrapper">
                    <div className="product-list__sort">
                        <p className="product-list__info">{sortedProducts.length} out of {totalItems} products displayed</p>
                        <SortSelector onSortByChange={setSortBy} />
                    </div>
                    <ul className="product-list">
                        {sortedProducts?.map(product => <ProductCard key={product?.id} product={product} onAddToCart={onAddToCart} />)}
                    </ul>

                    <div className="product-list__actions">
                        <LoadMoreButton />
                    </div>
                </div>
            }
            {(!products.length && !isLoading) ?
                <div className="no-results">
                    <div className="no-results__icon"><MdErrorOutline /></div>
                    <h2 className="no-results__title">No results found for your search</h2>
                    <p className="no-results__description">Please try again with different filters</p>
                </div>
                : null
            }
        </>
    )
}

export default ProductList