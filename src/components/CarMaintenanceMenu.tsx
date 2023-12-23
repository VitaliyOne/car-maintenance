import { useState } from "react"
import FuelСonsumption from "./FuelСonsumption"
import OilСhange from "./OilСhange"
import MyButton from "./UI/button/MyButton"
import RepairCosts from "./RepairCosts"

enum Tab {
  FUEL_CONSUMPTION = 'FUEL_CONSUMPTION',
  OIL_CHANGE = "OIL_CHANGE",
  REPAIR_COSTS = "REPAIR_COSTS"
}

type TabComponentsMap = {
  [T in Tab]: React.FC
}

const tabs: TabComponentsMap = {
  [Tab.FUEL_CONSUMPTION]: FuelСonsumption,
  [Tab.OIL_CHANGE]: OilСhange,
  [Tab.REPAIR_COSTS]: RepairCosts
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
        <MyButton children="Техническое обслуживание" onClick={() => setSelectedItem(Tab.FUEL_CONSUMPTION)}></MyButton>
        <MyButton children="Статистика" onClick={() => setSelectedItem(Tab.FUEL_CONSUMPTION)}></MyButton>
        <MyButton children="Тюнинг" onClick={() => setSelectedItem(Tab.FUEL_CONSUMPTION)}></MyButton>
      </div>
      <div>
        <TabComponent />
        {/* {selectedItem === 1 && (<FuelСonsumption/>)}
        {selectedItem === 2? (<OilСhange/>) : ("")}
        {selectedItem === 3? (<RepairCosts/>) : ("")}
        {selectedItem === 4? (<div>In the process of development...</div>) : ("")}
        {selectedItem === 5? (<div>In the process of development...</div>) : ("")}
        {selectedItem === 6? (<div>In the process of development...</div>) : ("")} */}
      </div>
    </div>
  )
}

export default CarMaintenanceMenu