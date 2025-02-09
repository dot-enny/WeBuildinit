import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// interface AppStateStore {
//     isChatOpen: boolean;
//     isChatDetailOpen: boolean;
//     setIsChatOpen: (isOpen: boolean) => void;
//     setIsChatDetailOpen: (isOpen: boolean) => void;
//     walletAddress: string;
//     setWalletAddress: (address: string) => void;
//     listObjects: any[];
//     setListObjects: (val: any[]) => void;
//     isLoadingLists: boolean;
//     setIsLoadingLists: (val: boolean) => void;
//     reloadLists: boolean;
//     setReloadLists: (val: boolean) => void;
// }

// export const useAppStateStore = create<AppStateStore>()(
//     persist(
//         (set) => ({
//             isChatOpen: false,
//             isChatDetailOpen: false,
//             setIsChatOpen: (isOpen: boolean) => set({ isChatOpen: isOpen }),
//             setIsChatDetailOpen: (isOpen: boolean) => set({ isChatDetailOpen: isOpen }),
//             walletAddress: '2wGK7bch1ahjmyACi89pBywdepEHUe3ywwmSTSJuzqVY',
//             setWalletAddress: (address: string) => set({ walletAddress: address }),
//             listObjects: [],
//             setListObjects: (val: any) => set({ listObjects: val }),
//             isLoadingLists: false,
//             setIsLoadingLists: (val: boolean) => set({ isLoadingLists: val }),
//             reloadLists: true,
//             setReloadLists: (val: boolean) => set({ reloadLists: val }),
//         }),
//         {
//             name: 'walletAddressState',
//             partialize: (state) => ({ walletAddress: state.walletAddress, listObjects: state.listObjects }),
//             storage: createJSONStorage(() => sessionStorage)
//         }
//     )
// )

interface AppStateStore {
    isChatOpen: boolean;
    isChatDetailOpen: boolean;
    setIsChatOpen: (isOpen: boolean) => void;
    setIsChatDetailOpen: (isOpen: boolean) => void;
    user_id: string;
    setUserId: (address: string) => void;
    walletAddress: string;
    setWalletAddress: (address: string) => void;
    listObjects: any[];
    setListObjects: (val: any[]) => void;
    isLoadingLists: boolean;
    setIsLoadingLists: (val: boolean) => void;
    reloadLists: boolean;
    setReloadLists: (val: boolean) => void;
}

export const useAppStateStore = create<AppStateStore>()(
    persist(
        (set) => ({
            isChatOpen: false,
            isChatDetailOpen: false,
            setIsChatOpen: (isOpen: boolean) => set({ isChatOpen: isOpen }),
            setIsChatDetailOpen: (isOpen: boolean) => set({ isChatDetailOpen: isOpen }),
            user_id: '',
            setUserId: (address: string) => set({ user_id: address }),
            // walletAddress: '2wGK7bch1ahjmyACi89pBywdepEHUe3ywwmSTSJuzqVY',
            walletAddress: '',
            setWalletAddress: (address: string) => set({ walletAddress: address }),
            listObjects: [],
            setListObjects: (val: any) => set({ listObjects: val }),
            isLoadingLists: false,
            setIsLoadingLists: (val: boolean) => set({ isLoadingLists: val }),
            reloadLists: true,
            setReloadLists: (val: boolean) => set({ reloadLists: val }),
        }),
        {
            name: 'walletAddressState',
            partialize: (state) => ({ user_id: state.user_id, listObjects: state.listObjects }),
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)