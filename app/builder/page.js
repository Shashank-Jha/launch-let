'use client'

import { useState } from 'react'

export default function Builder() {
  const [formData, setFormData] = useState({
    title: 'Project Title',
    tagline: 'Short tagline',
    paragraph: 'Describe your product here...'
  })

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="p-8 bg-gray-50">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tagline</label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Paragraph</label>
            <textarea
              value={formData.paragraph}
              onChange={(e) => setFormData({ ...formData, paragraph: e.target.value })}
              className="w-full p-2 border rounded h-32"
            />
          </div>
        </form>
      </div>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-2">{formData.title}</h1>
        <h2 className="text-xl text-blue-600 mb-4">{formData.tagline}</h2>
        <p>{formData.paragraph}</p>
      </div>
    </div>
  )
}
