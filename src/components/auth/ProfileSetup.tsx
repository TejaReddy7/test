'use client'

import React, { useState } from 'react'
import { UserIcon } from '@heroicons/react/24/outline'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { TELANGANA_DISTRICTS, USER_TYPES } from '@/constants'
import { ProfileFormData } from '@/types'

interface ProfileSetupProps {
  phoneNumber: string
  onProfileComplete: (profileData: ProfileFormData & { userType: string }) => void
  loading?: boolean
}

const ProfileSetup: React.FC<ProfileSetupProps> = ({
  phoneNumber,
  onProfileComplete,
  loading = false,
}) => {
  const [formData, setFormData] = useState<ProfileFormData & { userType: string }>({
    fullName: '',
    email: '',
    userType: '',
    district: '',
    mandal: '',
    village: '',
    pincode: '',
    address: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.userType) {
      newErrors.userType = 'Please select your role'
    }

    if (!formData.district) {
      newErrors.district = 'District is required'
    }

    if (!formData.mandal.trim()) {
      newErrors.mandal = 'Mandal is required'
    }

    if (!formData.village.trim()) {
      newErrors.village = 'Village is required'
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required'
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid 6-digit pincode'
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      onProfileComplete(formData)
    }
  }

  const districtOptions = TELANGANA_DISTRICTS.map(district => ({
    value: district.id,
    label: district.name,
  }))

  const userTypeOptions = [
    { value: USER_TYPES.SEEKER, label: 'I need farming services (Farmer)' },
    { value: USER_TYPES.PROVIDER, label: 'I provide farming services (Service Provider)' },
    { value: USER_TYPES.BOTH, label: 'Both - I need and provide services' },
  ]

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <UserIcon className="w-8 h-8 text-green-600" />
        </div>
        <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
        <p className="text-gray-600 mt-2">
          Help us serve you better by completing your profile
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(value) => handleInputChange('fullName', value)}
              error={errors.fullName}
              required
              disabled={loading}
            />
            
            <Input
              label="Email (Optional)"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(value) => handleInputChange('email', value)}
              error={errors.email}
              disabled={loading}
            />
          </div>

          <Select
            label="I am a"
            placeholder="Select your role"
            value={formData.userType}
            onChange={(value) => handleInputChange('userType', value)}
            options={userTypeOptions}
            error={errors.userType}
            required
            disabled={loading}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="District"
              placeholder="Select your district"
              value={formData.district}
              onChange={(value) => handleInputChange('district', value)}
              options={districtOptions}
              error={errors.district}
              required
              disabled={loading}
            />
            
            <Input
              label="Mandal"
              placeholder="Enter your mandal"
              value={formData.mandal}
              onChange={(value) => handleInputChange('mandal', value)}
              error={errors.mandal}
              required
              disabled={loading}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Village"
              placeholder="Enter your village"
              value={formData.village}
              onChange={(value) => handleInputChange('village', value)}
              error={errors.village}
              required
              disabled={loading}
            />
            
            <Input
              label="Pincode"
              placeholder="Enter 6-digit pincode"
              value={formData.pincode}
              onChange={(value) => handleInputChange('pincode', value)}
              error={errors.pincode}
              required
              disabled={loading}
            />
          </div>

          <Input
            label="Address (Optional)"
            placeholder="Enter your complete address"
            value={formData.address}
            onChange={(value) => handleInputChange('address', value)}
            error={errors.address}
            disabled={loading}
          />

          <Button
            type="submit"
            className="w-full"
            loading={loading}
            disabled={loading}
          >
            Complete Profile
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default ProfileSetup