function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-quantix-dark/80 border-b border-quantix-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2 font-bold text-xl text-quantix-light tracking-tight">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-quantix-accent to-orange-500 text-white font-bold text-sm">
                Q
              </span>
              Quantix
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-sm font-medium text-quantix-text hover:text-quantix-light transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-quantix-text hover:text-quantix-light transition-colors">Pricing</a>
            <a href="#" className="text-sm font-medium text-quantix-text hover:text-quantix-light transition-colors">Docs</a>
            <a href="#" className="text-sm font-medium text-quantix-text hover:text-quantix-light transition-colors">Templates</a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-sm font-medium text-quantix-light hover:text-quantix-text transition-colors">
              Log in
            </a>
            <a href="#" className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-quantix-accent hover:bg-red-500 transition-colors">
              Start Free Trial
            </a>
          </div>

          {/* Mobile menu button (placeholder for now) */}
          <div className="flex md:hidden items-center">
            <button className="text-quantix-text hover:text-quantix-light p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar