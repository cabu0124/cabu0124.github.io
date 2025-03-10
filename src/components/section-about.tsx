import SectionHeader from "../components/section-header";
import grainImage from "../assets/images/grain.jpg";
import ArrowUpIcon from '../assets/icons/arrow-up-right.svg?react';

const SectionAbout = () => {
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
                    label="Passionate About Innovation"
                    title="About Me"
                    description="I'm a software engineer and technical leader passionate about designing, developing, and optimizing robust applications. My focus is on delivering high-quality solutions that meet business needs and provide excellent user experiences. I enjoy working in teams, solving problems, and creating impactful solutions. I’m passionate about leading development teams, sharing ideas, and achieving great results together."
                />
                {/* Botón de LinkedIn */}
                <div className="mt-8">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900/70 text-white font-semibold text-center rounded-xl border border-white/20 shadow-lg hover:bg-gray-800/80 hover:shadow-xl transition-all duration-300"
                    >
                        <span>Know more</span>
                        <ArrowUpIcon className="text-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SectionAbout;