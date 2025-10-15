"use client"

import { useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { BellRing } from "lucide-react" // add icon

type Toast = {
  id: number
  text: string
}

const countries = [
  "London, UK",
  "Paris, France",
  "Berlin, Germany",
  "Istanbul, Türkiye",
  "Dubai, UAE",
  "New York, USA",
  "Lagos, Nigeria",
  "Johannesburg, South Africa",
  "Mumbai, India",
  "Singapore",
  "Seoul, South Korea",
  "Tokyo, Japan",
  "São Paulo, Brazil",
  "Toronto, Canada",
  "Sydney, Australia",
  "Rome, Italy",
  "Madrid, Spain",
  "Zurich, Switzerland",
  "Stockholm, Sweden",
  "Oslo, Norway",
  "Helsinki, Finland",
  "Copenhagen, Denmark",
  "Warsaw, Poland",
  "Prague, Czech Republic",
  "Vienna, Austria",
  "Lisbon, Portugal",
  "Athens, Greece",
  "Budapest, Hungary",
  "Riyadh, Saudi Arabia",
  "Doha, Qatar",
]

const usdtAmounts = ["25,000", "55,000", "125,000", "250,000", "550,000"]
const assets = ["Flash USDT", "Flash USDC", "Flash Bitcoin", "Flash Ethereum", "Flash BNB"]

function rand<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function NotificationPopups() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const counter = useMemo(() => ({ current: 1 }), [])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    function scheduleNext() {
      const delay = 10000 + Math.floor(Math.random() * 5000) // 10–15s
      timeout = setTimeout(() => {
        const amount = rand(usdtAmounts)
        const place = rand(countries)
        const asset = rand(assets)
        const text = `New Purchase! Someone from ${place} just purchased ${amount} ${asset}`
        const id = counter.current++
        setToasts((t) => [...t, { id, text }])

        // auto-dismiss after same window to keep cadence clean
        const hideDelay = delay
        setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), hideDelay)

        scheduleNext()
      }, delay)
    }

    scheduleNext()
    return () => clearTimeout(timeout)
  }, [counter])

  return (
    <div
      className="pointer-events-none fixed bottom-4 right-4 z-50 flex flex-col gap-3"
      aria-live="polite"
      aria-atomic="false"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "pointer-events-auto flex items-start gap-3 rounded-2xl border px-4 py-3 shadow-2xl",
            "border-[#d4af37]/40 bg-black/85 text-foreground backdrop-blur",
            "ring-1 ring-[#d4af37]/20",
            "animate-enter",
          )}
          role="status"
        >
          <div className="mt-0.5 text-[#d4af37]">
            <BellRing size={18} aria-hidden="true" />
          </div>
          <p className="text-sm font-medium leading-5">{toast.text}</p>
        </div>
      ))}
    </div>
  )
}
