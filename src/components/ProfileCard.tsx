import { Copy, Mail, MapPin, Target, Zap } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons'
import { useState } from 'react'

export default function ProfileCard() {
  const [copied, setCopied] = useState(false)
  const walletAddress = '0xGanes...a3F7'

  const handleCopy = () => {
    navigator.clipboard.writeText('0xGanesanRa3F7ExampleAddress')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="rounded-2xl p-5 mb-4"
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
      }}
    >
      {/* Avatar + name */}
      <div className="flex items-start gap-4 mb-5">
        <div className="relative flex-shrink-0">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-black"
            style={{
              background: 'linear-gradient(135deg, #7C5CFF, #3DD6F5)',
              color: 'white',
            }}
          >
            GR
          </div>
          {/* Online dot */}
          <span
            className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full border-2 animate-pulse"
            style={{
              background: 'var(--color-green)',
              borderColor: 'var(--color-bg-card)',
            }}
          />
        </div>
        <div>
          <h3 className="font-bold text-lg leading-tight" style={{ color: 'var(--color-text-primary)' }}>
            Ganesan R
          </h3>
          <button
            id="copy-wallet-btn"
            onClick={handleCopy}
            className="flex items-center gap-1.5 mt-1.5 px-2 py-1 rounded-full text-xs font-mono transition-all duration-200"
            style={{
              background: 'var(--color-bg-primary)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-muted)',
            }}
            title="Copy wallet address"
          >
            {walletAddress}
            <Copy size={11} />
            {copied && <span style={{ color: 'var(--color-green)' }}>✓</span>}
          </button>
        </div>
      </div>

      {/* Quote */}
      <div
        className="px-4 py-3 rounded-xl mb-5"
        style={{
          background: 'rgba(124,92,255,0.06)',
          border: '1px solid rgba(124,92,255,0.15)',
        }}
      >
        <span className="text-3xl font-black leading-none block -mb-2" style={{ color: 'var(--color-accent)' }}>"</span>
        <p className="text-sm italic" style={{ color: 'var(--color-text-muted)' }}>
          Securing systems today, building trust for tomorrow.
        </p>
      </div>

      {/* Stats row */}
      <div
        className="grid grid-cols-3 gap-2 mb-5 p-3 rounded-xl"
        style={{ background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)' }}
      >
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <MapPin size={10} style={{ color: 'var(--color-accent)' }} />
          </div>
          <div className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>India</div>
          <div className="text-xs" style={{ color: 'var(--color-text-muted)', fontSize: '10px' }}>Location</div>
        </div>
        <div className="text-center" style={{ borderLeft: '1px solid var(--color-border)', borderRight: '1px solid var(--color-border)' }}>
          <div className="flex items-center justify-center gap-1 mb-1">
            <Target size={10} style={{ color: 'var(--color-cyan)' }} />
          </div>
          <div className="text-xs font-semibold leading-tight" style={{ color: 'var(--color-text-primary)' }}>Web3 Sec</div>
          <div className="text-xs" style={{ color: 'var(--color-text-muted)', fontSize: '10px' }}>Focus</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Zap size={10} style={{ color: 'var(--color-green)' }} />
          </div>
          <div className="flex items-center justify-center gap-1">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: 'var(--color-green)' }}
            />
            <span className="text-xs font-semibold" style={{ color: 'var(--color-green)' }}>Available</span>
          </div>
          <div className="text-xs" style={{ color: 'var(--color-text-muted)', fontSize: '10px' }}>Status</div>
        </div>
      </div>

      {/* Social icon buttons */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { icon: GithubIcon, href: 'https://github.com/GanesanR', label: 'GitHub', color: '#E0E0E0' },
          { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0A66C2' },
          { icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter', color: '#1DA1F2' },
          { icon: Mail, href: 'mailto:ganesan@example.com', label: 'Email', color: '#7C5CFF' },
        ].map(({ icon: Icon, href, label, color }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            id={`profile-${label.toLowerCase()}`}
            className="flex items-center justify-center py-2 rounded-xl transition-all duration-200"
            style={{
              background: 'var(--color-bg-primary)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-muted)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = color
              e.currentTarget.style.borderColor = `${color}50`
              e.currentTarget.style.boxShadow = `0 0 12px ${color}25`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--color-text-muted)'
              e.currentTarget.style.borderColor = 'var(--color-border)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  )
}
