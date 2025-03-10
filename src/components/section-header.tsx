type SectionHeaderProps = {
    label: string;
    title: string;
    description: string;
};

const SectionHeader = ({ label, title, description }: SectionHeaderProps) => {
    return (
        <>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-label to-white text-transparent bg-clip-text">
                    {label}
                </p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">{title}</h2>
            <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4">{description}</p>
        </>
    );
};

export default SectionHeader;  