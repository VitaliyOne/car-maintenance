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
  const [selectedItem, setSelectedItem] = useState<`${Tab}`>(Tab.FUEL_CONSUMPTION)

  const TabComponent = tabs[selectedItem];

  return (
    <div className="carMaintenanceMenu">
      <div style={{display: "grid", gridTemplateRows:"auto", gap:"15px"}}>
        <MyButton children="Расход топлива" onClick={() => setSelectedItem(Tab.FUEL_CONSUMPTION)}></MyButton>
        <MyButton children="Замена масла" onClick={() => setSelectedItem(Tab.OIL_CHANGE)}></MyButton>
        <MyButton children="Расходы на ремонт" onClick={() => setSelectedItem(Tab.REPAIR_COSTS)}></MyButton>
        <MyButton children="Техническое обслуживание" onClick={() => setSelectedItem(Tab.TECHNICAL_MAINTENANCE)}></MyButton>
        <MyButton children="Статистика" onClick={() => setSelectedItem(Tab.STATISTICS)}></MyButton>
        <MyButton children="Тюнинг" onClick={() => setSelectedItem(Tab.TUNING)}></MyButton>
      </div>
      <div>
        <TabComponent />
      </div>
    </div>
  )
}

export default CarMaintenanceMenu