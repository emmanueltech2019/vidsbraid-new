import React from 'react'

interface TestimonialCardProps {
  name: string
  message: string
  imageSrc: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, message, imageSrc }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Vidders Say</div>
          <p className="mt-2 text-gray-500">{message}</p>
          <div className="mt-4 text-sm font-semibold text-gray-900">{name}</div>
        </div>
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={imageSrc} alt="Profile picture" />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
