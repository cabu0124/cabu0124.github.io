import brainImage from '../assets/images/artificial-intelligence.png'
//import ArrowDown from '../assets/icons/arrow-down.svg';
import grainImage from '../assets/images/grain.jpg';
import starIcon from '../assets/icons/star-2.svg';
//import sparkleIcon from '../assets/icons/sparkle.svg';
import worldIcon from '../assets/icons/world.svg';
import earthIcon from '../assets/icons/earth-america.svg';
import planetIcon from '../assets/icons/ringed-planet.svg';
import HeroOrbit from './hero-orbit';

const Hero = () => {
    return (
        <div className="py-32 md:py-36 lg:py-48 relative z-0 overflow-x-clip">
            <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                <div
                    className="absolute inset-0 -z-30 opacity-5"
                    style={{
                        backgroundImage: `url(${grainImage})`
                    }}
                ></div>
                <div className="size-[620px] hero-ring"></div>
                <div className="size-[820px] hero-ring"></div>
                <div className="size-[1020px] hero-ring"></div>
                <div className="size-[1220px] hero-ring"></div>
                <HeroOrbit srcIcon={planetIcon} size={800} rotation={-72} imgSize='size-28' />
                <HeroOrbit srcIcon={earthIcon} size={550} rotation={20} imgSize='size-12' />
                <HeroOrbit srcIcon={worldIcon} size={590} rotation={98} imgSize='size-8' />
                <HeroOrbit srcIcon={starIcon} size={430} rotation={-14} imgSize='size-8' />
                <HeroOrbit srcIcon={starIcon} size={440} rotation={79} imgSize='size-5' />
                <HeroOrbit srcIcon={starIcon} size={530} rotation={178} imgSize='size-10' />
                <HeroOrbit srcIcon={starIcon} size={710} rotation={144} imgSize='size-14' />
                <HeroOrbit srcIcon={starIcon} size={710} rotation={144} imgSize='size-14' />
            </div>
            <div>
                <div className="flex flex-col items-center">
                    <img
                        src={brainImage}
                        alt="Brain Image"
                        width={80}
                        height={80}
                        loading="lazy" // Activa carga diferida
                        className="rounded-lg shadow-lg py-2"
                    />
                    <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-lg">
                        <div className="bg-green-500 size-2.5 rounded-full"></div>
                        <div className="text-sm font-medium">Available for new projects</div>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto px-4">
                    <h1 className="font-serif text-2xl md:text-5xl text-center mt-8 tracking-wide">
                        Software Engineer & Game Developer Enthusiast
                    </h1>
                    <p className="mt-4 text-center text-white/60 md:text-lg">
                        I'm a software engineer and technical leader passionate about designing, developing, and optimizing robust applications. My focus is on delivering high-quality solutions that meet business needs and provide excellent user experiences. I enjoy working in teams, solving problems, and creating impactful solutions. I’m passionate about leading development teams, sharing ideas, and achieving great results together.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
                    <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
                        <span className="font-semibold">Explore my projects</span>
                    </button>
                    <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
                        <span className="font-semibold">Let's connect</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;