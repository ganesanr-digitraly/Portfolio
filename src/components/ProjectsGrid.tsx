import { Shield, Lock, ShieldCheck, Monitor, ArrowUpRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { useState } from 'react'

const projects = [
  {
    id: 'mysecuritystatus',
    icon: Shield,
    iconColor: '#7C5CFF',
    iconBg: 'rgba(124,92,255,0.15)',
    name: 'MySecurityStatus',
    category: 'Web3 / OSINT',
    categoryColor: '#7C5CFF',
    description: 'OSINT & Attack Surface Finder with on-chain and off-chain intelligence. Aggregates threat data across multiple sources for comprehensive security assessment.',
    linkLabel: 'Live Demo',
    linkIcon: ExternalLink,
    githubUrl: 'https://github.com/GanesanR',
    demoUrl: '#',
  },
  {
    id: 'innait-key',
    icon: Lock,
    iconColor: '#22C55E',
    iconBg: 'rgba(34,197,94,0.15)',
    name: 'InnaIT Key (FIDO2)',
    category: 'IAM / Auth',
    categoryColor: '#22C55E',
    description: 'Passwordless authentication using FIDO2 & WebAuthn with hardware security keys. Eliminates credential theft attack vectors entirely.',
    linkLabel: 'Case Study',
    linkIcon: ArrowUpRight,
    githubUrl: 'https://github.com/GanesanR',
    demoUrl: '#',
  },
  {
    id: 'smart-contract-auditor',
    icon: ShieldCheck,
    iconColor: '#3DD6F5',
    iconBg: 'rgba(61,214,245,0.15)',
    name: 'Smart Contract Auditor',
    category: 'Web3 / Security',
    categoryColor: '#3DD6F5',
    description: 'Smart contract security analysis and vulnerability detection toolkit. Identifies reentrancy, integer overflow, and access control vulnerabilities.',
    linkLabel: 'Case Study',
    linkIcon: ArrowUpRight,
    githubUrl: 'https://github.com/GanesanR',
    demoUrl: '#',
  },
  {
    id: 'wazuh-shuffle',
    icon: Monitor,
    iconColor: '#F59E0B',
    iconBg: 'rgba(245,158,11,0.15)',
    name: 'Wazuh + Shuffle',
    category: 'SIEM / Automation',
    categoryColor: '#F59E0B',
    description: 'Automated vulnerability management & threat detection using Wazuh, OpenVAS & Shuffle. Full SOC pipeline with automated incident response playbooks.',
    linkLabel: 'Case Study',
    linkIcon: ArrowUpRight,
    githubUrl: 'https://github.com/GanesanR',
    demoUrl: '#',
  },
]

export default function ProjectsGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="projects" className="px-6 py-2">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
          Featured Projects
        </h2>
        <a
          href="#projects"
          className="text-sm font-medium flex items-center gap-1 transition-colors duration-200"
          style={{ color: 'var(--color-accent)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent-light)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-accent)')}
        >
          View All <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {projects.map(project => {
          const Icon = project.icon
          const LinkIcon = project.linkIcon
          const isHovered = hoveredId === project.id

          return (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className="card-glow flex flex-col p-4 rounded-2xl cursor-default"
              style={{
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                boxShadow: isHovered ? '0 0 0 1px rgba(124,92,255,0.3), 0 8px 32px rgba(124,92,255,0.2)' : 'none',
                transform: isHovered ? 'translateY(-2px)' : 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Icon badge + category */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: project.iconBg, border: `1px solid ${project.iconColor}30` }}
                >
                  <Icon size={20} style={{ color: project.iconColor }} />
                </div>
                <div>
                  <div className="font-bold text-sm leading-tight" style={{ color: 'var(--color-text-primary)' }}>
                    {project.name}
                  </div>
                  <div
                    className="text-xs mt-0.5 px-1.5 py-0.5 rounded-full inline-block"
                    style={{
                      background: `${project.categoryColor}15`,
                      color: project.categoryColor,
                    }}
                  >
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs leading-relaxed flex-1 mb-4" style={{ color: 'var(--color-text-muted)' }}>
                {project.description}
              </p>

              {/* Footer links */}
              <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--color-border)' }}>
                <a
                  href={project.demoUrl}
                  className="flex items-center gap-1 text-xs font-semibold transition-colors duration-200"
                  style={{ color: 'var(--color-accent)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent-light)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                >
                  {project.linkLabel} <LinkIcon size={12} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} on GitHub`}
                  className="w-7 h-7 flex items-center justify-center rounded-lg transition-all duration-200"
                  style={{
                    background: 'var(--color-bg-primary)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-muted)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                >
                  <GithubIcon size={14} />
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
