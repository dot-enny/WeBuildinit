export const ListsPageHeader = ({ isLoading }: { isLoading: boolean }) => {
    return (
        <>
            <div className="flex justify-between gap-x-12">
                <div className={`flex flex-col gap-y-2 transition duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                    <h4 className="md:text-[1.25rem] text-white max-sm:ml-8">All Todo Lists</h4>
                    <p className="text-sm text-[#B9B9B9] leading-[1.181rem] max-sm:hidden">Transform your daily to-do list into a simple, smart plan. Whether you're managing a hectic work schedule or juggling personal goals, AIgenda offers intuitive scheduling tailored to your day.</p>
                </div>
                <button type="button" className="self-start">
                    <img alt="notifications" src="/assets/icons/bell.svg" />
                </button>
            </div>
            <div>
                <div className={`bg-[#333131] h-px w-full mt-4 origin-left transition duration-1000 ${isLoading ? 'scale-0' : 'scale-100'}`} />
            </div>
        </>
    )
}
