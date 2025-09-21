import { useState, useEffect } from 'react'
import { User } from '@bluecarbon/shared'

// Mock auth hook - replace with actual Firebase auth
export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate auth check
    const timer = setTimeout(() => {
      // Mock user for development
      setUser({
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+91-9876543210',
        role: 'ADMIN',
        organization: 'BlueCarbon Foundation',
        region: 'Maharashtra',
        language: 'en',
        isVerified: true,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const login = async (phone: string, _otp: string) => {
    // Mock login
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setUser({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone,
      role: 'ADMIN',
      organization: 'BlueCarbon Foundation',
      region: 'Maharashtra',
      language: 'en',
      isVerified: true,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    setIsLoading(false)
  }

  const logout = () => {
    setUser(null)
  }

  return {
    user,
    isLoading,
    login,
    logout
  }
}