import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              className="text-quantix-text hover:text-quantix-light p-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full right-0 w-1/2 sm:w-80 h-[calc(100vh-4rem)] bg-quantix-dark/95 backdrop-blur-md border-l border-t border-quantix-border shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
          }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4 overflow-y-auto h-full">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-base font-medium text-quantix-text hover:text-quantix-light transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#pricing" className="text-base font-medium text-quantix-text hover:text-quantix-light transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
            <a href="#" className="text-base font-medium text-quantix-text hover:text-quantix-light transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Docs</a>
            <a href="#" className="text-base font-medium text-quantix-text hover:text-quantix-light transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Templates</a>
          </div>

          <div className="pt-4 border-t border-quantix-border flex flex-col space-y-4">
            <a href="#" className="text-base font-medium text-quantix-light hover:text-quantix-text transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Log in
            </a>
            <a href="#" className="w-full inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-quantix-accent hover:bg-red-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar