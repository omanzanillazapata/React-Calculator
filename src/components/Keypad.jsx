const buttons = [
    "M+","M-","MR","MC",
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","=","+",
    "log","(",")","^",
    "sqrt","C","CH"
]

const Keypad = ({onClick}) => {
    return (
        <div className="keypad">
            {buttons.map((btn) => (
                <button key={btn} onClick={() => onClick(btn)}>
                    {btn}
                </button>
            ))}
        </div>
    )
};

export default Keypad;