import HeroOrbit from './hero-orbit';

import brainImage from '../assets/images/artificial-intelligence.png';
import grainImage from '../assets/images/grain.jpg';

import StarIcon from '../assets/icons/star.svg?react';
import WorldIcon from '../assets/icons/world.svg?react';
import EarthIcon from '../assets/icons/earth-america.svg?react';
import PlanetIcon from '../assets/icons/ringed-planet.svg?react';
import EyeIcon from '../assets/icons/eyeball.svg?react';
import ClickIcon from '../assets/icons/click.svg?react';

import { siteConfig } from "../app/config"

const Hero = () => {
    return (
        <div className="py-32 md:py-36 lg:py-48 relative z-0 overflow-x-clip">
            <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10">
                <div
                    className="absolute inset-0 opacity-5 -z-30"
                    style={{ backgroundImage: `url(${grainImage})` }}
                ></div>
                <div className="size-[620px] hero-ring -z-20"></div>
                <div className="size-[820px] hero-ring -z-20"></div>
                <div className="size-[1020px] hero-ring -z-20"></div>
                <div className="size-[1220px] hero-ring -z-20"></div>
                <HeroOrbit srcIcon={PlanetIcon} radio={835} rotation={-52} customStyle="size-28" orbitAnimation="animate-spin [animation-duration:30s]" />
                <HeroOrbit srcIcon={EarthIcon} radio={630} rotation={20} customStyle="size-12" orbitAnimation="animate-spin [animation-duration:20s]" />
                <HeroOrbit srcIcon={WorldIcon} radio={470} rotation={98} customStyle="size-8" orbitAnimation="animate-spin [animation-duration:10s]" />
                <HeroOrbit
                    srcIcon={StarIcon}
                    radio={540}
                    rotation={-14}
                    customStyle="text-icon size-8"
                    orbitAnimation="animate-pulse"
                    rotateAnimation="animate-spin [animation-duration:60s]"
                />
                <HeroOrbit
                    srcIcon={StarIcon}
                    radio={530}
                    rotation={79}
                    customStyle="text-icon size-5"
                    orbitAnimation="animate-pulse"
                    rotateAnimation="animate-spin [animation-duration:60s]"
                />
                <HeroOrbit
                    srcIcon={StarIcon}
                    radio={550}
                    rotation={198}
                    customStyle="text-icon size-10"
                    orbitAnimation="animate-pulse"
                    rotateAnimation="animate-spin [animation-duration:60s]"
                />
                <HeroOrbit
                    srcIcon={StarIcon}
                    radio={700}
                    rotation={144}
                    customStyle="text-icon size-14"
                    orbitAnimation="animate-pulse"
                    rotateAnimation="animate-spin [animation-duration:60s]"
                />
                <HeroOrbit
                    srcIcon={StarIcon}
                    radio={710}
                    rotation={-82}
                    customStyle="text-icon size-14"
                    orbitAnimation="animate-pulse"
                    rotateAnimation="animate-spin [animation-duration:60s]"
                />
                <HeroOrbit
                    srcIcon={StarIcon}
                    radio={1110}
                    rotation={-20}
                    customStyle="text-icon size-14"
                    orbitAnimation="animate-pulse"
                    rotateAnimation="animate-spin [animation-duration:60s]"
                />
                <HeroOrbit
                    srcIcon={StarIcon}
                    radio={810}
                    rotation={-52}
                    customStyle="text-icon size-5"
                    orbitAnimation="animate-pulse"
                    rotateAnimation="animate-spin [animation-duration:60s]"
                />
            </div>
            <div className="relative z-10">
                <div className="flex flex-col items-center">
                    <img
                        src={brainImage}
                        alt="Brain Image"
                        width={80}
                        height={80}
                        loading="lazy"
                        className="rounded-lg shadow-lg py-2 animate-float"
                    />
                    <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-lg">
                        <div className="bg-green-500 relative size-2.5 rounded-full">
                            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
                        </div>
                        <div className="text-sm font-medium">Available for new projects</div>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto px-4">
                    <h1 className="font-serif text-2xl md:text-5xl text-center mt-8 tracking-wide">
                        {siteConfig.about.title}
                    </h1>
                    <p className="mt-4 text-center text-white/60 md:text-lg">
                        {siteConfig.about.phrase}
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
                    <a href="#projects">
                        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl text-white bg-gray-800 hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300 cursor-pointer group">
                            <span className="font-semibold">Explore my projects</span>
                            <EyeIcon className="size-5 group-hover:-rotate-45 transition-transform duration-300" />
                        </button>
                    </a>
                    <a href="#contact">
                        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl text-white bg-gray-800 hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300 cursor-pointer group">
                            <span className="font-semibold">Let's connect</span>
                            <ClickIcon className="size-5 group-hover:rotate-45 transition-transform duration-300" />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;