import grainImage from "../assets/images/grain.jpg";
import ArrowRightIcon from "../assets/icons/arrow-right.svg?react";
import { siteConfig } from "../app/config"

const Contact = () => {
    return (
        <div className="relative py-24 md:py-28 lg:py-32 text-white overflow-x-clip bg-gray-800">
            {/* Fondo con grano */}
            <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: `url(${grainImage})` }}
                ></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 text-center">
                {/* Título */}
                <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white">
                    Let's Connect and Create Something Amazing!
                </h2>

                {/* Texto breve */}
                <p className="mt-4 text-lg text-white/70">
                    Reach out to me for collaborations, inquiries, or just to say hello.
                </p>

                {/* Botón de LinkedIn */}
                <div className="mt-8">
                    <a href={siteConfig.contact[0].link} target="_blank" rel="noopener noreferrer">
                        <button className="inline-flex items-center gap-2 border border-white/20 shadow-lg px-6 h-12 rounded-xl bg-gray-900/70 text-white font-semibold hover:bg-gray-800/80 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                            <span className="font-semibold">Contact Me</span>
                            <ArrowRightIcon className="text-icon size-5 group-hover:-rotate-45 transition-transform duration-300" />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;