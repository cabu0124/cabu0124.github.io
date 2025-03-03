type HeroOrbitProps = {
    srcIcon: string;
    size: number;
    rotation: number;
    imgSize?: string; // Clase opcional de Tailwind para la imagen
};

const HeroOrbit = ({ srcIcon, size, rotation, imgSize = "size-28" }: HeroOrbitProps) => {
    return (
        <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" // animate-spin [animation-duration:30s]
            style={{
                height: `${size}px`,
                width: `${size}px`,
                transform: `rotate(${rotation}deg)`,
            }}
        >
            <div
                className="inline-flex" // animate-spin [animation-duration:5s]
                style={{
                    transform: `rotate(${rotation - 1}deg)`,
                }}
            >
                <img
                    src={srcIcon}
                    alt="Star Icon"
                    loading="lazy"
                    className={`${imgSize} text-emerald-300`}
                />
            </div>
        </div>
    );
};

export default HeroOrbit;