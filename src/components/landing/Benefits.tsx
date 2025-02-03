const features = [
    {
        bg: 'bg-[url(\'./assets/bg/ellipse-pale-blue.svg\')]',
        icon: 'src/assets/icons/smart-reminder.svg',
        title: 'Smart Reminder',
        description: 'Let AIgenda automatically organize your day. It learns your habits and priorities so you always have a plan that adapts to your changing schedule.',
        illustration: 'src/assets/illustrations/smart-reminder.png',
        colSpan: 'col-span-5',
        bgPosition: 'bg-top',
    },
    {
        bg: 'bg-[url(\'./assets/bg/ellipse-pale-pink.svg\')]',
        icon: 'src/assets/icons/purple-heart.svg',
        title: 'Personalized Task Recommendations',
        description: 'Receive insights tailored to your unique goals and routines. AIgenda helps you focus on what truly matters by suggesting tasks based on your everyday needs.',
        illustration: 'src/assets/illustrations/task-recommendation.png',
        colSpan: 'col-span-7',
        bgPosition: 'bg-[center_bottom_16rem]',
    },
    {
        bg: 'bg-[url(\'./assets/bg/ellipse-pale-purple.svg\')]',
        icon: 'src/assets/icons/photo.svg',
        title: 'Collaborate Seamlessly, Delegate with Ease',
        description: 'Assign tasks effortlessly and share lists that keep everyone in sync. AIgenda makes teamwork simple and effective.',
        illustration: 'src/assets/illustrations/collaborate-illustration.svg',
        colSpan: 'col-span-4 max-xl:col-span-6',
        bgPosition: 'bg-[right_top_-1rem]',
    },
    {
        bg: 'bg-[url(\'./assets/bg/ellipse-pale-blue.svg\')]',
        icon: 'src/assets/icons/photo.svg',
        title: 'Your Smart Accountability Partner',
        description: 'Stay on top of your goals with AI-powered progress tracking and gentle nudges when tasks are done. AIgenda keeps you focused.',
        illustration: 'src/assets/illustrations/smart-partner.svg',
        colSpan: 'col-span-4 max-xl:col-span-6',
        bgPosition: 'bg-[left_top_-4rem]',
    },
    {
        bg: '',
        icon: 'src/assets/icons/purple-heart-alt.svg',
        title: 'Get Smart Task Suggestions Before You Even Ask',
        description: 'AIgenda learns your habits and upcoming events to suggest tasks proactively, helping you stay prepared and ahead of your day.',
        illustration: 'src/assets/illustrations/suggested-task-illustration.svg',
        colSpan: 'xl:col-span-4 max-xl:col-start-4 col-end-10 justify-self-center',
        bgPosition: 'bg-top',
    },
];

interface FeatureProps {
    bg: string;
    icon: string;
    title: string;
    description: string;
    illustration: string;
    colSpan: string;
    bgPosition: string;
}

export const Benefits = () => {
    return (
        <div className="mb-64 mt-48" id="benefits">
            <div className="bg-white px-8 py-4 w-fit mx-auto border border-[#F2F2F2F2] rounded-full [box-shadow:_0px_10px_10px_0px_#6767DA14;] font-medium text-[#939393] flex gap-x-2">
                <img src="src/assets/icons/chart.svg" alt="" />
                Benefits
            </div>

            {/* DESCRIPTION */}
            <div className="text-center mt-24 max-w-[50ch] lg:max-w-[69ch] mx-auto flex flex-col items-center gap-y-5 satoshi">
                <h1 className="text-3xl lg:text-[2.5rem] text-[#5D5D5D] leading-12 lg:leading-[3.375rem]">Experience a Smarter Way to Plan and Organize Your Day</h1>
                <p className="text-[#757575] lg:text-lg leading-[1.519rem]">Transform your daily to-do list into a simple, smart plan. Whether you're managing a hectic work schedule or juggling personal goals, AIgenda offers intuitive scheduling tailored to your day.</p>
            </div>

            {/* FEATURES */}
            <div className="mx-auto mt-24 max-sm:flex max-sm:flex-col max-sm:gap-y-10 md:grid grid-cols-12 gap-4 satoshi">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </div>
    );
};

const FeatureCard: React.FC<FeatureProps> = ({ bg, icon, title, description, illustration, colSpan, bgPosition }) => (
    <div className={`${bg} ${colSpan} ${bgPosition} bg-no-repeat p-4 rounded-lg [box-shadow:_0px_10px_10px_0px_#6767DA14;] border border-[#F2F2F2]`}>
        <img src={icon} alt="" />
        <h4 className="text-[1.25rem] leading-[1.688rem] text-[#696969] mt-3 mb-2">{title}</h4>
        <p className="text-sm text-[#9E9E9E] leading-[1.181rem] mb-3">{description}</p>
        <img src={illustration} className="" alt="" />
    </div>
);

