import { useEffect, useState } from "react";

export default function Timer() {
    const [timer, setTimer] = useState(10);
    useEffect(() => {
        let countTimer = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1)
            } else {
                alert('time up!')
            }
            clearInterval(countTimer)
        }, 1000)

    }, [timer])
    return (
        <h2>{timer}</h2>
    );
}