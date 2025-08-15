'use client'

import React from 'react'
import { 
  WrenchScrewdriverIcon, 
  UserGroupIcon, 
  CalendarIcon,
  BellIcon,
  MapPinIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const DashboardPage: React.FC = () => {
  // Mock data - in real app, this would come from API
  const stats = [
    { title: 'Active Bookings', value: '3', icon: <CalendarIcon className="w-6 h-6" />, color: 'text-blue-600' },
    { title: 'Services Available', value: '24', icon: <WrenchScrewdriverIcon className="w-6 h-6" />, color: 'text-green-600' },
    { title: 'Providers Nearby', value: '12', icon: <UserGroupIcon className="w-6 h-6" />, color: 'text-orange-600' },
    { title: 'Your Rating', value: '4.8', icon: <StarIcon className="w-6 h-6" />, color: 'text-yellow-600' },
  ]

  const recentBookings = [
    {
      id: '1',
      service: 'Tractor Plowing',
      provider: 'Suresh Kumar',
      date: '2024-03-15',
      status: 'confirmed',
      amount: 2400,
    },
    {
      id: '2',
      service: 'Harvesting Service',
      provider: 'Ramesh Reddy',
      date: '2024-03-18',
      status: 'pending',
      amount: 3200,
    },
    {
      id: '3',
      service: 'Manual Labor',
      provider: 'Krishna Workers',
      date: '2024-03-20',
      status: 'completed',
      amount: 1800,
    },
  ]

  const nearbyServices = [
    {
      id: '1',
      title: 'Tractor with Operator',
      provider: 'Mahesh Tractors',
      price: 800,
      rating: 4.5,
      distance: '2.3 km',
    },
    {
      id: '2',
      title: 'Harvester Service',
      provider: 'Modern Agri Services',
      price: 1200,
      rating: 4.8,
      distance: '5.1 km',
    },
    {
      id: '3',
      title: 'Spraying Service',
      provider: 'Green Farm Solutions',
      price: 400,
      rating: 4.2,
      distance: '3.7 km',
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'text-green-600 bg-green-100'
      case 'pending': return 'text-yellow-600 bg-yellow-100'
      case 'completed': return 'text-blue-600 bg-blue-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <BellIcon className="w-6 h-6" />
              </button>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">R</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, Ramesh!
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your farming services today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Bookings */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{booking.service}</h4>
                      <p className="text-sm text-gray-600">{booking.provider}</p>
                      <p className="text-sm text-gray-500">{booking.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">₹{booking.amount}</p>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  View All Bookings
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Nearby Services */}
          <Card>
            <CardHeader>
              <CardTitle>Services Near You</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nearbyServices.map((service) => (
                  <div key={service.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{service.title}</h4>
                      <p className="text-sm text-gray-600">{service.provider}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center">
                          <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{service.rating}</span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <div className="flex items-center">
                          <MapPinIcon className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600 ml-1">{service.distance}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">₹{service.price}/hr</p>
                      <Button size="sm" className="mt-2">
                        Book Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  Browse All Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-16 text-left justify-start">
              <WrenchScrewdriverIcon className="w-6 h-6 mr-3" />
              <div>
                <div className="font-semibold">Find Equipment</div>
                <div className="text-sm opacity-75">Browse available tractors and tools</div>
              </div>
            </Button>
            <Button variant="secondary" className="h-16 text-left justify-start">
              <UserGroupIcon className="w-6 h-6 mr-3" />
              <div>
                <div className="font-semibold">Hire Labor</div>
                <div className="text-sm opacity-75">Find skilled agricultural workers</div>
              </div>
            </Button>
            <Button variant="outline" className="h-16 text-left justify-start">
              <CalendarIcon className="w-6 h-6 mr-3" />
              <div>
                <div className="font-semibold">Schedule Service</div>
                <div className="text-sm opacity-75">Plan your farming activities</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage