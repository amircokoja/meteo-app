import { Routes, Route, Navigate } from "react-router-dom";
import CityOverview from "../pages/CityOverview/CityOverview";
import Search from "../pages/Search/Search";
import Settings from "../pages/Settings/Settings";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/search" element={<Search />} />
        <Route path="/city-overview/:id" element={<CityOverview />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/search" replace />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
