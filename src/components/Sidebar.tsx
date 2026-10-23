import { useState } from 'react'
import {
  Home, User, Zap, FolderOpen, Briefcase, Award, FileText,
  Trophy, Mail, Rocket, Menu, X
} from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons'

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Zap },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'blog', label: 'Blog / Writeups', icon: FileText },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'contact', label: 'Contact', icon: Mail },
]

interface SidebarProps {
  activeSection: string
  onNavigate: (id: string) => void
}

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNav = (id: string) => {
    onNavigate(id)
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* Mobile hamburger */}
      <button
        id="sidebar-menu-toggle"
        onClick={() => setMobileOpen(v => !v)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg"
        style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-40 flex flex-col transition-transform duration-300
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        style={{
          width: '220px',
          background: 'var(--color-bg-secondary)',
          borderRight: '1px solid var(--color-border)',
        }}
      >
        {/* Logo */}
        <div className="px-6 py-6">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-black text-white tracking-tight">GR</span>
            <span className="text-2xl font-black" style={{ color: 'var(--color-accent)' }}>_</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 space-y-1" role="navigation" aria-label="Main navigation">
          {navItems.map(({ id, label, icon: Icon }) => {
            const isActive = activeSection === id
            return (
              <button
                key={id}
                id={`nav-${id}`}
                onClick={() => handleNav(id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group`}
                style={{
                  background: isActive ? 'rgba(124, 92, 255, 0.15)' : 'transparent',
                  color: isActive ? 'var(--color-accent)' : 'var(--color-text-muted)',
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 transition-all duration-200"
                  style={{
                    background: isActive ? 'rgba(124, 92, 255, 0.2)' : 'transparent',
                    boxShadow: isActive ? '0 0 8px rgba(124,92,255,0.4)' : 'none',
                  }}
                >
                  <Icon size={16} />
                </span>
                <span>{label}</span>
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-accent)' }} />
                )}
              </button>
            )
          })}
        </nav>

        {/* CTA card */}
        <div className="mx-3 mb-4 p-4 rounded-2xl" style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
          <div className="flex items-center gap-2 mb-2">
            <Rocket size={14} style={{ color: 'var(--color-accent)' }} />
            <span className="text-xs font-semibold" style={{ color: 'var(--color-text-muted)' }}>Let's build something</span>
          </div>
          <p className="text-sm font-bold text-white">
            Let's build something{' '}
            <span style={{ color: 'var(--color-accent)' }}>secure.</span>
          </p>
        </div>

        {/* Social icons */}
        <div className="px-4 pb-4">
          <div className="flex items-center gap-3 mb-3">
            {[
              { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
              { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter' },
              { icon: Mail, href: 'mailto:ganesan@example.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-110"
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-muted)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
          <p className="text-xs" style={{ color: '#555570' }}>© 2025 Ganesan R — All rights reserved.</p>
        </div>
      </aside>
    </>
  )
}
