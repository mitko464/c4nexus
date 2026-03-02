import { useProducts } from "../hooks/useProducts";
import { useFilters } from "../hooks/useFilters";

const LoadMoreButton = () => {
    const { productData, currentPage, setCurrentPage } = useProducts();
    const { filteredFetchData, hasActiveFilters } = useFilters();

    const lastPage = hasActiveFilters ? filteredFetchData.last : productData.pages.last;
    const handleLoadMore = () => {
        if (currentPage < lastPage) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <button onClick={handleLoadMore} className={`btn ${lastPage === currentPage ? 'hidden' : ''}`}>Load more</button>
    )
}

export default LoadMoreButton;