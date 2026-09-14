import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">

        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <a href="#" className="flex items-center gap-2 font-bold text-xl text-[var(--text-primary)] tracking-tight">
            <span className="navbar-logo-icon flex items-center justify-center w-8 h-8 rounded-lg text-white font-bold text-sm bg-[rgb(255,107,107)] shadow-[0px_0px_24px_0px_rgba(255,107,107,0.35)]">
              Q
            </span>
            Quantix
          </a>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-5 lg:space-x-8">
          <a href="#features" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Features</a>
          <a href="#pricing" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Pricing</a>
          <a href="#" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Docs</a>
          <a href="#" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Templates</a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <a href="#" className="navbar-login-btn text-sm font-medium text-[rgb(138,139,158)] hover:text-[var(--text-primary)] transition-colors">
            Log in
          </a>
          <a href="#" className="navbar-btn-start inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-[100px] shadow-sm text-sm font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-light)] transition-colors" style={{ borderBottomLeftRadius: '100px', borderBottomRightRadius: '100px' }}>
            Start Free Trial
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] p-2 transition-colors"
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

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[72px] bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Slide-out */}
      <div
        className={`md:hidden fixed top-[72px] right-0 w-3/4 max-w-xs h-[calc(100vh-72px)] bg-[#26262D]/75 backdrop-blur-xl border-l border-white/[0.08] shadow-2xl transition-all duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-5 pt-5 pb-6 space-y-5 overflow-y-auto h-full">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#pricing" className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
            <a href="#" className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Docs</a>
            <a href="#" className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Templates</a>
          </div>

          <div className="pt-5 border-t border-[var(--border-subtle)] flex flex-col space-y-4">
            <a href="#" className="navbar-login-btn text-base font-medium text-[rgb(138,139,158)] hover:text-[var(--text-primary)] transition-colors text-center py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Log in
            </a>
            <a href="#" className="navbar-btn-start w-full inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-[100px] shadow-sm text-base font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-light)] transition-colors" style={{ borderBottomLeftRadius: '100px', borderBottomRightRadius: '100px' }} onClick={() => setIsMobileMenuOpen(false)}>
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;