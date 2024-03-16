import { onboard } from "../constants"


const Allaboutus = () => {
  let num = 1
  return (
    <div className=" min-h-screen pt-16">
      <h2 className="flex flex-row font-montserrat text-2xl pt-16 justify-center pb-10 font-semibold text-green-900"></h2>
      <section className=" flex justify-center  w-/5  max-container gap-10 flex-wrap p-2">

        {
          onboard.map((item) => (
            <div key={item.step} className=" max-w-[200px] min-w-[190px] border px-2 py-4 bg-gray-50 rounded-lg  hover:bg-green-700 hover:text-white border-green-700">

              <h2 className="text-lg  text-green-950  font-bold font-palanquin flex justify-center py-2">Step {num++}</h2> <h2 className="font-montserrat leading-8 flex justify-center font-semibold pb-3">
                {item.step}
              </h2>
              <p className="font-palanquin text-base leading-6  hover:text-gray-200">{item.description}</p>
            </div>
          ))
        }

      </section>

    </div>
  )
}

export default Allaboutus