import VerifyAndComplete from "@/components/pay/verify-and-complete"

export default function PayPage({
  searchParams,
}: {
  searchParams: { asset?: string; tier?: string; price?: string }
}) {
  const asset = searchParams.asset ?? "USDT"
  const tier = searchParams.tier ?? "25,000"
  const price = searchParams.price ?? "50"

  const address = "TRquBFHN3nr5HF4tm1JxRP1En6e139kyT5" // official TRC20 address

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <VerifyAndComplete asset={asset} tier={tier} price={price} address={address} />
    </main>
  )
}
