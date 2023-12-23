import { useEffect, useState } from "react";
import OilLamp from '/public/oilLamp.png';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import InputAdornment from "./UI/InputAdornment/InputAdornment";
import MySelect from "./UI/select/MySelect";

const OilСhange = () => {
    const [dateTime, setDateTime] = useState<string>();
    const [oilViscosityValue, setOilViscostyValue] = useState<string>('')
    const [typeOilValue, settypeOilValue] = useState<string>('')

    const oilViscosity = [
        {
            value: "0w-40",
            name: "0w-40"
        },
        {
            value:"5w-30",
            name: "5w-30"
        },
        {
            value: "5w-40",
            name: "5w-40"
        },
        {
            value: "5w-50",
            name: "5w-50"
        },
        {
            value: "10w-30",
            name: "10w-30"
        },
        {
            value: "10w-40",
            name: "10w-40"
        },
        {
            value: "15w-40",
            name: "15w-40"
        },
        {
            value: "20w-40",
            name: "20w-40"
    }]

    const typeOil = [
        {
            value: "Синтетика",
            name: "Синтетика"
        },
        {
            value: "Полусинтетика",
            name: "Полусинтетика"
        },
        {
            value: "Минеральное",
            name: "Минеральное"
    }]

    useEffect(() => {
      const date = new Date();
      setDateTime(`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`)
    }, []);

    const getOil = (oilViscosityValue: string) => {
        setOilViscostyValue(oilViscosityValue)
    }

    const getTypeOil = (typeOilValue: string) => {
        settypeOilValue(typeOilValue)
    }

  return (
    <div>
        <time><img src={OilLamp} alt="OilLamp" style={{height: "20px"}}/> &nbsp;{dateTime}</time>
        <form style={{marginTop: "10px"}}>
            <div className="infoOilСhange">
                <InputAdornment placeholder="Пробег" type="number" span="км"></InputAdornment>
                <MySelect 
                    defaultValue="Вязкость масла" 
                    value={oilViscosityValue} 
                    option={oilViscosity} 
                    onChange={(event)=>getOil(event)}>
                    </MySelect>
                <MySelect 
                    defaultValue="Тип масла" 
                    value={typeOilValue} 
                    option={typeOil}
                    onChange={(event)=>getTypeOil(event)}>
                </MySelect>
                <InputAdornment placeholder="Цена" type="number" span="руб"></InputAdornment>
                <MyInput placeholder="Коментарий" type="text"></MyInput>
            </div>
            <div style={{marginTop: "10px"}}>
                <MyButton children="Сохранить"></MyButton>
            </div>
        </form>
        <div style={{textAlign:"left", marginTop: "10px", fontSize:"13px"}}>
            <p>Рекомендуемый интервал замены масла легковых авто:</p>
            <ul style={{marginLeft: "20px"}}>
                <li>каждые 5 - 7 тыс.км - в городе;</li>
                <li>каждые 6 - 8 тыс.км - смешанный цикл;</li>
                <li>каждые 8 - 10 тыс.км - по трассе.</li>
            </ul>
        </div>
    </div>
  )
}

export default OilСhange