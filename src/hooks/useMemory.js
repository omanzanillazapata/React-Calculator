import { useEffect, useRef, useState } from "react";

export const useMemory = () => {
    
    const [memory, setMemory] = useState(0);
    const memoryRef = useRef(memory);
    const hasInitialized = useRef(false);
    
    useEffect(() => {
        if (!hasInitialized.current) {
            const saved = localStorage.getItem("memory");
            if (saved) {
                const parsed = parseFloat(saved);
                setMemory(parsed);
                memoryRef.current = parsed;
            }
            hasInitialized.current = true;
        }
    },[]);
    
    useEffect(() => {
        localStorage.setItem("memory", memory.toString());
        memoryRef.current = memory;
    },[memory]);

    return {
        memory,
        setMemory,
        memoryRef,
    };
};
