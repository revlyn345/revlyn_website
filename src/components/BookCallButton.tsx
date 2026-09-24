// "Book a call" button that opens the HubSpot meeting calendar in a popup
// on the same page, instead of sending people to another tab.
import { useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const MEETING_URL = "https://meetings.hubspot.com/rishabh52/discovery-call-with-revlyn?embed=true";

export function BookCallButton({ className, children }: { className?: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button type="button" className={className}>
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] w-[calc(100%-1.5rem)] max-w-4xl overflow-hidden rounded-[2rem] border-2 border-ink/10 bg-cream p-0 sm:rounded-[2rem]">
        <div className="px-6 pb-2 pt-6 pr-14 sm:px-8 sm:pt-8">
          <DialogTitle className="font-display text-2xl font-bold sm:text-3xl">Book a discovery call</DialogTitle>
          <DialogDescription className="mt-1 text-ink/65">Pick a time that suits you. You will get a confirmation straight away.</DialogDescription>
        </div>
        {/* Only load the calendar once the popup is opened, so pages stay fast. */}
        {open && (
          <iframe
            src={MEETING_URL}
            title="Book a discovery call with Revlyn"
            className="h-[70vh] min-h-[560px] w-full border-0 bg-background"
          />
        )}
      </DialogContent>
    </Dialog>
  );
}