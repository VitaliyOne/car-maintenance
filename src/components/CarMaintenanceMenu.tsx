import { useState } from "react"
import FuelСonsumption from "./FuelСonsumption"
import OilСhange from "./OilСhange"
import MyButton from "./UI/button/MyButton"
import RepairCosts from "./RepairCosts"
import Tuning from "./Tuning"
import TechnicalMaintenance from "./TechnicalMaintenance"
import Statistics from "./Statistics"

enum Tab {
  FUEL_CONSUMPTION = 'FUEL_CONSUMPTION',
  OIL_CHANGE = "OIL_CHANGE",
  REPAIR_COSTS = "REPAIR_COSTS",
  TECHNICAL_MAINTENANCE = "TECHNICAL_MAINTENANCE",
  STATISTICS = "STATISTICS",
  TUNING = "TUNING"
}

type TabComponentsMap = {
  [T in Tab]: React.FC
}

const tabs: TabComponentsMap = {
  [Tab.FUEL_CONSUMPTION]: FuelСonsumption,
  [Tab.OIL_CHANGE]: OilСhange,
  [Tab.REPAIR_COSTS]: RepairCosts,
  [Tab.TECHNICAL_MAINTENANCE]: TechnicalMaintenance,
  [Tab.STATISTICS]: Statistics,
  [Tab.TUNING]: Tuning
}

const CarMaintenanceMenu = () => {
  const [selectedItem, setSelectedItem] = useState<`${Tab}`>(Tab.FUEL_CONSUMPTION);

  const TabComponent = tabs[selectedItem];
  const isActive = (tab: Tab) => selectedItem === tab;

  const activeTab = {
    backgroundColor: 'gray', color: 'white', cursor: 'default'
  };

  return (
    <main className="carMaintenanceMenu">
      <nav className="tabMenu">
        <MyButton
          children="Расход топлива"
          onClick={() => setSelectedItem(Tab.FUEL_CONSUMPTION)}
          style={isActive(Tab.FUEL_CONSUMPTION) ? activeTab : {}}
        />
        <MyButton
          children="Замена масла"
          onClick={() => setSelectedItem(Tab.OIL_CHANGE)}
          style={isActive(Tab.OIL_CHANGE) ? activeTab : {}}
        />
        <MyButton
          children="Расходы на ремонт"
          onClick={() => setSelectedItem(Tab.REPAIR_COSTS)}
          style={isActive(Tab.REPAIR_COSTS) ? activeTab : {}}
        />
        <MyButton
          children="Техническое обслуживание"
          onClick={() => setSelectedItem(Tab.TECHNICAL_MAINTENANCE)}
          style={isActive(Tab.TECHNICAL_MAINTENANCE) ? activeTab : {}}
        />
        <MyButton
          children="Статистика"
          onClick={() => setSelectedItem(Tab.STATISTICS)}
          style={isActive(Tab.STATISTICS) ? activeTab : {}}
        />
        <MyButton
          children="Тюнинг"
          onClick={() => setSelectedItem(Tab.TUNING)}
          style={isActive(Tab.TUNING) ? activeTab : {}}
        />
      </nav>
      <div>
        <TabComponent />
      </div>
    </main>
  );
}

export default CarMaintenanceMenu