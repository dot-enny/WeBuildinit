export const Footer = () => {
    return (
        <div className="dm-sans leading-[1.302rem] text-[#9E9E9E] pb-10">
            <div className="flex flex-wrap justify-between gap-x-20 mb-10">
                <div className="max-w-[48ch] mb-10">
                    <img src="/logo-icon.svg" alt="Logo" />
                    <p className="mt-6">
                        Every great journey starts with a single step. We’re here to guide you from dream to destination—seamlessly, thoughtfully, and uniquely tailored to you.
                    </p>
                </div>

                <div className="flex-1 flex flex-wrap gap-8 justify-between min-w-fit">
                    <FooterNavigation
                        title="Quick Links"
                        links={["About Us", "Benefits", "FAQ", "Contact Us"]}
                    />
                    <FooterNavigation
                        title="Quick Links"
                        links={["Terms of services", "Cookies Settings", "Affiliate Policy", "Privacy Policy"]}
                    />
                    <FooterNavigation
                        title="Social Media"
                        links={["Linkedin", "Facebook", "Instagram", "x (formerly twitter)"]}
                    />
                </div>
            </div>

            <p>Copyright @2025 Travel Plan. All right reserved</p>
        </div>
    );
}

const FooterNavigation = ({ title, links }: { title: string, links: string[] }) => (
    <div>
        <span className="text-[#5D5D5D] font-medium inline-block mb-5">{title}</span>
        <nav>
            <ul className="flex flex-col gap-y-6">
                {links.map((link, index) => (
                    <li key={index}><a href="#" onClick={(e) => e.preventDefault()}>{link}</a></li>
                ))}
            </ul>
        </nav>
    </div>
);

