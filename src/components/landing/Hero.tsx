export const Hero = () => (
    <div id="hero">
        <Navigation />
        <Description />
        <Illustration />
    </div>
);

const Navigation = () => (
    <div className="flex justify-between mt-8 items-center dm-sans">
        <img src="/logo.svg" alt="Logo" />
        <nav>
            <ul className="flex gap-x-4 [box-shadow:_0px_4px_8px_0px_#D6D6D640;] rounded px-3 py-[10px] text-sm text-[#B8B8B8]">
                <li className="text-[#222222] cursor-pointer">
                    <a href="#hero">Home</a>
                </li>
                <li>
                    <a href="#benefits">Benefits</a>
                </li>
                <li>
                    <a href="#faq">FAQ</a>
                </li>
            </ul>
        </nav>
        <button className="max-sm:hidden cursor-pointer border border-[#7FD6E1] rounded-full text-[#7FD6E1] font-medium px-4 py-[10px] [box-shadow:_-4px_2px_10px_0px_#7FD6E124_inset,_0px_10px_10px_0px_#7FD6E114;]">
            Get Started
        </button>
    </div>
);

const Description = () => (
    <div className="text-center mt-24 max-w-[50ch] lg:max-w-[69ch] mx-auto flex flex-col items-center gap-y-5 satoshi">
        <h1 className="text-4xl lg:text-5xl text-[#292929] leading-12 lg:leading-[4.05rem]">AIgenda – Your Everyday Partner for Getting Things Done</h1>
        <p className="text-[#757575] lg:text-lg leading-[1.519rem]">
            Transform your daily to-do list into a simple, smart plan. Whether you're managing a hectic work schedule or juggling personal goals, AIgenda offers intuitive scheduling tailored to your day.
        </p>
        <button className="cursor-pointer bg-[#7FD6E1] border border-[#7FD6E1] rounded-full text-white text-sm font-medium px-4 py-[10px] [box-shadow:_-4px_2px_10px_0px_#7FD6E124_inset,_0px_10px_10px_0px_#7FD6E114;]">
            Get Started
        </button>
    </div>
);

const Illustration = () => (
    <img src="src/assets/illustrations/hero-illustration.png" alt="Hero Illustration" className="mx-auto mt-8" />
);

