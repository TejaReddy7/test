'use client'

import React from 'react'
import Link from 'next/link'
import { 
  UserGroupIcon, 
  MapPinIcon, 
  ShieldCheckIcon,
  StarIcon,
  PhoneIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'
import Button from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: <WrenchScrewdriverIcon className="w-8 h-8 text-green-600" />,
      title: 'Equipment Rental',
      description: 'Access tractors, harvesters, and other farming equipment when you need them.',
    },
    {
      icon: <UserGroupIcon className="w-8 h-8 text-green-600" />,
      title: 'Skilled Labor',
      description: 'Find experienced agricultural workers for plowing, harvesting, and more.',
    },
    {
      icon: <MapPinIcon className="w-8 h-8 text-green-600" />,
      title: 'Local Services',
      description: 'Connect with service providers in your area across Telangana districts.',
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-green-600" />,
      title: 'Verified Providers',
      description: 'All service providers are verified with ratings and reviews.',
    },
  ]

  const stats = [
    { number: '1000+', label: 'Farmers Served' },
    { number: '500+', label: 'Service Providers' },
    { number: '8', label: 'Districts Covered' },
    { number: '4.8', label: 'Average Rating' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <WrenchScrewdriverIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Farm Buddee</span>
            </div>
            <Link href="/login">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Agricultural
              <span className="text-green-600"> Services</span>
              <br />
              Marketplace
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with equipment owners and skilled agricultural workers across Telangana. 
              Get farming services when you need them, where you need them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" className="w-full sm:w-auto">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Start with Phone Number
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Farming
            </h2>
            <p className="text-xl text-gray-600">
              From equipment rental to skilled labor, we've got you covered
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-green-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Farm Buddee Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to get the farming services you need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Search Services
              </h3>
              <p className="text-gray-600">
                Find equipment and labor services in your area with transparent pricing
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Book & Pay
              </h3>
              <p className="text-gray-600">
                Book services directly or get quotes from multiple providers
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Get Service
              </h3>
              <p className="text-gray-600">
                Receive quality service and rate your experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of farmers and service providers on Farm Buddee
          </p>
          <Link href="/login">
            <Button size="lg">
              <PhoneIcon className="w-5 h-5 mr-2" />
              Sign Up Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <WrenchScrewdriverIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Farm Buddee</span>
              </div>
              <p className="text-gray-400">
                Connecting farmers with agricultural services across Telangana
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Equipment Rental</li>
                <li>Agricultural Labor</li>
                <li>Combo Services</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Coverage Areas</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Nizamabad</li>
                <li>Kamareddy</li>
                <li>Medak</li>
                <li>Karimnagar</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Farm Buddee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
