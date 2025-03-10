import { FC, SVGProps } from 'react';
//import planetIcon from '../assets/icons/ringed-planet.svg';

type HeroOrbitProps = {
    srcIcon: FC<SVGProps<SVGSVGElement>>;
    radio: number;
    rotation: number;
    customStyle: string;
    orbitAnimation?: string;
    rotateAnimation?: string;
};

const HeroOrbit = ({ srcIcon: Icon, radio, rotation, customStyle, orbitAnimation = '', rotateAnimation = '' }: HeroOrbitProps) => {
    return (
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 ${orbitAnimation}`}>
            <div
                className="flex items-start justify-start"
                style={{
                    height: `${radio}px`,
                    width: `${radio}px`,
                    transform: `rotate(${rotation}deg)`,
                }}
            >
                <div className={`inline-flex ${rotateAnimation}`}>
                    <div
                        style={{
                            transform: `rotate(${rotation - 1}deg)`,
                        }}
                    >
                        <Icon className={`${customStyle}`} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroOrbit;