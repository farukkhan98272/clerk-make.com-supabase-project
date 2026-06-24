import { SignIn } from '@clerk/clerk-react'

export default function SigninPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0f0f0f',
      gap: '24px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '8px' }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '2rem',
          fontWeight: 600,
          color: '#e8d5a3',
          margin: 0
        }}>
          Member Portal
        </h1>
        <p style={{ color: '#888', fontSize: '0.875rem', marginTop: '6px' }}>
          Enter your email to receive a magic link
        </p>
      </div>

      <SignIn
        appearance={{
          variables: {
            colorBackground: '#1a1a1a',
            colorText: '#f0f0f0',
            colorPrimary: '#e8d5a3',
            colorInputBackground: '#242424',
            colorInputText: '#f0f0f0',
            borderRadius: '10px',
          }
        }}
      />
    </div>
  )
}