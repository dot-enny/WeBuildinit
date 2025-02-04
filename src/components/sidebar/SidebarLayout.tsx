import React, { useState } from 'react'
import { StarIcon } from '../../assets/icons/StarIcon'
import { ClockIcon } from '../../assets/icons/ClockIcon'
import { DesktopSidebar } from './DesktopSidebar'
import { MobileSidebar } from './MobileSidebar'


export const navigation = [
    { name: 'AI chat', href: '/chat', icon: StarIcon },
    { name: 'Task', href: '/tasks', icon: ClockIcon },
]

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <MobileSidebar navigation={navigation} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <DesktopSidebar navigation={navigation} />
            <ContentArea setSidebarOpen={setSidebarOpen}>
                {children}
            </ContentArea>
        </>
    )
}

const ContentArea = ({ children, setSidebarOpen }: { children: React.ReactNode, setSidebarOpen: (val: boolean) => void }) => {
    return (
        <>
            <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-400 lg:hidden fixed top-5 left-5 rounded-full border border-black/40 bg-[#2F2F2F]">
                <span className="sr-only">Open sidebar</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                </svg>
            </button>

            <main className="py-5 max-md:px-2 lg:pl-56 xl:pl-72 bg-[#222222] h-screen">
                <div className="flex h-full ml-4 bg-[#1F1F1F] max-md:rounded md:rounded-tl-lg md:rounded-bl-lg">
                    <div className="flex-1 px-4 md:px-8">{children}</div>

                    {/* TASK NOTIFICATION */}
                    <div className="max-md:hidden h-full border-l border-[#2D2D2D] flex flex-col px-2 md:px-6 xl:px-8">
                        <div className="flex h-16 shrink-0 items-center">
                            <img alt="notifications" src="/assets/icons/bell.svg" />
                        </div>
                        <div className="flex-1 flex items-center px-14">
                            <span className="text-white text-[1.25rem]">No tasks yet</span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
