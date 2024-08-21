import Stats from '/src/assets/img/stats.svg';
import useAppSelector from "../../hooks/useAppSelector";
import NavStatistics from './tabsStatistics/NavStatistics';

const Statistics = () => {
  const dateTime = useAppSelector((state) => state.localTime.time || '');
  const cars = useAppSelector((state) => state.cars.cars || []);
  const selectedCarId = useAppSelector((state) => state.cars.selectedCarId);
  const selectedCar = cars.find(car => car.id === selectedCarId) || cars[0];
  return (
    <section>
      <time className="time" style={{ float: 'left' }}><img src={Stats} alt="iconStatistics" className="icon" /> &nbsp;{dateTime}</time>
      {cars && cars.length > 0 ? <h2 className='mt-1r'>Данные по: {selectedCar.name}</h2> : <h2 className='mt-1r'>Укажите авто</h2>}
      <NavStatistics />
    </section>
  )
}

export default Statistics