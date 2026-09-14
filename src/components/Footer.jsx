function Footer() {
    return (
        <footer className="footer bg-[var(--deep-space)]">
            <div className="container max-w-[1200px] mx-auto px-6">
                
                {/* Hàng chứa danh sách liên kết */}
                <div className="footer-row-links text-sm font-medium text-[var(--text-secondary)]">
                    <a href="#features" className="hover:text-[var(--text-primary)] transition-colors">Features</a>
                    <span className="w-[3px] h-[3px] rounded-full bg-white/[0.12] shrink-0" />
                    <a href="#pricing" className="hover:text-[var(--text-primary)] transition-colors">Pricing</a>
                    <span className="w-[3px] h-[3px] rounded-full bg-white/[0.12] shrink-0" />
                    <a href="#" className="hover:text-[var(--text-primary)] transition-colors" onClick={(e) => e.preventDefault()}>Documentation</a>
                    <span className="w-[3px] h-[3px] rounded-full bg-white/[0.12] shrink-0" />
                    <a href="#" className="hover:text-[var(--text-primary)] transition-colors" onClick={(e) => e.preventDefault()}>Blog</a>
                    <span className="w-[3px] h-[3px] rounded-full bg-white/[0.12] shrink-0" />
                    <a href="#" className="hover:text-[var(--text-primary)] transition-colors" onClick={(e) => e.preventDefault()}>Partners</a>
                </div>

                {/* Hàng bản quyền / thông tin dưới cùng */}
                <div className="footer-row-bottom text-xs sm:text-sm text-[var(--text-secondary)]">
                    
                    {/* Copyright */}
                    <p>
                        Copyright &copy; 2026 Quantix. Design: <a href="https://templatemo.com" target="_blank" rel="nofollow" className="text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors">TemplateMo</a>
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                        {/* Nhóm icon mạng xã hội */}
                        <div className="flex items-center gap-4 text-[var(--text-secondary)]">
                            {/* X (formerly Twitter) */}
                            <a href="#" className="hover:text-[var(--text-primary)] transition-colors" aria-label="X (Twitter)">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* GitHub */}
                            <a href="#" className="hover:text-[var(--text-primary)] transition-colors" aria-label="GitHub">
                                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="hover:text-[var(--text-primary)] transition-colors" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>

                        {/* Dấu phân cách */}
                        <span className="w-px h-4 bg-[var(--border-subtle)]"></span>

                        {/* Nhóm liên kết pháp lý */}
                        <div className="flex items-center gap-4">
                            <a href="#" className="hover:text-[var(--text-primary)] transition-colors" onClick={(e) => e.preventDefault()}>Privacy</a>
                            <span className="w-1 h-1 rounded-full bg-[var(--border-subtle)]"></span>
                            <a href="#" className="hover:text-[var(--text-primary)] transition-colors" onClick={(e) => e.preventDefault()}>Terms</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;