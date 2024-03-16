import { useContext } from "react"
import FormContext from "../../Context/PickupServiceContext"

const Quantity = () => {

  const { quantity, packagetype, setQuantity,
    setPackageType } = useContext(FormContext)

  console.log(quantity, packagetype)
  return (
    <>
      <form action=""> <div className="p-4   flex flex-col justify-center ">
        <h2 className="flex justify-center text-slate-gray">Quantity (Kgs)</h2>
        <input type="number" className="flex justify-center border-b py-2 outline-none" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} placeholder="Enter quantity here" />

        <p className="font-montserrat pt-5 text-slate-gray text-center">Packaging ?</p>
        <div className="flex justify-center flex-row gap-10 py-7">
          <div action="" className="gap-4 flex max-lg:flex-col">
            <div className="flex items-center   ">
              <input type="radio" value="container" name="quantity" checked={packagetype === "container"} onChange={(e) => { setPackageType(e.target.value) }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Containers</label>
            </div>
            <div className="flex items-center">
              <input type="radio" value="cartons" name="quantity" checked={packagetype === "cartons"} onChange={(e) => { setPackageType(e.target.value) }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cartons</label>
            </div>
            <div className="flex items-center">
              <input type="radio" value="wastebags" name="quantity" checked={packagetype === "wastebags"} onChange={(e) => { setPackageType(e.target.value) }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Waste Bags</label> </div>
          </div>
        </div>
      </div>
      </form>
    </>
  )
}

export default Quantity