import { useState } from "react";
import MyButton from "../../UI/button/MyButton";
import FuelFillingTable from "./FuelFillingTable";
import OilСhangeTable from "./OilСhangeTable";
import RepairCostsTable from "./RepairCostsTable";
import TechnicalMaintenanceTable from "./TechnicalMaintenanceTable";
import TuningTable from "./TuningTable";

  enum Tab {
    FUEL_CONSUMPTION = 'FUEL_CONSUMPTION',
    OIL_CHANGE = "OIL_CHANGE",
    REPAIR_COSTS = "REPAIR_COSTS",
    TECHNICAL_MAINTENANCE = "TECHNICAL_MAINTENANCE",
    TUNING = "TUNING"
  }
  
  type TabComponentsMap = {
    [T in Tab]: React.FC
  }
  
  const tabs: TabComponentsMap = {
    [Tab.FUEL_CONSUMPTION]: FuelFillingTable,
    [Tab.OIL_CHANGE]: OilСhangeTable,
    [Tab.REPAIR_COSTS]: RepairCostsTable,
    [Tab.TECHNICAL_MAINTENANCE]: TechnicalMaintenanceTable,
    [Tab.TUNING]: TuningTable
  }
  
  const NavStatistics = () => {
    
    const [selectedItem, setSelectedItem] = useState<`${Tab}`>(Tab.FUEL_CONSUMPTION);
  
    const TabComponent = tabs[selectedItem];
    const isActive = (tab: Tab) => selectedItem === tab;
  
    const activeTab = {
      borderBottom: '1mm solid gray', cursor: 'default',
    };
    return (
      <div>
        <nav className="navMenuStatistics">
          <MyButton
            children="Заправка"
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
            children="Тюнинг"
            onClick={() => setSelectedItem(Tab.TUNING)}
            style={isActive(Tab.TUNING) ? activeTab : {}}
          />
        </nav>
        <TabComponent/>
      </div>
    )
  }
  
  export default NavStatistics