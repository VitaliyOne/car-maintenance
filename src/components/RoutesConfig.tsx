import { Navigate, Route, Routes } from 'react-router-dom';
import FuelFilling from './fuelFilling/FuelFilling';
import OilСhange from './oilChange/OilСhange';
import RepairCosts from './repairCosts/RepairCosts';
import Statistics from './statistics/Statistics';
import TechnicalMaintenance from './technicalMaintenance/TechnicalMaintenance';
import Tuning from './tuning/Tuning';


const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/fuel-filling" element={<FuelFilling />} />
      <Route path="/oil-change" element={<OilСhange />} />
      <Route path="/repair-costs" element={<RepairCosts />} />
      <Route path="/technical-maintenance" element={<TechnicalMaintenance />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/tuning" element={<Tuning />} />
      <Route path="/" element={<Navigate to="/fuel-filling" />} />
    </Routes>
  );
};

export default RoutesConfig;