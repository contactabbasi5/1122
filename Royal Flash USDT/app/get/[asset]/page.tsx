import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import usdtGet from "@/public/assets/get/usdt.png"
import usdcGet from "@/public/assets/get/usdc.png"
import btcGet from "@/public/assets/get/btc.png"
import ethGet from "@/public/assets/get/eth.png"
import bnbGet from "@/public/assets/get/bnb.png"

type Package = { tier: string; price: number; exclusive?: boolean }

const fiatLike = [
  { tier: "25,000", price: 50 },
  { tier: "55,000", price: 99 },
  { tier: "125,000", price: 199 },
  { tier: "250,000", price: 299 },
  { tier: "550,000", price: 499, exclusive: true },
] satisfies Package[]

const btc = [
  { tier: "0.4 BTC", price: 50 },
  { tier: "1 BTC", price: 99 },
  { tier: "2 BTC", price: 199 },
  { tier: "5 BTC", price: 299 },
  { tier: "15 BTC", price: 499, exclusive: true },
] satisfies Package[]

const eth = [
  { tier: "5 ETH", price: 50 },
  { tier: "11 ETH", price: 99 },
  { tier: "25 ETH", price: 199 },
  { tier: "50 ETH", price: 299 },
  { tier: "150 ETH", price: 499, exclusive: true },
] satisfies Package[]

const bnb = [
  { tier: "25 BNB", price: 50 },
  { tier: "55 BNB", price: 99 },
  { tier: "125 BNB", price: 199 },
  { tier: "250 BNB", price: 299 },
  { tier: "550 BNB", price: 499, exclusive: true },
] satisfies Package[]

const TABLE: Record<string, { title: string; short: string; packages: Package[] }> = {
  usdt: { title: "Flash USDT", short: "USDT", packages: fiatLike },
  usdc: { title: "Flash USDC", short: "USDC", packages: fiatLike },
  btc: { title: "Flash Bitcoin", short: "BTC", packages: btc },
  eth: { title: "Flash Ethereum", short: "ETH", packages: eth },
  bnb: { title: "Flash BNB", short: "BNB", packages: bnb },
}

export default function AssetPackagesPage({
  params,
}: {
  params: { asset: string }
}) {
  const entry = TABLE[params.asset?.toLowerCase()]
  if (!entry) return notFound()

  const images: Record<string, any> = {
    usdt: usdtGet,
    usdc: usdcGet,
    btc: btcGet,
    eth: ethGet,
    bnb: bnbGet,
  }
  const assetKey = params.asset?.toLowerCase()
  const heroSrc = images[assetKey] || "/placeholder.svg"

  return (
    <main className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className="flex items-center justify-center mb-6">
        <Image
          src={heroSrc || "/placeholder.svg"}
          alt={`${entry.title} image`}
          width={220}
          height={220}
          className="object-contain drop-shadow-[0_10px_40px_rgba(212,175,55,0.25)]"
          priority
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">{entry.title} Packages</h1>
          <p className="text-muted-foreground mt-2">
            Choose a package that fits your needs. Exclusive offers provide the best rate.
          </p>
        </div>
        <Button asChild size="lg" className="premium-btn">
          <Link href="/get">Switch Asset</Link>
        </Button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {entry.packages.map((p) => (
          <Card key={p.tier} className="bg-card/70 border-border/60 hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">{p.tier}</h3>
                {p.exclusive ? <Badge className="bg-accent text-accent-foreground">Exclusive Offer</Badge> : null}
              </div>
              <p className="text-muted-foreground mt-1">Flat gas fee</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-semibold">${p.price}</span>
                <span className="text-muted-foreground">USDT TRC20</span>
              </div>

              <div className="mt-6">
                <Button asChild className="premium-btn w-full">
                  <Link
                    href={`/pay?asset=${encodeURIComponent(entry.short)}&tier=${encodeURIComponent(p.tier)}&price=${p.price}`}
                  >
                    Continue
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground">Need More? 1M, 10M, 100M — Contact us for bespoke pricing.</p>
        <div className="flex gap-3">
          <Button asChild variant="outline">
            <Link href="https://t.me/flash_support" target="_blank" rel="noopener noreferrer">
              Contact on Telegram
            </Link>
          </Button>
          <Button asChild>
            <Link href="/get">Back</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
