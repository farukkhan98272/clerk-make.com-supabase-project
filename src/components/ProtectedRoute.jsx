import { useAuth } from '@clerk/clerk-react'
import { Navigate } from 'react-router-dom'
import { useAccessCheck } from '../hooks/useAccessCheck'

export default function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useAuth()

  // Clerk loading
  if (!isLoaded) {
    return <div>Loading...</div>
  }

  // User logged in nahi hai
  if (!isSignedIn) {
    return <Navigate to="/signin" replace />
  }

  return <AccessGuard>{children}</AccessGuard>
}

function AccessGuard({ children }) {
  const status = useAccessCheck()

  if (status === 'loading') {
    return <div>Checking access...</div>
  }

  if (status === 'denied') {
    return <Navigate to="/unauthorized" replace />
  }

  return children
}