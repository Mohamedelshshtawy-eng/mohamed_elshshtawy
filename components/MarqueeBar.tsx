import { useEffect, useRef ,useState} from "react"
import gsap from "gsap"

const companies = ["Node js","Spring boot","Nest js","Express js","Golang","Next js" ,"React js","Docker","Kubernetes","Aws"]

export default function MarqueeBar() {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!hasMounted || !containerRef.current || !contentRef.current) return

    const distance = contentRef.current.offsetWidth / 2

    const animation = gsap.to(contentRef.current, {
      x: `-=${distance}`,
      duration: 15,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % distance),
      },
    })

    return () => {
        animation.kill()
    }
  }, [hasMounted])

  // 👇 امنع الرندر قبل التأكد إننا على المتصفح
  if (!hasMounted) return null

  return (
    <div ref={containerRef} className="absolute bottom-0 left-0 right-0 bg-black/90 overflow-hidden py-3 z-50 border-t border-cyan-500">
      <div
        ref={contentRef}
        className="flex gap-12 text-cyan-300 text-lg sm:text-xl md:text-2xl font-semibold whitespace-nowrap w-max"
      >
        {[...companies, ...companies].map((company, i) => (
          <span key={i} className="px-4">
            {company}
          </span>
        ))}
      </div>
    </div>
  )
}

