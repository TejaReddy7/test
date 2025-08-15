'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ShieldCheckIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import Button from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ERROR_MESSAGES } from '@/constants'

interface OtpVerificationProps {
  phoneNumber: string
  otpId: string
  onVerified: (user: any, tokens: any) => void
  onBack: () => void
  loading?: boolean
}

const OtpVerification: React.FC<OtpVerificationProps> = ({
  phoneNumber,
  otpId,
  onVerified,
  onBack,
  loading = false,
}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState('')
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes
  const [resending, setResending] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    setError('')

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }

    // Auto-submit when all fields are filled
    if (newOtp.every(digit => digit !== '') && newOtp.join('').length === 6) {
      handleVerify(newOtp.join(''))
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleVerify = async (otpValue?: string) => {
    const otpToVerify = otpValue || otp.join('')
    
    if (otpToVerify.length !== 6) {
      setError('Please enter complete OTP')
      return
    }

    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone_number: phoneNumber,
          otp: otpToVerify,
          otp_id: otpId,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        onVerified(data.user, {
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
        })
      } else {
        const errorData = await response.json()
        setError(errorData.message || ERROR_MESSAGES.INVALID_OTP)
      }
    } catch (err) {
      setError(ERROR_MESSAGES.NETWORK_ERROR)
    }
  }

  const handleResendOtp = async () => {
    setResending(true)
    setError('')

    try {
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone_number: phoneNumber }),
      })

      if (response.ok) {
        setTimeLeft(300)
        setOtp(['', '', '', '', '', ''])
        inputRefs.current[0]?.focus()
      } else {
        setError('Failed to resend OTP. Please try again.')
      }
    } catch (err) {
      setError(ERROR_MESSAGES.NETWORK_ERROR)
    } finally {
      setResending(false)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <button
          onClick={onBack}
          className="absolute left-4 top-4 p-2 text-gray-400 hover:text-gray-600"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <ShieldCheckIcon className="w-8 h-8 text-green-600" />
        </div>
        <CardTitle className="text-2xl">Verify OTP</CardTitle>
        <p className="text-gray-600 mt-2">
          Enter the 6-digit code sent to
          <br />
          <span className="font-semibold">{phoneNumber}</span>
        </p>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6">
          <div className="flex justify-center space-x-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                disabled={loading}
              />
            ))}
          </div>

          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}

          <Button
            onClick={() => handleVerify()}
            className="w-full"
            loading={loading}
            disabled={loading || otp.join('').length !== 6}
          >
            Verify OTP
          </Button>

          <div className="text-center">
            {timeLeft > 0 ? (
              <p className="text-sm text-gray-600">
                Resend OTP in {formatTime(timeLeft)}
              </p>
            ) : (
              <button
                onClick={handleResendOtp}
                disabled={resending}
                className="text-sm text-green-600 hover:underline disabled:opacity-50"
              >
                {resending ? 'Sending...' : 'Resend OTP'}
              </button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default OtpVerification