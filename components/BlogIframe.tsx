"use client";
import { useEffect, useRef, useState } from "react";

interface BlogIframeProps {
  src: string;
}

export default function BlogIframe({ src }: BlogIframeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(1500);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    function tryResize() {
      try {
        // Only works when iframe is same-origin (same domain)
        const body = iframe?.contentDocument?.body;
        const html = iframe?.contentDocument?.documentElement;
        if (body && html) {
          const newHeight = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.scrollHeight,
            html.offsetHeight
          );
          if (newHeight > 200) setHeight(newHeight + 40);
        }
      } catch {
        // Cross-origin: silently fall back to fixed height
      }
    }

    function onLoad() {
      setLoaded(true);
      tryResize();
      // Re-check after images/fonts settle
      setTimeout(tryResize, 500);
      setTimeout(tryResize, 1500);
    }

    iframe.addEventListener("load", onLoad);
    return () => iframe.removeEventListener("load", onLoad);
  }, []);

  return (
    <div className="relative">
      {/* Loading skeleton */}
      {!loaded && (
        <div className="flex flex-col items-center justify-center py-24 gap-4 text-[#6c757d]">
          <div className="w-10 h-10 border-4 border-[#e9ecef] border-t-[#2a4861] rounded-full animate-spin" />
          <p className="text-sm">Loading blog...</p>
        </div>
      )}

      <iframe
        ref={iframeRef}
        src={src}
        style={{
          width: "100%",
          height: `${height}px`,
          border: 0,
          display: loaded ? "block" : "none",
        }}
        title="Chuck E Electrical Blog"
        loading="lazy"
      />
    </div>
  );
}