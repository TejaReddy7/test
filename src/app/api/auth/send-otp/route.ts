import { NextRequest, NextResponse } from 'next/server'
import { generateOTP } from '@/lib/utils'
import otpStore from '@/lib/otp-store'

export async function POST(request: NextRequest) {
  try {
    const { phone_number } = await request.json()

    if (!phone_number) {
      return NextResponse.json(
        { success: false, message: 'Phone number is required' },
        { status: 400 }
      )
    }

    // Generate OTP and store it
    const otp = generateOTP()
    const otpId = crypto.randomUUID()
    const expiresAt = Date.now() + 5 * 60 * 1000 // 5 minutes

    otpStore.set(otpId, {
      otp,
      expiresAt,
      phoneNumber: phone_number,
    })

    // In production, send OTP via SMS service (Twilio, AWS SNS, etc.)
    console.log(`OTP for ${phone_number}: ${otp}`)

    return NextResponse.json({
      success: true,
      message: 'OTP sent successfully',
      otp_id: otpId,
      // Remove this in production - only for demo
      debug_otp: otp,
    })
  } catch (error) {
    console.error('Error sending OTP:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send OTP' },
      { status: 500 }
    )
  }
}

