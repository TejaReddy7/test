'use client'

import React, { useState } from 'react'
import { PhoneIcon } from '@heroicons/react/24/outline'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { validatePhoneNumber, formatPhoneNumber } from '@/lib/utils'
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '@/constants'

interface LoginFormProps {
  onOtpSent: (phoneNumber: string, otpId: string) => void
  loading?: boolean
}

const LoginForm: React.FC<LoginFormProps> = ({ onOtpSent, loading = false }) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!phoneNumber.trim()) {
      setError('Phone number is required')
      return
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setError(ERROR_MESSAGES.INVALID_PHONE)
      return
    }

    try {
      const formattedPhone = formatPhoneNumber(phoneNumber)
      
      // Simulate API call for now
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone_number: formattedPhone }),
      })

      if (response.ok) {
        const data = await response.json()
        onOtpSent(formattedPhone, data.otp_id)
      } else {
        setError('Failed to send OTP. Please try again.')
      }
    } catch (err) {
      setError(ERROR_MESSAGES.NETWORK_ERROR)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <PhoneIcon className="w-8 h-8 text-green-600" />
        </div>
        <CardTitle className="text-2xl">Welcome to Farm Buddee</CardTitle>
        <p className="text-gray-600 mt-2">
          Enter your phone number to get started
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Phone Number"
            type="tel"
            placeholder="Enter your 10-digit phone number"
            value={phoneNumber}
            onChange={setPhoneNumber}
            error={error}
            required
            disabled={loading}
          />
          
          <Button
            type="submit"
            className="w-full"
            loading={loading}
            disabled={loading}
          >
            Send OTP
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            By continuing, you agree to our{' '}
            <a href="#" className="text-green-600 hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-green-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default LoginForm