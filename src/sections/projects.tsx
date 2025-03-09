import infinityTowerImg from '../assets/images/infinity-tower.png'
import movieSearcherImg from '../assets/images/movie-searcher.png'
import asesoresLBAImg from '../assets/images/asesores-lba.png'
//import grainImg from '../assets/images/grain.jpg'
import Feature from '../components/feature';
import SectionHeader from '../components/section-header';
//import checkIcon from '../assets/icons/check-mark.svg';

const portfolioProjects = [
    {
        company: "Personal",
        year: "2024",
        title: "Infinity Tower",
        description: "Infinity Tower is a video game that blends role-playing adventures with musical learning, encouraging instrument practice in a fun and engaging way.",
        link: "https://youtu.be/XJrDw8x2gps",
        image: infinityTowerImg,
    },
    {
        company: "Personal",
        year: "2021",
        title: "Movie Searcher",
        description: "Movie Searcher is a simple web application that allows users to search for movies and view detailed information, including ratings, release dates, and summaries.",
        link: "https://movie-searcher-67ad6.web.app",
        image: movieSearcherImg,
    },
    {
        company: "Asesores LBA",
        year: "2019",
        title: "Asesores LBA - Site",
        description: "This website was developed for Asesores LBA to showcase their service portfolio. It includes an integrated learning section linked to YouTube and a contact page.",
        link: "http://www.asesoreslba.com",
        image: asesoresLBAImg,
    },
];

const Projects = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <SectionHeader
                label="Take a look at what I can do!"
                title="Featured Projects"
                description="Here are some of my best projects! I’ve worked on exciting solutions using modern technologies like .NET and Angular. I also have personal projects in video game development with Unity and Godot, showing my skills in coding, problem-solving, and creativity."
            />
            <div className="flex flex-col mt-10 gap-20">
                {portfolioProjects.map((project, index) => (
                    <Feature index={index} label={project.company} year={project.year} title={project.title} description={project.description} imgUrl={project.image} link={project.link} />
                ))}
            </div>
        </div>
    );
};

export default Projects;  