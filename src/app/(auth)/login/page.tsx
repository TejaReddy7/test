'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import LoginForm from '@/components/auth/LoginForm'
import OtpVerification from '@/components/auth/OtpVerification'
import ProfileSetup from '@/components/auth/ProfileSetup'
import { SUCCESS_MESSAGES } from '@/constants'

type AuthStep = 'login' | 'otp' | 'profile'

const LoginPage: React.FC = () => {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<AuthStep>('login')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otpId, setOtpId] = useState('')
  const [loading, setLoading] = useState(false)

  const handleOtpSent = (phone: string, id: string) => {
    setPhoneNumber(phone)
    setOtpId(id)
    setCurrentStep('otp')
  }

  const handleOtpVerified = (user: any, tokens: any) => {
    // Store tokens in localStorage (in production, use secure storage)
    localStorage.setItem('accessToken', tokens.accessToken)
    localStorage.setItem('refreshToken', tokens.refreshToken)
    
    if (user.isProfileComplete) {
      // Redirect to dashboard if profile is complete
      router.push('/dashboard')
    } else {
      // Show profile setup if profile is incomplete
      setCurrentStep('profile')
    }
  }

  const handleProfileComplete = async (profileData: any) => {
    setLoading(true)
    
    try {
      // In a real app, this would call the API to update the profile
      const response = await fetch('/api/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(profileData),
      })

      if (response.ok) {
        router.push('/dashboard')
      } else {
        console.error('Failed to update profile')
      }
    } catch (error) {
      console.error('Error updating profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleBackToLogin = () => {
    setCurrentStep('login')
    setPhoneNumber('')
    setOtpId('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {currentStep === 'login' && (
          <LoginForm
            onOtpSent={handleOtpSent}
            loading={loading}
          />
        )}
        
        {currentStep === 'otp' && (
          <OtpVerification
            phoneNumber={phoneNumber}
            otpId={otpId}
            onVerified={handleOtpVerified}
            onBack={handleBackToLogin}
            loading={loading}
          />
        )}
        
        {currentStep === 'profile' && (
          <ProfileSetup
            phoneNumber={phoneNumber}
            onProfileComplete={handleProfileComplete}
            loading={loading}
          />
        )}
      </div>
    </div>
  )
}

export default LoginPage