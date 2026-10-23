import { ArrowRight, Download } from 'lucide-react'
import ShieldIllustration from './ShieldIllustration'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center circuit-bg overflow-hidden"
      style={{ padding: '80px 40px 60px' }}
    >
      {/* Background gradient blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,92,255,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(61,214,245,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative w-full max-w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <div className="animate-fade-in-up">
          {/* Label */}
          <div className="flex items-center gap-2 mb-6">
            <span
              className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{
                background: 'rgba(124,92,255,0.12)',
                border: '1px solid rgba(124,92,255,0.3)',
                color: 'var(--color-accent)',
              }}
            >
              Cybersecurity Analyst
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl xl:text-6xl font-black leading-tight mb-6" style={{ color: 'var(--color-text-primary)' }}>
            I find flaws.<br />
            I build{' '}
            <span
              style={{
                color: 'var(--color-accent)',
                textShadow: '0 0 30px rgba(124,92,255,0.5)',
              }}
            >
              protection
            </span>
            <span
              className="animate-blink-cursor"
              style={{ color: 'var(--color-accent)', marginLeft: '2px' }}
            >
              _
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: 'var(--color-text-muted)' }}>
            Passionate about offensive security, threat detection and building secure
            systems in Web3 and beyond.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              id="view-work-btn"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #7C5CFF, #5B3FE4)',
                boxShadow: '0 0 30px rgba(124,92,255,0.4)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 40px rgba(124,92,255,0.6)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 30px rgba(124,92,255,0.4)')}
              onClick={e => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a
              href="/resume.pdf"
              id="download-resume-btn"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
              style={{
                background: 'transparent',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-primary)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--color-accent)'
                e.currentTarget.style.color = 'var(--color-accent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.color = 'var(--color-text-primary)'
              }}
            >
              Download Resume <Download size={18} />
            </a>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 mt-10 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
            {[
              { num: '3+', label: 'Years Experience' },
              { num: '12+', label: 'Projects Secured' },
              { num: '4', label: 'Certifications' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="text-2xl font-black" style={{ color: 'var(--color-accent)' }}>{num}</div>
                <div className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Shield illustration */}
        <div className="hidden lg:flex items-center justify-center">
          <ShieldIllustration />
        </div>
      </div>
    </section>
  )
}
