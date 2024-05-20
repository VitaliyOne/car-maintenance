import { useState } from "react";
import Fuel from '/iconFuel.png';
import { IFuelForm } from "./types";
import InputAdornment from "../UI/InputAdornment/InputAdornment";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import { DEFAULT_FUEL_FORM_DATA } from "./const";
import useAppDispatch from "../../hooks/useAppDispatch";
import { addFuelInfo } from "../../store/reducers/fuels/slice";
import useAppSelector from "../../hooks/useAppSelector";
import uniqid from "uniqid";

const FuelFilling = () => {
  const dateTime = useAppSelector((state) => state.localTime.time)
  const [formData, setFormData] = useState<IFuelForm>(DEFAULT_FUEL_FORM_DATA);
  const dispatch = useAppDispatch();

  const resetFormData = () => setFormData(DEFAULT_FUEL_FORM_DATA);

  const onSaveFuelInfo = () => {
    dispatch(
      addFuelInfo({
        ...formData, id: uniqid()
      })
    );

    resetFormData()
  }

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };


  return (
    <section>
      <time className="time"><img src={Fuel} alt="Fuel" style={{ height: "20px" }} /> &nbsp;{dateTime}</time>
      <form>
        <div className="infoFuelFilling">
          <InputAdornment onChange={onInputChange} name="amount" value={formData.amount} placeholder="Сумма заправки" type="number" span="руб" required></InputAdornment>
          <InputAdornment onChange={onInputChange} name="price" value={formData.price} placeholder="Цена за 1 литр" type="number" span="руб" required></InputAdornment>
          <InputAdornment onChange={onInputChange} name="mileage" value={formData.mileage} placeholder="Пробег" type="number" span="км" required></InputAdornment>
          <MyInput autoComplete="off" onChange={onInputChange} name="comment" value={formData.comment} placeholder="Коментарий" type="text"></MyInput>
        </div>
        <div style={{ marginTop: "10px" }}>
          <MyButton onClick={onSaveFuelInfo} children="Сохранить"></MyButton>
        </div>
      </form>
    </section>
  )
}

export default FuelFilling