import { ExternalLink, ArrowUpRight, FileCode, ShieldAlert, FileText, AlertTriangle } from 'lucide-react'

const activities = [
  {
    id: 'act-1',
    icon: FileCode,
    iconBg: 'rgba(34,197,94,0.15)',
    iconColor: '#22C55E',
    title: 'Deployed a Smart Contract',
    subtitle: '0x8f3...7a1c',
    time: '2d ago',
  },
  {
    id: 'act-2',
    icon: ShieldAlert,
    iconBg: 'rgba(61,214,245,0.15)',
    iconColor: '#3DD6F5',
    title: 'Audited Contract',
    subtitle: '0x1ab...c9d2',
    time: '5d ago',
  },
  {
    id: 'act-3',
    icon: FileText,
    iconBg: 'rgba(124,92,255,0.15)',
    iconColor: '#7C5CFF',
    title: 'New Writeup Published',
    subtitle: 'Reentrancy in DeFi Protocol',
    time: '1w ago',
  },
  {
    id: 'act-4',
    icon: AlertTriangle,
    iconBg: 'rgba(245,158,11,0.15)',
    iconColor: '#F59E0B',
    title: 'Bug Bounty Reported',
    subtitle: 'Critical in Web App',
    time: '2w ago',
  },
]

export default function ActivityFeed() {
  return (
    <div
      className="rounded-2xl p-5"
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-sm" style={{ color: 'var(--color-text-primary)' }}>
          On-chain Activity
        </h3>
        <a
          href="#"
          className="text-xs font-medium flex items-center gap-1"
          style={{ color: 'var(--color-accent)' }}
        >
          View All <ArrowUpRight size={12} />
        </a>
      </div>

      {/* Activity list */}
      <div className="space-y-3">
        {activities.map(activity => {
          const Icon = activity.icon
          return (
            <div
              key={activity.id}
              id={activity.id}
              className="flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 group cursor-default"
              style={{ border: '1px solid transparent' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--color-bg-primary)'
                e.currentTarget.style.borderColor = 'var(--color-border)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'transparent'
              }}
            >
              {/* Icon */}
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: activity.iconBg,
                  border: `1px solid ${activity.iconColor}30`,
                }}
              >
                <Icon size={16} style={{ color: activity.iconColor }} />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold truncate" style={{ color: 'var(--color-text-primary)' }}>
                  {activity.title}
                </div>
                <div className="text-xs mt-0.5 font-mono truncate" style={{ color: 'var(--color-text-muted)' }}>
                  {activity.subtitle}
                </div>
              </div>

              {/* Time + external link */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  {activity.time}
                </span>
                <ExternalLink
                  size={12}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: 'var(--color-accent)' }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
