import React, { useContext, useState } from "react";

const ConnectWalletContext = React.createContext<any>(null);
const ConnectWalletUpdateContext = React.createContext<any>(null);

export const useConnectWallet = () => {
    return useContext(ConnectWalletContext);
}

export const useConnectWalletUpdate = () => {
    return useContext(ConnectWalletUpdateContext);
}

export const ConnectWalletProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleSetIsOpen = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <ConnectWalletContext.Provider value={isOpen}>
            <ConnectWalletUpdateContext.Provider value={handleSetIsOpen}>
                {children}
            </ConnectWalletUpdateContext.Provider>
        </ConnectWalletContext.Provider>
    )

}