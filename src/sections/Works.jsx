import { hero } from "../assets/icons"
import { storage, wastedumpsite } from "../assets/images"

const Works = () => {
  return (
    <>
      <h2 className="font-montserrat  text-slate-gray text-2xl  pb-10 flex justify-center font-semibold">Our Stories</h2>

      <section className="flex flex-row max-lg:flex-col gap-10  justify-center flex-wrap">
        <div className="border max-w-[250px]">
          <div className="h-full max-h-[145px]">
            <img className="h-full " src={wastedumpsite} width={267} height={250} alt="" />
          </div>
          <p className=" px-3 pt-3  font-palanquin  text-slate-gray max-w-[250px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates deleniti.
          </p>
          <span className="text-[25px] px-3 font-semibold">→</span><span className="font-palanquin text-slate-800">Read more</span>
        </div>

        <div className="border max-w-[250px]">
          <div className="h-full max-h-[145px]">
            <img className="h-full " src={storage} width={250} height={250} alt="" />
          </div>
          <p className=" px-3 pt-3  font-palanquin  text-slate-gray max-w-[250px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates deleniti.
          </p>
          <span className="text-[25px] px-3 font-semibold">→</span><span className="font-palanquin text-slate-800">Read more</span>
        </div>
        <div className="border max-w-[250px]">
          <div className="h-full max-h-[145px]">
            <img className="h-full " src={wastedumpsite} width={250} height={250} alt="" />
          </div>
          <p className=" px-3 pt-3  font-palanquin  text-slate-gray max-w-[250px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates deleniti.
          </p>
          <span className="text-[25px] px-3 font-semibold">→</span><span className="font-palanquin text-slate-800">Read more</span>
        </div>
        <div className="border max-w-[250px]">
          <div className="h-full max-h-[145px]">
            <img className="h-full " src={wastedumpsite} width={250} height={250} alt="" />
          </div>
          <p className=" px-3 pt-3  font-palanquin  text-slate-gray max-w-[250px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates deleniti.
          </p>
          <span className="text-[25px] px-3 font-semibold">→</span><span className="font-palanquin text-slate-800">Read more</span>
        </div>

      </section>
    </>
  )
}

export default Works