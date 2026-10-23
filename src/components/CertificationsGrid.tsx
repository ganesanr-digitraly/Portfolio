import { ArrowUpRight } from 'lucide-react'

const certs = [
  {
    id: 'ejpt',
    name: 'eJPT',
    issuer: 'INE',
    bg: '#0a1a2e',
    border: '#1C9FE430',
    color: '#1C9FE4',
    abbr: 'eJPT',
  },
  {
    id: 'ccna',
    name: 'CCNA',
    issuer: 'Cisco',
    bg: '#0a1424',
    border: '#1BA0D760',
    color: '#1BA0D7',
    abbr: 'CCNA',
  },
  {
    id: 'aws-cp',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon',
    bg: '#1f1208',
    border: '#FF990040',
    color: '#FF9900',
    abbr: 'AWS',
  },
  {
    id: 'ec-council',
    name: 'Cybersecurity Essentials',
    issuer: 'EC-Council',
    bg: '#1a0a0e',
    border: '#E54B4B30',
    color: '#E54B4B',
    abbr: 'CES',
  },
]

export default function CertificationsGrid() {
  return (
    <section id="certifications" className="flex-1">
      <div
        className="h-full p-5 rounded-2xl"
        style={{
          background: 'var(--color-bg-card)',
          border: '1px solid var(--color-border)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>
            Certifications
          </h2>
          <a
            href="#certifications"
            className="text-xs font-medium flex items-center gap-1"
            style={{ color: 'var(--color-accent)' }}
          >
            View All <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Certs grid */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
          {certs.map(cert => (
            <div
              key={cert.id}
              id={`cert-${cert.id}`}
              className="flex flex-col items-center gap-2 p-3 rounded-xl cursor-default transition-all duration-200 group"
              style={{
                background: cert.bg,
                border: `1px solid ${cert.border}`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 0 20px ${cert.color}25`
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Circle badge */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm"
                style={{
                  background: `${cert.color}20`,
                  border: `2px solid ${cert.color}60`,
                  color: cert.color,
                }}
              >
                {cert.abbr.slice(0, 3)}
              </div>
              <div className="text-center">
                <div className="text-xs font-bold leading-tight" style={{ color: 'var(--color-text-primary)' }}>
                  {cert.name}
                </div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                  {cert.issuer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
