import { Wallet, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function TopBar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-between px-6 py-3"
      style={{
        background: 'rgba(10,10,15,0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      {/* Wallet badge */}
      <div className="flex items-center gap-2">
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-mono"
          style={{
            background: 'var(--color-bg-card)',
            border: '1px solid var(--color-border)',
          }}
        >
          <span style={{ color: 'var(--color-accent)' }}>⬡</span>
          <span style={{ color: 'var(--color-text-primary)' }}>0xGanes...a3F7</span>
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: 'var(--color-green)' }}
            title="Connected"
          />
        </div>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-4">
        {/* Theme toggle */}
        <div className="flex items-center gap-2">
          {theme === 'dark' ? (
            <Moon size={14} style={{ color: 'var(--color-text-muted)' }} />
          ) : (
            <Sun size={14} style={{ color: 'var(--color-text-muted)' }} />
          )}
          <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
            {theme === 'dark' ? 'Dark' : 'Light'}
          </span>
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            className={`toggle-switch ${theme === 'light' ? 'active' : ''}`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          />
        </div>

        {/* Connect Wallet button */}
        <button
          id="connect-wallet-btn"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #7C5CFF, #5B3FE4)',
            boxShadow: '0 0 20px rgba(124,92,255,0.3)',
          }}
          onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 30px rgba(124,92,255,0.5)')}
          onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 20px rgba(124,92,255,0.3)')}
        >
          <Wallet size={16} />
          Connect Wallet
        </button>
      </div>
    </header>
  )
}
