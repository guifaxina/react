import { useEffect, useState } from 'react';

type Props = {
    count: number
}

export default function Counter(props: Props) {

    const [count, setCount] = useState(props.count)
    
    useEffect(() => {
        setCount(Number(localStorage.getItem("count")))
    }, [])

    useEffect(() => {
        document.title = `Times clicked: ${count}`;
        localStorage.setItem("count", `${count}`);
        
    }, [count])
    
    return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
    );
}