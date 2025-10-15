import Image from "next/image"
import usdtHero from "@/public/assets/hero/usdt-3d.png"
import bnbHero from "@/public/assets/hero/bnb-3d.png"
import ethHero from "@/public/assets/hero/eth-3d.png"

export function PartnerLogos() {
  const logos = [
    { alt: "USDT", src: usdtHero },
    { alt: "BNB", src: bnbHero },
    { alt: "Ethereum", src: ethHero },
  ]

  return (
    <div className="grid grid-cols-3 gap-6 items-center">
      {logos.map((l) => (
        <div
          key={l.alt}
          className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity"
          aria-label={`${l.alt} logo`}
        >
          <Image
            src={l.src || "/placeholder.svg"}
            alt={`${l.alt} logo`}
            width={140}
            height={140}
            className="object-contain drop-shadow-[0_6px_24px_rgba(212,175,55,0.2)]"
            priority
          />
        </div>
      ))}
    </div>
  )
}
