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
      {/* Fixed height that fits the screen; the calendar fills the rest and scrolls inside itself. */}
      <DialogContent className="flex h-[92dvh] max-h-[92dvh] w-[calc(100%-1rem)] max-w-4xl flex-col gap-0 overflow-hidden rounded-[2rem] border-2 border-ink/10 bg-cream p-0 sm:h-[85vh] sm:rounded-[2rem]">
        <div className="shrink-0 px-5 pb-3 pr-14 pt-5 sm:px-8 sm:pb-4 sm:pt-8">
          <DialogTitle className="font-display text-xl font-bold sm:text-3xl">Book a discovery call</DialogTitle>
          <DialogDescription className="sr-only sm:not-sr-only sm:mt-1 sm:block sm:text-ink/65">
            Pick a time that suits you. You will get a confirmation straight away.
          </DialogDescription>
        </div>
        {/* Only load the calendar once the popup is opened, so pages stay fast. */}
        {open && (
          <iframe
            src={MEETING_URL}
            title="Book a discovery call with Revlyn"
            className="min-h-0 w-full flex-1 border-0 bg-background"
          />
        )}
      </DialogContent>
    </Dialog>
  );
}