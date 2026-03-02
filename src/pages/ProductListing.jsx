import Alert from "../components/Alert";
import Filters from "../components/Filters"
import ProductList from "../components/ProductList"
import Spinner from "../components/Spinner";
import { useProducts } from "../hooks/useProducts"

const ProductListing = () => {
    const { productData, isLoading, isAddedToCart, setIsAddedToCart } = useProducts();

    return (
        <>
            <section className="page-wrapper">
                <main className="category-page">
                    <div className="category-page__head">
                        <h2 className="category-page__title">{productData?.title}</h2>
                        <p className="category-page__description">{productData?.description}</p>
                    </div>
                    <aside className="category-page__filters">
                        <Filters />
                    </aside>
                    <div className="category-page__body">
                        <div className="category-page__content">
                            <ProductList />
                        </div>
                    </div>
                </main>
            </section>
            {isLoading && <Spinner />}
            <Alert isVisible={isAddedToCart} onClose={() => setIsAddedToCart(false)} />
        </>

    )
}

export default ProductListing