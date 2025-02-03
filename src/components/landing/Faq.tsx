const faqData = [
    {
        question: "What's all the fuss about AIgenda?",
        answer:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam in enim laboriosam aut alias facere, repellat animi rem veritatis quas qui soluta. Amet voluptate magni nulla similique voluptas! Illum, soluta.",
    },
    {
        question: "Why should I trust AIgenda to know how to sort my task?",
        answer:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam in enim laboriosam aut alias facere, repellat animi rem veritatis quas qui soluta. Amet voluptate magni nulla similique voluptas! Illum, soluta.",
    },
    {
        question: "Is Moove just for women?",
        answer:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam in enim laboriosam aut alias facere, repellat animi rem veritatis quas qui soluta. Amet voluptate magni nulla similique voluptas! Illum, soluta.",
    },
    {
        question: "Can I really drive a benz through Moove?",
        answer:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam in enim laboriosam aut alias facere, repellat animi rem veritatis quas qui soluta. Amet voluptate magni nulla similique voluptas! Illum, soluta.",
    },
];


export const Faq = () => {
    return (
        <div className="mb-64 satoshi text-balance" id="faq">
            {faqData.map((item, index) => (
                <details key={index} className="w-full px-6 py-8 my-10 border-[1.4px] border-[#F2F2F2F2] rounded-[1.4px]">
                    <summary className="text-[#4E4E4E] text-xl md:text-2xl lg:text-[2rem] md:leading-[2.7rem] tracking-[2%] list-none flex items-center after:ml-auto after:inline-block after:content-[url('src/assets/icons/plus.svg')]">
                        {item.question}
                    </summary>
                    <p className="mt-4 text-[#757575] lg:text-lg leading-[1.519rem]">
                        {item.answer}
                    </p>
                </details>
            ))}
        </div>
    );
};
