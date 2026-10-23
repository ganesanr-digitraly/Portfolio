import { ArrowUpRight } from 'lucide-react'

const tools = [
  {
    id: 'nmap',
    name: 'Nmap',
    bg: '#1a1f2e',
    border: '#00E5FF30',
    color: '#00E5FF',
    // SVG icon - network scanner
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3a9 9 0 0 1 9 9" strokeDasharray="3,2" />
        <path d="M12 3a9 9 0 0 0-9 9" strokeDasharray="3,2" />
        <path d="M3 12a9 9 0 0 0 9 9" strokeDasharray="3,2" />
        <path d="M21 12a9 9 0 0 1-9 9" strokeDasharray="3,2" />
        <line x1="12" y1="12" x2="19" y2="7" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'burp',
    name: 'Burp Suite',
    bg: '#1f1a0a',
    border: '#FF8B2430',
    color: '#FF8B24',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeWidth="2" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'metasploit',
    name: 'Metasploit',
    bg: '#1a1a1a',
    border: '#4B8BBE30',
    color: '#4B8BBE',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12,3 21,8 21,16 12,21 3,16 3,8" />
        <polygon points="12,7 17,9.5 17,14.5 12,17 7,14.5 7,9.5" fill="currentColor" opacity="0.3" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'wireshark',
    name: 'Wireshark',
    bg: '#0a1a2e',
    border: '#1C9FE430',
    color: '#1C9FE4',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12 Q6 4 12 12 Q18 20 22 12" />
        <path d="M2 8 Q6 2 12 8 Q18 14 22 8" strokeDasharray="2,2" opacity="0.5" />
        <path d="M2 16 Q6 10 12 16 Q18 22 22 16" strokeDasharray="2,2" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 'wazuh',
    name: 'Wazuh',
    bg: '#1a0a0e',
    border: '#E54B4B30',
    color: '#E54B4B',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3L20 7V13C20 17.4 16.4 21.4 12 22C7.6 21.4 4 17.4 4 13V7L12 3Z" />
        <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'solidity',
    name: 'Solidity',
    bg: '#0a0e1a',
    border: '#7C5CFF30',
    color: '#7C5CFF',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" />
        <polygon points="12,6 18,9 18,15 12,18 6,15 6,9" fill="currentColor" opacity="0.2" />
        <text x="12" y="15" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none" fontWeight="bold">S</text>
      </svg>
    ),
  },
  {
    id: 'python',
    name: 'Python',
    bg: '#0a1a0e',
    border: '#3DD6F530',
    color: '#3DD6F5',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C8 2 6 4 6 7v2h6v1H5C3 10 2 11.5 2 14s1 4 3 4h1v-2.5c0-1.5 1-2.5 3-2.5h6c2 0 3-1.5 3-3V7c0-2.5-2-5-6-5z" />
        <path d="M12 22c4 0 6-2 6-5v-2h-6v-1h7c2 0 3-1.5 3-4s-1-4-3-4h-1v2.5c0 1.5-1 2.5-3 2.5H9c-2 0-3 1.5-3 3v3c0 2.5 2 5 6 5z" />
        <circle cx="9.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="14.5" cy="17.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'aws',
    name: 'AWS',
    bg: '#1f1208',
    border: '#FF990030',
    color: '#FF9900',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6.5 16.5C4 15.5 2 13 2 10C2 6.7 4.7 4 8 4C8.5 4 9 4.1 9.5 4.2C10.5 2.9 12 2 13.7 2C16.6 2 19 4.4 19 7.3C19 7.5 19 7.7 18.9 7.9C20.7 8.5 22 10.1 22 12C22 14.2 20.2 16 18 16" />
        <path d="M9 17l-2 5" strokeLinecap="round" />
        <path d="M15 17l2 5" strokeLinecap="round" />
        <path d="M7 22h10" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function SkillsGrid() {
  return (
    <section id="skills" className="flex-1">
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
            Skills & Tools
          </h2>
          <a
            href="#skills"
            className="text-xs font-medium flex items-center gap-1"
            style={{ color: 'var(--color-accent)' }}
          >
            View All <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-4 gap-3">
          {tools.map(tool => (
            <div
              key={tool.id}
              id={`tool-${tool.id}`}
              className="flex flex-col items-center gap-2 group cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                style={{
                  background: tool.bg,
                  border: `1px solid ${tool.border}`,
                  color: tool.color,
                  boxShadow: `0 0 0 transparent`,
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 16px ${tool.color}40`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 0 transparent')}
              >
                {tool.icon}
              </div>
              <span className="text-xs text-center font-medium" style={{ color: 'var(--color-text-muted)' }}>
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
