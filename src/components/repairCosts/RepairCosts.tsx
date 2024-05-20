import IconRepairCosts from '/public/repairCosts.png';
import MyInput from "../UI/input/MyInput";
import InputAdornment from "../UI/InputAdornment/InputAdornment";
import MyButton from "../UI/button/MyButton";
import useAppSelector from '../../hooks/useAppSelector';
import { useState } from 'react';
import { DEFAULT_REPAIR_COSTS_FORM_DATA } from './const';
import { IRepairCostsForm } from './types';
import useAppDispatch from '../../hooks/useAppDispatch';
import { addRepairCostsInfo } from '../../store/reducers/repair/slice';
import { generateUniqueId } from '../uniqId';

const RepairCosts = () => {
  const dateTime = useAppSelector((state) => state.localTime.time)
  const [formData, setFormData] = useState<IRepairCostsForm>(DEFAULT_REPAIR_COSTS_FORM_DATA);
  const dispatch = useAppDispatch();

  const onSaveRepairCostsInfo = () => {
    dispatch(
      addRepairCostsInfo({
        ...formData, id: generateUniqueId()
      })
    );

    resetFormData()
  }

  const resetFormData = () => setFormData(DEFAULT_REPAIR_COSTS_FORM_DATA);

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  return (
    <section>
      <time className="time"><img src={IconRepairCosts} alt="IconRepairCosts" style={{ height: "30px" }} /> &nbsp;{dateTime}</time>
      <form>
        <div className="infoOilСhange">
          <MyInput onChange={onInputChange} name="typeRepair" value={formData.typeRepair} placeholder="Вид ремонта" type="text"></MyInput>
          <MyInput onChange={onInputChange} name="priceWork" value={formData.priceWork} placeholder="Стоимость работ" type="text"></MyInput>
          <MyInput onChange={onInputChange} name="replacementPart" value={formData.replacementPart} placeholder="Запчасть" type="text"></MyInput>
          <MyInput onChange={onInputChange} name="vendorСode" value={formData.vendorСode} placeholder="Артикул" type="text"></MyInput>
          <InputAdornment onChange={onInputChange} name="price" value={formData.price} placeholder="Цена запчасти" type="number" span="руб"></InputAdornment>
          <InputAdornment onChange={onInputChange} name="mileage" value={formData.mileage} placeholder="Пробег" type="number" span="км"></InputAdornment>
        </div>
        <div className="infoOilСhange">
          <MyInput onChange={onInputChange} name="comment" value={formData.comment} placeholder="Комментарий" type="text"></MyInput>
        </div>
        <MyButton onClick={onSaveRepairCostsInfo} children="Сохранить"></MyButton>
      </form>
    </section>
  )
}

export default RepairCosts