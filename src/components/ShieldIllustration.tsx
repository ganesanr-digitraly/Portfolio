// Animated SVG shield illustration for the hero section
export default function ShieldIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ minHeight: '360px' }}>
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(124,92,255,0.12) 0%, rgba(61,214,245,0.05) 50%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      <svg
        viewBox="0 0 400 400"
        width="100%"
        height="100%"
        style={{ maxWidth: '400px', maxHeight: '400px', overflow: 'visible' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="shieldGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#5B3FE4" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#3DD6F5" stopOpacity="0.4" />
          </radialGradient>
          <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="lockBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9B7FFF" />
            <stop offset="100%" stopColor="#3DD6F5" />
          </linearGradient>
        </defs>

        {/* Outer orbit ring 1 */}
        <ellipse
          cx="200" cy="200" rx="160" ry="60"
          fill="none"
          stroke="rgba(124,92,255,0.2)"
          strokeWidth="1"
          strokeDasharray="6,4"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="18s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Outer orbit ring 2 */}
        <ellipse
          cx="200" cy="200" rx="140" ry="50"
          fill="none"
          stroke="rgba(61,214,245,0.15)"
          strokeWidth="1"
          strokeDasharray="4,6"
          transform="rotate(60 200 200)"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="60 200 200"
            to="-300 200 200"
            dur="22s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Orbit ring 3 */}
        <ellipse
          cx="200" cy="200" rx="170" ry="65"
          fill="none"
          stroke="rgba(124,92,255,0.1)"
          strokeWidth="0.5"
          transform="rotate(-30 200 200)"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="-30 200 200"
            to="330 200 200"
            dur="25s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Orbiting icon group 1 */}
        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="18s"
            repeatCount="indefinite"
          />
          <g transform="translate(360, 200)">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 0 0"
              to="-360 0 0"
              dur="18s"
              repeatCount="indefinite"
              additive="sum"
            />
            <rect x="-18" y="-18" width="36" height="36" rx="8" fill="rgba(124,92,255,0.15)" stroke="rgba(124,92,255,0.5)" strokeWidth="1" />
            {/* Bug icon */}
            <text x="0" y="5" textAnchor="middle" fontSize="16" fill="#7C5CFF" filter="url(#glow)">🐛</text>
          </g>
        </g>

        {/* Orbiting icon group 2 - terminal */}
        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="72 200 200"
            to="432 200 200"
            dur="18s"
            repeatCount="indefinite"
          />
          <g transform="translate(360, 200)">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="-72 0 0"
              to="-432 0 0"
              dur="18s"
              repeatCount="indefinite"
              additive="sum"
            />
            <rect x="-18" y="-18" width="36" height="36" rx="8" fill="rgba(61,214,245,0.1)" stroke="rgba(61,214,245,0.4)" strokeWidth="1" />
            <text x="0" y="5" textAnchor="middle" fontSize="16" fill="#3DD6F5" filter="url(#glow)">⌨</text>
          </g>
        </g>

        {/* Orbiting icon group 3 - cloud */}
        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="144 200 200"
            to="504 200 200"
            dur="18s"
            repeatCount="indefinite"
          />
          <g transform="translate(360, 200)">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="-144 0 0"
              to="-504 0 0"
              dur="18s"
              repeatCount="indefinite"
              additive="sum"
            />
            <rect x="-18" y="-18" width="36" height="36" rx="8" fill="rgba(124,92,255,0.15)" stroke="rgba(124,92,255,0.4)" strokeWidth="1" />
            <text x="0" y="5" textAnchor="middle" fontSize="16" fill="#9B7FFF">☁</text>
          </g>
        </g>

        {/* Orbiting icon group 4 - database */}
        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="216 200 200"
            to="576 200 200"
            dur="18s"
            repeatCount="indefinite"
          />
          <g transform="translate(360, 200)">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="-216 0 0"
              to="-576 0 0"
              dur="18s"
              repeatCount="indefinite"
              additive="sum"
            />
            <rect x="-18" y="-18" width="36" height="36" rx="8" fill="rgba(61,214,245,0.1)" stroke="rgba(61,214,245,0.35)" strokeWidth="1" />
            <text x="0" y="5" textAnchor="middle" fontSize="16" fill="#3DD6F5">🗄</text>
          </g>
        </g>

        {/* Orbiting icon group 5 - network alert */}
        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="288 200 200"
            to="648 200 200"
            dur="18s"
            repeatCount="indefinite"
          />
          <g transform="translate(360, 200)">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="-288 0 0"
              to="-648 0 0"
              dur="18s"
              repeatCount="indefinite"
              additive="sum"
            />
            <rect x="-18" y="-18" width="36" height="36" rx="8" fill="rgba(255,180,0,0.1)" stroke="rgba(255,180,0,0.4)" strokeWidth="1" />
            <text x="0" y="5" textAnchor="middle" fontSize="16" fill="#FFB400">⚠</text>
          </g>
        </g>

        {/* Center glow blob */}
        <circle cx="200" cy="200" r="80" fill="url(#glowGrad)" opacity="0.6">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
          <animate attributeName="r" values="75;90;75" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Shield body */}
        <g filter="url(#strongGlow)">
          <path
            d="M200 110 L260 135 L260 195 Q260 240 200 275 Q140 240 140 195 L140 135 Z"
            fill="url(#shieldGrad)"
            stroke="rgba(124,92,255,0.9)"
            strokeWidth="2"
          >
            <animate attributeName="stroke-opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" />
          </path>
          {/* Shield inner ring */}
          <path
            d="M200 122 L252 144 L252 193 Q252 233 200 264 Q148 233 148 193 L148 144 Z"
            fill="none"
            stroke="rgba(61,214,245,0.4)"
            strokeWidth="1"
          />
        </g>

        {/* Lock body */}
        <g filter="url(#glow)">
          {/* Lock shackle */}
          <path
            d="M188 178 L188 168 Q188 155 200 155 Q212 155 212 168 L212 178"
            fill="none"
            stroke="url(#lockBodyGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Lock box */}
          <rect x="182" y="178" width="36" height="28" rx="6"
            fill="rgba(61,214,245,0.15)"
            stroke="url(#lockBodyGrad)"
            strokeWidth="2"
          />
          {/* Keyhole */}
          <circle cx="200" cy="191" r="5" fill="rgba(61,214,245,0.8)" />
          <rect x="197" y="192" width="6" height="8" rx="2" fill="rgba(61,214,245,0.8)" />
        </g>

        {/* Scan line effect */}
        <rect x="140" y="110" width="120" height="165" rx="4" fill="none">
          <animate attributeName="y" values="110;275;110" dur="4s" repeatCount="indefinite" />
          <animate attributeName="height" values="1;0;1" dur="4s" repeatCount="indefinite" />
        </rect>
        <rect x="140" y="200" width="120" height="2" fill="rgba(61,214,245,0.3)" rx="1">
          <animate attributeName="y" values="110;275;110" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.6;0" dur="4s" repeatCount="indefinite" />
        </rect>

        {/* Corner tech decorations */}
        <g stroke="rgba(124,92,255,0.4)" strokeWidth="1" fill="none">
          <polyline points="130,100 115,100 115,115" />
          <polyline points="270,100 285,100 285,115" />
          <polyline points="130,300 115,300 115,285" />
          <polyline points="270,300 285,300 285,285" />
        </g>

        {/* Particle dots */}
        {[
          { cx: 100, cy: 150, r: 2, dur: '2s' },
          { cx: 310, cy: 160, r: 1.5, dur: '3s' },
          { cx: 85, cy: 250, r: 1, dur: '2.5s' },
          { cx: 320, cy: 240, r: 2, dur: '1.8s' },
          { cx: 150, cy: 310, r: 1.5, dur: '2.2s' },
          { cx: 255, cy: 305, r: 1, dur: '3.2s' },
        ].map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill="rgba(124,92,255,0.6)">
            <animate attributeName="opacity" values="0;1;0" dur={p.dur} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    </div>
  )
}
