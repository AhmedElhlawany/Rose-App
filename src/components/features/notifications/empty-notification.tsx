
import { BellOff } from "lucide-react";

export default function EmptyNotifications() {
  // Translation

  return (
    <section
      role="status"
      aria-live="polite"
      aria-label="Empty notifications"
      className="flex flex-col items-center gap-5 text-[#71717a] dark:text-[#a1a1aa] py-10 border-t border-t-[#d4d4d8] dark:border-t-[#52525b]"
    >
      <BellOff size={50} aria-hidden="true" focusable="false" />

      <p className="text-sm">No notifications to display.</p>
    </section>
  );
}
