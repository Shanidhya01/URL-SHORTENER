import { FunctionComponent } from "react";


const Header: FunctionComponent = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="py-6 flex items-center justify-center">
          <div className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
            MERN <span className="text-blue-400">URL Shortener</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;