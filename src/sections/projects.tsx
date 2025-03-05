import infinityTowerImg from '../assets/images/infinity-tower.png'
import movieSearcherImg from '../assets/images/movie-searcher.png'
import asesoresLBAImg from '../assets/images/asesores-lba.png'
//import grainImg from '../assets/images/grain.jpg'
import Feature from '../components/feature';
//import checkIcon from '../assets/icons/check-mark.svg';

const portfolioProjects = [
    {
        company: "Personal",
        year: "2024",
        title: "Infinity Tower",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore necessitatibus maiores magnam reiciendis soluta obcaecati omnis culpa id natus.",
        link: "https://youtu.be/XJrDw8x2gps",
        image: infinityTowerImg,
    },
    {
        company: "Personal",
        year: "2021",
        title: "Movie Searcher",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore necessitatibus maiores magnam reiciendis soluta obcaecati omnis culpa id natus.",
        link: "https://movie-searcher-67ad6.web.app",
        image: movieSearcherImg,
    },
    {
        company: "Asesores LBA",
        year: "2019",
        title: "Asesores LBA - Site",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore necessitatibus maiores magnam reiciendis soluta obcaecati omnis culpa id natus.",
        link: "http://www.asesoreslba.com",
        image: asesoresLBAImg,
    },
];

const Projects = () => {
    return (
        <div className="max-w-4xl mx-auto px-4">
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-blue-700 to-white text-transparent bg-clip-text">
                    Take a look to my work!
                </p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
            <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore necessitatibus maiores magnam reiciendis soluta obcaecati omnis culpa id natus. Consequatur dolorum molestiae maiores velit cupiditate ad ipsum, unde dignissimos. Animi?</p>
            <div className="flex flex-col mt-10 gap-20">
                {portfolioProjects.map(project => (
                    <Feature label={project.company} year={project.year} title={project.title} description={project.description} imgUrl={project.image} link={project.link} />
                ))}
            </div>
        </div>
    );
};

export default Projects;  