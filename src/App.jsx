import MainLayout from "./layouts/MainLayout"
import ProductListing from "./pages/ProductListing"
import { Routes, Route, Navigate } from 'react-router'

const App = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Navigate to="/bags" replace />} />
                <Route path="/bags" element={<ProductListing />} />
                <Route path="/shoes" element={<ProductListing />} />
            </Route>
        </Routes>
    )
}

export default App