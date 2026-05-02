import {
  MarkOF, MarkOFv, MarkOFv2, MarkOFs, MarkOFs2, MarkOF5,
  MarkSingle, MarkTick, MarkPatternSwatch,
} from '@/components/marks'

const INK = '#0E1733'
const TEAL = '#0E6E6B'
const PAPER = '#F4F1EB'
const SIGNAL = '#F4C430'

export default function Page() {
  return (
    <>
      {/* NAV */}
      <div className="nav">
        <div className="nav-inner">
          <div className="brand">
            <MarkOF color={INK} size={28} />
            <span className="name">Baidarka Labs</span>
            <span className="mono" style={{ marginLeft: 12 }}>DESIGN SYSTEM · v0.1</span>
          </div>
          <nav className="nav-links">
            <a href="#mark">Mark</a>
            <a href="#wordmark">Wordmark</a>
            <a href="#color">Color</a>
            <a href="#type">Type</a>
            <a href="#patterns">Patterns</a>
            <a href="#apps">Applications</a>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <header className="hero">
        <div>
          <div className="mono small">OPEN FLEET · CONCEPT 5 / K5.5</div>
          <h1 className="display">A fleet,<br />finding its line.</h1>
          <p className="lede" style={{ marginTop: 28 }}>
            The Open Fleet mark is frameless. Three baidarka hulls, parallel,
            ascending the slope at 23°. The composition holds without a container
            — the hulls themselves carry the structure. It scales from a 16-pixel
            favicon to the side of a building, and it works across paper, ink,
            teal, and signal yellow.
          </p>
          <p className="mono" style={{ marginTop: 32 }}>
            v-formation, staggered, and 5-domain variants follow. Each is a
            different reading of the same gesture: coordination across disciplines
            on a shared gradient.
          </p>
        </div>
        <div className="hero-mark">
          <MarkOF color={INK} size={420} />
        </div>
      </header>

      {/* 01 MARK */}
      <section className="sys" id="mark">
        <div className="sys-header">
          <div>
            <div className="mono">01 / MARK</div>
            <h2 className="display" style={{ marginTop: 8 }}>The hull family.</h2>
          </div>
          <p className="lede">
            Every mark in the system is a composition of one shape — a pointed-oval
            baidarka hull, tilted 23°. Hulls are positioned along the slope axis.
            Frameless: no circles, no squares, no containers. The negative space
            between hulls does as much work as the hulls themselves.
          </p>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="card">
            <div className="stage"><MarkOF color={INK} size={180} /></div>
            <div className="meta">
              <div className="nm">Primary · Open Fleet 3</div>
              <div className="ds">The default mark. Three hulls in loose organic formation — heading the same direction, never in lockstep. Used wherever the brand needs a single recognizable mark.</div>
            </div>
          </div>
          <div className="card">
            <div className="stage"><MarkOFv color={INK} size={180} /></div>
            <div className="meta">
              <div className="nm">V-Formation · Lead</div>
              <div className="ds">A long lead hull with two flankers pulled back. Reads as coordinated effort — used for the lab&apos;s research-program collateral.</div>
            </div>
          </div>
          <div className="card">
            <div className="stage"><MarkOFv2 color={INK} size={180} /></div>
            <div className="meta">
              <div className="nm">V-Formation · Scout</div>
              <div className="ds">Lead hull pushed up the slope; two follow. The &ldquo;scouting&rdquo; reading — used for new-research and exploratory communications.</div>
            </div>
          </div>
          <div className="card">
            <div className="stage"><MarkOFs color={INK} size={180} /></div>
            <div className="meta">
              <div className="nm">Staggered · Echelon</div>
              <div className="ds">Three hulls in a step-pattern. Each on its own line up the gradient. Used as a horizontal banner mark.</div>
            </div>
          </div>
          <div className="card">
            <div className="stage"><MarkOFs2 color={INK} size={180} /></div>
            <div className="meta">
              <div className="nm">Staggered · Abreast</div>
              <div className="ds">A long center hull flanked by two shorter ones, all on parallel lines. The &ldquo;fleet abreast&rdquo; reading — wide and exploratory.</div>
            </div>
          </div>
          <div className="card">
            <div className="stage"><MarkOF5 color={INK} size={180} /></div>
            <div className="meta">
              <div className="nm">Open Fleet 5 · Domains</div>
              <div className="ds">Five hulls — one per FRO research domain (geospatial, genomics, climate, financial, civic). Used on annual reports, anniversary marks, and ceremonial collateral.</div>
            </div>
          </div>
          <div className="card">
            <div className="stage"><MarkSingle color={INK} size={180} /></div>
            <div className="meta">
              <div className="nm">Solo Glyph</div>
              <div className="ds">A single hull. Used as a list bullet, section divider, or favicon-of-last-resort when the fleet is unreadable at small sizes.</div>
            </div>
          </div>
          <div className="card">
            <div className="stage"><MarkTick color={INK} size={180} /></div>
            <div className="meta">
              <div className="nm">Tick</div>
              <div className="ds">The hull reduced to a slim slash. Used as an inline glyph, a footnote marker, or to set rhythm in long-form text.</div>
            </div>
          </div>
          <div className="card dark">
            <div className="stage"><MarkOF color={PAPER} size={180} /></div>
            <div className="meta">
              <div className="nm" style={{ color: 'white' }}>Inversion test</div>
              <div className="ds" style={{ color: 'rgba(255,255,255,0.65)' }}>The mark holds in paper-on-ink. Both stays of the wordmark must be tested — bright ink in dim rooms, dim ink in bright rooms.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 WORDMARK */}
      <section className="sys" id="wordmark">
        <div className="sys-header">
          <div>
            <div className="mono">02 / WORDMARK</div>
            <h2 className="display" style={{ marginTop: 8 }}>A literary serif.</h2>
          </div>
          <p className="lede">
            The wordmark is set in <strong>Source Serif 4</strong> — a quiet,
            transitional serif designed for long reading. It&apos;s a deliberate counter
            to the mark&apos;s geometry: where the hulls are sharp and structural, the
            type is humane and literary. The pairing reads &ldquo;research institution,&rdquo;
            not &ldquo;tech startup.&rdquo;
          </p>
        </div>

        <div className="card" style={{ padding: 56 }}>
          <div className="mono">PRIMARY HORIZONTAL LOCKUP</div>
          <div className="wm-row" style={{ marginTop: 32 }}>
            <MarkOF color={INK} size={64} />
            <span className="wm-name">Baidarka Labs</span>
          </div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', marginTop: 24 }}>
          <div className="card" style={{ padding: 56 }}>
            <div className="mono">SUB-BRAND · DOMAIN</div>
            <div className="wm-row" style={{ marginTop: 32, alignItems: 'center' }}>
              <MarkOFv color={TEAL} size={48} />
              <span className="wm-name">Baidarka <span style={{ color: TEAL }}> / Geospatial</span></span>
            </div>
            <div className="wm-row" style={{ marginTop: 16, alignItems: 'center' }}>
              <MarkOFv color={TEAL} size={48} />
              <span className="wm-name">Baidarka <span style={{ color: TEAL }}> / Genomics</span></span>
            </div>
            <div className="wm-row" style={{ marginTop: 16, alignItems: 'center' }}>
              <MarkOFv color={TEAL} size={48} />
              <span className="wm-name">Baidarka <span style={{ color: TEAL }}> / Climate</span></span>
            </div>
          </div>

          <div className="card dark" style={{ padding: 56, background: INK, color: 'white' }}>
            <div className="mono" style={{ color: 'rgba(255,255,255,0.55)' }}>DARK LOCKUP · OPEN FLEET 3</div>
            <div className="wm-row" style={{ marginTop: 32 }}>
              <MarkOF color="white" size={64} />
              <span className="wm-name" style={{ color: 'white' }}>Baidarka Labs</span>
            </div>
            <div className="wm-row" style={{ marginTop: 24 }}>
              <MarkOF color={SIGNAL} size={64} />
              <span className="wm-name" style={{ color: SIGNAL }}>Baidarka Labs</span>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: 24, padding: 56, alignItems: 'center' }}>
          <div className="mono" style={{ alignSelf: 'flex-start' }}>STACKED LOCKUP</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, padding: '32px 0' }}>
            <MarkOF color={INK} size={120} />
            <div className="wm-name" style={{ fontSize: 36 }}>Baidarka Labs</div>
            <div className="mono">A FOCUSED RESEARCH ORGANIZATION · 2026</div>
          </div>
        </div>
      </section>

      {/* 03 COLOR */}
      <section className="sys" id="color">
        <div className="sys-header">
          <div>
            <div className="mono">03 / COLOR</div>
            <h2 className="display" style={{ marginTop: 8 }}>Ink, teal, signal.</h2>
          </div>
          <p className="lede">
            Two anchors and one accent. Ink is the default; teal is the brand
            color; signal yellow appears sparingly — for callouts, certification
            seals, and warning states. Paper and warm-paper are the default
            backgrounds. Together they form a maritime palette without leaning
            nautical-cliché.
          </p>
        </div>

        <div className="colors-grid">
          <div className="swatch" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
            <div><div className="lbl">PRIMARY</div><div className="nm" style={{ marginTop: 6 }}>Ink</div></div>
            <div className="hex">#0E1733</div>
          </div>
          <div className="swatch" style={{ background: 'var(--teal)', color: 'var(--paper)' }}>
            <div><div className="lbl">PRIMARY</div><div className="nm" style={{ marginTop: 6 }}>Teal</div></div>
            <div className="hex">#0E6E6B</div>
          </div>
          <div className="swatch" style={{ background: 'var(--signal)', color: 'var(--ink)' }}>
            <div><div className="lbl">ACCENT</div><div className="nm" style={{ marginTop: 6 }}>Signal Yellow</div></div>
            <div className="hex">#F4C430</div>
          </div>
          <div className="swatch bordered" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
            <div><div className="lbl">SURFACE</div><div className="nm" style={{ marginTop: 6 }}>Paper</div></div>
            <div className="hex">#F4F1EB</div>
          </div>
          <div className="swatch bordered" style={{ background: 'var(--paper-warm)', color: 'var(--ink)' }}>
            <div><div className="lbl">SURFACE</div><div className="nm" style={{ marginTop: 6 }}>Paper Warm</div></div>
            <div className="hex">#EDE7D9</div>
          </div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', marginTop: 32 }}>
          <div className="card">
            <div className="mono">USAGE — PROOF</div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 16 }}>
              <div className="avatar"><MarkOF color={INK} size={64} /></div>
              <div className="avatar dark"><MarkOF color={PAPER} size={64} /></div>
              <div className="avatar teal"><MarkOF color={PAPER} size={64} /></div>
              <div className="avatar signal"><MarkOF color={INK} size={64} /></div>
            </div>
            <div className="ds" style={{ marginTop: 12, color: 'var(--mute)' }}>Open Fleet 3 across the four primary surfaces. The teal ground is the brand tile; signal yellow is reserved for moments that demand attention.</div>
          </div>
          <div className="card">
            <div className="mono">RATIO — PRIMARY DECK</div>
            <div style={{ display: 'grid', gridTemplateColumns: '12fr 4fr 4fr 1fr', gap: 4, marginTop: 16, height: 80 }}>
              <div style={{ background: 'var(--paper-warm)' }} />
              <div style={{ background: 'var(--ink)' }} />
              <div style={{ background: 'var(--teal)' }} />
              <div style={{ background: 'var(--signal)' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '12fr 4fr 4fr 1fr', gap: 4, marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--mute)' }}>
              <div>57% PAPER</div><div>19% INK</div><div>19% TEAL</div><div>5% YEL</div>
            </div>
            <div className="ds" style={{ marginTop: 24, color: 'var(--mute)' }}>Roughly: most surfaces are paper. Ink and teal split the rest evenly. Signal yellow is held below five percent of any composition.</div>
          </div>
        </div>
      </section>

      {/* 04 TYPE */}
      <section className="sys" id="type">
        <div className="sys-header">
          <div>
            <div className="mono">04 / TYPE</div>
            <h2 className="display" style={{ marginTop: 8 }}>Three voices.</h2>
          </div>
          <p className="lede">
            Source Serif 4 for display and reading. Inter for UI and dense
            interface. JetBrains Mono for technical contexts — eyebrows, code,
            captions, certification text. Three faces, no more. The mono is the
            family&apos;s measurement instrument: it appears wherever a number, a tag,
            or a coordinate appears.
          </p>
        </div>

        <div className="card" style={{ padding: '56px 56px 24px' }}>
          <div className="type-spec">
            <div className="label">
              <div className="mono">DISPLAY · SOURCE SERIF 4</div>
              <div className="ds" style={{ marginTop: 8, color: 'var(--mute)' }}>Headlines, report titles, and pull quotes.</div>
            </div>
            <div className="type-display-1">An open benchmark<br />for agent-ready data.</div>
          </div>

          <div className="type-spec">
            <div className="label">
              <div className="mono">SUBHEAD · SOURCE SERIF 4</div>
              <div className="ds" style={{ marginTop: 8, color: 'var(--mute)' }}>Section titles and feature subheads.</div>
            </div>
            <div className="type-display-2">A fitness landscape with seven dimensions, none of them sufficient on its own.</div>
          </div>

          <div className="type-spec">
            <div className="label">
              <div className="mono">HEADLINE · INTER 600</div>
              <div className="ds" style={{ marginTop: 8, color: 'var(--mute)' }}>UI navigation and dashboard titles.</div>
            </div>
            <div className="type-headline">Data Fitness Index — 2026 cohort scoring</div>
          </div>

          <div className="type-spec">
            <div className="label">
              <div className="mono">BODY · INTER 400 / 17PX / 1.55</div>
              <div className="ds" style={{ marginTop: 8, color: 'var(--mute)' }}>Long-form web and report text.</div>
            </div>
            <div className="type-body" style={{ maxWidth: '64ch' }}>
              The baidarka is a paradigm of fitness-for-purpose engineering — a design
              refined by Aleut and Alutiiq practitioners across generations of practical
              use, balancing speed, stability, and resistance through iteration rather
              than theory.
            </div>
          </div>

          <div className="type-spec">
            <div className="label">
              <div className="mono">MONO · JETBRAINS MONO 11/14PX</div>
              <div className="ds" style={{ marginTop: 8, color: 'var(--mute)' }}>Eyebrows, code, captions, coordinates.</div>
            </div>
            <div>
              <div className="type-eyebrow" style={{ color: TEAL }}>FITNESS INDEX · 2026 · GEOSPATIAL</div>
              <div className="type-mono" style={{ marginTop: 16 }}>{'{ format: "cog", schema: "stac-1.0", score: 0.84 }'}</div>
              <div className="type-mono" style={{ color: 'var(--mute)', marginTop: 8 }}>{'// 2,180 datasets evaluated · 12.4 M tokens'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 PATTERNS */}
      <section className="sys" id="patterns">
        <div className="sys-header">
          <div>
            <div className="mono">05 / PATTERNS</div>
            <h2 className="display" style={{ marginTop: 8 }}>The fleet, multiplied.</h2>
          </div>
          <p className="lede">
            Tile the hull at three densities to produce three textures: &ldquo;wake&rdquo;
            (dense), &ldquo;fleet&rdquo; (medium), &ldquo;open water&rdquo; (sparse). Use them on report
            endpapers, web hero backgrounds, and large-format signage. Always
            paper-warm ground; never as a foreground texture over the wordmark.
          </p>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="card" style={{ padding: 0 }}>
            <div className="pattern-strip" style={{ height: 240 }}>
              <MarkPatternSwatch color={INK} size={420} density={42} />
            </div>
            <div style={{ padding: 24 }}>
              <div className="nm">Wake · dense</div>
              <div className="ds">For end-papers and section dividers in print. The hulls overlap into a strong directional texture.</div>
            </div>
          </div>
          <div className="card" style={{ padding: 0 }}>
            <div className="pattern-strip" style={{ height: 240 }}>
              <MarkPatternSwatch color={INK} size={420} density={70} />
            </div>
            <div style={{ padding: 24 }}>
              <div className="nm">Fleet · medium</div>
              <div className="ds">The default texture. Use it on web hero backgrounds and the inside cover of reports.</div>
            </div>
          </div>
          <div className="card" style={{ padding: 0 }}>
            <div className="pattern-strip" style={{ height: 240 }}>
              <MarkPatternSwatch color={INK} size={420} density={110} />
            </div>
            <div style={{ padding: 24 }}>
              <div className="nm">Open water · sparse</div>
              <div className="ds">For body-of-text backgrounds and certification seals where most of the surface should breathe.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 APPLICATIONS */}
      <section className="sys" id="apps">
        <div className="sys-header">
          <div>
            <div className="mono">06 / APPLICATIONS</div>
            <h2 className="display" style={{ marginTop: 8 }}>In the world.</h2>
          </div>
          <p className="lede">
            Eight surfaces. The mark, wordmark, color, and type, in their working
            clothes. Each application uses a different combination of system parts;
            together they prove the system&apos;s range without needing to invent new pieces.
          </p>
        </div>

        {/* Web home + report cover */}
        <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: 24 }}>
          <div className="mock-card" style={{ aspectRatio: '16/10' }}>
            <div className="web-mock">
              <div className="web-nav">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <MarkOF color={INK} size={28} />
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: 18 }}>Baidarka Labs</span>
                </div>
                <div style={{ display: 'flex', gap: 24, fontSize: 13, color: 'var(--mute)' }}>
                  <span>Research</span><span>Index</span><span>Methods</span><span>About</span>
                </div>
              </div>
              <div className="web-body">
                <div className="web-pill">
                  <span style={{ width: 6, height: 6, background: TEAL, borderRadius: '50%' }} />
                  2026 Cohort · Now scoring
                </div>
                <div className="web-headline">Measuring the fitness of data products for autonomous analysis.</div>
                <div style={{ fontFamily: 'var(--font-inter)', color: 'var(--mute)', maxWidth: '56ch', fontSize: 15 }}>
                  A five-year focused research organization establishing the neutral arbiter
                  for agent-ready data. An open benchmark, an annual fitness index, and a
                  certification program.
                </div>
                <div className="web-cta teal">Read the methodology <span>→</span></div>
              </div>
            </div>
          </div>

          <div className="mock-card paper-warm">
            <div className="cover" style={{ height: '100%', padding: 32 }}>
              <div className="top">
                <MarkOF color={INK} size={48} />
                <div className="mono" style={{ marginTop: 24 }}>FITNESS REPORT · 2026 / Q4</div>
                <h2 style={{ fontSize: 30, marginTop: 18 }}>The 200 Most-Used Public Datasets, Scored.</h2>
              </div>
              <div className="bottom">
                <div className="mono">BAIDARKA LABS · GEOSPATIAL</div>
                <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 4 }}>Independently maintained. No funder review.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Business cards + avatars */}
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginTop: 24 }}>
          <div className="bcard">
            <div className="nm-row">
              <MarkOF color={INK} size={32} />
              <span className="mono">001/015</span>
            </div>
            <div>
              <div className="person">Jed Sundwall</div>
              <div className="role" style={{ marginTop: 4 }}>Executive Director · Radiant Earth</div>
              <div className="role">jed@radiant.earth · @baidarkalabs</div>
            </div>
          </div>

          <div className="bcard dark">
            <div className="nm-row">
              <MarkOF color={SIGNAL} size={32} />
              <span className="mono" style={{ color: 'rgba(255,255,255,0.55)' }}>BAIDARKA · GENOMICS</span>
            </div>
            <div>
              <div className="person" style={{ color: 'white' }}>— · Methodology Lead</div>
              <div className="role" style={{ marginTop: 4 }}>Open hire · 2026</div>
              <div className="role">baidarka.org/jobs</div>
            </div>
          </div>

          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div className="avatar dark"><MarkOF color={PAPER} size={64} /></div>
            <div className="avatar"><MarkOF color={INK} size={64} /></div>
            <div className="avatar teal"><MarkOF color={PAPER} size={64} /></div>
            <div className="avatar signal"><MarkOF color={INK} size={64} /></div>
          </div>
        </div>

        {/* Certification seal + event banner */}
        <div className="grid" style={{ gridTemplateColumns: '1fr 2fr', gap: 24, marginTop: 24 }}>
          <div className="mock-card square paper-warm" style={{ aspectRatio: '1' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 36, height: '100%', gap: 16, textAlign: 'center' }}>
              <MarkOF color={TEAL} size={80} />
              <div className="mono" style={{ color: TEAL }}>FITNESS CERTIFIED</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, lineHeight: 1.2 }}>
                This dataset has met the<br />Baidarka Labs benchmark.
              </div>
              <div className="mono" style={{ marginTop: 8, color: 'var(--mute)' }}>REGISTRATION 2026·BL·00184</div>
            </div>
          </div>

          <div className="mock-card banner" style={{ aspectRatio: '21/9', background: INK, color: 'white' }}>
            <div style={{ padding: 56, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <MarkOF color="white" size={36} />
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 22 }}>Baidarka Labs</span>
              </div>
              <div>
                <div className="mono" style={{ color: SIGNAL }}>CALL FOR DATASETS · 2026 COHORT</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 44, marginTop: 16, maxWidth: '28ch', lineHeight: 1.05 }}>
                  Submit your data for inclusion in this year&apos;s Fitness Index.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Fitness Index */}
        <div className="card" style={{ marginTop: 24, padding: 0 }}>
          <div style={{ padding: 36, borderBottom: '1px solid var(--line)' }}>
            <div className="mono" style={{ color: TEAL }}>DATA FITNESS INDEX · 2026 · PREVIEW</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, marginTop: 8 }}>Top performers, by domain.</div>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: 0 }}>
            {[
              { label: 'GEOSPATIAL', name: 'Sentinel-2 L2A', score: '0.91', delta: '↑ 0.04', deltaColor: TEAL },
              { label: 'GENOMICS',   name: 'UK Biobank',     score: '0.78', delta: '↑ 0.11', deltaColor: TEAL },
              { label: 'CLIMATE',    name: 'ERA5',            score: '0.74', delta: '↑ 0.02', deltaColor: 'var(--mute)' },
              { label: 'FINANCIAL',  name: 'SEC EDGAR',       score: '0.62', delta: '↓ 0.03', deltaColor: '#B8401F' },
              { label: 'CIVIC',      name: 'USA Facts',       score: '0.69', delta: '↑ 0.07', deltaColor: TEAL },
            ].map((d, i, arr) => (
              <div key={d.label} style={{ padding: 28, borderRight: i < arr.length - 1 ? '1px solid var(--line)' : undefined }}>
                <div className="mono" style={{ color: 'var(--mute)' }}>{d.label}</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, marginTop: 12 }}>{d.name}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 18 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 36, color: INK }}>{d.score}</div>
                  <div className="mono" style={{ color: d.deltaColor }}>{d.delta}</div>
                </div>
                <div style={{ height: 4, background: 'var(--paper-warm)', marginTop: 16 }}>
                  <div style={{ height: '100%', width: `${parseFloat(d.score) * 100}%`, background: TEAL }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pull quote */}
        <div style={{ marginTop: 96, padding: '64px 0', borderTop: '1px solid var(--line)' }}>
          <div className="mono">FROM THE CONCEPT NOTE · DYSON, 2020</div>
          <blockquote style={{ fontFamily: 'var(--font-serif)', fontSize: 32, lineHeight: 1.3, maxWidth: '32ch', margin: '24px 0 0', padding: 0, fontWeight: 400, letterSpacing: '-0.01em' }}>
            The Aleut kayak occupied a summit on a complex fitness landscape that
            cannot be reached by climbing one of the gradients at a time.
          </blockquote>
        </div>
      </section>

      <footer>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>Baidarka Labs · Open Fleet design system · v0.1 · 2026</div>
          <a href="https://baidarka.ai">baidarka.ai</a>
        </div>
      </footer>
    </>
  )
}
