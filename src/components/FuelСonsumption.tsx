import { useEffect, useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import Fuel from '/public/iconFuel.png';
import InputAdornment from "./UI/InputAdornment/InputAdornment";

const FuelСonsumption = () => {
    const [dateTime, setDateTime] = useState<string>();

    useEffect(() => {
      const date = new Date();
      setDateTime(`${date.getDate()}.${(date.getMonth() + 1).toString().length === 1 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}.${date.getFullYear()}`)
    }, []);
    
  return (
    <div>
        <time className="time"><img src={Fuel} alt="Fuel" style={{height: "20px"}}/> &nbsp;{dateTime}</time>
        <form>
            <div className="infoFuelСonsumption">
                <InputAdornment placeholder="Сумма заправки" type="number" span="руб"></InputAdornment>
                <InputAdornment placeholder="Объем топлива" type="number" span="литров" ></InputAdornment>
                <MyInput placeholder="Марка топлива" type="text"></MyInput>
                <InputAdornment placeholder="Цена за 1 литр" type="number" span="руб"></InputAdornment>
                <InputAdornment placeholder="Пробег" type="number" span="км"></InputAdornment>
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