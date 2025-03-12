import ButtonIcon from "../assets/icons/arrow-right.svg?react";
import grainImage from "../assets/images/grain.jpg";

type FeatureProps = {
    index: number;
    label: string;
    year: string;
    title: string;
    description: string;
    imgUrl: string;
    link: string;
    bgcolor: string;
};

export default function Feature({
    index,
    label,
    year,
    title,
    description,
    imgUrl,
    link,
    bgcolor,
}: FeatureProps) {
    return (
        <div
            className={`rounded-3xl z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/15 after:pointer-events-none px-8 pt-8 sm:h-full lg:h-[420px] w-full max-w-7xl mx-auto sticky top-16 transition-all duration-300 ${bgcolor}`}
            style={{
                top: `calc(64px + ${index * 30}px)`,
            }}
        >
            {/* Fondo con grano */}
            <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                <div
                    className="absolute inset-0 opacity-8"
                    style={{
                        backgroundImage: `url(${grainImage})`,
                    }}
                ></div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base/7 bg-gradient-to-r from-label to-white inline-flex gap-2.5 font-bold uppercase tracking-widest text-transparent bg-clip-text">
                                <span>{label}</span>
                                <span>•</span>
                                <span>{year}</span>
                            </h2>
                            <p className="mt-2 text-3xl font-serif tracking-tight text-white/90 sm:text-4xl">
                                {title}
                            </p>
                            <p className="mt-6 text-lg/8 text-white/70">{description}</p>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <button className="bg-white/90 text-gray-950 h-12 w-full rounded-xl font-bold inline-flex items-center justify-center gap-2 mt-8 hover:bg-white transition-colors shadow-md cursor-pointer group">
                                    <span>Explore</span>
                                    <ButtonIcon className="text-gray-950 size-5 group-hover:-rotate-45 transition-transform duration-300" />
                                </button>
                            </a>
                        </div>
                    </div>
                    <img
                        alt={title}
                        src={imgUrl}
                        className="w-[30rem] max-w-none rounded-xl shadow-2xl ring-1 ring-white/10 sm:w-[40rem] md:-ml-4 lg:-ml-0 hover:scale-[1.02] transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
    );
}