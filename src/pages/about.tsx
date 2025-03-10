import SectionHeader from "../components/section-header";
import grainImage from "../assets/images/grain.jpg";
import CheckIcon from "../assets/icons/check-mark.svg?react"

const About = () => {
    // Lista de habilidades con íconos de Devicon
    const skills = [
        { name: "azure", icon: "devicon-azure-plain" },
        { name: "devops", icon: "devicon-azuredevops-plain" },
        { name: "git", icon: "devicon-git-plain" },
        { name: "kubernetes", icon: "devicon-kubernetes-plain" },
        { name: "dotnet", icon: "devicon-dot-net-plain-wordmark" },
        { name: "csharp", icon: "devicon-csharp-plain" },
        { name: "angular", icon: "devicon-angular-plain" },
        { name: "react", icon: "devicon-react-plain" },
        { name: "typescript", icon: "devicon-typescript-plain" },
        { name: "javascript", icon: "devicon-javascript-plain" },
        { name: "html5", icon: "devicon-html5-plain" },
        { name: "css3", icon: "devicon-css3-plain" },
        { name: "nodejs", icon: "devicon-nodejs-plain" },
        { name: "mongodb", icon: "devicon-mongodb-plain" },
        { name: "sql", icon: "devicon-azuresqldatabase-plain" },
        { name: "unity", icon: "devicon-unity-plain" },
        { name: "godot", icon: "devicon-godot-plain" },
        { name: "photoshop", icon: "devicon-photoshop-plain" },
        { name: "figma", icon: "devicon-figma-plain" },
        { name: "latex", icon: "devicon-latex-plain" },
    ];

    // Datos para Educación
    const educationData = [
        {
            period: "2022 - 2024",
            title: "M.S. in Software Engineering",
            institution: "Universidad Javeriana Cali, Cali, CO",
            description: [
                "Completed a Master’s degree to deepen my knowledge in software architecture and advanced technologies.",
                "Thesis: <a href='http://hdl.handle.net/11522/1947' target='_blank' rel='noopener noreferrer' class='underline hover:text-white'>Design and implementation of a prototype video game focused on developing musical skills</a> – The project describes the development and implementation of a prototype for an adventure and music video game that involves real instruments as a way to interact with the game and allows the user to improve their musical skills. To achieve this, music teaching methodologies will be employed, and a modular software architecture will be designed to enable the reuse and easy substitution of components in the software. The main purpose is for this prototype to serve as a foundation for future stages of the project’s development.",
            ],
        },
        {
            period: "2009 - 2015",
            title: "B.S. in Electronic Engineering",
            institution: "Universidad de San Buenaventura Cali, Cali, CO",
            description: [
                "Earned a Bachelor’s degree with a focus on technology and engineering principles.",
                "Thesis: <a href='https://hdl.handle.net/10819/18601' target='_blank' rel='noopener noreferrer' class='underline hover:text-white'>Electronic system for studying spasticity and muscle mass loss through electro-stimulation</a> – This report presents an electronic system for studying spasticity and preventing muscle mass loss through muscle electrostimulation. The device was developed using a computational system called Raspberry Pi Model B, which serves as a user-machine interface to perform various activities enabled by the device. These include adjusting the frequency and shape of the electrical pulses applied to the patient.",
            ],
        },
    ];

    // Datos para Experiencia Laboral
    const experienceData = [
        {
            period: "2022 - Ongoing",
            title: "Software Specialist & Technical Leader",
            company: "Teleperformance, Cali, CO",
            description: [
                "Work closely with product owners and stakeholders to define technical solutions.",
                "Configure and manage CI/CD pipelines for seamless deployments.",
                "Provide mentorship and guidance to the development team.",
                "Implement daily fixes and optimizations.",
            ],
        },
        {
            period: "2021 - 2022",
            title: "Software Specialist",
            company: "Teleperformance, Cali, CO",
            description: [
                "Integrated GDS Amadeus and Sabre services into the TpTravel product.",
                "Developed a flight refund request application with Navitaire services.",
                "Resolved daily reported issues.",
            ],
        },
        {
            period: "2018 - 2021",
            title: "Software Developer Analyst",
            company: "Juniper, Cali, CO",
            description: [
                "Developed new features using .NET, JavaScript, SCSS, and AJAX.",
                "Integrated multiple payment gateways into an internal API HUB.",
                "Handled daily bug fixes and optimizations.",
            ],
        },
        {
            period: "2016 - 2018",
            title: "Front-End Developer",
            company: "Juniper, Cali, CO",
            description: [
                "Developed and maintained client websites using .NET and JavaScript.",
                "Fixed reported issues and implemented enhancements.",
            ],
        },
        {
            period: "2015 - 2016",
            title: "Junior Developer",
            company: "VOV Solutions, Cali, CO",
            description: [
                "Developed backend applications with Node.js.",
                "Built Android applications.",
                "Developed front-end web apps with Angular 2.",
            ],
        },
    ];

    return (
        <div className="relative py-10 md:py-16 lg:py-20 text-white overflow-x-clip">
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

                {/* Subsección de Fortalezas y Habilidades */}
                <div className="mt-12 grid grid-cols-1 sm:justify-items-center md:grid-cols-[30%_70%] gap-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white/90">My Strengths</h3>
                        <ul className="space-y-2">
                            {["Team Work", "Creativity", "Motivator & Leader"].map((strength) => (
                                <li key={strength} className="flex items-center gap-2 text-white/70">
                                    <CheckIcon className="text-icon size-5" />
                                    {strength}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white/90">Languages and Tools</h3>
                        <div className="flex flex-wrap gap-4">
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="group relative p-2 bg-gray-800/50 border border-white/15 rounded-lg hover:bg-gray-700/50 transition-colors"
                                >
                                    <i
                                        className={`${skill.icon} text-4xl text-white/80 group-hover:text-white group-hover:scale-110 inline-block transition-transform duration-300`}
                                    ></i>
                                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white/90 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        {skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Subsección de Educación */}
                <div className="mt-16">
                    <div className="flex justify-center text-2xl md:text-3xl mb-4">
                        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-label to-white text-transparent bg-clip-text">
                            My Education
                        </p>
                    </div>
                    <p className="text-center text-white/60 mb-8">
                        A summary of my academic journey and qualifications.
                    </p>
                    <ul className="bg-gray-900/50 border border-white/15 rounded-xl shadow-lg">
                        {educationData.map((item, index) => (
                            <li
                                key={index}
                                className={`flex items-start gap-4 p-6 ${index !== educationData.length - 1
                                    ? "border-b border-white/10"
                                    : ""
                                    } hover:bg-gray-800/50 transition-colors`}
                            >
                                <div className="flex-1">
                                    <div className="text-sm font-semibold text-white/50">
                                        {item.period}
                                    </div>
                                    <div className="text-lg font-semibold text-white/90 mt-1">
                                        {item.title}
                                    </div>
                                    <div className="text-sm uppercase font-semibold text-white/60">
                                        {item.institution}
                                    </div>
                                    <ul className="mt-2 text-white/70 text-sm list-disc list-inside space-y-1">
                                        {item.description.map((desc, i) => (
                                            <li
                                                key={i}
                                                dangerouslySetInnerHTML={{ __html: desc }}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Subsección de Experiencia Laboral */}
                <div className="mt-16">
                    <div className="flex justify-center text-2xl md:text-3xl mb-4">
                        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-label to-white text-transparent bg-clip-text">
                            My Experience
                        </p>
                    </div>
                    <p className="text-center text-white/60 mb-8">
                        A summary of my professional journey and key roles.
                    </p>
                    <ul className="bg-gray-900/50 border border-white/15 rounded-xl shadow-lg">
                        {experienceData.map((item, index) => (
                            <li
                                key={index}
                                className={`flex items-start gap-4 p-6 ${index !== experienceData.length - 1
                                    ? "border-b border-white/10"
                                    : ""
                                    } hover:bg-gray-800/50 transition-colors`}
                            >
                                <div className="flex-1">
                                    <div className="text-sm font-semibold text-white/50">
                                        {item.period}
                                    </div>
                                    <div className="text-lg font-semibold text-white/90 mt-1">
                                        {item.title}
                                    </div>
                                    <div className="text-sm uppercase font-semibold text-white/60">
                                        {item.company}
                                    </div>
                                    <ul className="mt-2 text-white/70 text-sm list-disc list-inside space-y-1">
                                        {item.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;