import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const PASSWORD = 'uxresearch2026'

function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem('site_unlocked') === 'true'
  )
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input === PASSWORD) {
      sessionStorage.setItem('site_unlocked', 'true')
      setUnlocked(true)
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

  if (unlocked) return children

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fafaf9',
      fontFamily: 'system-ui, sans-serif',
      padding: '1rem'
    }}>
      <form onSubmit={handleSubmit} style={{
        textAlign: 'center',
        maxWidth: '320px',
        width: '100%'
      }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0d9488', marginBottom: '0.5rem' }}>
          Nehali Patel
        </h1>
        <p style={{ color: '#78716c', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          This site is currently under development. Enter the password to preview.
        </p>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Password"
          autoFocus
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            fontSize: '1rem',
            border: `2px solid ${error ? '#ef4444' : '#d6d3d1'}`,
            borderRadius: '0.5rem',
            outline: 'none',
            marginBottom: '0.75rem',
            boxSizing: 'border-box',
            transition: 'border-color 0.2s'
          }}
        />
        <button type="submit" style={{
          width: '100%',
          padding: '0.75rem',
          background: '#0d9488',
          color: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          fontSize: '1rem',
          fontWeight: 600,
          cursor: 'pointer'
        }}>
          Enter
        </button>
        {error && (
          <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.75rem' }}>
            Incorrect password
          </p>
        )}
      </form>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PasswordGate>
      <App />
    </PasswordGate>
  </React.StrictMode>,
)
