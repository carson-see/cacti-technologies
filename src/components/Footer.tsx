export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cactus">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M12 2v20M8 6v12M16 4v16" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-sm font-bold text-slate-900">
              Cacti Technologies
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#services" className="hover:text-cactus">Services</a>
            <a href="#results" className="hover:text-cactus">Results</a>
            <a href="#about" className="hover:text-cactus">About</a>
            <a href="#pricing" className="hover:text-cactus">Pricing</a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Cacti Technologies. Grand Rapids, MI.
          </p>
        </div>
      </div>
    </footer>
  );
}
