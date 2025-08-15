// App Configuration
export const APP_CONFIG = {
  name: 'Farm Buddee',
  description: 'Agricultural Services Marketplace',
  version: '1.0.0',
  supportedLanguages: ['en', 'te'],
  defaultLanguage: 'en',
  maxFileSize: 10 * 1024 * 1024, // 10MB
  otpExpiryTime: 5 * 60 * 1000, // 5 minutes
  defaultServiceRadius: 25, // kilometers
}

// User Types
export const USER_TYPES = {
  SEEKER: 'seeker',
  PROVIDER: 'provider',
  BOTH: 'both',
} as const

// User Status
export const USER_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  SUSPENDED: 'suspended',
} as const

// Service Categories
export const SERVICE_CATEGORIES = {
  EQUIPMENT: 'equipment',
  LABOR: 'labor',
  COMBO: 'combo',
} as const

// Pricing Models
export const PRICING_MODELS = {
  HOURLY: 'hourly',
  PER_ACRE: 'per_acre',
  DAILY: 'daily',
  MONTHLY: 'monthly',
  FIXED: 'fixed',
} as const

// Booking Status
export const BOOKING_STATUS = {
  REQUESTED: 'requested',
  ACCEPTED: 'accepted',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
  DISPUTED: 'disputed',
} as const

// Payment Status
export const PAYMENT_STATUS = {
  PENDING: 'pending',
  HELD: 'held',
  RELEASED: 'released',
  REFUNDED: 'refunded',
} as const

// Telangana Districts (Launch Priority)
export const TELANGANA_DISTRICTS = [
  { id: 'nizamabad', name: 'Nizamabad', nameTe: 'నిజామాబాద్', priority: 1 },
  { id: 'kamareddy', name: 'Kamareddy', nameTe: 'కామారెడ్డి', priority: 1 },
  { id: 'medak', name: 'Medak', nameTe: 'మేడక్', priority: 2 },
  { id: 'karimnagar', name: 'Karimnagar', nameTe: 'కరీంనగర్', priority: 2 },
  { id: 'mahabubnagar', name: 'Mahabubnagar', nameTe: 'మహబూబ్‌నగర్', priority: 3 },
  { id: 'warangal', name: 'Warangal', nameTe: 'వరంగల్', priority: 3 },
  { id: 'jagtial', name: 'Jagtial', nameTe: 'జగిత్యాల', priority: 4 },
  { id: 'adilabad', name: 'Adilabad', nameTe: 'ఆదిలాబాద్', priority: 4 },
]

// Common Equipment Types
export const EQUIPMENT_TYPES = [
  { id: 'tractor', name: 'Tractor', nameTe: 'ట్రాక్టర్', icon: '🚜' },
  { id: 'harvester', name: 'Harvester', nameTe: 'హార్వెస్టర్', icon: '🌾' },
  { id: 'plough', name: 'Plough', nameTe: 'నాగలి', icon: '🔧' },
  { id: 'sprayer', name: 'Sprayer', nameTe: 'స్ప్రేయర్', icon: '💧' },
  { id: 'cultivator', name: 'Cultivator', nameTe: 'కల్టివేటర్', icon: '⚙️' },
  { id: 'thresher', name: 'Thresher', nameTe: 'థ్రెషర్', icon: '🌾' },
]

// Labor Services
export const LABOR_SERVICES = [
  { id: 'plowing', name: 'Manual Plowing', nameTe: 'చేతి దున్నుట', icon: '👨‍🌾' },
  { id: 'sowing', name: 'Sowing', nameTe: 'విత్తనాలు వేయుట', icon: '🌱' },
  { id: 'weeding', name: 'Weeding', nameTe: 'కలుపు తీయుట', icon: '🌿' },
  { id: 'harvesting', name: 'Manual Harvesting', nameTe: 'చేతి కోత', icon: '✂️' },
  { id: 'fertilizing', name: 'Fertilizing', nameTe: 'ఎరువులు వేయుట', icon: '🧪' },
  { id: 'irrigation', name: 'Irrigation', nameTe: 'నీటిపారుదల', icon: '💧' },
]

// Common Crops in Telangana
export const CROPS = [
  { id: 'paddy', name: 'Paddy', nameTe: 'వరి', season: 'kharif' },
  { id: 'cotton', name: 'Cotton', nameTe: 'పత్తి', season: 'kharif' },
  { id: 'maize', name: 'Maize', nameTe: 'మొక్కజొన్న', season: 'kharif' },
  { id: 'turmeric', name: 'Turmeric', nameTe: 'పసుపు', season: 'kharif' },
  { id: 'sugarcane', name: 'Sugarcane', nameTe: 'చెరకు', season: 'annual' },
  { id: 'groundnut', name: 'Groundnut', nameTe: 'వేరుశెనగ', season: 'rabi' },
  { id: 'wheat', name: 'Wheat', nameTe: 'గోధుమ', season: 'rabi' },
  { id: 'jowar', name: 'Jowar', nameTe: 'జొన్న', season: 'rabi' },
]

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    SEND_OTP: '/api/auth/send-otp',
    VERIFY_OTP: '/api/auth/verify-otp',
    REFRESH_TOKEN: '/api/auth/refresh-token',
    LOGOUT: '/api/auth/logout',
  },
  USERS: {
    PROFILE: '/api/users/profile',
    UPDATE_PROFILE: '/api/users/profile',
    UPLOAD_DOCUMENT: '/api/users/documents',
  },
  SERVICES: {
    SEARCH: '/api/services/search',
    CREATE: '/api/services',
    UPDATE: '/api/services',
    DELETE: '/api/services',
  },
  BOOKINGS: {
    CREATE: '/api/bookings',
    LIST: '/api/bookings',
    UPDATE: '/api/bookings',
    CANCEL: '/api/bookings/cancel',
  },
  PAYMENTS: {
    INITIATE: '/api/payments/initiate',
    VERIFY: '/api/payments/verify',
    REFUND: '/api/payments/refund',
  },
}

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  INVALID_PHONE: 'Please enter a valid phone number.',
  INVALID_OTP: 'Invalid OTP. Please try again.',
  OTP_EXPIRED: 'OTP has expired. Please request a new one.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  SERVER_ERROR: 'Something went wrong. Please try again later.',
  LOCATION_REQUIRED: 'Location access is required for this feature.',
}

// Success Messages
export const SUCCESS_MESSAGES = {
  OTP_SENT: 'OTP sent successfully to your phone number.',
  LOGIN_SUCCESS: 'Login successful! Welcome to Farm Buddee.',
  PROFILE_UPDATED: 'Profile updated successfully.',
  SERVICE_CREATED: 'Service created successfully.',
  BOOKING_CREATED: 'Booking request sent successfully.',
  PAYMENT_SUCCESS: 'Payment completed successfully.',
}