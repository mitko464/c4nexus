import { createContext, useState, useMemo, useEffect, useCallback } from "react";
import { useProducts } from "../hooks/useProducts";

const FiltersContext = createContext();

const EMPTY_FILTER_STATE = {
    color: [],
    size: [],
    rating: [],
};

const EMPTY_FILTERED_FETCH_STATE = {
    queryKey: "",
    data: [],
    items: null,
    first: null,
    prev: null,
    next: null,
    last: null,
    pages: null
};

export const FiltersProvider = ({ children }) => {
    const { productData, category, setIsLoading, setCurrentPage, currentPage } = useProducts();
    const [isFiltersPanelOpen, setIsFiltersPanelOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState(EMPTY_FILTER_STATE);
    const [filteredFetchData, setFilteredFetchData] = useState(EMPTY_FILTERED_FETCH_STATE);
    const filterData = useMemo(() => productData.products, [productData.products]);
    const hasActiveFilters = useMemo(
        () => Object.values(selectedFilters).some((values) => values.length > 0),
        [selectedFilters]
    );

    const filterQuery = useMemo(() => {
        let query = "";

        for (const [key, values] of Object.entries(selectedFilters)) {
            const uniqueValues = [...new Set(values)];

            if (!uniqueValues.length) {
                continue;
            }

            query += `&${key}:in=${uniqueValues.join(",")}`
        }

        return query;
    }, [selectedFilters]);

    const activeQueryKey = useMemo(() => `${category}${filterQuery}`, [category, filterQuery]);

    const availabeFilters = useMemo(() => {
        const color = new Set();
        const size = new Set();
        const rating = new Set();

        for (const product of filterData) {
            if (product.color) {
                color.add(product.color);
            }
            if (product.size) {
                size.add(product.size);
            }
            if (product.rating) {
                rating.add(product.rating);
            }
        }

        return {
            color: [...color],
            size: [...size],
            rating: [...rating]
        }
    }, [filterData]);

    const fetchFilteredData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`/api/products?category=${category}${filterQuery}&_page=${currentPage}&_per_page=10`);

            if (!response.ok) {
                throw new Error('Filtered fetch failed');
            }
            const result = await response.json();

            setFilteredFetchData(prev => {
                const shouldAppend = currentPage > 1 && prev.queryKey === activeQueryKey;
                return {
                    ...result,
                    queryKey: activeQueryKey,
                    data: shouldAppend
                        ? [...prev.data, ...result.data]
                        : result.data
                }
            });

        } catch (error) {
            console.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }, [activeQueryKey, category, currentPage, filterQuery, setIsLoading]);

    useEffect(() => {
        if (!hasActiveFilters) {
            setFilteredFetchData(EMPTY_FILTERED_FETCH_STATE);
            return;
        }

        fetchFilteredData();
    }, [hasActiveFilters, fetchFilteredData])

    const resetFilters = () => {
        setSelectedFilters(EMPTY_FILTER_STATE);

        if (currentPage !== 1) {
            setCurrentPage(1);
        }
    }

    return (
        <FiltersContext.Provider value={{
            selectedFilters,
            setSelectedFilters,
            resetFilters,
            isFiltersPanelOpen,
            setIsFiltersPanelOpen,
            availabeFilters,
            filteredFetchData,
            hasActiveFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}

export { FiltersContext }