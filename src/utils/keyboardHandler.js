import { evaluate } from "mathjs";

const keyboardHandler = (valueRef, setValue, handleClick, setHistory) => {
    const validKeys = ["1","2","3","4","5","6","7","8","9","0","/","*","-","+",".","(",")","^"]
    return (event) => {
        const key = event.key;
        if (key === "Enter") {
            const result = evaluate(valueRef.current);
            setValue(result.toString());
            setHistory((prev) => [
                ...prev, `${valueRef.current} = ${result}`
            ])
        } else if (key === "Escape") {
            setValue("0");
        } else if (key === "Backspace") {
            setValue((prev) => {
                if (prev.length === 1 || prev === "Error") return "0";
                return prev.slice(0, -1)
            })
        } else if (validKeys.includes(key)) {
            handleClick(key);
        }
    }

};

export default keyboardHandler;