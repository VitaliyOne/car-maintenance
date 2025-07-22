import { useState } from 'react';
import OilLamp from '/src/assets/img/oilLamp.png';
import InputAdornment from '../UI/InputAdornment/InputAdornment';
import MySelect from '../UI/select/MySelect';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import { DEFAULT_OIL_FORM_DATA } from './const';
import { IOilChangeForm } from './types';
import useAppDispatch from '../../hooks/useAppDispatch';
import { addOilChangeInfo } from '../../store/reducers/oil/slice';
import useAppSelector from '../../hooks/useAppSelector';
import { generateUniqueId } from '../uniqId';

const OilChange = () => {
  const dateTime = useAppSelector((state) => state.localTime.time);
  const [oilViscosity, setOilViscostyValue] = useState<string>('');
  const [oilType, settypeOilValue] = useState<string>('');
  const [formData, setFormData] = useState<IOilChangeForm>(DEFAULT_OIL_FORM_DATA);
  const dispatch = useAppDispatch();

  const oilViscosityOptions = [
    {
      value: '0w-40',
      name: '0w-40'
    },
    {
      value: '5w-30',
      name: '5w-30'
    },
    {
      value: '5w-40',
      name: '5w-40'
    },
    {
      value: '5w-50',
      name: '5w-50'
    },
    {
      value: '10w-30',
      name: '10w-30'
    },
    {
      value: '10w-40',
      name: '10w-40'
    },
    {
      value: '15w-40',
      name: '15w-40'
    },
    {
      value: '20w-40',
      name: '20w-40'
    }
  ];

  const typeOilOptions = [
    {
      value: 'Синтетика',
      name: 'Синтетика'
    },
    {
      value: 'Полусинтетика',
      name: 'Полусинтетика'
    },
    {
      value: 'Минеральное',
      name: 'Минеральное'
    }
  ];

  const resetFormData = () => setFormData(DEFAULT_OIL_FORM_DATA);

  const onSaveOilChangeInfo = () => {
    dispatch(
      addOilChangeInfo({
        ...formData,
        oilViscosity,
        oilType,
        id: generateUniqueId()
      })
    );

    resetFormData();
  };

  const getOil = (oilViscosityValue: string) => {
    setOilViscostyValue(oilViscosityValue);
  };

  const getTypeOil = (typeOilValue: string) => {
    settypeOilValue(typeOilValue);
  };

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  return (
    <section>
      <time className="time">
        <img src={OilLamp} alt="OilLamp" className="icon" /> &nbsp;{dateTime}
      </time>
      <form className="mt-10">
        <div className="infoOilСhange">
          <InputAdornment
            onChange={onInputChange}
            name="mileage"
            value={formData.mileage}
            placeholder="Пробег"
            type="number"
            span="км"
          ></InputAdornment>
          <InputAdornment
            onChange={onInputChange}
            name="price"
            value={formData.price}
            placeholder="Цена"
            type="number"
            span="руб"
          ></InputAdornment>
          <MySelect
            defaultValue="Вязкость масла"
            value={oilViscosity}
            option={oilViscosityOptions}
            onChange={(event) => getOil(event)}
          ></MySelect>
          <MySelect
            defaultValue="Тип масла"
            value={oilType}
            option={typeOilOptions}
            onChange={(event) => getTypeOil(event)}
          ></MySelect>
          <MyInput
            onChange={onInputChange}
            name="comment"
            value={formData.comment}
            placeholder="Коментарий"
            type="text"
            autoComplete="off"
          ></MyInput>
        </div>
        <MyButton onClick={onSaveOilChangeInfo} children="Сохранить"></MyButton>
      </form>
      <div className="oilChangeInterval">
        <p>Рекомендуемый интервал замены масла легковых авто:</p>
        <ul className="ml-20">
          <li>каждые 5 - 7 тыс.км - в городе;</li>
          <li>каждые 6 - 8 тыс.км - смешанный цикл;</li>
          <li>каждые 8 - 10 тыс.км - по трассе.</li>
        </ul>
      </div>
    </section>
  );
};

export default OilChange;
