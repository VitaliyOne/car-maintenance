import TuningIcon from '/src/assets/img/tuningIcon.png';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import InputAdornment from '../UI/InputAdornment/InputAdornment';
import MyTextarea from '../UI/textarea/MyTextarea';
import useAppSelector from '../../hooks/useAppSelector';
import { useState } from 'react';
import { DEFAULT_TUNING_FORM_DATA } from './const';
import { ITuningForm } from './types';
import useAppDispatch from '../../hooks/useAppDispatch';
import { generateUniqueId } from '../uniqId';
import { addTuningInfo } from '../../store/reducers/tuning/slice';

const Tuning = () => {
  const dateTime = useAppSelector((state) => state.localTime.time);
  const [formData, setFormData] = useState<ITuningForm>(DEFAULT_TUNING_FORM_DATA);

  const dispatch = useAppDispatch();

  const onSaveTuningInfo = () => {
    dispatch(
      addTuningInfo({
        ...formData, id: generateUniqueId()
      })
    );

    resetFormData()
  }

  const resetFormData = () => setFormData(DEFAULT_TUNING_FORM_DATA);

  const onInputChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    const { name, value } = event.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  return (
    <div>
      <time className="time"><img src={TuningIcon} alt="TuningIcon" className="icon"/> &nbsp;{dateTime}</time>
      <form>
        <div className="infoOilСhange">
          <MyInput onChange={onInputChange} name="typeTuning" value={formData.typeTuning} placeholder="Вид тюнинга" type="text"></MyInput>
          <InputAdornment onChange={onInputChange} name="price" value={formData.price} placeholder="Сумма затрат" type="number" span="руб"></InputAdornment>
          <InputAdornment onChange={onInputChange} name="mileage" value={formData.mileage} placeholder="Пробег" type="number" span="км"></InputAdornment>
          <InputAdornment onChange={onInputChange} name="acceleration1" value={formData.acceleration1} placeholder="Разгон 0-100" type="number" span="сек"></InputAdornment>
          <InputAdornment onChange={onInputChange} name="acceleration12" value={formData.acceleration12} placeholder="Разгон 10-20" type="number" span="сек"></InputAdornment>
        </div>
        <div className="infoOilСhange">
          <MyTextarea onChange={onInputChange} name="description" value={formData.description} placeholder='Описание' />
        </div>
        <MyButton onClick={onSaveTuningInfo} children="Сохранить"></MyButton>
      </form>
    </div>
  )
}

export default Tuning;