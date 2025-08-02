import { useEffect, useState } from "react";

export const useHistory = () => {
    
    const [history, setHistory] = useState(() => {
        const saved = localStorage.getItem("history");
        return saved ? JSON.parse(saved) : [];
    });
    
    useEffect(() => {
        localStorage.setItem("history", JSON.stringify(history));
    }, [history]);


    return {
        history,
        setHistory
    };
};
