import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import powerhouseImg from "@/public/images/royal-flash-powerhouse.png"

const assets = [
  { key: "usdt", label: "Flash USDT" },
  { key: "usdc", label: "Flash USDC" },
  { key: "btc", label: "Flash Bitcoin" },
  { key: "eth", label: "Flash Ethereum" },
  { key: "bnb", label: "Flash BNB" },
]

export default function GetHubPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 md:py-16">
      <div className="mb-8 md:mb-12 flex justify-center">
        <Image
          src={powerhouseImg || "/placeholder.svg"}
          alt="Royal Flash emblem for Royal Flash USDT"
          className="h-20 md:h-24 w-auto rounded-lg shadow-md ring-1 ring-border/60"
          width={160}
          height={96}
          priority
        />
      </div>

      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold">Choose your asset</h1>
        <p className="text-muted-foreground mt-2">Select a Flash asset to view premium packages</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {assets.map((a) => (
          <Card key={a.key} className="bg-card/70 border-border/60 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{a.label}</h3>
                <p className="text-sm text-muted-foreground">Best value and exclusive offers</p>
              </div>
              <Button asChild className="premium-btn">
                <Link href={`/get/${a.key}`}>Get {a.label.split(" ")[1]}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
