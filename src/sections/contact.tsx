import grainImage from "../assets/images/grain.jpg";

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
                <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white/90 bg-gradient-to-r from-blue-500 to-white bg-clip-text">
                    Let's Connect and Create Something Amazing!
                </h2>

                {/* Texto breve */}
                <p className="mt-4 text-lg text-white/70">
                    Reach out to me for collaborations, inquiries, or just to say hello.
                </p>

                {/* Botón de LinkedIn */}
                <div className="mt-8">
                    <a
                        href="https://www.linkedin.com/in/cabu0124"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900/70 text-white font-semibold text-center rounded-xl border border-white/20 shadow-lg hover:bg-gray-800/80 hover:shadow-xl transition-all duration-300"
                    >
                        <span>Contact Me</span>
                        <span className="text-amber-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 18 18"
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5.25 12.75 L12.75 5.25" />
                                <path d="M5.25 5.25 L12.75 5.25 L12.75 12.75" />
                            </svg>
                        </span>

                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;