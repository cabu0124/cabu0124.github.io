import arrowUpIcon from '../assets/icons/arrow-up-right.svg';

const footerLinks = [
  {
    title: 'LinkedIn',
    url: '#'
  },
  {
    title: 'Github',
    url: '#'
  },
  {
    title: 'Youtube',
    url: '#'
  }
]

const Footer = () => {
  return (
    <footer className="relative z-1 flex flex-col items-center">
      <div className="absolute w-full h-full bottom-0 left-1/2 -translate-x-1/2 bg-blue-600/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-8">
            {footerLinks.map(link => (
              <a href={link.url} key={link.title} className="inline-flex items-center gap-1.5">
                <span className="font-semibold">{link.title}</span>
                <img
                  src={arrowUpIcon}
                  alt="Star Icon"
                  loading="lazy"
                  className="size-4"
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
