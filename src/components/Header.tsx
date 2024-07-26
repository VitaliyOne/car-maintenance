import { useEffect, useState } from "react";
import MyInput from "./UI/input/MyInput"
import MyButton from "./UI/button/MyButton";
import useAppDispatch from "../hooks/useAppDispatch";
import { addCar, deleteCar, selectCar } from "../store/reducers/cars/slice";
import useAppSelector from "../hooks/useAppSelector";
import deleteIcon from '/delete.svg';
import editIcon from '/edit.svg';
import addCarIcon from '/add-car.svg';
import CarsSelect from "./CarList";

const Header = () => {
    const dispatch = useAppDispatch();
    const cars = useAppSelector((state) => state.cars.cars || []);
    const [nameCar, setNameCar] = useState<string>("");
    const [showForm, setShowForm] = useState<boolean>(false);

    useEffect(() => {
        if (cars.length > 0 && !cars.some(car => car.selected)) {
            dispatch(selectCar(cars[0].id));
        }
    }, [cars, dispatch]);

    const onSaveNameCar = () => {
        const newCar = {
            id: new Date().toString(),
            name: nameCar,
            selected: true
        };
        dispatch(addCar(newCar));
        dispatch(selectCar(newCar.id));
        setNameCar('');
    }

    const onDeleteCar = (carId: string) => {
        dispatch(deleteCar(carId));
    };
    const onShowForm = () => {
        setShowForm(!showForm)
        setNameCar(carOptions[0].label)
    }

    const carOptions = cars.map(car => ({
        label: car.name,
        value: car.id
    }));

    const selectedCar = cars.find(car => car.selected) || cars[0];

    return (
        <header className="formInformationYourCar">
            {cars && cars.length > 0 ? (
                <div className="selectCars">
                    <CarsSelect />
                    {selectedCar && (
                        <nav className="headerNavIcon">
                            <img onClick={() => onShowForm()} src={editIcon} alt="Изменить" className="navIconItem" />
                            <img onClick={() => onDeleteCar(selectedCar.id)} src={addCarIcon} alt="Добавить" className="navIconItem" />
                            <img onClick={() => onDeleteCar(selectedCar.id)} src={deleteIcon} alt="Удалить" className="navIconItem" />
                        </nav>
                    )}
                </div >
            ) : (
                <form style={{ display: 'flex', flexDirection: 'row', maxWidth: '300px' }} onSubmit={(e) => { e.preventDefault(); onSaveNameCar(); }}>
                    < MyInput
                        type="text"
                        placeholder="Назовите авто"
                        value={nameCar}
                        onChange={(event) => setNameCar(event.target.value)}
                    />
                    <MyButton children="Сохранить" onClick={onSaveNameCar} style={{ marginLeft: "10px" }} />
                </form>
            )}
            {showForm ? (
                <form style={{ display: 'flex', flexDirection: 'row', maxWidth: '300px' }} onSubmit={(e) => { e.preventDefault(); onSaveNameCar(); }}>
                    < MyInput
                        type="text"
                        placeholder="Название авто"
                        value={nameCar}
                        onChange={(event) => setNameCar(event.target.value)}
                    />
                    <MyButton children="Изменить" onClick={onSaveNameCar} style={{ marginLeft: "10px" }} />
                </form>
            ) : ('')}
        </header >
    )
}

export default Header