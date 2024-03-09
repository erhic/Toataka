import { useState } from "react"
import Buttons from "../Components/Buttons"
import { services } from "../constants"
import Recycle from "../Components/Recycle"
import Pickup from "../Components/Pickup"
import Store from "../Components/Store"
import { recycle } from "../assets/images"


const Services = () => {
  const [itemLabel, setItemLabel] = useState('Pickup')


  console.log(itemLabel)
  return (
    <> <h2 className="flex pb-8 justify-center font-bold text-2xl font-montserrat text-slate-gray">Our Services</h2>
      <section className="w-full flex flex-col xl:flex-row justify-center items-center">

        <div className="flex justify-center gap-10  w-full max-container max-lg:justify-center max-md:justify-center">
          <div className=" flex items-center py-10 max-lg:hidden">
            <img src={recycle} alt="Hero image 2" width={410} height={600} className="object-contain relative z-10" />
          </div>
          <div className="xl:w-2/5">
            <div className="flex flex-row max-lg:flex-col  rounded-full  justify-center  gap-3">
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
    </>
  )
}


export default Services