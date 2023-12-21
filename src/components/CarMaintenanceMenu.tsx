// import FuelСonsumption from "./FuelСonsumption"
import OilСhange from "./OilСhange"
import MyButton from "./UI/button/MyButton"

const CarMaintenanceMenu = () => {
  return (
    <div className="carMaintenanceMenu">
      <div style={{display: "grid", gridTemplateRows:"auto", gap:"15px"}}>
        <MyButton children="Расход топлива"></MyButton>
        <MyButton children="Замена масла"></MyButton>
        <MyButton children="Расходы на ремонт"></MyButton>
        <MyButton children="Техническое обслуживание"></MyButton>
        <MyButton children="Статистика"></MyButton>
      </div>
        {/* <FuelСonsumption></FuelСonsumption> */}
        <OilСhange></OilСhange>
    </div>
  )
}

export default CarMaintenanceMenu