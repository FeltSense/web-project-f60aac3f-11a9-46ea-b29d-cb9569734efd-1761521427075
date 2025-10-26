export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-12">
            <a 
              href="/" 
              className="text-xl font-semibold text-slate-900 tracking-tight hover:text-slate-700 transition-colors duration-300"
            >
              Elevate Fitness Studio
            </a>
            
            <div className="hidden md:flex items-center space-x-1">
              <a 
                href="#home" 
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300"
              >
                Home
              </a>
              <a 
                href="#services" 
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300"
              >
                Services
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a 
              href="#pricing" 
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300"
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="ml-2 px-5 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Contact
            </a>
          </div>

          <button 
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}