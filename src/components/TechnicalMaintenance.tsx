import useAppSelector from "../hooks/useAppSelector";
import InputAdornment from "./UI/InputAdornment/InputAdornment"
import MyButton from "./UI/button/MyButton"
import MyInput from "./UI/input/MyInput"
import Maintenance from '/public/maintenance2.png';


const TechnicalMaintenance = () => {
  const dateTime = useAppSelector((state) => state.localTime.time)

  return (
    <section>
      <time className="time"><img src={Maintenance} alt="Maintenance" style={{ height: "25px" }} /> &nbsp;{dateTime}</time>
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
    </section>
  )
}

export default TechnicalMaintenance