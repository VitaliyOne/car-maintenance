import { useState } from "react";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { Cars } from "../types";
import { selectCar } from "../store/reducers/cars/slice";

interface IPropsCatsSelect {
    onShowAddForm: () => void;
}

const CarsSelect = (props: IPropsCatsSelect) => {
    const cars = useAppSelector((state) => state.cars.cars || []);
    const selectedCar = cars.find(car => car.selected) || cars[0];
    const [isOpen, setisOpen] = useState(false);
    const dispatch = useAppDispatch();

    const toggleDropdown = () => {
        setisOpen(!isOpen);
    };

    const handleSelectCar = (car: Cars) => {
        setisOpen(false);
        dispatch(selectCar(car.id));
    };

    const onAddCar = () => {
        toggleDropdown();
        props.onShowAddForm();
    }
    const carList = cars.filter((car) => car.name !== selectedCar.name)

    return (
        <div className="selectContainer">
            <div className="selectHeader" onClick={toggleDropdown}>
                {selectedCar.name}
                <span className="arrow">{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <ul className="selectList">
                    <li className="selectListItem selectItem">{selectedCar.name}</li>
                    {carList.map((car) => (
                        <li
                            key={car.id}
                            className="selectListItem"
                            onClick={() => handleSelectCar(car)}
                        >
                            {car.name}
                        </li>
                    ))}
                    <li className="selectListItem" onClick={() => onAddCar()}>Добавить</li>
                </ul>
            )}
        </div>
    )
}

export default CarsSelect