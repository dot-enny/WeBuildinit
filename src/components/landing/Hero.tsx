export const Hero = () => (
    <div id="hero" className="2xl:bg-[100%_auto] pt-8 relative"
        style={{ background: `url('/assets/bg/gradient-bg-hero.svg') no-repeat`}}
    >
        <img src="/assets/bg/layer-blur.svg" className="max-md:hidden -bottom-20 2xl:-bottom-56 mx-auto absolute w-full object-cover" />
        <img src="/assets/bg/layer-blur.svg" className="max-md:hidden -bottom-20 2xl:-bottom-56 mx-auto absolute w-full object-cover" />
        <img src="/assets/bg/layer-blur.svg" className="md:hidden -bottom-10 mx-auto absolute w-full object-cover" />
        <img src="/assets/bg/layer-blur.svg" className="md:hidden -bottom-10 mx-auto absolute w-full object-cover" />
        <div className="max-w-[1440px] md:w-[85%] max-sm:px-4 mx-auto">
            <Navigation />
            <Description />
            <Illustration />
        </div>
    </div>
);

const Navigation = () => (
    <div className="flex justify-between items-center dm-sans">
        <img src="/logo.svg" alt="Logo" />
        <nav>
            <ul className="bg-[#31353A] flex gap-x-4 rounded px-3 py-[10px] text-sm text-[#767676]">
                <li className="text-white cursor-pointer">
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
        <button className="max-sm:hidden bg-[#222222] cursor-pointer border border-[#7FD6E1] rounded-full text-[#7FD6E1] font-medium px-4 py-[10px] [box-shadow:_-4px_2px_10px_0px_#7FD6E124_inset,_0px_10px_10px_0px_#7FD6E114;]">
            Get Started
        </button>
    </div>
);

const Description = () => (
    <div className="text-center mt-24 max-w-[50ch] lg:max-w-[69ch] mx-auto flex flex-col items-center gap-y-5 satoshi">
        <h1 className="text-4xl lg:text-5xl text-white leading-12 lg:leading-[4.05rem]">AIgenda – Your Everyday Partner for Getting Things Done</h1>
        <p className="text-[#B9B9B9] lg:text-lg leading-[1.519rem]">
            Transform your daily to-do list into a simple, smart plan. Whether you're managing a hectic work schedule or juggling personal goals, AIgenda offers intuitive scheduling tailored to your day.
        </p>
        <button className="cursor-pointer bg-[#7FD6E1] border border-[#7FD6E1] rounded-full text-[#222222] text-sm font-medium px-4 py-[10px] [box-shadow:_-4px_2px_10px_0px_#7FD6E124_inset,_0px_10px_10px_0px_#7FD6E114;]">
            Get Started
        </button>
    </div>
);

const Illustration = () => (
    <div className="relative">
        {/* <img src="/assets/bg/layer-blur.svg" className="border top-[26rem] inset-x-0 absolute z-" />
        <img src="/assets/bg/layer-blur.svg" className="border top-[22rem] left-0 absolute z-" /> */}
        <img src="/assets/illustrations/hero-illustration.svg" alt="Hero Illustration" className="mx-auto mt-8" />
    </div>
);

