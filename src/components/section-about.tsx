import { useNavigate } from "react-router-dom";
import SectionHeader from "../components/section-header";
import grainImage from "../assets/images/grain.jpg";
import ArrowRightIcon from "../assets/icons/arrow-right.svg?react";
import { siteConfig } from "../app/config"

const SectionAbout = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/about");
    };

    return (
        <div className="relative py-24 md:py-32 lg:py-40 text-white overflow-x-clip">
            {/* Fondo con grano */}
            <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `url(${grainImage})`,
                    }}
                ></div>
            </div>

            <div className="max-w-4xl mx-auto px-4">
                {/* Introducción principal con SectionHeader */}
                <SectionHeader
                    label={siteConfig.about.label}
                    title="About Me"
                    description={siteConfig.about.description}
                />
                {/* Botón de navegación a /about (centrado) */}
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={handleNavigate}
                        className="inline-flex items-center gap-2 border border-white/20 shadow-lg px-6 h-12 rounded-xl bg-gray-900/70 text-white font-semibold hover:bg-gray-800/80 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    >
                        <span className="font-semibold">Know more</span>
                        <ArrowRightIcon className="text-icon size-5 group-hover:-rotate-45 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SectionAbout;