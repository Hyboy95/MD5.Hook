import { useState } from "react";

export default function Counter2() {
    const [count, setCount] = useState({count1:0, count2: 0});
    const handleClick = (tag) => {
        setCount(tag === 'count1' ? {...count, count1: count.count1 + 1} : {...count, count2: count.count2 + 2})
    }
    return(
        <>
            <p>Count1:{count.count1}</p>
            <button onClick={() => handleClick('count1')}>Add 1</button>
            <p>Count2:{count.count2}</p>
            <button onClick={() => handleClick('count2')}>Add 2</button>
        </>
    );
}