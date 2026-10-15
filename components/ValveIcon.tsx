// Simple line-art valve mark used for the logo and product cards.
export function ValveIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 8h20" />
      <path d="M24 8v10" />
      <path d="M4 24h6M38 24h6" />
      <path d="M10 18v12M38 18v12" />
      <path d="M10 24l10-6v12z" />
      <path d="M38 24l-10-6v12z" />
      <circle cx="24" cy="24" r="4" />
    </svg>
  );
}
