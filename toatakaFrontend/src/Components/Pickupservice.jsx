import { useState } from "react"
import { Address, Allservicesdata, Quantity, Servicetype, Wastetype } from "./OrderServices"

const Pickupservice = () => {
  const [page, setPage] = useState(1)

  const nextPage = (page) => {
    return page + 1
  }
  const prevPage = (page) => {
    return page - 1
  }
  return (

    <section className="min-h-[340px] py-[128px]">
      {/* <h2 className="flex justify-center font-montserrat font-bold text-2xl  pb-5 text-green-900">Proceed to Order Service</h2> */}
      {page < 4 && (<h2 className="flex justify-center font-montserrat text-lg p-3 rounded-full text-green-900">{page} of 4</h2>)}
      <div className="flex justify-start w-3/5 max-container max-lg:hidden">
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
                  <p className="flex justify-center p-3 bg-green-800 text-whit--e  font-bold  text-lg  font-montserrat rounded-full items-center max-h-[36px] max-w-[50px]"><span className="text-[16px]" >✔</span></p>
                  <p className="flex justify-center p-3 bg-green-800 text-white  font-bold  text-lg  font-montserrat rounded-full items-center max-h-[36px] max-w-[50px]"><span className="text-[16px]" >✔</span></p>
                  <p className="flex justify-center p-3 bg-green-800 text-white  font-bold  text-lg  font-montserrat rounded-full items-center max-h-[36px] max-w-[50px]">{3}</p>
                </div>
                : page == 4 ?
                  <div className="flex m-4 gap-40">
                    <p className="flex justify-center p-3 bg-green-800 text-white  font-bold  text-lg  font-montserrat rounded-full items-center max-h-[36px] max-w-[50px]"><span className="text-[16px]" >✔</span></p>
                    <p className="flex justify-center p-3 bg-green-800 text-white  font-bold  text-lg  font-montserrat rounded-full items-center max-h-[36px] max-w-[50px]"><span className="text-[16px]" >✔</span></p>
                    <p className="flex justify-center p-3 bg-green-800 text-white  font-bold  text-lg  font-montserrat rounded-full items-center max-h-[36px] max-w-[50px]"><span className="text-[16px]" >✔</span></p>
                    <p className="flex justify-center p-3 bg-green-800 text-white  font-bold  text-lg  font-montserrat rounded-full items-center max-h-[36px] max-w-[50px]">{4}</p>
                  </div> : ""
        }
      </div>
      <div action="" className="min-h-screen flex flex-col ">
        <div action="" className="flex justify-center min-h-[300px]  ">
          {
            page == 1 ? <Servicetype /> : page == 2 ? <Quantity /> : page == 3 ? <Wastetype /> : page == 4 ? <Address /> : <Allservicesdata />
          }

        </div>

        <div className=" flex justify-center gap-10  px-16">
          {
            page > 1 && page <= 4 && (
              <button className="bg-green-800 text-white px-5 py-1 rounded-full mt-4" onClick={() => { setPage(prevPage) }}>Prev</button>
            )
          }

          {
            page < 4 && (
              <button className="bg-green-800 text-white px-5 py-1 rounded-full mt-4" onClick={() => { setPage(nextPage) }}>Next</button>
            )}
          {
            page == 4 && (
              <button className="text-slate-gray px-5 py-1 rounded-full mt-4" onClick={() => { setPage(nextPage) }}>Proceed to Submit</button>
            )}
          {
            page == 5 && (
              <br />
            )}

        </div>
      </div>
    </section>
  )
}

export default Pickupservice