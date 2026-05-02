// Baidarka Labs — Open Fleet design system
// Frameless. The hulls alone do the work.
//
// The hull silhouette is a 190-byte SVG path provided by Boyd. Used VERBATIM.
// Path is authored horizontally in viewBox 0 0 964 156:
//   - LEFT end (x≈5..50, squared body at x=50): stern + thin tail protrusion
//   - RIGHT end (x≈914..959, pointed body taper): bow + fine needle
// Visual centroid: (482, 78). Body width: ~954, body height: ~56.
//
// To climb the slope, we rotate -23° around the centroid. The bow then
// points UP-RIGHT and the stern trails DOWN-LEFT — the brand's signature
// slope-climbing posture.

const TILT_DEG = 23;
const TILT_RAD = (TILT_DEG * Math.PI) / 180;

// 190 bytes. Verbatim.
const HULL_PATH =
  "M959 75H924l-10-7c-250-68-650-68-864-18v25h-45a5 3 0 0 0 0 6H50v25c214 50 614 50 864-18l10-7H959a5 3 0 0 0 0-6";

const HULL_W = 954;          // visible horizontal extent (5..959)
const HULL_H = 56;            // body vertical extent (50..106)
const HULL_CX = 482;          // centroid x in source coords
const HULL_CY = 78;           // centroid y in source coords

// <Hull span depth color tilt transform />
// Renders the canonical hull. `tilt` (degrees, default 23) controls the
// slope angle — passing a different value lets a fleet of hulls drift
// off-axis from each other ("organic" formation). `depth` overrides
// vertical scale (uniform if omitted, preserving natural aspect ratio).
//
// `transform` is appended OUTSIDE so callers position the tilted hull
// in the parent's coordinate system.
function Hull({ span = 130, depth, color = "#0E1733", tilt = TILT_DEG, transform }) {
  const sx = span / HULL_W;
  const sy = depth != null ? depth / HULL_H : sx;
  const inner = `rotate(${-tilt}) scale(${sx} ${sy}) translate(${-HULL_CX} ${-HULL_CY})`;
  return (
    <g transform={transform}>
      <g transform={inner}>
        <path d={HULL_PATH} fill={color} />
      </g>
    </g>
  );
}

// =============================================================================
// FORMATION HELPERS — offsets in slope-aligned coordinates
// =============================================================================
// In the rotated hull frame (after our -23°), the slope axis runs from
// lower-left (stern) to upper-right (bow). Helpers compute parent-frame
// translations for "perpendicular to slope" and "along slope" offsets.

const SIN_T = Math.sin(TILT_RAD);
const COS_T = Math.cos(TILT_RAD);

// Perpendicular to slope. Positive d = uphill (up-and-to-the-left).
function perpOffset(d) {
  return `translate(${-SIN_T * d} ${-COS_T * d})`;
}
// Along slope. Positive d = forward (toward bow, up-and-to-the-right).
function alongOffset(d) {
  return `translate(${COS_T * d} ${-SIN_T * d})`;
}
// Combined: a units along + p units perpendicular.
function slopeOffset(along, perp) {
  const dx = COS_T * along - SIN_T * perp;
  const dy = -SIN_T * along - COS_T * perp;
  return `translate(${dx} ${dy})`;
}

// =============================================================================
// MARK FAMILY — frameless variations
// =============================================================================

// MarkOF — "Open Fleet" canonical: three kayaks on water. Center hull holds
// the canonical 23° slope axis; the other two drift slightly off-axis,
// off-position, and off-scale — like real boats in loose formation.
// Same direction of travel, but not a Photoshop'd pattern.
function MarkOF({ color = "#0E1733", size = 200 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <g transform="translate(100 100)">
        {/* Top boat: shorter, lower tilt, drifted forward & to the side */}
        <Hull span={108} color={color} tilt={11}
              transform={slopeOffset(-6, -38)} />
        {/* Center boat: anchor — full length, canonical 23° */}
        <Hull span={138} color={color} tilt={23} />
        {/* Bottom boat: shorter, lowest tilt, drifted behind */}
        <Hull span={104} color={color} tilt={6}
              transform={slopeOffset(-22, 32)} />
      </g>
    </svg>
  );
}

// MarkOFv — V-formation. Long lead at canonical 23°; flankers drift slightly
// off-tilt and trail behind on either side. V opens downhill toward the wake.
function MarkOFv({ color = "#0E1733", size = 200 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <g transform="translate(100 100)">
        <Hull span={140} color={color} tilt={23} />
        <Hull span={92} color={color} tilt={15}
              transform={slopeOffset(-22, -32)} />
        <Hull span={88} color={color} tilt={29}
              transform={slopeOffset(-26, 30)} />
      </g>
    </svg>
  );
}

// MarkOFv2 — V-formation, REVERSED: lead scout pushed forward at canonical
// tilt; two trailing flankers drift slightly off-axis behind.
function MarkOFv2({ color = "#0E1733", size = 200 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <g transform="translate(100 100)">
        <Hull span={110} color={color} tilt={23}
              transform={alongOffset(28)} />
        <Hull span={86} color={color} tilt={17}
              transform={slopeOffset(-20, -28)} />
        <Hull span={92} color={color} tilt={28}
              transform={slopeOffset(-24, 24)} />
      </g>
    </svg>
  );
}

// MarkOFs — Staggered open. Anchor at canonical 23°; two flanking boats
// drift off in opposite directions, each at its own tilt.
function MarkOFs({ color = "#0E1733", size = 200 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <g transform="translate(100 100)">
        <Hull span={104} color={color} tilt={12}
              transform={slopeOffset(-30, -30)} />
        <Hull span={114} color={color} tilt={23} />
        <Hull span={102} color={color} tilt={31}
              transform={slopeOffset(28, 28)} />
      </g>
    </svg>
  );
}

// MarkOFs2 — Fleet abreast. Three boats side-by-side, center anchor at 23°,
// flankers fanning slightly outward.
function MarkOFs2({ color = "#0E1733", size = 200 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <g transform="translate(100 100)">
        <Hull span={92} color={color} tilt={14}
              transform={perpOffset(-34)} />
        <Hull span={130} color={color} tilt={23} />
        <Hull span={94} color={color} tilt={32}
              transform={perpOffset(34)} />
      </g>
    </svg>
  );
}

// MarkOF5 — five kayaks on water (one per FRO research domain). Each boat
// at a slightly different tilt, length, and offset — heading the same
// direction but never in lockstep. The most ceremonial mark; reads like
// a fleet of real research vessels, not a parade.
function MarkOF5({ color = "#0E1733", size = 200 }) {
  // Pre-baked drift per boat. Each entry: {span, tilt, along, perp}.
  const fleet = [
    { span: 86,  tilt: 8,  along: 8,   perp: -56 },
    { span: 108, tilt: 19, along: -4,  perp: -28 },
    { span: 132, tilt: 23, along: 0,   perp: 0   }, // anchor
    { span: 100, tilt: 14, along: -16, perp: 26  },
    { span: 92,  tilt: 5,  along: 4,   perp: 54  },
  ];
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <g transform="translate(100 100)">
        {fleet.map((b, i) => (
          <Hull key={i} span={b.span} tilt={b.tilt} color={color}
                transform={slopeOffset(b.along, b.perp)} />
        ))}
      </g>
    </svg>
  );
}

// MarkSingle — solo glyph (bullet, divider, fallback favicon).
function MarkSingle({ color = "#0E1733", size = 200 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <g transform="translate(100 100)">
        <Hull span={170} color={color} />
      </g>
    </svg>
  );
}

// MarkTick — slim slash for inline rhythm. Uses an explicit narrow depth.
function MarkTick({ color = "#0E1733", size = 200 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <g transform="translate(100 100)">
        <Hull span={170} depth={5} color={color} />
      </g>
    </svg>
  );
}

// MarkPatternSwatch — tiling unit for backgrounds.
function MarkPatternSwatch({ color = "#0E1733", size = 320, density = 80 }) {
  const cells = [];
  const rows = Math.ceil(size / density) + 2;
  const cols = Math.ceil(size / density) + 2;
  for (let r = -1; r < rows; r++) {
    for (let c = -1; c < cols; c++) {
      const x = c * density + (r % 2 === 0 ? 0 : density / 2);
      const y = r * density;
      cells.push(
        <g key={`${r}-${c}`} transform={`translate(${x} ${y})`} opacity="0.85">
          <Hull span={density * 0.7} color={color} />
        </g>
      );
    }
  }
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <rect width={size} height={size} fill="#F4F1EB" />
      {cells}
    </svg>
  );
}

Object.assign(window, {
  Hull,
  MarkOF, MarkOFv, MarkOFv2, MarkOFs, MarkOFs2, MarkOF5,
  MarkSingle, MarkTick, MarkPatternSwatch,
});
