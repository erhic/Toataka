'react'

const Buttons = ({ label }) => {
  return (
    <button className="bg-green-900 text-white px-6 py-3 rounded-full border-none hover:bg-green-700 border font-montserrat text-lg leading-none">
      {label}
    </button>
  )
}

export default Buttons