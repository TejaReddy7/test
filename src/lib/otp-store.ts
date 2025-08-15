// Shared OTP storage for development
// In production, use Redis or database

interface OTPData {
  otp: string
  expiresAt: number
  phoneNumber: string
}

class OTPStore {
  private store = new Map<string, OTPData>()

  set(otpId: string, data: OTPData) {
    this.store.set(otpId, data)
  }

  get(otpId: string): OTPData | undefined {
    return this.store.get(otpId)
  }

  delete(otpId: string) {
    this.store.delete(otpId)
  }

  cleanup() {
    const now = Date.now()
    for (const [otpId, data] of this.store.entries()) {
      if (data.expiresAt < now) {
        this.store.delete(otpId)
      }
    }
  }
}

// Global instance
const otpStore = new OTPStore()

// Cleanup expired OTPs periodically
setInterval(() => {
  otpStore.cleanup()
}, 60000) // Clean up every minute

export default otpStore