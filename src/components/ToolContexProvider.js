import React, { createContext, useContext, useState } from 'react';

const ToolContext  = createContext({ tool: null, setTool: null});
/**
 * Context provider for maintaining the selected tool state across app
 * */
export const ToolContextProvider = ({ children }) => {
    const [selectedTool, setSelectedTool] = useState("Default tool");

    return (
        <ToolContext.Provider value={{ tool: selectedTool, setTool: setSelectedTool }}>
            {children}
        </ToolContext.Provider>
    );
};

export const useSelectedTool = () => useContext(ToolContext);
