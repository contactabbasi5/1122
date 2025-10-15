import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PartnerLogos } from "@/components/partner-logos"
import { NotificationPopups } from "@/components/notification-popups"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import powerhouseImg from "@/public/images/royal-flash-powerhouse.png"

export default function HomePage() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Removed the absolute gradient overlay div */}
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-10 md:pt-28 md:pb-16">
          <div className="flex flex-col items-center text-center gap-6">
            {/* Replaced pill with auto-scrolling marquee */}
            <div className="w-full max-w-2xl overflow-hidden rounded-full border border-white/10 bg-black/60 backdrop-blur">
              <div className="marquee-track text-sm py-2 text-primary/80">
                <span className="px-4">Multi-Chain Support</span>
                <span className="px-4">Get Flash USDT Instantly</span>
                <span className="px-4">Developer Opportunities</span>
                <span className="px-4">Transaction Tracking</span>
                <span className="px-4">Transaction Verification</span>
                {/* duplicate for smooth loop */}
                <span className="px-4">Multi-Chain Support</span>
                <span className="px-4">Get Flash USDT Instantly</span>
                <span className="px-4">Developer Opportunities</span>
                <span className="px-4">Transaction Tracking</span>
                <span className="px-4">Transaction Verification</span>
              </div>
            </div>

            {/* Updated headline text */}
            <h1 className="text-balance text-4xl md:text-6xl font-semibold tracking-tight">Royal Flash Usdt</h1>

            {/* Moved Partner logos below headline */}
            <div className="w-full max-w-3xl">
              <p className="text-center text-sm text-muted-foreground mb-3">Works seamlessly with leading platforms</p>
              <PartnerLogos />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Button asChild size="lg" className="premium-btn">
                <Link href="/get">GET Flash USDT</Link>
              </Button>
              {/* Updated Telegram link target across site */}
              <Button asChild size="lg" variant="outline" className="border-primary/40 bg-transparent">
                <Link href="https://t.me/Qxsof" target="_blank" rel="noopener noreferrer">
                  Contact Support on Telegram
                </Link>
              </Button>
            </div>

            {/* Moved the long hero paragraph below buttons and arranged in a card/box */}
            <div className="w-full max-w-3xl mt-6">
              {/* Switched to next/image static import to ensure path-safe bundling */}
              <Image
                src={powerhouseImg || "/placeholder.svg"}
                alt="Royal Flash USDT Powerhouse visual"
                className="mb-4 w-full max-h-64 object-contain rounded-xl border border-border/60 shadow"
                placeholder="empty"
                priority
              />
              <Card className="bg-card/70 border-border/60 shadow-md">
                <CardContent className="p-6 text-left">
                  <h3 className="text-lg font-semibold mb-2">Your Instant Crypto Powerhouse</h3>
                  <p className="text-pretty text-muted-foreground md:text-base">
                    Royal Flash: Your Instant Crypto Powerhouse Welcome to Royal Flash USDT—the cutting-edge solution
                    for instant crypto liquidity! We let you "flash" a powerful suite of assets—USDT, USDC, Bitcoin,
                    Ethereum, and BNB—right into your wallet for immediate, anonymous access. Experience high-speed
                    transactions that supposedly last for up to 365 days, giving you maximum, temporary power for
                    risk-free transfers. Choose your package today and seize instant crypto freedom!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 pb-12 md:pb-16 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Instant Settlement",
            desc: "Lightning-fast availability with premium routing and confirmations.",
          },
          {
            title: "Institutional Trust",
            desc: "Bank‑grade security posture with transparent audit trails.",
          },
          {
            title: "Global Coverage",
            desc: "Optimized for major exchanges and betting platforms worldwide.",
          },
        ].map((f) => (
          <Card key={f.title} className="bg-card/70 border-border/60 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
              <div className="mt-4">
                <Button asChild variant="link" className="px-0 text-primary">
                  <Link href="/get">GET Flash USDT</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Support */}
      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-28">
        {/* Removed gradient from support box for pure black theme */}
        <div className="rounded-2xl border border-border/60 bg-card p-8 md:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-balance">White‑glove Support</h2>
              <p className="text-muted-foreground mt-2">
                Need a custom package or integration help? Our team is available 24/7.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild size="lg" className="premium-btn">
                <Link href="/get">GET Flash USDT</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="https://t.me/Qxsof" target="_blank" rel="noopener noreferrer">
                  Telegram Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-6 pb-12 grid gap-6 md:grid-cols-3">
        {[
          {
            name: "Alex P.",
            text: "Fast fulfillment and clear guidance. Worked across our exchange flow without friction.",
          },
          {
            name: "CryptoDesk",
            text: "Reliable and professional. Support was responsive and the delivery timing was on point.",
          },
          { name: "Mina", text: "Great experience. Transparent pricing and smooth usage across platforms." },
        ].map((r) => (
          <Card key={r.name} className="bg-card/70 border-border/60 shadow-md">
            <CardContent className="p-6">
              <p className="text-pretty text-base">{r.text}</p>
              <p className="mt-4 text-sm text-muted-foreground">— {r.name}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* About Us */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-2xl border border-border/60 bg-card p-8 md:p-10 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-pretty text-muted-foreground">
            Tired of waiting? At Royal Flash, we don&apos;t just follow the crypto market—we redefine it! We&apos;re the
            leading provider of the cutting-edge digital currency solution that translates your aspirations into
            immediate reality. Forget slow, traditional transactions; our powerful platform gives you the Royal Flash
            Advantage, allowing you to instantly boost your balance with a suite of top-tier assets: USDT, USDC,
            Bitcoin, Ethereum, and BNB!
          </p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">What We Offer:</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                <span className="font-medium">Instant Balance Enhancement:</span> Use our secure, advanced site to
                &quot;flash&quot; the crypto of your choice directly into your wallet.
              </li>
              <li>
                <span className="font-medium">Maximum Anonymity:</span> Engineered for privacy, our solutions ensure
                your transactions remain secure and untraceable.
              </li>
              <li>
                <span className="font-medium">The 365-Day Power Play:</span> Experience immediate liquidity with funds
                that supposedly last for up to a full year!
              </li>
            </ul>
          </div>
          <p className="text-pretty text-muted-foreground mt-6">
            Whether you&apos;re a seasoned enthusiast or just starting out, our seamless, user-friendly website is
            designed for guaranteed results. Our expert team works tirelessly, providing you with the innovative tools
            and reliable support you need to maximize your portfolio&apos;s potential.
          </p>
          <p className="text-pretty mt-4">
            <span className="font-semibold">Don&apos;t just trade—transform!</span> Choose Royal Flash for a fast,
            secure, and revolutionary way to enhance your crypto holdings and stay ahead in the digital world.
            <br />
            <span className="font-semibold">Royal Flash: Instant Crypto. Maximum Impact.</span>
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="bg-card/60 rounded-xl border border-border/60">
          {/* Updated platforms FAQ */}
          <AccordionItem value="item-1">
            <AccordionTrigger>How fast is delivery?</AccordionTrigger>
            <AccordionContent>
              Delivery is typically near‑instant after payment verification. For large packages, allow a short
              processing window.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Which platforms and wallets are supported?</AccordionTrigger>
            <AccordionContent>All platforms and all Web3 wallets are supported.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do I get support?</AccordionTrigger>
            <AccordionContent>Use the Telegram buttons or reach us at t.me/Qxsof. We operate 24/7.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How long do flashed assets last?</AccordionTrigger>
            <AccordionContent>
              Flashed assets are designed to have an extended presence that can last up to 365 days, depending on
              package and usage conditions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How do I verify my transaction?</AccordionTrigger>
            <AccordionContent>
              Submit your transaction ID on the payment page after sending the gas fee. You can also track status with
              the on‑chain transaction hash and our built‑in processing steps.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Which digital assets can I flash?</AccordionTrigger>
            <AccordionContent>
              USDT, USDC, Bitcoin (BTC), Ethereum (ETH), and BNB are available with multiple package tiers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Animated purchase notifications */}
      <NotificationPopups />
    </main>
  )
}
