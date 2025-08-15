import { NextRequest, NextResponse } from 'next/server'
import otpStore from '@/lib/otp-store'

// Mock user storage (in production, use database)
const userStore = new Map<string, any>()

export async function POST(request: NextRequest) {
  try {
    const { phone_number, otp, otp_id } = await request.json()

    if (!phone_number || !otp || !otp_id) {
      return NextResponse.json(
        { success: false, message: 'Phone number, OTP, and OTP ID are required' },
        { status: 400 }
      )
    }

    // Verify OTP
    const storedOtpData = otpStore.get(otp_id)
    
    if (!storedOtpData) {
      return NextResponse.json(
        { success: false, message: 'Invalid or expired OTP' },
        { status: 400 }
      )
    }

    if (storedOtpData.expiresAt < Date.now()) {
      otpStore.delete(otp_id)
      return NextResponse.json(
        { success: false, message: 'OTP has expired' },
        { status: 400 }
      )
    }

    if (storedOtpData.otp !== otp || storedOtpData.phoneNumber !== phone_number) {
      return NextResponse.json(
        { success: false, message: 'Invalid OTP' },
        { status: 400 }
      )
    }

    // OTP verified successfully, clean up
    otpStore.delete(otp_id)

    // Check if user exists
    let user = userStore.get(phone_number)
    
    if (!user) {
      // Create new user
      user = {
        id: crypto.randomUUID(),
        phoneNumber: phone_number,
        fullName: '',
        isVerified: true,
        isProfileComplete: false,
        userType: '',
        district: '',
        mandal: '',
        village: '',
        pincode: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      userStore.set(phone_number, user)
    }

    // Generate tokens (in production, use proper JWT implementation)
    const accessToken = `access_${crypto.randomUUID()}`
    const refreshToken = `refresh_${crypto.randomUUID()}`

    return NextResponse.json({
      success: true,
      message: 'OTP verified successfully',
      user,
      access_token: accessToken,
      refresh_token: refreshToken,
    })
  } catch (error) {
    console.error('Error verifying OTP:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to verify OTP' },
      { status: 500 }
    )
  }
}