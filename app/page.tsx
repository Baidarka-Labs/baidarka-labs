import { MarkOF } from '@/components/marks'

const INK = '#0E1733'
const TEAL = '#0E6E6B'
const PAPER = '#F4F1EB'

export default function Page() {
  return (
    <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', background: PAPER }}>
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '64px 32px',
        textAlign: 'center',
        gap: 32,
      }}>
        <MarkOF color={INK} size={280} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 48,
            fontWeight: 400,
            letterSpacing: '-0.015em',
            lineHeight: 1,
            margin: 0,
            color: INK,
          }}>
            Baidarka Labs
          </h1>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 17,
            color: '#6B6B6B',
            margin: 0,
            lineHeight: 1.5,
            maxWidth: '44ch',
          }}>
            A forthcoming initiative to assess the quality of data products intended for analysis by AI agents.
          </p>
        </div>
      </main>

      <footer style={{
        padding: '24px 32px',
        textAlign: 'center',
        borderTop: '1px solid #D9D3C8',
        fontFamily: 'var(--font-inter)',
        fontSize: 13,
        color: '#6B6B6B',
      }}>
        Baidarka Labs is a{' '}
        <a href="https://radiant.earth" style={{ color: TEAL, textDecoration: 'none' }}>
          Radiant Earth
        </a>
        {' '}initiative.
      </footer>
    </div>
  )
}
