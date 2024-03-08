import { onboard } from "../constants"

const About = () => {
  return (<>
    <h2 className="flex flex-row font-montserrat text-2xl  justify-center pb-10 font-semibold text-green-900">Steps To Manage Your Waste</h2>
    <section className="flex flex-row max-lg:flex-col gap-14 justify-center">

      {
        onboard.map((item) => (
          <div key={item.step} className=" max-w-[200px] min-w-[190px] border px-2 py-4 bg-gray-50 rounded-lg  hover:bg-green-700 hover:text-white border-green-700">
            <h2 className="font-montserrat leading-8 flex justify-center font-semibold pb-3">
              {item.step}
            </h2>
            <p className="font-palanquin text-base leading-6 text-slate-gray hover:text-gray-200">{item.description}</p>
          </div>
        ))
      }

    </section>
  </>
  )
}

export default About