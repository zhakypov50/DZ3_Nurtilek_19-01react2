
export default function CounterReducer(state = 1) {


    if (state.type === "INCREMENT"){
        return state + 1
    }
    else if (state.type === "DECREMENT"){
        return state - 1
    }

    
}