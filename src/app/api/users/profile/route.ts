import { NextRequest, NextResponse } from 'next/server'

// Mock user storage (in production, use database)
const userStore = new Map<string, any>()

export async function PUT(request: NextRequest) {
  try {
    const profileData = await request.json()
    
    const { 
      phone_number, 
      full_name, 
      email, 
      user_type, 
      district, 
      mandal, 
      village, 
      pincode, 
      address 
    } = profileData

    if (!phone_number || !full_name || !user_type || !district || !mandal || !village || !pincode) {
      return NextResponse.json(
        { success: false, message: 'Required fields are missing' },
        { status: 400 }
      )
    }

    // Get existing user or create new one
    let user = userStore.get(phone_number) || {
      id: crypto.randomUUID(),
      phoneNumber: phone_number,
      isVerified: true,
      createdAt: new Date().toISOString(),
    }

    // Update user profile
    user = {
      ...user,
      fullName: full_name,
      email: email || '',
      userType: user_type,
      district,
      mandal,
      village,
      pincode,
      address: address || '',
      isProfileComplete: true,
      updatedAt: new Date().toISOString(),
    }

    userStore.set(phone_number, user)

    return NextResponse.json({
      success: true,
      message: 'Profile updated successfully',
      user,
    })
  } catch (error) {
    console.error('Error updating profile:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to update profile' },
      { status: 500 }
    )
  }
}