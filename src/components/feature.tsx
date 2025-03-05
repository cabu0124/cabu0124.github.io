type FeatureProps = {
    label: string;
    year: string;
    title: string;
    description: string;
    imgUrl: string;
    link: string;
};

export default function Feature({ label, year, title, description, imgUrl, link }: FeatureProps) {
    return (
        <div className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none px-8 pt-8 h-[400px] w-full max-w-7xl mx-auto">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base/7 bg-gradient-to-r from-blue-700 to-white inline-flex gap-2.5 font-bold uppercase tracking-widest text-transparent bg-clip-text">
                                <span>{label}</span>
                                <span>&bull;</span>
                                <span>{year}</span>
                            </h2>
                            <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
                                {title}
                            </p>
                            <p className="mt-6 text-lg/8 text-white/50">
                                {description}
                            </p>
                            <a href={link}>
                                <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                                    <span>View</span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <img
                        alt="Feature Image"
                        src={imgUrl}
                        className="w-[30rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[40rem] md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    )
}
