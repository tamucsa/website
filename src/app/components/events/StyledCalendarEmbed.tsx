"use client";

import React, { useState } from "react";

export default function StyledCalendarEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full">
      {/* Frame wrapper with specified Tailwind heights; overflow-hidden prevents visual overlap */}
      <div className="relative w-full max-w-4xl mx-auto h-[50vh] sm:h-185 overflow-hidden">
        {/* Spinner overlay centered within the wrapper (not viewport-fixed) */}
        {!loaded && (
          <div className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full border-4 border-t-primary border-gray-200 animate-spin" />
            <div className="mt-3 text-sm text-gray-500">Loading calendar…</div>
          </div>
        )}

        <iframe
          src="https://embed.styledcalendar.com/#sT0DkMbkqE91fqfz5gle"
          title="Styled Calendar"
          className={`styled-calendar-container w-full h-full transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ border: 'none' }}
          data-cy="calendar-embed-iframe"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
}
