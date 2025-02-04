import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from "@headlessui/react"
import { NavigationItem } from "../../types/types"
import { ChatHistory, Logo, NavList, Separator, WalletInfo } from "./DesktopSidebar"

export const MobileSidebar = ({ sidebarOpen, setSidebarOpen, navigation }: { sidebarOpen: boolean, setSidebarOpen: (val: boolean) => void, navigation: NavigationItem[] }) => {
    return (
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-black/50 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 flex">
                <DialogPanel
                    transition
                    className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                >
                    <TransitionChild>
                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                            <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5 rounded-full border border-black/40 bg-[#2F2F2F] text-gray-400">
                                <span className="sr-only">Close sidebar</span>
                                {/* <XMarkIcon aria-hidden="true" className="size-6 text-white" /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </TransitionChild>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#161616] px-6 pb-2 ring-1 ring-white/10">
                        <Logo />
                        <WalletInfo />
                        <Separator />
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <NavList navigation={navigation} />
                                </li>
                                <Separator />
                                <ChatHistory />
                            </ul>
                        </nav>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}