import { useFruitsContext } from "./Fruits";

function FruitsCounter() {
    const {fruits} = useFruitsContext() 
    return (
        <h2>Total fruits: {fruits.length}</h2>
    )
}

export default FruitsCounter;

//props FruitCounter

// function FruitsCounter(props) {
//     return (
//         <h2>Total fruits: {props.fruits.length}</h2>
//     )
// }

// export default FruitsCounter;