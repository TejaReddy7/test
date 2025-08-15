// User Types
export interface User {
  id: string
  phoneNumber: string
  email?: string
  fullName: string
  dateOfBirth?: string
  gender?: 'male' | 'female' | 'other'
  profileImageUrl?: string
  address?: string
  district: string
  mandal: string
  village: string
  pincode: string
  aadhaarNumber?: string
  isVerified: boolean
  userType: 'seeker' | 'provider' | 'both'
  status: 'active' | 'inactive' | 'suspended'
  rating?: number
  totalReviews?: number
  createdAt: string
  updatedAt: string
}

// Location Types
export interface Location {
  latitude: number
  longitude: number
  address?: string
  district: string
  mandal: string
  village: string
  pincode: string
}

// Service Types
export interface ServiceCategory {
  id: string
  name: string
  nameTelugu?: string
  description?: string
  iconUrl?: string
  parentCategoryId?: string
  sortOrder: number
  isActive: boolean
}

export interface Service {
  id: string
  providerId: string
  categoryId: string
  title: string
  description?: string
  pricingModel: 'hourly' | 'per_acre' | 'daily' | 'monthly' | 'fixed'
  basePrice: number
  maxPrice?: number
  serviceRadius: number
  equipmentRequired: boolean
  equipmentProvided: boolean
  operatorProvided: boolean
  availabilityCalendar?: Record<string, string[]>
  minimumBookingHours: number
  advanceBookingDays: number
  cancellationPolicy?: string
  termsConditions?: string
  isActive: boolean
  provider?: User
  category?: ServiceCategory
  distance?: number
  createdAt: string
  updatedAt: string
}

// Booking Types
export interface Booking {
  id: string
  seekerId: string
  providerId: string
  serviceId: string
  bookingType: 'direct' | 'bidding'
  farmLocation: Location
  areaAcres?: number
  scheduledDate: string
  scheduledStartTime?: string
  scheduledEndTime?: string
  actualStartTime?: string
  actualEndTime?: string
  quotedAmount: number
  finalAmount?: number
  platformFee?: number
  paymentStatus: 'pending' | 'held' | 'released' | 'refunded'
  bookingStatus: 'requested' | 'accepted' | 'in_progress' | 'completed' | 'cancelled' | 'disputed'
  specialInstructions?: string
  cancellationReason?: string
  seeker?: User
  provider?: User
  service?: Service
  bids?: Bid[]
  createdAt: string
  updatedAt: string
}

// Bid Types
export interface Bid {
  id: string
  bookingId: string
  providerId: string
  quotedAmount: number
  estimatedDurationHours?: number
  additionalCharges?: string
  bidMessage?: string
  bidStatus: 'pending' | 'accepted' | 'rejected' | 'expired'
  expiresAt: string
  provider?: User
  createdAt: string
}

// Review Types
export interface Review {
  id: string
  bookingId: string
  reviewerId: string
  revieweeId: string
  rating: number
  reviewText?: string
  reviewImages?: string[]
  responseText?: string
  isAnonymous: boolean
  reviewer?: User
  reviewee?: User
  createdAt: string
}

// Payment Types
export interface Payment {
  id: string
  bookingId: string
  payerId: string
  payeeId: string
  paymentGateway: string
  gatewayTransactionId?: string
  grossAmount: number
  platformFee: number
  netAmount: number
  paymentMethod?: string
  paymentStatus: 'initiated' | 'successful' | 'failed' | 'refunded'
  escrowStatus: 'held' | 'released' | 'disputed'
  processedAt?: string
  createdAt: string
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Authentication Types
export interface AuthTokens {
  accessToken: string
  refreshToken: string
}

export interface LoginRequest {
  phoneNumber: string
  otp: string
  otpId: string
}

export interface RegisterRequest {
  phoneNumber: string
  fullName: string
  userType: 'seeker' | 'provider' | 'both'
  district: string
  mandal: string
  village: string
  pincode: string
}

// Search and Filter Types
export interface ServiceSearchParams {
  latitude?: number
  longitude?: number
  radius?: number
  categoryId?: string
  date?: string
  minPrice?: number
  maxPrice?: number
  pricingModel?: string
  equipmentProvided?: boolean
  operatorProvided?: boolean
  page?: number
  limit?: number
}

export interface BookingSearchParams {
  status?: string
  dateFrom?: string
  dateTo?: string
  providerId?: string
  seekerId?: string
  page?: number
  limit?: number
}

// Form Types
export interface ProfileFormData {
  fullName: string
  email?: string
  dateOfBirth?: string
  gender?: 'male' | 'female' | 'other'
  address?: string
  district: string
  mandal: string
  village: string
  pincode: string
}

export interface ServiceFormData {
  categoryId: string
  title: string
  description?: string
  pricingModel: 'hourly' | 'per_acre' | 'daily' | 'monthly' | 'fixed'
  basePrice: number
  maxPrice?: number
  serviceRadius: number
  equipmentRequired: boolean
  equipmentProvided: boolean
  operatorProvided: boolean
  minimumBookingHours: number
  advanceBookingDays: number
  cancellationPolicy?: string
  termsConditions?: string
}

export interface BookingFormData {
  serviceId: string
  farmLocation: Location
  areaAcres?: number
  scheduledDate: string
  scheduledStartTime?: string
  specialInstructions?: string
}

// Component Props Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export interface InputProps {
  label?: string
  placeholder?: string
  type?: string
  value?: string
  onChange?: (value: string) => void
  error?: string
  required?: boolean
  disabled?: boolean
  className?: string
}

export interface SelectProps {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  options: { value: string; label: string }[]
  error?: string
  required?: boolean
  disabled?: boolean
  className?: string
}

// Language Types
export interface LanguageOption {
  code: 'en' | 'te'
  name: string
  nativeName: string
}

// Notification Types
export interface Notification {
  id: string
  userId: string
  type: 'booking' | 'payment' | 'review' | 'system'
  title: string
  message: string
  isRead: boolean
  data?: Record<string, any>
  createdAt: string
}