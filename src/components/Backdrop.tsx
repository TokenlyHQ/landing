import { useEffect, useRef } from 'react'

const CELL = 48
const INK = '15, 15, 20'
const ACCENT = '200, 65, 65'

/**
 * Plain Tokenly backdrop: soft box-tile grid that brightens near the cursor.
 */
export function Backdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 }
    let width = 0
    let height = 0
    let rafId = 0

    const fit = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      if (!reducedMotion) {
        mouse.x += (mouse.tx - mouse.x) * 0.12
        mouse.y += (mouse.ty - mouse.y) * 0.12
      }

      const cols = Math.ceil(width / CELL) + 1
      const rows = Math.ceil(height / CELL) + 1
      const radius = CELL * 4.5

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const x = col * CELL
          const y = row * CELL
          const cx = x + CELL / 2
          const cy = y + CELL / 2
          const dx = cx - mouse.x
          const dy = cy - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const influence = Math.max(0, 1 - dist / radius)
          const pad = 5
          const size = CELL - pad * 2

          const baseAlpha = 0.035 + influence * 0.08
          ctx.strokeStyle = `rgba(${INK}, ${baseAlpha})`
          ctx.lineWidth = 1
          ctx.strokeRect(x + pad, y + pad, size, size)

          if (influence > 0.08) {
            ctx.strokeStyle = `rgba(${ACCENT}, ${influence * 0.22})`
            ctx.lineWidth = 1 + influence * 1.2
            ctx.strokeRect(x + pad, y + pad, size, size)

            if (influence > 0.45) {
              ctx.fillStyle = `rgba(${ACCENT}, ${influence * 0.06})`
              ctx.fillRect(x + pad, y + pad, size, size)
            }
          }
        }
      }
    }

    const onMove = (event: PointerEvent) => {
      mouse.tx = event.clientX
      mouse.ty = event.clientY
    }

    const onLeave = () => {
      mouse.tx = -9999
      mouse.ty = -9999
    }

    const onResize = () => {
      fit()
      draw()
    }

    fit()
    draw()

    window.addEventListener('resize', onResize)
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave)

    if (reducedMotion) {
      return () => {
        window.removeEventListener('resize', onResize)
        window.removeEventListener('pointermove', onMove)
        window.removeEventListener('pointerleave', onLeave)
      }
    }

    const frame = () => {
      draw()
      rafId = requestAnimationFrame(frame)
    }
    rafId = requestAnimationFrame(frame)

    const onVisibility = () => {
      cancelAnimationFrame(rafId)
      if (!document.hidden) rafId = requestAnimationFrame(frame)
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,transparent_30%,#fafaf9_78%)]" />
    </div>
  )
}
