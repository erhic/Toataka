
import Buttons from "../Components/Buttons"
import { hero } from "../assets/icons"

import { heroBtn } from "../constants"

const Hero = () => {
  return (
    // full width col but lg will have row occur 100view height justify center for elements inside relative flex flex-col xl:w-3/5 justify-center items-start w-full max-xl:padding-x
    <section className="  w-full flex  max-lg:flex-col flex-row justify-center items-center gap-10 max-continer min-h-screen  pt-28">
      <div className="  flex flex-col  max-lg:justify-center px-4 max-lg:px-1 ">
        <p className="text-base font-montserrat text-black">- In love of clean environment </p>
        <h1 className="mt-10 font-palanquin text-4xl text-blue-950 max-sm:text-[62px] max-sm:leading-[72px] font-bold">
          <span className="no-wrap text-green-900">Turning Waste Product <br />To Cash</span>
        </h1>
        <p className="text-base leading-8 mt-6 mb-7 sm:max-w-sm font-montserrat text-slate-gray"> We are your one-stop destination for all your waste management solution. Our website offers a wide array of services, dispose waste , collect waste as raw material and waste material storage. </p>
        <div className=" flex flex-row max-lg:flex-col max-lg:w-60 max-lg:hidden">
          {
            heroBtn.map((item) => (
              <aside key={item.label}>
                <a href="/orderpickup">
                  <Buttons label={item.label} />
                </a>
              </aside>
            ))
          }
        </div>

      </div>
      <div className=" relative flex justify-center ">
        <img src={hero} alt="Hero Image" width={500} height={500} className="object-contain relative z-10" />
      </div>
    </section>
  )
}

export default Hero