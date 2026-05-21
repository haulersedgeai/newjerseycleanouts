import Link from "next/link";
import { Phone, MessageSquare, Calculator } from "lucide-react";
import { SITE } from "@/lib/site";

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-ink-200 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)] lg:hidden">
      <a
        href={SITE.phone.link}
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-[11px] font-semibold text-ink-900 hover:bg-brand-50"
      >
        <Phone className="h-5 w-5 text-brand-600" />
        Call
      </a>
      <a
        href={SITE.phone.sms}
        className="flex flex-col items-center justify-center gap-0.5 border-x border-ink-200 py-2.5 text-[11px] font-semibold text-ink-900 hover:bg-brand-50"
      >
        <MessageSquare className="h-5 w-5 text-brand-600" />
        Text
      </a>
      <Link
        href="/get-a-quote"
        className="flex flex-col items-center justify-center gap-0.5 bg-brand-600 py-2.5 text-[11px] font-semibold text-white"
      >
        <Calculator className="h-5 w-5" />
        Free Quote
      </Link>
    </div>
  );
}
