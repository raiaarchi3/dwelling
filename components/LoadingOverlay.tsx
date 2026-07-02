"use client";

import { useEffect, useState } from "react";

interface LoaderProps {
  isVisible: boolean; // Add this line
  onFinish?: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {
  // Local safety state to make sure it can force-close itself
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false); // Hide locally
      if (onFinish) onFinish(); // Notify parent page
    }, 1200); // 1.2 seconds sharp

    return () => clearTimeout(timeout);
  }, [onFinish]);

  // If it's timed out, render absolutely nothing
  if (!isVisible) return null;

  return (
    <div className="realestate-loader-container">
      <style jsx global>{`
        .realestate-loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .realestate-loader-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .realestate-loader-content {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }

        .realestate-loader-icon-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .realestate-loader-house-svg {
          filter: drop-shadow(0 4px 12px rgba(59, 130, 246, 0.15));
        }

        .houseBase-path {
          stroke-dasharray: 190;
          stroke-dashoffset: 190;
          animation: drawBase 2s ease-in-out infinite;
        }

        .roof-path {
          stroke-dasharray: 120;
          stroke-dashoffset: 120;
          animation: drawRoof 2s ease-in-out infinite 0.3s;
        }

        .door-path {
          stroke-dasharray: 82;
          stroke-dashoffset: 82;
          animation: drawDoor 2s ease-in-out infinite 0.6s;
        }

        .window1-path {
          stroke-dasharray: 32;
          stroke-dashoffset: 32;
          animation: drawWindow1 2s ease-in-out infinite 0.9s;
        }

        .window2-path {
          stroke-dasharray: 32;
          stroke-dashoffset: 32;
          animation: drawWindow2 2s ease-in-out infinite 1.2s;
        }

        .keyGroup-path {
          animation: floatKeyPath 3s ease-in-out infinite;
          transform-origin: center;
        }

        .realestate-loader-dots {
          display: flex;
          gap: 6px;
          align-items: center;
          justify-content: center;
        }

        .realestate-loader-dot {
          width: 8px;
          height: 8px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          animation: pulseDotPath 1.4s ease-in-out infinite;
        }

        .realestate-loader-dot:nth-child(1) { animation-delay: 0s; }
        .realestate-loader-dot:nth-child(2) { animation-delay: 0.2s; }
        .realestate-loader-dot:nth-child(3) { animation-delay: 0.4s; }

        .realestate-loader-text {
          color: #374151;
          font-size: 16px;
          font-weight: 500;
          margin: 0;
          letter-spacing: 0.5px;
          background: linear-gradient(45deg, #374151, #6b7280);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes drawBase {
          0% { stroke-dashoffset: 190; opacity: 0.3; }
          50% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -190; opacity: 0.3; }
        }
        @keyframes drawRoof {
          0% { stroke-dashoffset: 120; opacity: 0.3; }
          50% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -120; opacity: 0.3; }
        }
        @keyframes drawDoor {
          0% { stroke-dashoffset: 82; opacity: 0.3; }
          50% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -82; opacity: 0.3; }
        }
        @keyframes drawWindow1 {
          0% { stroke-dashoffset: 32; opacity: 0.3; }
          50% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -32; opacity: 0.3; }
        }
        @keyframes drawWindow2 {
          0% { stroke-dashoffset: 32; opacity: 0.3; }
          50% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -32; opacity: 0.3; }
        }

        @keyframes floatKeyPath {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          25% { transform: translateY(-8px) rotate(3deg); opacity: 1; }
          50% { transform: translateY(-4px) rotate(0deg); opacity: 0.9; }
          75% { transform: translateY(-12px) rotate(-3deg); opacity: 1; }
        }

        @keyframes pulseDotPath {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.2); opacity: 1; }
        }

        @media (prefers-color-scheme: dark) {
          .realestate-loader-overlay {
            background: rgba(17, 24, 39, 0.95);
          }
          .realestate-loader-text {
            background: linear-gradient(45deg, #f3f4f6, #d1d5db);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        }
      `}</style>

      <div className="realestate-loader-overlay"></div>
      <div className="realestate-loader-content">
        <div className="realestate-loader-icon-container">
          <svg 
            className="realestate-loader-house-svg" 
            width="56" 
            height="56" 
            viewBox="0 0 100 100" 
            fill="none"
          >
            <rect x="25" y="45" width="50" height="45" stroke="#3b82f6" strokeWidth="2.5" fill="none" className="houseBase-path" />
            <path d="M15 50 L50 20 L85 50" stroke="#3b82f6" strokeWidth="2.5" fill="none" strokeLinejoin="round" className="roof-path" />
            <rect x="42" y="65" width="16" height="25" stroke="#3b82f6" strokeWidth="2" fill="none" className="door-path" />
            <rect x="30" y="55" width="8" height="8" stroke="#3b82f6" strokeWidth="1.5" fill="none" className="window1-path" />
            <rect x="62" y="55" width="8" height="8" stroke="#3b82f6" strokeWidth="1.5" fill="none" className="window2-path" />
            <g className="keyGroup-path">
              <circle cx="20" cy="25" r="4" stroke="#f59e0b" strokeWidth="2" fill="none" />
              <line x1="24" y1="25" x2="35" y2="25" stroke="#f59e0b" strokeWidth="2" />
              <line x1="32" y1="22" x2="32" y2="25" stroke="#f59e0b" strokeWidth="2" />
              <line x1="35" y1="22" x2="35" y2="28" stroke="#f59e0b" strokeWidth="2" />
            </g>
          </svg>
          
          <div className="realestate-loader-dots">
            <div className="realestate-loader-dot"></div>
            <div className="realestate-loader-dot"></div>
            <div className="realestate-loader-dot"></div>
          </div>
        </div>
        <p className="realestate-loader-text">Finding your space...</p>
      </div>
    </div>
  );
}