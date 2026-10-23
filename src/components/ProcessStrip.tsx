import { Search, Target, BarChart2, ShieldCheck, ChevronRight } from 'lucide-react'

const steps = [
  {
    id: 1,
    icon: Search,
    title: 'Recon',
    subtitle: 'Discover Attack Surface',
    color: '#7C5CFF',
    active: true,
  },
  {
    id: 2,
    icon: Target,
    title: 'Exploit',
    subtitle: 'Find & Exploit Flaws',
    color: '#F43F5E',
    active: false,
  },
  {
    id: 3,
    icon: BarChart2,
    title: 'Analyze',
    subtitle: 'Understand Impact',
    color: '#3DD6F5',
    active: false,
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: 'Secure',
    subtitle: 'Build Stronger Defenses',
    color: '#22C55E',
    active: false,
  },
]

export default function ProcessStrip() {
  return (
    <section className="px-6 py-4" id="process">
      <div
        className="rounded-2xl p-6"
        style={{
          background: 'var(--color-bg-card)',
          border: '1px solid var(--color-border)',
        }}
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={step.id} className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${step.color}18`,
                      border: `1px solid ${step.color}40`,
                    }}
                  >
                    <Icon size={18} style={{ color: step.color }} />
                  </div>

                  {/* Text */}
                  <div className="relative">
                    <div className="font-bold text-sm" style={{ color: 'var(--color-text-primary)' }}>
                      {step.title}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                      {step.subtitle}
                    </div>
                    {step.active && (
                      <div
                        className="absolute -bottom-3 left-0 h-0.5 w-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, #7C5CFF, #3DD6F5)' }}
                      />
                    )}
                  </div>
                </div>

                {/* Chevron separator */}
                {idx < steps.length - 1 && (
                  <div className="flex items-center gap-0.5" style={{ color: 'var(--color-border)' }}>
                    <ChevronRight size={16} />
                    <ChevronRight size={16} style={{ marginLeft: '-8px', opacity: 0.5 }} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
