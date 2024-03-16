import { useState } from "react"
import Buttons from "../Components/Buttons"
import { recycle } from "../assets/images"
import { services } from "../constants"
import { Pickup, Recycle, Store } from "../sections"

const Allservices = () => {
  const [itemLabel, setItemLabel] = useState('Pickup')
  return (
    <div className="min-h-screen  pt-16">

      <h2 className="flex pb-8 pt-10 justify-center font-bold text-2xl font-montserrat text-slate-gray"></h2>
      <section className="w-full flex flex-col xl:flex-row justify-center items-center">

        <div className="flex justify-center gap-10   max-container max-lg:justify-center max-md:justify-center w-4/5">
          <div className=" flex items-center py-10 max-lg:hidden">
            <img src={recycle} alt="Hero image 2" width={410} height={600} className="object-contain relative z-10" />
          </div>
          <div className="xl:w-2/5 ">
            <div className="flex flex-row  w-4/5 max-container flex-wrap rounded-full  justify-center  gap-3">
              {
                services.map((item) => (
                  <a key={item.label} onClick={() => { setItemLabel(item.label[0].labels) }} >
                    <Buttons label={item.label[0].labels} buttonIcon='' />
                  </a>
                ))
              }
            </div>

            {
              itemLabel === "Pickup" ? <Pickup /> :
                itemLabel === "Rental" ? <Store /> :
                  itemLabel === "Recycling" ? <Recycle /> : ''

            }



          </div>
        </div>
      </section >
    </div>
  )
}

export default Allservices