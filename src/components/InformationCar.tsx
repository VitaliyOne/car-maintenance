import { useEffect, useState } from "react";
import MyInput from "./UI/input/MyInput"
import MyButton from "./UI/button/MyButton";

const InformationCar = () => {
    const SESSION_NAME_CAR = 'localNameCar';
    const sessionNameYourCar = sessionStorage.getItem(SESSION_NAME_CAR);
    const [nameCar, setNameCar] = useState<string>("");
    const [sessionNameCar, setSessionNameCar] = useState<string>("");

    useEffect(() => {
        if (sessionNameYourCar) setSessionNameCar(sessionNameYourCar);
    }, [sessionNameYourCar]);

    const saveNameCar = () => {
        if (nameCar) {
            sessionStorage.clear();
            sessionStorage.setItem(SESSION_NAME_CAR, nameCar);
            setSessionNameCar(nameCar);
        }
    }

    const EditNameCar = () => {
        setNameCar('');
        setSessionNameCar('');
        sessionStorage.clear();
    }

    return (
        <header style={{ backgroundColor: `while`, width: "100%" }}>
            {sessionNameCar === "" || sessionNameCar === null ? (
                <form className="formInformationCar">
                    <MyInput type="text" placeholder="Ваш авто" value={nameCar} onChange={(event) => setNameCar(event.target.value)}></MyInput>
                    <MyButton children="Сохранить" onClick={saveNameCar} style={{ marginLeft: "10px" }}></MyButton>
                </form>) : (
                <div className="formInformationYourCar">
                    <div className="itemFormYourCar1">
                        <a style={{ margin: "0 15px 0 0" }}>Ваш авто:</a>
                        <h1>{sessionNameCar}</h1>
                    </div>
                    <div className="itemFormYourCar2">
                        <MyButton children="Изменить" onClick={EditNameCar}></MyButton>
                    </div>
                </div>
            )}
        </header>
    )
}

export default InformationCar