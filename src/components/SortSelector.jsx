import { useState } from "react";

const SortSelector = ({ onSortByChange }) => {
    const [sortBy, setSortBy] = useState("relevance");

    const handleSortChange = (event) => {
        const nextSortBy = event.target.value;
        setSortBy(nextSortBy)
        onSortByChange(nextSortBy)
    }

    return (
        <select id="sort" value={sortBy} onChange={handleSortChange} className="sort-selector">
            <option value="relevance">Relevance</option>
            <option value="alphabetical-des">Alphabetical (A-Z)</option>
            <option value="alphabetical-asc">Alphabetical (Z-A)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
        </select>
    )
}

export default SortSelector