import { useEffect, useState } from "react";
import IconRepairCosts from '/public/repairCosts.png';
import MyInput from "./UI/input/MyInput";
import InputAdornment from "./UI/InputAdornment/InputAdornment";
import MyButton from "./UI/button/MyButton";

const RepairCosts = () => {
  const [dateTime, setDateTime] = useState<string>();

  useEffect(() => {
    setDateTime(new Date().toLocaleDateString())
  }, []);

  return (
    <section>
      <time className="time"><img src={IconRepairCosts} alt="IconRepairCosts" style={{ height: "30px" }} /> &nbsp;{dateTime}</time>
      <div className="infoOilСhange">
        <MyInput placeholder="Вид ремонта" type="text"></MyInput>
        <MyInput placeholder="Стоимость работ" type="text"></MyInput>
        <MyInput placeholder="Запчасть" type="text"></MyInput>
        <MyInput placeholder="Артикул запчасти" type="text"></MyInput>
        <InputAdornment placeholder="Цена запчасти" type="number" span="руб"></InputAdornment>
        <InputAdornment placeholder="Пробег" type="number" span="км"></InputAdornment>
      </div>
      <div className="infoOilСhange">
        <MyInput placeholder="Комментарий" type="text"></MyInput>
      </div>
      <MyButton children="Сохранить"></MyButton>
    </section>
  )
}

export default RepairCosts