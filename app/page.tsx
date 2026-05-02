import { MarkOF } from '@/components/marks'

const INK = '#0E1733'
const PAPER = '#F4F1EB'

export default function Page() {
  return (
    <main style={{
      minHeight: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '64px 32px',
      background: PAPER,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32, textAlign: 'center' }}>
        <MarkOF color={INK} size={280} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 48,
              fontWeight: 400,
              letterSpacing: '-0.015em',
              lineHeight: 1,
              margin: 0,
              color: INK,
            }}
          >
            Baidarka Labs
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 16,
              color: '#6B6B6B',
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            A forthcoming initiative of{' '}
            <a
              href="https://radiant.earth"
              style={{ color: '#0E6E6B', textDecoration: 'none', borderBottom: '1px solid #0E6E6B' }}
            >
              Radiant Earth
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
