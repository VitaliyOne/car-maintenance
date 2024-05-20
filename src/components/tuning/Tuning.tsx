import TuningIcon from '/public/tuningIcon.png';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import InputAdornment from '../UI/InputAdornment/InputAdornment';
import MyTextarea from '../UI/textarea/MyTextarea';
import useAppSelector from '../../hooks/useAppSelector';
import { useState } from 'react';
import { DEFAULT_TUNING_FORM_DATA } from './const';
import { ITuningForm } from './types';

const Tuning = () => {
  const dateTime = useAppSelector((state) => state.localTime.time);
  const [formData, setFormData] = useState<ITuningForm> (DEFAULT_TUNING_FORM_DATA);
  const [description, setDescription] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  return (
    <div>
      <time className="time"><img src={TuningIcon} alt="TuningIcon" style={{ height: "30px" }} /> &nbsp;{dateTime}</time>
      <form>
        <div className="infoOilСhange">
          <MyInput onChange={onInputChange} name="typeTuning" value={formData.typeTuning} placeholder="Вид тюнтнга" type="text"></MyInput>
          <InputAdornment onChange={onInputChange} name="price" value={formData.price} placeholder="Сумма затрат" type="number" span="руб"></InputAdornment>
          <InputAdornment onChange={onInputChange} name="mileage" value={formData.mileage} placeholder="Пробег" type="number" span="км"></InputAdornment>
          <InputAdornment onChange={onInputChange} name="acceleration1" value={formData.acceleration1} placeholder="Разгон 0-100" type="number" span="сек"></InputAdornment>
          <InputAdornment onChange={onInputChange} name="acceleration12" value={formData.acceleration12} placeholder="Разгон 10-20" type="number" span="сек"></InputAdornment>
        </div>
        <div className="infoOilСhange">
          <MyTextarea handleChange={handleChange} value={description} placeholder='Описание'></MyTextarea>
        </div>
        <MyButton children="Сохранить"></MyButton>
      </form>
    </div>
  )
}

export default Tuning