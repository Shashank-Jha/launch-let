'use client'

import { useState } from 'react'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { Maximize2, Minimize2 } from 'lucide-react'
import classNames from 'classnames'
import FormBuilder from './components/FormBuilder'
import LiveBuilder from './components/LiveBuilder'

export default function Builder() {
  const [formData, setFormData] = useState({
    title: 'Project Title',
    tagline: 'Short tagline',
    paragraph: 'Describe your product here...'
  })

  const [fullscreen, setFullscreen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      {!fullscreen ? (
        <PanelGroup direction="horizontal" className="min-h-screen">
          <Panel defaultSize={45} className="bg-gray-50">
            <FormBuilder formData={formData} setFormData={setFormData} />
          </Panel>
          <PanelResizeHandle className="w-2 bg-gray-300 cursor-col-resize" />
          <Panel defaultSize={55} className="relative p-6">
            <button
              className="absolute top-4 right-4 bg-white p-2 border rounded shadow hover:bg-gray-50"
              onClick={() => setFullscreen(true)}
            >
              <Maximize2 size={16} />
            </button>
            <LiveBuilder formData={formData} />
          </Panel>
        </PanelGroup>
      ) : (
        <div className="fixed inset-0 bg-white z-50 p-6 overflow-auto">
          <button
            className="absolute top-4 right-4 bg-white p-2 border rounded shadow hover:bg-gray-50"
            onClick={() => setFullscreen(false)}
          >
            <Minimize2 size={16} />
          </button>
          <LiveBuilder formData={formData} />
        </div>
      )}
    </div>
  )
}