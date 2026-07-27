import { Lock, Play } from "lucide-react";
import type { VideoSource } from "@/lib/modules";

export function VideoPlayer({ source }: { source: VideoSource }) {
  switch (source.provider) {
    case "placeholder":
      return (
        <div className="relative flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-xl border border-gold/20 bg-ink-soft">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient">
            <Play className="h-6 w-6 fill-ink text-ink" />
          </div>
          <p className="font-display text-lg text-cream/90">{source.title}</p>
          <p className="flex items-center gap-1.5 text-sm text-cream/50">
            <Lock className="h-3.5 w-3.5" />
            Video coming soon
          </p>
        </div>
      );
    default:
      return (
        <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-gold/20 bg-ink-soft text-cream/60">
          Video provider not configured.
        </div>
      );
  }
}
