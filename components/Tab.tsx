'use client'

interface TabProps {
  label: string
  isActive: boolean
  onClick: () => void
  className?: string
}

export default function Tab({ label, isActive, onClick, className = "" }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`tab ${isActive ? 'active' : ''} ${className}`}
    >
      {label}
      <style jsx>{`
        .tab {
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s ease;
          background-color: #f3f4f6;
          color: #6b7280;
          border: none;
        }
        
        .tab.active {
          background-color: #3b82f6;
          color: white;
        }
        
        .tab:hover:not(.active) {
          background-color: #e5e7eb;
        }
      `}</style>
    </button>
  )
}
