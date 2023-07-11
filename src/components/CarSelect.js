import { useState } from "react";

const carList = ['audi', 'mercedes', 'honda', 'porsche', 'BMW'];
const colorList = ['black', 'red', 'white', 'green', 'blue'];

export default function CarSelect() {
    const [selectCar, setSelectCar] = useState({ car: carList[0], color: colorList[0] });
    const choiceCar = (e) => {
        setSelectCar({...selectCar, car: e.target.value})
    }

    const choiceColor = (e) => {
        setSelectCar({...selectCar, color: e.target.value})
    }
    return (
        <div>
            <h2>Chọn Xe của Bạn</h2>
            Chọn hãng xe:
            <select
                onChange={e => {
                    choiceCar(e);
                }}
            >
            {carList.map(car => (
                <option value={car}>{car}</option>
            ))}   
            </select>
            Chọn màu xe:
            <select
                onChange={e => {
                    choiceColor(e);
                }}
            >
            {colorList.map(color => (
                <option value={color}>{color}</option>
            ))}   
            </select>
            <h2>Your selected: {selectCar.car}-{selectCar.color}</h2>
        </div>
    );

}