import {evaluate} from "mathjs";

const calculatorLogic = (input, value, setValue, setHistory, setMemory, memory) => {
    if (input === "C") {
        setValue("0");
    } else if (input === "=") {
        try {
            const result = evaluate(value)
            setValue(result.toString());
            setHistory((prev) => [
                ...prev, `${value} = ${result}`
            ]);
        } catch {
            setValue("Error");
        }
    } else if (input === "M+") {
        setMemory((prev) => {
            const newMemory = prev + parseFloat(value)
            localStorage.setItem("memory", newMemory.toString())
            return newMemory
        });
    } else if (input === "M-") {
        setMemory((prev) => {
            const newMemory = prev- parseFloat(value);
            localStorage.setItem("memory", newMemory.toString())
            return newMemory;
        })
    } else if (input === "MC") {
        setMemory(0);
        localStorage.setItem("memory", "0")
    } else if (input ==="CH") {
        setHistory([]);
        localStorage.removeItem("history");
    } else if (input === "MR") {
        console.log("MR: ", memory)
        setValue(memory.toString());
    } else {
        setValue((prev) => 
            prev === "0" || prev === "Error" ? input : prev + input
        )
    }
};

export default calculatorLogic;