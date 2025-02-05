import React, { useContext, useReducer, useState } from "react";

const WalletContext = React.createContext<any>(null);
const WalletUpdateContext = React.createContext<any>(null);

export const useConnectWallet = () => {
    const context = useContext(WalletContext);
    if(!context) {
        throw new Error("useConnectWallet must be used within a ConnectWalletProvider");
    }
    return context;
}

export const useConnectWalletUpdate = () => {
    const updateContext = useContext(WalletUpdateContext);
    if(!updateContext) {
        throw new Error("useConnectWalletUpdate must be used within a ConnectWalletProvider");
    }
    return updateContext;
}

interface State {
    isConnecting: boolean;
    walletAddress: string;
}
interface Action {
    type: 'CONNECT_WALLET' | 'DISCONNECT_WALLET' | 'SET_WALLET_ADDRESS';
    payload: string;
}

const reducer = (state: State, action: Action) => {
    switch(action.type) {
        case 'CONNECT_WALLET':
            return { ...state, isConnecting: true };
        case 'DISCONNECT_WALLET':
            return { ...state, isConnecting: false, walletAddress: '' };
        case 'SET_WALLET_ADDRESS':
            return { ...state, walletAddress: action.payload };
        default:
            return state;
    }
}

export const ConnectWalletProvider = ({ children }: { children: React.ReactNode }) => {

    const [state, dispatch] = useReducer(reducer, { isConnecting: false, walletAddress: '' });

    return (
        <WalletContext.Provider value={state}>
            <WalletUpdateContext.Provider value={reducer}>
                {children}
            </WalletUpdateContext.Provider>
        </WalletContext.Provider>
    )
}