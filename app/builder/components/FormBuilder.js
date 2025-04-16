export default function FormBuilder({ formData, setFormData }) {
    return (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Project Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tagline</label>
          <input
            type="text"
            value={formData.tagline}
            onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Paragraph</label>
          <textarea
            value={formData.paragraph}
            onChange={(e) => setFormData({ ...formData, paragraph: e.target.value })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded h-32"
          />
        </div>
      </div>
    )
  }
  