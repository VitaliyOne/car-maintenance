import { useEffect, useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import Fuel from '/public/iconFuel.png';

const FuelСonsumption = () => {
    const [dateTime, setDateTime] = useState<string>();

      useEffect(() => {
        const date = new Date();
        setDateTime(`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`)
      }, []);
    
  return (
    <div>
        <time><img src={Fuel} alt="Fuel" style={{height: "20px"}}/> &nbsp;{dateTime}</time>
        <form>
            <div className="infoFuelСonsumption">
                <MyInput placeholder="Сумма, руб" type="text" prefix="%"></MyInput>
                <MyInput placeholder="Объем" type="text"></MyInput>
                <MyInput placeholder="Марка топлива" type="text"></MyInput>
                <MyInput placeholder="Цена за л, руб" type="text"></MyInput>
                <MyInput placeholder="Пробег" type="text"></MyInput>
                <MyInput placeholder="Коментарий" type="text"></MyInput>
            </div>
            <div style={{marginTop: "10px"}}>
                <MyButton children="Сохранить"></MyButton>
            </div>
        </form>
        
    </div>
  )
}

export default FuelСonsumption