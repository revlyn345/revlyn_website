import { useEffect, useRef } from "react";

export function MeetingsEmbed() {
  const loaded = useRef(false);
  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return <div className="meetings-iframe-container" data-src="https://meetings.hubspot.com/rishabh52/discovery-call-with-revlyn?embed=true" />;
}
