import { useSelector, useDispatch } from "react-redux";

const CustomButton = () => {
    const {value} = useSelector((status) => status );
    const dispatch = useDispatch();

    console.log('count...', value)

    return (
        <div>
            <button onClick={() => dispatch({type: "INCREMENT"})}>increment</button>
            <button onClick={() => dispatch({type: "DECREMENT"})}>decrement</button>
        </div>
    )
}

export default CustomButton;