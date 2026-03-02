import StarRating from "./StarRating"
import { useFilters } from "../hooks/useFilters"
import { useProducts } from "../hooks/useProducts";

const FilterPill = ({ filter, value }) => {
    const { selectedFilters, setSelectedFilters } = useFilters();
    const { currentPage, setCurrentPage } = useProducts();

    const handleFilterChange = (e) => {
        const { name, value, checked } = e.target
        const parsedValue = name === "rating" ? Number(value) : value;

        setSelectedFilters(prev => {
            const prevValues = prev[name] ?? [];

            if (checked && prevValues.includes(parsedValue)) {
                return prev;
            }

            return {
                ...prev,
                [name]: checked
                    ? [...prevValues, parsedValue]
                    : prevValues.filter(item => item !== parsedValue)
            }
        });

        if (currentPage !== 1) {
            setCurrentPage(1)
        }
    }

    return (
        <div className="filter-pill">
            <label className="filter-pill__label" label={value}>
                <input
                    className="filter-pill__input"
                    type="checkbox"
                    name={filter}
                    value={value}
                    checked={(selectedFilters[filter]).includes(filter === 'rating' ? Number(value) : value)}
                    onChange={handleFilterChange}
                />
                <span className="filter-pill__value">{value}</span>
                {filter === 'rating' ? <StarRating rating={value} /> : ''}
            </label>
        </div>
    )
}

export default FilterPill