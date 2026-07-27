"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export function BuyButton({ className = "" }: { className?: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className={`inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 font-semibold text-ink shadow-lg shadow-gold/20 transition hover:brightness-110 disabled:opacity-70 ${className}`}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {loading ? "Redirecting to checkout…" : "Enroll Now — $997"}
      </button>
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
}
