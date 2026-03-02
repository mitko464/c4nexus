import { IoClose } from "react-icons/io5";
import { useFilters } from "../hooks/useFilters";
import FilterPill from "./FilterPill"

const Filters = () => {
    const { isFiltersPanelOpen, setIsFiltersPanelOpen, availabeFilters, resetFilters } = useFilters();

    return (
        <div className="filters">
            <button onClick={() => setIsFiltersPanelOpen(true)} className="filters__toggle-open">Filters</button>

            <div className={`filters-panel ${isFiltersPanelOpen ? 'visible' : ''}`}>

                <button onClick={() => setIsFiltersPanelOpen(false)} className="filters__toggle-close"><IoClose /></button>

                <div className="filters-panel__title">Filters</div>
                <ul className="filters-list">
                    {Object.keys(availabeFilters).map(filter => {
                        return (
                            <li key={filter} className="filters-list__item">
                                <div className="filter">
                                    <h4 className="filter__title">{filter}:</h4>
                                    <div className="filter__content">
                                        {availabeFilters[filter].map(item => {
                                            return (
                                                <FilterPill key={`${filter}-${item}`} value={item} filter={filter} />
                                            )
                                        })}
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div className="filters__actions">
                    <button onClick={resetFilters} className="filters__reset">Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Filters