import { onboard } from "../constants"

const About = () => {
  let num = 1
  return (<>
    <h2 className="flex flex-row font-montserrat text-2xl  justify-center pb-10 font-semibold text-green-900">Steps To Manage Your Waste</h2>

    <section className=" 
    flex justify-center  w-/5  max-container gap-10 flex-wrap p-2">


      {

        onboard.map((item) => (
          <div key={item.step} className=" max-w-[205px] min-w-[200px] border px-2 py-4  rounded-lg text-slate-gray border-green-700 bg-white hover:border-green-950">
            <h2 className="text-lg  text-green-950  font-bold font-palanquin flex justify-center py-2">Step {num++}</h2>
            <h2 className="font-montserrat leading-8 flex justify-center text-green-800 font-bold pb-3">
              {item.step}
            </h2>
            <div>
              <p className="font-palanquin text-base text-semibold leading-6 flex justify-center px-2 ">{item.description}</p>
            </div>

          </div>
        ))
      }

    </section>
  </>
  )
}

export default About