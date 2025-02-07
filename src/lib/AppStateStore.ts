import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface AppStateStore {
    isChatOpen: boolean;
    isChatDetailOpen: boolean;
    setIsChatOpen: (isOpen: boolean) => void;
    setIsChatDetailOpen: (isOpen: boolean) => void;
    walletAddress: string;
    setWalletAddress: (address: string) => void;
    listObjects: any[];
    setListObjects: (val: any[]) => void;
    isLoadingLists: boolean;
    setIsLoadingLists: (val: boolean) => void;
}

export const useAppStateStore = create<AppStateStore>()(
    persist(
        (set) => ({
            isChatOpen: false,
            isChatDetailOpen: false,
            setIsChatOpen: (isOpen: boolean) => set({ isChatOpen: isOpen }),
            setIsChatDetailOpen: (isOpen: boolean) => set({ isChatDetailOpen: isOpen }),
            walletAddress: '2wGK7bch1ahjmyACi89pBywdepEHUe3ywwmSTSJuzqVY',
            setWalletAddress: (address: string) => set({ walletAddress: address }),
            listObjects: [],
            setListObjects: (val: any) => set({ listObjects: val }),
            isLoadingLists: false,
            setIsLoadingLists: (val: boolean) => set({ isLoadingLists: val })
        }),
        {
            name: 'walletAddressState',
            partialize: (state) => ({ walletAddress: state.walletAddress, listObjects: state.listObjects }),
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)