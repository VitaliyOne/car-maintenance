import { useEffect, useState } from 'react';
import tuningIcon from '/public/tuningIcon.png';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import InputAdornment from './UI/InputAdornment/InputAdornment';

const Tuning = () => {
    const [dateTime, setDateTime] = useState<string>();
    useEffect(() => {
        const date = new Date();
        setDateTime(`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`)
      }, []);


  return (
    <div>
        <time><img src={tuningIcon} alt="OilLamp" style={{height: "30px"}}/> &nbsp;{dateTime}</time>
        <div className="infoOilСhange">
            <MyInput placeholder="Вид тюнтнга" type="text"></MyInput>
            <InputAdornment placeholder="Сумма затрат" type="number" span="руб"></InputAdornment>
            <InputAdornment placeholder="Пробег" type="number" span="км"></InputAdornment>
            <InputAdornment placeholder="Разгон 0-100" type="number" span="сек"></InputAdornment>
            <InputAdornment placeholder="Разгон 10-20" type="number" span="сек"></InputAdornment>
        </div>
        <div className="infoOilСhange">
          <MyInput placeholder="Описание" type="text"></MyInput>
        </div>
        <MyButton children="Сохранить"></MyButton>
    </div>
  )
}

export default Tuning