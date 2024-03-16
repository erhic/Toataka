import { useContext } from "react"
import FormContext from "../../Context/PickupServiceContext"
const Servicetype = () => {
  const { service, setService } = useContext(FormContext)
  console.log(service)
  return (
    <>
      <div className="p-5  flex flex-col justify-center gap-5">
        <h2 className="flex justify-center text-slate-gray">Select the service to request</h2>
        <form className="gap-8 flex max-lg:flex-col">

          <div className="flex items-center ">
            <input type="radio" value="pickup" name="service" checked={service === "pickup"} onChange={(e) => (setService(e.target.value))} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pick Up</label>
          </div>
          <div className="flex items-center">
            <input type="radio" value="storage" name="service" checked={service === "storage"} onChange={(e) => (setService(e.target.value))} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Storage Rental</label>
          </div>
          <div className="flex items-center">
            <input type="radio" value="recycle" name="service" checked={service === "storage"} onChange={(e) => (setService(e.target.value))} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recycle</label>
          </div>

        </form>
      </div>
    </>
  )
}

export default Servicetype