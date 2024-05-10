import { useState } from "react";
import MyInput from "./UI/input/MyInput"
import MyButton from "./UI/button/MyButton";
import useAppDispatch from "../hooks/useAppDispatch";
import { addCar, deleteCar } from "../store/reducers/cars/slice";
import useAppSelector from "../hooks/useAppSelector";

const InformationCar = () => {
    const [nameCar, setNameCar] = useState<string>("");
    const dispatch = useAppDispatch();
    const cars = useAppSelector((state) => state.cars.cars || []);

    const onSaveNameCar = () => {
        dispatch(
            addCar({
                id: new Date().toString(),
                name: nameCar
            })
        );
        setNameCar('');
    }

    const onEditNameCar = () => {
        dispatch(
            deleteCar()
        );
    }

    return (
        <header style={{ backgroundColor: `while`, width: "100%" }}>
            {cars && cars.length > 0 ? (
                <div className="formInformationYourCar">
                    <div className="itemFormYourCar1">
                        <a style={{ margin: "0 15px 0 0" }}>Ваш авто:</a>
                        <h1>{cars[0].name}</h1>
                    </div >
                    <div className="itemFormYourCar2">
                        <MyButton children="Изменить" onClick={onEditNameCar}></MyButton>
                    </div>
                </div >
            ) : (
                <form className="formInformationCar">
                    < MyInput
                        type="text"
                        placeholder="Ваш авто"
                        value={nameCar}
                        onChange={(event) => setNameCar(event.target.value)}
                    />
                    <MyButton children="Сохранить" onClick={onSaveNameCar} style={{ marginLeft: "10px" }} />
                </form>
            )}
        </header >
    )
}

export default InformationCar