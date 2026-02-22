import { useInView } from '../hooks/useInView'

/**
 * FadeIn — wraps children in a scroll-triggered fade+slide animation.
 * @param {string}  direction — 'up' | 'down' | 'left' | 'right' (default: 'up')
 * @param {number}  delay     — animation-delay in ms (default: 0)
 * @param {string}  className — extra classes on the wrapper
 */
export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  threshold = 0.15,
}) {
  const { ref, inView } = useInView({ threshold })

  const transforms = {
    up:    'translateY(32px)',
    down:  'translateY(-32px)',
    left:  'translateX(32px)',
    right: 'translateX(-32px)',
    none:  'none',
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    inView ? 1 : 0,
        transform:  inView ? 'none' : transforms[direction],
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}