import { useEffect, useState } from "react";
import InputAdornment from "./UI/InputAdornment/InputAdornment"
import MyButton from "./UI/button/MyButton"
import MyInput from "./UI/input/MyInput"
import Maintenance from '/public/maintenance2.png';


const TechnicalMaintenance = () => {
    const [dateTime, setDateTime] = useState<string>();

    useEffect(() => {
      const date = new Date();
      setDateTime(`${date.getDate()}.${(date.getMonth() + 1).toString().length === 1 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}.${date.getFullYear()}`)
    }, []);
    
  return (
    <div>
    <time className="time"><img src={Maintenance} alt="Maintenance" style={{height: "25px"}}/> &nbsp;{dateTime}</time>
    <div className="infoOilСhange">
        <MyInput placeholder="Вид обслуживания" type="text"></MyInput>
        <MyInput placeholder="Стоимость работ" type="text"></MyInput>
        <MyInput placeholder="Расходные материалы" type="text"></MyInput>
        <MyInput placeholder="Артикул" type="text"></MyInput>
        <InputAdornment placeholder="Цена запчасти" type="number" span="руб"></InputAdornment>
        <InputAdornment placeholder="Пробег" type="number" span="км"></InputAdornment>
    </div>
    <div className="infoOilСhange">
      <MyInput placeholder="Комментарий" type="text"></MyInput>
    </div>
    <MyButton children="Сохранить"></MyButton>
</div>
  )
}

export default TechnicalMaintenance