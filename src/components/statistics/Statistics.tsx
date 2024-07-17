import Stats from '/stats.svg';
import useAppSelector from "../../hooks/useAppSelector";
import NavStatistics from './tabsStatistics/NavStatistics';

const Statistics = () => {
  const dateTime = useAppSelector((state) => state.localTime.time || '');
  const cars = useAppSelector((state) => state.cars.cars || []);
  return (
    <section>
      <time className="time" style={{ float: 'left' }}><img src={Stats} alt="IconRepairCosts" style={{ height: "30px" }} /> &nbsp;{dateTime}</time>
      {cars && cars.length > 0 ? <h1 style={{ margin: '15px 0' }}>Выбран авто: {cars[0].name}</h1> : <h1 style={{ margin: '15px 0' }}>Для просмотра статискики укажите авто</h1>}
      <NavStatistics />
    </section>
  )
}

export default Statistics