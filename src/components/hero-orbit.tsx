type HeroOrbitProps = {
    srcIcon: string;
    size: number;
    rotation: number;
    imgSize: string; // Clase opcional de Tailwind para la 
    orbitAnimation?: string;
    rotateAnimation?: string;
};

const HeroOrbit = ({ srcIcon, size, rotation, imgSize, orbitAnimation = '', rotateAnimation = '' }: HeroOrbitProps) => {
    return (
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 ${orbitAnimation}`}>
            <div
                className="flex items-start justify-start"
                style={{
                    height: `${size}px`,
                    width: `${size}px`,
                    transform: `rotate(${rotation}deg)`,
                }}
            >
                <div className={`inline-flex ${rotateAnimation}`}>
                    <div
                        style={{
                            transform: `rotate(${rotation - 1}deg)`,
                        }}
                    >
                        <img
                            src={srcIcon}
                            alt="Star Icon"
                            loading="lazy"
                            className={`${imgSize}`}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroOrbit;