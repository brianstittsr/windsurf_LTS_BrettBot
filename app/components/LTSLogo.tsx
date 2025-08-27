'use client'

export default function LTSLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* LTS Logo Design */}
      <rect width="100" height="100" rx="12" fill="#1e40af"/>
      
      {/* L */}
      <rect x="15" y="25" width="6" height="35" fill="white"/>
      <rect x="15" y="54" width="18" height="6" fill="white"/>
      
      {/* T */}
      <rect x="40" y="25" width="20" height="6" fill="white"/>
      <rect x="47" y="25" width="6" height="35" fill="white"/>
      
      {/* S */}
      <path 
        d="M70 31 C70 28, 72 25, 75 25 L82 25 C85 25, 87 28, 87 31 C87 34, 85 37, 82 37 L75 37 C72 37, 70 40, 70 43 C70 46, 72 49, 75 49 L82 49 C85 49, 87 52, 87 55 C87 58, 85 60, 82 60 L75 60 C72 60, 70 57, 70 54" 
        stroke="white" 
        strokeWidth="6" 
        fill="none" 
        strokeLinecap="round"
      />
      
      {/* Gear icon overlay */}
      <circle cx="50" cy="75" r="8" fill="white" fillOpacity="0.2"/>
      <circle cx="50" cy="75" r="4" fill="none" stroke="white" strokeWidth="1"/>
      <path 
        d="M46 75 L54 75 M50 71 L50 79 M47.5 72.5 L52.5 77.5 M52.5 72.5 L47.5 77.5" 
        stroke="white" 
        strokeWidth="1"
      />
    </svg>
  )
}
