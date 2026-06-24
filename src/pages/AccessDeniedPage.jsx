import { useClerk } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

export default function AccessDeniedPage() {
  const { signOut } = useClerk()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/signup')
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0f0f0f',
      gap: '16px',
      textAlign: 'center',
      padding: '24px'
    }}>
      <div style={{
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: '#2a1a1a',
        border: '1px solid #3a2020',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        marginBottom: '8px'
      }}>
        🔒
      </div>

      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '1.75rem',
        color: '#e8d5a3',
        margin: 0
      }}>
        Access Denied
      </h2>

      <p style={{
        color: '#888',
        maxWidth: '360px',
        lineHeight: 1.6,
        margin: 0,
        fontSize: '0.9rem'
      }}>
        Your email is not on the approved members list.
        Contact the administrator to request access.
      </p>

      <button
        onClick={handleSignOut}
        style={{
          marginTop: '8px',
          padding: '10px 24px',
          background: 'transparent',
          border: '1px solid #333',
          borderRadius: '8px',
          color: '#999',
          cursor: 'pointer',
          fontSize: '0.875rem',
          transition: 'border-color 0.2s, color 0.2s'
        }}
        onMouseEnter={e => {
          (e.target ).style.borderColor = '#555'
          ;(e.target ).style.color = '#ccc'
        }}
        onMouseLeave={e => {
          (e.target).style.borderColor = '#333'
          ;(e.target).style.color = '#999'
        }}
      >
        Sign out
      </button>
    </div>
  )
}