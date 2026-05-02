// Baidarka Labs — Open Fleet mark family
// Hull silhouette: 190-byte path, verbatim from brand design session.
// LEFT end = stern (long needle). RIGHT end = bow (short, with fin).
// Rotate -23° puts bow up-right, stern trailing down-left.

import React from 'react'

const TILT_DEG = 23
const TILT_RAD = (TILT_DEG * Math.PI) / 180
const HULL_PATH =
  'M959 75H924l-10-7c-250-68-650-68-864-18v25h-45a5 3 0 0 0 0 6H50v25c214 50 614 50 864-18l10-7H959a5 3 0 0 0 0-6'

const HULL_W = 954
const HULL_H = 56
const HULL_CX = 482
const HULL_CY = 78

const SIN_T = Math.sin(TILT_RAD)
const COS_T = Math.cos(TILT_RAD)

interface HullProps {
  span?: number
  depth?: number
  color?: string
  tilt?: number
  transform?: string
}

function Hull({ span = 130, depth, color = '#0E1733', tilt = TILT_DEG, transform }: HullProps) {
  const sx = span / HULL_W
  const sy = depth != null ? depth / HULL_H : sx
  const inner = `rotate(${-tilt}) scale(${sx} ${sy}) translate(${-HULL_CX} ${-HULL_CY})`
  return (
    <g transform={transform}>
      <g transform={inner}>
        <path d={HULL_PATH} fill={color} />
      </g>
    </g>
  )
}

function perpOffset(d: number) {
  return `translate(${-SIN_T * d} ${-COS_T * d})`
}

function alongOffset(d: number) {
  return `translate(${COS_T * d} ${-SIN_T * d})`
}

function slopeOffset(along: number, perp: number) {
  const dx = COS_T * along - SIN_T * perp
  const dy = -SIN_T * along - COS_T * perp
  return `translate(${dx} ${dy})`
}

export interface MarkProps {
  color?: string
  size?: number
}

// Primary mark: three kayaks in loose organic formation.
// Center hull anchors at 23°; the others drift slightly off-axis
// like real boats on real water — heading the same direction, never in lockstep.
export function MarkOF({ color = '#0E1733', size = 200 }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
      <g transform="translate(100 100)">
        <Hull span={108} color={color} tilt={11} transform={slopeOffset(-6, -38)} />
        <Hull span={138} color={color} tilt={23} />
        <Hull span={104} color={color} tilt={6} transform={slopeOffset(-22, 32)} />
      </g>
    </svg>
  )
}

// V-Formation Lead: long anchor hull with two flankers trailing behind.
export function MarkOFv({ color = '#0E1733', size = 200 }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
      <g transform="translate(100 100)">
        <Hull span={140} color={color} tilt={23} />
        <Hull span={92} color={color} tilt={15} transform={slopeOffset(-22, -32)} />
        <Hull span={88} color={color} tilt={29} transform={slopeOffset(-26, 30)} />
      </g>
    </svg>
  )
}

// V-Formation Scout: lead hull pushed forward; two follow.
export function MarkOFv2({ color = '#0E1733', size = 200 }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
      <g transform="translate(100 100)">
        <Hull span={110} color={color} tilt={23} transform={alongOffset(28)} />
        <Hull span={86} color={color} tilt={17} transform={slopeOffset(-20, -28)} />
        <Hull span={92} color={color} tilt={28} transform={slopeOffset(-24, 24)} />
      </g>
    </svg>
  )
}

// Staggered Echelon: three hulls in a step-pattern.
export function MarkOFs({ color = '#0E1733', size = 200 }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
      <g transform="translate(100 100)">
        <Hull span={104} color={color} tilt={12} transform={slopeOffset(-30, -30)} />
        <Hull span={114} color={color} tilt={23} />
        <Hull span={102} color={color} tilt={31} transform={slopeOffset(28, 28)} />
      </g>
    </svg>
  )
}

// Fleet Abreast: center anchor, flankers fanning outward.
export function MarkOFs2({ color = '#0E1733', size = 200 }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
      <g transform="translate(100 100)">
        <Hull span={92} color={color} tilt={14} transform={perpOffset(-34)} />
        <Hull span={130} color={color} tilt={23} />
        <Hull span={94} color={color} tilt={32} transform={perpOffset(34)} />
      </g>
    </svg>
  )
}

// Open Fleet 5: five hulls, one per FRO research domain.
// Each at its own tilt, length, and offset — like five real research vessels.
export function MarkOF5({ color = '#0E1733', size = 200 }: MarkProps) {
  const fleet = [
    { span: 86,  tilt: 8,  along: 8,   perp: -56 },
    { span: 108, tilt: 19, along: -4,  perp: -28 },
    { span: 132, tilt: 23, along: 0,   perp: 0   },
    { span: 100, tilt: 14, along: -16, perp: 26  },
    { span: 92,  tilt: 5,  along: 4,   perp: 54  },
  ]
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
      <g transform="translate(100 100)">
        {fleet.map((b, i) => (
          <Hull key={i} span={b.span} tilt={b.tilt} color={color}
                transform={slopeOffset(b.along, b.perp)} />
        ))}
      </g>
    </svg>
  )
}

// Solo Glyph: single hull for bullets, dividers, fallback favicon.
export function MarkSingle({ color = '#0E1733', size = 200 }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
      <g transform="translate(100 100)">
        <Hull span={170} color={color} />
      </g>
    </svg>
  )
}

// Tick: hull reduced to a slim slash for inline rhythm.
export function MarkTick({ color = '#0E1733', size = 200 }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
      <g transform="translate(100 100)">
        <Hull span={170} depth={5} color={color} />
      </g>
    </svg>
  )
}

// Pattern swatch: hull tiled at variable density for backgrounds and endpapers.
export function MarkPatternSwatch({
  color = '#0E1733',
  size = 320,
  density = 80,
}: {
  color?: string
  size?: number
  density?: number
}) {
  const cells: React.ReactNode[] = []
  const rows = Math.ceil(size / density) + 2
  const cols = Math.ceil(size / density) + 2
  for (let r = -1; r < rows; r++) {
    for (let c = -1; c < cols; c++) {
      const x = c * density + (r % 2 === 0 ? 0 : density / 2)
      const y = r * density
      cells.push(
        <g key={`${r}-${c}`} transform={`translate(${x} ${y})`} opacity={0.85}>
          <Hull span={density * 0.7} color={color} />
        </g>
      )
    }
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ display: 'block' }}
      aria-hidden="true"
    >
      <rect width={size} height={size} fill="#F4F1EB" />
      {cells}
    </svg>
  )
}
