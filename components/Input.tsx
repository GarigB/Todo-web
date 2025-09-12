'use client'

import { useState } from 'react'

interface InputProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
  onAdd?: () => void
  className?: string
}

export default function Input({ 
  placeholder = "Add a new task...", 
  value, 
  onChange, 
  onAdd,
  className = ""
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false)

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && onAdd) {
      onAdd()
    }
  }

  return (
    <div className={`input-container ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyPress={handleKeyPress}
        className={`input-field ${isFocused ? 'focused' : ''}`}
      />
      {onAdd && (
        <button 
          onClick={onAdd}
          className="add-button"
        >
          Add
        </button>
      )}
      <style jsx>{`
        .input-container {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }
        
        .input-field {
          flex: 1;
          padding: 12px 16px;
          border: 2px solid #e5e5e5;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.2s ease;
        }
        
        .input-field.focused {
          border-color: #3b82f6;
        }
        
        .input-field::placeholder {
          color: #9ca3af;
        }
        
        .add-button {
          padding: 12px 24px;
          background-color: #3b82f6;
          color: white;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          transition: background-color 0.2s ease;
        }
        
        .add-button:hover {
          background-color: #2563eb;
        }
      `}</style>
    </div>
  )
}
