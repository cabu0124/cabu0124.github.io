import ArrowRightIcon from "../assets/icons/arrow-right.svg?react";
import { siteConfig } from "../app/config"

const Footer = () => {
  return (
    <footer className="relative z-1 flex flex-col items-center overflow-x-clip">
      <div className="absolute w-full h-full bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/10 [mask-image:linear-gradient(to_top,black,transparent)] -z-10"></div>
      <div className="container px-10 md:px-20">
        <div className="py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {siteConfig.contact.map(option => (
              <a href={option.link} key={option.text} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                <button className="inline-flex items-center gap-2 cursor-pointer group">
                  <span className="font-semibold">{option.text}</span>
                  <ArrowRightIcon className="text-icon size-5 group-hover:-rotate-45 transition-transform duration-300" />
                </button>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
