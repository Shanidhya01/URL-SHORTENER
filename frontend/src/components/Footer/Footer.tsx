import { FunctionComponent } from "react";
import { FaGithub } from "react-icons/fa";

const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white text-base text-center py-8 shadow-2xl border-t border-blue-900/30">
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="mb-2 font-semibold tracking-wide text-lg drop-shadow">
          Copyright &#169; MERN URL Shortener
        </p>
        <a
          href="https://github.com/Shanidhya01"
          className="dev-signature flex items-center gap-2 px-5 py-2 rounded-xl bg-slate-800 hover:bg-blue-700 transition-colors duration-200 text-white font-medium shadow-lg border border-blue-900/20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-bold tracking-wide">Shanidhya01</span>
          <FaGithub className="text-2xl hover:scale-110 transition-transform duration-200" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;