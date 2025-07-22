import { useState, useRef, useEffect } from 'react';
import useAppSelector from '../hooks/useAppSelector';
import useAppDispatch from '../hooks/useAppDispatch';
import { Cars } from '../types';
import { selectCar } from '../store/reducers/cars/slice';

interface IPropsCatsSelect {
  onShowAddForm: () => void;
}

const CarsSelect = (props: IPropsCatsSelect) => {
  const cars = useAppSelector((state) => state.cars.cars || []);
  const selectedCarId = useAppSelector((state) => state.cars.selectedCarId);
  const selectedCar = cars.find((car) => car.id === selectedCarId) || cars[0];
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectCar = (car: Cars) => {
    setIsOpen(false);
    dispatch(selectCar(car.id));
  };

  const onAddCar = () => {
    toggleDropdown();
    props.onShowAddForm();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const carList = cars.filter((car) => car.name !== selectedCar.name);

  return (
    <div className="selectContainer" ref={dropdownRef}>
      <div className="selectHeader" onClick={toggleDropdown}>
        {selectedCar.name}
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <ul className="selectList">
          <li className="selectListItem selectItem">{selectedCar.name}</li>
          {carList.map((car) => (
            <li key={car.id} className="selectListItem" onClick={() => handleSelectCar(car)}>
              {car.name}
            </li>
          ))}
          <li className="selectListItem" onClick={() => onAddCar()}>
            Добавить
          </li>
        </ul>
      )}
    </div>
  );
};

export default CarsSelect;
