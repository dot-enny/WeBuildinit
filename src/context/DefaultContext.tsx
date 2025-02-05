// CREATE CONTEXT 
import { createContext, useState } from "react";
const DefaultContext = createContext<any>(null);
const DefaultUpdateContext = createContext<any>(null);

import { useContext } from "react";
// EXPOSE CONTEXT VALUES WITH CUSTOM HOOKS
export const useDefaultContext = () => {
    const context = useContext(DefaultContext);
    if (!context) {
        throw new Error("useDefaultContext must be used within a DefaultProvider");
    }
    return context;
}
export const useDefaultUpdateContext = () => {
    const updateContext = useContext(DefaultUpdateContext);
    if (!updateContext) {
        throw new Error("useDefaultContext must be used within a DefaultProvider");
    }
    return updateContext;
}

// PROVIDE CONTEXT
export const DefaultProvider = ({ children }: { children: React.ReactNode }) => {
    const [value, setValue] = useState(null);
    const handleUpdateValue = () => {
        return
    };

    return (
        <DefaultContext.Provider value={value}>
            <DefaultUpdateContext.Provider value={handleUpdateValue}>
                {children}
            </DefaultUpdateContext.Provider>
        </DefaultContext.Provider>
    )
}

