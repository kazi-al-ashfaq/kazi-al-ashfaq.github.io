"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 2200);
    const remove = setTimeout(() => setLoading(false), 2700);
    return () => {
      clearTimeout(timer);
      clearTimeout(remove);
    };
  }, []);
  if (!loading) return null;
  return (
    <div
      className={`wlan-search${fade ? " wlan-fade" : ""}`}
      role="status"
      aria-label="Loading"
      aria-live="polite"
    >
      <div>
        <svg className="top" viewBox="0 0 40 40">
          <path d="M4,14 C9.3,10 14.6,8 20,8 C25.3,8 30.6,10 36,14"></path>
        </svg>
        <svg className="middle" viewBox="0 0 40 40">
          <path d="M9,19 C12.6,16.3 16.3,15 20,15 C23.6,15 27.3,16.3 31,19"></path>
        </svg>
        <svg className="bottom" viewBox="0 0 40 40">
          <path d="M13,24 C15.3,22.2 17.6,21.25 20,21.25 C22.3,21.25 24.6,22.2 27,24"></path>
        </svg>
        <div className="wlan-dot"></div>
      </div>
      <style>{`
        .wlan-search {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #1b1f27;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.5s;
          opacity: 1;
        }
        .wlan-fade {
          opacity: 0;
          pointer-events: none;
        }
        .wlan-search > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .wlan-search svg {
          width: 80px;
          height: 32px;
          fill: none;
          stroke: #ff5900;
          stroke-width: 3;
          stroke-linecap: round;
          stroke-dasharray: 60;
          stroke-dashoffset: 60;
          opacity: 0.7;
          animation: wlan-scan 1.2s cubic-bezier(.4, 0, .2, 1) infinite;
        }
        .wlan-search svg.middle {
          animation-delay: 0.2s;
        }
        .wlan-search svg.bottom {
          animation-delay: 0.4s;
        }
        @keyframes wlan-scan {
          0% {
            stroke-dashoffset: 60;
            opacity: 0.2;
          }
          40% {
            opacity: 1;
          }
          60% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.2;
          }
        }
        .wlan-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #00c0e0;
          margin-top: 10px;
          box-shadow: 0 0 16px #00c0e0, 0 0 2px #ff5900;
          animation: wlan-dot-pulse 1.2s cubic-bezier(.4, 0, .2, 1) infinite;
        }
        @keyframes wlan-dot-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.25);
            opacity: 1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .wlan-search svg,
          .wlan-dot {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}