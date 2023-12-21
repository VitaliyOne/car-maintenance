import { useState } from "react"
import FuelСonsumption from "./FuelСonsumption"
import OilСhange from "./OilСhange"
import MyButton from "./UI/button/MyButton"

const CarMaintenanceMenu = () => {
  const [selectedItem, setSelectedItem] = useState<number>(1)

  return (
    <div className="carMaintenanceMenu">
      <div style={{display: "grid", gridTemplateRows:"auto", gap:"15px"}}>
        <MyButton children="Расход топлива" onClick={() => setSelectedItem(1)}></MyButton>
        <MyButton children="Замена масла" onClick={() => setSelectedItem(2)}></MyButton>
        <MyButton children="Расходы на ремонт" onClick={() => setSelectedItem(3)}></MyButton>
        <MyButton children="Техническое обслуживание" onClick={() => setSelectedItem(4)}></MyButton>
        <MyButton children="Статистика" onClick={() => setSelectedItem(5)}></MyButton>
      </div>
      <div>
        {selectedItem === 1? (<FuelСonsumption/>) : ("")};
        {selectedItem === 2? (<OilСhange/>) : ("")};
        {selectedItem === 3? (<div>In the process of development...</div>) : ("")};
        {selectedItem === 4? (<div>In the process of development...</div>) : ("")};
        {selectedItem === 5? (<div>In the process of development...</div>) : ("")};
      </div>
    </div>
  )
}

export default CarMaintenanceMenu