
import { useState } from "react";
import useAppSelector from "../hooks/useAppSelector";
import { Cars } from "../types";

const CarsSelect = () => {
    const cars = useAppSelector((state) => state.cars.cars || []);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectCar = (car: Cars) => {
        setIsOpen(false);
        console.log(car)
    };

    return (
        <div className="selectContainer">
            <div className="selectHeader" onClick={toggleDropdown}>
                Выберите автомобиль
                <span className="arrow">{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <ul className="selectList">
                    {cars.map((car) => (
                        <li
                            key={car.id}
                            className="selectListItem"
                            onClick={() => handleSelectCar(car)}
                        >
                            {car.name}
                        </li>
                    ))}
                    <li className="selectListItem">Добавить</li>
                </ul>
            )}
        </div>
    )
}

export default CarsSelect