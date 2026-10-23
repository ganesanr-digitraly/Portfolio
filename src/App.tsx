import { useState, useEffect, useCallback } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import ProcessStrip from './components/ProcessStrip'
import ProjectsGrid from './components/ProjectsGrid'
import SkillsGrid from './components/SkillsGrid'
import CertificationsGrid from './components/CertificationsGrid'
import ProfileCard from './components/ProfileCard'
import ActivityFeed from './components/ActivityFeed'


function AppContent() {
  const [activeSection, setActiveSection] = useState('home')

  const handleScroll = useCallback(() => {
    const sections = ['home', 'process', 'projects', 'skills', 'certifications']
    for (const id of sections) {
      const el = document.getElementById(id)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom > 120) {
          setActiveSection(id === 'process' ? 'home' : id)
          break
        }
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div style={{ background: 'var(--color-bg-primary)', minHeight: '100vh' }}>
      {/* Left Sidebar */}
      <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />

      {/* Main layout - with left and right sidebar space */}
      <div
        className="flex"
        style={{ paddingLeft: '220px' }}
      >
        {/* Main content area */}
        <main
          className="flex-1 min-w-0"
          style={{ maxWidth: 'calc(100% - 330px)' }}
        >
          {/* Top bar */}
          <TopBar />

          {/* Page sections */}
          <Hero />
          <ProcessStrip />

          {/* Projects */}
          <section className="py-4">
            <ProjectsGrid />
          </section>

          {/* Skills + Certifications row */}
          <section className="px-6 pb-6 flex flex-col xl:flex-row gap-4">
            <SkillsGrid />
            <CertificationsGrid />
          </section>
        </main>

        {/* Right Sidebar */}
        <aside
          className="hidden xl:flex flex-col gap-0 flex-shrink-0"
          style={{
            width: '330px',
            background: 'var(--color-bg-secondary)',
            borderLeft: '1px solid var(--color-border)',
            height: '100vh',
            position: 'sticky',
            top: 0,
            overflowY: 'auto',
            padding: '24px 16px',
          }}
        >
          <ProfileCard />
          <ActivityFeed />
        </aside>
      </div>

      {/* Mobile: right sidebar stacks below */}
      <div className="xl:hidden px-4 pb-8" style={{ paddingLeft: '0' }}>
        <div className="space-y-4">
          <ProfileCard />
          <ActivityFeed />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
