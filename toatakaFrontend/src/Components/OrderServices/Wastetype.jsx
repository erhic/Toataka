import { useContext } from "react"
import FormContext from "../../Context/PickupServiceContext"

const Wastetype = () => {
  const { wastetype, setWasteType } = useContext(FormContext)
  console.log(wastetype)
  return (
    <>
      <div className="p-5   flex flex-col justify-center">


        <p className="font-montserrat pt-5 text-slate-gray justify-center flex">Waste Components ?</p>
        <div className="flex justify-center gap-10 py-7 flex-col">
          <form action="">
            <div className="flex py-6 flex-row gap-10">
              <div className="flex items-center ">
                <input type="radio" value="Medical waste" name="wastetype" checked={wastetype === "Medical waste"} onChange={(e) => { setWasteType(e.target.value) }} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Medical Waste</label>
              </div>
              <div className="flex items-center">
                <input type="radio" value="Kitchen waste" name="wastetype" checked={wastetype === "Kitchen waste"} onChange={(e) => { setWasteType(e.target.value) }} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kitchen Waste</label>
              </div> </div>
            <div className="flex flex-row gap-10">

              <div className="flex items-center">
                <input type="radio" value="Organic waste" name="wastetype" checked={wastetype === "Organic waste"} onChange={(e) => { setWasteType(e.target.value) }} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Organic Waste</label>
              </div>
              <div className="flex items-center">
                <input type="radio" value="Other waste" name="wastetype" checked={wastetype === "Other waste"} onChange={(e) => { setWasteType(e.target.value) }} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Others</label>
              </div>

            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Wastetype