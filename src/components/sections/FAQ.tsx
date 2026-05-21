"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

export function FAQ({ items, title = "Frequently Asked Questions" }: { items: FAQItem[]; title?: string }) {
  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">{title}</h2>
      <Accordion.Root type="single" collapsible className="mt-8 divide-y divide-ink-200 border-y border-ink-200">
        {items.map((item, i) => (
          <Accordion.Item key={i} value={`item-${i}`} className="py-1">
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-ink-900 hover:text-brand-600 sm:text-lg">
                <span>{item.q}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-ink-500 transition-transform group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden text-sm text-ink-600 data-[state=closed]:animate-[acc-close_0.18s_ease] data-[state=open]:animate-[acc-open_0.18s_ease] sm:text-base">
              <div className="pb-4 pr-9 leading-relaxed">{item.a}</div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
