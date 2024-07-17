import { useEffect, useState } from "react";
import MyInput from "./UI/input/MyInput"
import MyButton from "./UI/button/MyButton";
import useAppDispatch from "../hooks/useAppDispatch";
import { addCar, deleteCar, selectCar } from "../store/reducers/cars/slice";
import useAppSelector from "../hooks/useAppSelector";
import Select from 'react-select';

const Header = () => {
    const dispatch = useAppDispatch();
    const cars = useAppSelector((state) => state.cars.cars || []);
    const [nameCar, setNameCar] = useState<string>("");

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

    const carOptions = cars.map(car => ({
        label: car.name,
        value: car.id
    }));

    const selectedCar = cars.find(car => car.selected) || cars[0];

    return (
        <header>
            {cars && cars.length > 0 ? (
                <div className="formInformationYourCar">
                    <Select
                        options={carOptions}
                        value={selectedCar ? { label: selectedCar.name, value: selectedCar.id } : null}
                        onChange={(selectedOption) => {
                            if (selectedOption) {
                                dispatch(selectCar(selectedOption.value));
                            }
                        }}
                    />
                    {selectedCar && (
                        <button onClick={() => onDeleteCar(selectedCar.id)}>Удалить</button>
                    )}
                    <span>edit</span>
                    <span>new</span>
                    <form className="formInformationCar" onSubmit={(e) => { e.preventDefault(); onSaveNameCar(); }}>
                        < MyInput
                            type="text"
                            placeholder="Ваш авто"
                            value={nameCar}
                            onChange={(event) => setNameCar(event.target.value)}
                        />
                    </form>
                </div >
            ) : (<form className="formInformationCar" onSubmit={(e) => { e.preventDefault(); onSaveNameCar(); }}>
                < MyInput
                    type="text"
                    placeholder="Ваш авто"
                    value={nameCar}
                    onChange={(event) => setNameCar(event.target.value)}
                />
                <MyButton children="Сохранить" onClick={onSaveNameCar} style={{ marginLeft: "10px" }} />
            </form>)}

        </header >
    )
}

export default Header