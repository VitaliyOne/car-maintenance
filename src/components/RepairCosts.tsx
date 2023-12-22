import { useEffect, useState } from "react";
import OilLamp from '/public/repairCosts.png';
import MyInput from "./UI/input/MyInput";
import InputAdornment from "./UI/InputAdornment/InputAdornment";
import MyButton from "./UI/button/MyButton";

const RepairCosts = () => {
    const [dateTime, setDateTime] = useState<string>();

    useEffect(() => {
        const date = new Date();
        setDateTime(`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`)
      }, []);

  return (
    <div>
        <time><img src={OilLamp} alt="OilLamp" style={{height: "30px"}}/> &nbsp;{dateTime}</time>
        <div className="infoOilСhange">
            <MyInput  placeholder="Вид ремонта" type="text"></MyInput>
            <MyInput  placeholder="Запчасть" type="text"></MyInput>
            <MyInput  placeholder="Артикул" type="text"></MyInput>
            <InputAdornment placeholder="Цена" type="number" span="руб"></InputAdornment>
            <InputAdornment placeholder="Пробег" type="number" span="км"></InputAdornment>
        </div>
        <div style={{marginTop: "10px"}}>
                <MyButton children="Сохранить"></MyButton>
            </div>
    </div>
  )
}

export default RepairCosts