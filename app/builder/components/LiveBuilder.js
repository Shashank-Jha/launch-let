export default function LivePreview({ formData }) {
    return (
      <div className="border border-gray-200 p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-2">{formData.title}</h1>
        <h2 className="text-xl text-blue-600 mb-4">{formData.tagline}</h2>
        <p className="text-gray-700">{formData.paragraph}</p>
      </div>
    )
  }
  