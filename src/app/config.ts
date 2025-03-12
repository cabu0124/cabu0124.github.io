export const siteConfig = {
    // About
    about: {
        name: "Carlos Andres Castaño Butos",
        title: "Software Engineer & Game Developer Enthusiast",
        phrase: "I believe nothing is out of reach — just a matter of putting in the effort.",
        label: "Passionate About Innovation",
        description: "I'm a software engineer and technical leader passionate about designing, developing, and optimizing robust applications. My focus is on delivering high-quality solutions that meet business needs and provide excellent user experiences. I enjoy working in teams, solving problems, and creating impactful solutions. I’m passionate about leading development teams, sharing ideas, and achieving great results together.",
    },

    // Contact
    contact: [
        {
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/cabu0124",
        },
        {
            text: "GitHub",
            link: "https://github.com/cabu0124",
        },
        {
            text: "YouTube",
            link: "https://www.youtube.com/@tu-canal", // Reemplaza con tu URL real
        },
    ],

    // Skills
    skills: [
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
    ],

    // Education Data
    education: [
        {
            period: "2022 - 2024",
            title: "M.S. in Software Engineering",
            institution: "Universidad Javeriana Cali, Cali, CO",
            description: [
                "Completed a Master’s degree to deepen my knowledge in software architecture and advanced technologies.",
                "Thesis: <a href='https://vitela.javerianacali.edu.co/items/db88bfa4-92cd-4c32-a70b-a94c295f05f8' target='_blank' rel='noopener noreferrer' class='underline hover:text-white'>Design and implementation of a prototype video game focused on developing musical skills</a> – The project describes the development and implementation of a prototype for an adventure and music video game that involves real instruments as a way to interact with the game and allows the user to improve their musical skills. To achieve this, music teaching methodologies will be employed, and a modular software architecture will be designed to enable the reuse and easy substitution of components in the software. The main purpose is for this prototype to serve as a foundation for future stages of the project’s development.",
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
    ],

    // Experience Data
    experience: [
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
    ]
} as const;