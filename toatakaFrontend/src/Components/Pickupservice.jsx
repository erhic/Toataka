import { useState } from "react"
import { Address, Quantity, Servicetype, Wastetype } from "./OrderServices"

const Pickupservice = () => {
  const [page, setPage] = useState(1)

  const nextPage = (page) => {
    return page + 1
  }
  const prevPage = (page) => {
    return page - 1
  }
  return (

    <section className="min-h-[340px] ">
      <h2 className="flex justify-center font-montserrat font-bold text-2xl  pb-5 text-green-900">Proceed to Order Service</h2>
      <div className="flex justify-start w-4/5 max-container">
        {
          page == 1 ?
            <div className="flex m-4 justify-between">
              <p className="flex justify-center p-3 bg-green-800 text-white  font-bold  text-lg  font-montserrat rounded-full max-h-[32px] items-center max-w-[58px]">{1}
              </p>
            </div>
            :

            page == 2 ?
              <div className="flex m-4  gap-40">
                <p className="flex justify-center p-3 bg-green-800 text-white    text-lg  font-montserrat rounded-full items-center max-h-[36px] max-w-[50px]"><span className="text-[16px]" >✔</span></p>
                <p className="flex justify-center p-3 bg-green-800 text-white  font-bold  text-lg  font-montserrat rounded-full items-center max-h-[36px] max-w-[50px]">{2}</p>
              </div>
              :
              page == 3 ?
                <div className="flex m-4 gap-40 ">
                  <p className="flex justify-center p-3 bg-green-800 text-white  font-bold  text-lg  font-montserrat rounded-full items-center max-h-[36px] max-w-[50px]"><span className="text-[16px]" >✔</span></p>
                  <p className="flex justify-center p-3 bg-green-800 text-white  font-bold  text-lg  font-montserrat rounded-full items-center max-h-[36px] max-w-[50px]"><span className="text-[16px]" >✔</span></p>
                  <p className="flex justify-center p-3 bg-green-800 text-white  font-bold  text-lg  font-montserrat rounded-full items-center max-h-[36px] max-w-[50px]">{3}</p>
                </div>
                :
                <div className="flex m-4 gap-40">
                  <p className="flex justify-center p-3 bg-green-800 text-white  font-bold  text-lg  font-montserrat rounded-full items-center max-h-[36px] max-w-[50px]"><span className="text-[16px]" >✔</span></p>
                  <p className="flex justify-center p-3 bg-green-800 text-white  font-bold  text-lg  font-montserrat rounded-full items-center max-h-[36px] max-w-[50px]"><span className="text-[16px]" >✔</span></p>
                  <p className="flex justify-center p-3 bg-green-800 text-white  font-bold  text-lg  font-montserrat rounded-full items-center max-h-[36px] max-w-[50px]"><span className="text-[16px]" >✔</span></p>
                  <p className="flex justify-center p-3 bg-green-800 text-white  font-bold  text-lg  font-montserrat rounded-full items-center max-h-[36px] max-w-[50px]">{4}</p>
                </div>
        }
      </div>
      <div action="" className="flex gap-10 justify-center p-5 border items-start  ">

        {
          page == 1 ? <Servicetype /> : page == 2 ? <Quantity /> : page == 3 ? <Wastetype /> : <Address />
        }

      </div>

      <div className=" flex justify-center  gap-10 px-16">
        {
          page > 1 && (
            <button className="bg-green-800 text-white px-4 py-1 rounded-full mt-4" onClick={() => { setPage(prevPage) }}>Prev</button>
          )
        }

        {
          page < 4 && (
            <button className="bg-green-800 text-white px-4 py-1 rounded-full mt-4" onClick={() => { setPage(nextPage) }}>Next</button>
          )}

      </div>
    </section>
  )
}

export default Pickupservice