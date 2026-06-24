import { useUser, useClerk } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

export default function DashboardPage() {
  const { user } = useUser()
  const { signOut } = useClerk()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/signup')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f0f0f',
      color: '#f0f0f0',
      padding: '40px 24px'
    }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '48px'
        }}>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '2rem',
            color: '#e8d5a3',
            margin: 0,
            fontWeight: 600
          }}>
            Member Portal
          </h1>
          <button
            onClick={handleSignOut}
            style={{
              padding: '8px 18px',
              background: 'transparent',
              border: '1px solid #333',
              borderRadius: '8px',
              color: '#999',
              cursor: 'pointer',
              fontSize: '0.875rem'
            }}
          >
            Sign out
          </button>
        </div>

        <div style={{
          background: '#1a1a1a',
          border: '1px solid #2a2a2a',
          borderRadius: '12px',
          padding: '28px 32px',
          marginBottom: '24px'
        }}>
          <p style={{
            color: '#666',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            margin: '0 0 6px'
          }}>
            Signed in as
          </p>
          <p style={{ fontSize: '1.05rem', color: '#e8d5a3', margin: 0 }}>
            {user?.primaryEmailAddress?.emailAddress}
          </p>
        </div>

        <div style={{
          background: '#1a1a1a',
          border: '1px solid #2a2a2a',
          borderRadius: '12px',
          padding: '28px 32px',
          color: '#555',
          fontSize: '0.9rem'
        }}>
          Your dashboard content goes here…
        </div>

      </div>
    </div>
  )
}