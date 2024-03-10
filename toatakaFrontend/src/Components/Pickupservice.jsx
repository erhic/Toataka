const Pickupservice = () => {
  return (
    <section>
      <h2 className="flex justify-center font-montserrat font-bold text-2xl text-green-900">Proceed to Order Service</h2>
      <form action="" className="flex gap-10 justify-between p-5 border items-start">
        <div className="p-5  flex flex-col justify-center gap-5">
          <h2>Service Type</h2>
          <div className="flex items-center ">
            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pick Up</label>
          </div>
          <div className="flex items-center">
            <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Storage Rental</label>
          </div>
          <div className="flex items-center">
            <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recycle</label>
          </div>

        </div>
        <div className="p-5   flex flex-col justify-center">
          <h2 className="flex justify-center">Quantity (Kgs)</h2>
          <input type="number" className="flex justify-center border-b py-3" placeholder="Enter quantity here" />
          <p className="font-montserrat pt-5 text-slate-gray">Packaging ?</p>
          <div className="flex justify-center flex-col gap-10 py-7">

            <div className="flex items-center  ">
              <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Containers</label>
            </div>
            <div className="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cartons</label>
            </div>
            <div className="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Waste Bags</label>
            </div>

          </div>


        </div>
        <div className="p-5   flex flex-col justify-center">
          <h2 className="flex justify-center">Type of Waste</h2>

          <p className="font-montserrat pt-5 text-slate-gray">Waste Components ?</p>
          <div className="flex justify-center gap-10 py-7 flex-col">

            <div className="flex items-center ">
              <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Medical Waste</label>
            </div>
            <div className="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kitchen Waste</label>
            </div>
            <div className="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Organic Waste</label>
            </div>
            <div className="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Organic Waste</label>
            </div>

          </div>



        </div>
        <div className="p-5  justify-center">
          <h2>Address</h2>
          <input type="text" placeholder="Enter phone no" />
          <input type="text" placeholder="Enter location " />
          <input type="text" placeholder="Enter " />
        </div>
      </form>

    </section>
  )
}

export default Pickupservice