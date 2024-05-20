import { useState } from "react";
import useAppSelector from "../../hooks/useAppSelector";
import InputAdornment from "../UI/InputAdornment/InputAdornment"
import MyButton from "../UI/button/MyButton"
import MyInput from "../UI/input/MyInput"
import Maintenance from '/public/maintenance2.png';
import { ITechnicalMaintenanceForm } from "./types";
import { DEFAULT_TECHNICAL_MAINTENANCE_FORM_DATA } from "./const";


const TechnicalMaintenance = () => {
  const dateTime = useAppSelector((state) => state.localTime.time);
  const [formData, setFormData] = useState<ITechnicalMaintenanceForm>(DEFAULT_TECHNICAL_MAINTENANCE_FORM_DATA);

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  return (
    <section>
      <time className="time"><img src={Maintenance} alt="Maintenance" style={{ height: "25px" }} /> &nbsp;{dateTime}</time>
      <form>
        <div className="infoOilСhange">
          <MyInput onChange={onInputChange} name="typeService" value={formData.typeService} placeholder="Вид обслуживания" type="text"></MyInput>
          <MyInput onChange={onInputChange} name="priceWork" value={formData.priceWork} placeholder="Стоимость работ" type="text"></MyInput>
          <MyInput onChange={onInputChange} name="consumables" value={formData.consumables} placeholder="Расходные материалы" type="text"></MyInput>
          <MyInput onChange={onInputChange} name="vendorСode" value={formData.vendorСode} placeholder="Артикул" type="text"></MyInput>
          <InputAdornment onChange={onInputChange} name="price" value={formData.price} placeholder="Цена запчасти" type="number" span="руб"></InputAdornment>
          <InputAdornment onChange={onInputChange} name="mileage" value={formData.mileage} placeholder="Пробег" type="number" span="км"></InputAdornment>
        </div>
        <div className="infoOilСhange">
          <MyInput onChange={onInputChange} name="comment" value={formData.comment} placeholder="Комментарий" type="text"></MyInput>
        </div>
        <MyButton children="Сохранить"></MyButton>
      </form>
    </section>
  )
}

export default TechnicalMaintenance