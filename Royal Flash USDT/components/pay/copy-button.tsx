"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)
  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }
  return (
    <Button size="sm" variant="outline" onClick={onCopy}>
      {copied ? "Copied" : "Copy"}
    </Button>
  )
}
