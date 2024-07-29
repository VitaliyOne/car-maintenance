import { useEffect, useState } from "react";
import MyInput from "./UI/input/MyInput"
import MyButton from "./UI/button/MyButton";
import useAppDispatch from "../hooks/useAppDispatch";
import { addCar, deleteCar, selectCar, updateCar } from "../store/reducers/cars/slice";
import useAppSelector from "../hooks/useAppSelector";
import deleteIcon from '/src/assets/img/delete.svg';
import editIcon from '/src/assets/img/edit.svg';
import CarsSelect from "./CarsSelect";
import { Cars } from "../types";

const Header = () => {
    const dispatch = useAppDispatch();
    const cars = useAppSelector((state) => state.cars.cars || []);
    const [nameCar, setNameCar] = useState<string>("");
    const [showEditForm, setShowEditForm] = useState<boolean>(false);
    const [showAddForm, setShowAddForm] = useState<boolean>(false);

    useEffect(() => {
        if (cars.length > 0 && !cars.some(car => car.selected)) {
            dispatch(selectCar(cars[0].id));
        }
    }, [cars, dispatch]);

    const selectedCar = cars.find(car => car.selected) || cars[0];

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

    const onEditNameCar = () => {
        const carToUpdate: Cars = {
            id: selectedCar.id,
            name: nameCar,
            selected: true
        }
        dispatch(updateCar(carToUpdate));
    }

    const onDeleteCar = (carId: string) => {
        dispatch(deleteCar(carId));
    };
    const onShowEditForm = () => {
        setShowEditForm(!showEditForm)
        setNameCar(selectedCar.name)
    }
    const onShowAddForm = () => {
        setShowAddForm(!showAddForm)
    }

    return (
        <header className="headerContainer">
            {cars && cars.length === 0 ? (
                <form className="formCarContainer" onSubmit={(e) => { e.preventDefault(); onSaveNameCar(); }}>
                    < MyInput
                        type="text"
                        placeholder="Назовите авто"
                        value={nameCar}
                        onChange={(event) => setNameCar(event.target.value)}
                    />
                    <MyButton children="Сохранить" onClick={onSaveNameCar} />
                </form>
            ) : ('')}
            {cars && cars.length > 0 && !showEditForm && !showAddForm ? (
                <div className="selectCars">
                    <CarsSelect onShowAddForm={onShowAddForm} />
                    <nav className="headerNavIcon">
                        <img onClick={() => onShowEditForm()} src={editIcon} alt="Изменить" className="navIconItem" />
                        <img onClick={() => onDeleteCar(selectedCar.id)} src={deleteIcon} alt="Удалить" className="navIconItem" />
                    </nav>
                </div >
            ) : ('')}
            {showEditForm ? (
                <div>
                    <h3>Изменить имя:</h3>
                    <form className="formCarContainer" onSubmit={(e) => { e.preventDefault(); onEditNameCar(); setShowEditForm(!showEditForm) }}>
                        < MyInput
                            type="text"
                            placeholder="Название авто"
                            value={nameCar}
                            onChange={(event) => setNameCar(event.target.value)}
                        />
                        <MyButton children="Изменить" onClick={() => { onEditNameCar(), setShowEditForm(!showEditForm) }} />
                        <MyButton children="Отменить" onClick={() => { setShowEditForm(!showEditForm) }} />
                    </form>
                </div>
            ) : ('')}
            {showAddForm ? (
                <div>
                    <h3>Добавить авто:</h3>
                    <form className="formCarContainer" onSubmit={(e) => { e.preventDefault(); onSaveNameCar(); setShowAddForm(!showAddForm) }}>
                        < MyInput
                            type="text"
                            placeholder="Назовите авто"
                            value={nameCar}
                            onChange={(event) => setNameCar(event.target.value)}
                        />
                        <MyButton children="Добавить" onClick={() => { onSaveNameCar(), setShowAddForm(!showAddForm) }} />
                        <MyButton children="Закрыть" onClick={() => { setShowAddForm(!showAddForm) }} />
                    </form>
                </div>
            ) : ("")}
        </header >
    )
}

export default Header