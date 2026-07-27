"use client";

import { useState, useTransition } from "react";
import { CheckCircle2, Circle } from "lucide-react";

export function ProgressCheckbox({
  moduleId,
  initialCompleted,
}: {
  moduleId: number;
  initialCompleted: boolean;
}) {
  const [completed, setCompleted] = useState(initialCompleted);
  const [isPending, startTransition] = useTransition();

  function toggle() {
    const next = !completed;
    setCompleted(next);
    startTransition(async () => {
      const res = await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ moduleId, completed: next }),
      });
      if (!res.ok) setCompleted(!next);
    });
  }

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={isPending}
      className="flex items-center gap-2.5 rounded-full border border-cream/15 px-5 py-2.5 text-sm font-medium text-cream/80 transition hover:border-gold/40 disabled:opacity-60"
    >
      {completed ? (
        <CheckCircle2 className="h-5 w-5 text-gold" />
      ) : (
        <Circle className="h-5 w-5" />
      )}
      {completed ? "Completed" : "Mark as complete"}
    </button>
  );
}
