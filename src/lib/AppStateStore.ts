import { create } from 'zustand'

interface AppStateStore {
    isChatOpen: boolean; 
    isChatDetailOpen: boolean; 
    setIsChatOpen: (isOpen: boolean) => void;
    setIsChatDetailOpen: (isOpen: boolean) => void;
    walletAddress: string;
    setWalletAddress: (address: string) => void;
    taskImage: any;
    setTaskImage: (image: any) => void;
    resetTaskImage: () => void;
}

export const useAppStateStore = create<AppStateStore>((set) => ({
    isChatOpen: false,
    isChatDetailOpen: false,
    setIsChatOpen: (isOpen: boolean) => set({ isChatOpen: isOpen }),
    setIsChatDetailOpen: (isOpen: boolean) => set({ isChatDetailOpen: isOpen }),
    walletAddress: '',
    setWalletAddress: (address: string) => set({ walletAddress: address }),
    taskImage: null,
    setTaskImage: (image: any) => set({ taskImage: image }),
    resetTaskImage: () => set({ taskImage: null })
}))