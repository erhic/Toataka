import { useContext } from "react"
import FormContext from "../../Context/PickupServiceContext"

const Address = () => {
  const { phoneno, setPhoneNo, street, setStreet, location, setLocation } = useContext(FormContext)

  console.log(street, location, phoneno)
  return (
    <>
      <form action="">
        <h2 className="flex justify-center font-montserrat text-lg pt-10 text-slate-gray pb-9 ">Address Information</h2>
        <div className="px-5 py-8 flex flex-wrap gap-5 justify-center">
          <input type="number" className="flex justify-center border-b py-2 outline-none" value={phoneno} onChange={(e) => { setPhoneNo(e.target.value) }} placeholder="Enter Phone Number" />

          <input type="text" className="flex justify-center border-b py-2 outline-none" value={location} onChange={(e) => { setLocation(e.target.value) }} placeholder="Enter location here" />

          <input type="text" className="flex justify-center border-b py-2 outline-none" value={street} onChange={(e) => { setStreet(e.target.value) }} placeholder="Enter Street location" />

        </div>
        {/* <button className="flex justify-end max-container bg-green-800 text-white font-montserrat px-4 py-1 rounded-full">Submit</button> */}
      </form>
    </>
  )
}

export default Address