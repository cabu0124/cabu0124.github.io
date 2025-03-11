import Hero from '../components/hero';
import Projects from '../components/projects';
import AboutSection from '../components/section-about';
import Contact from './contact';

const Home = () => {
    return (
        <div>
            <section id="home">
                <Hero />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="about">
                <AboutSection />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
};

export default Home;