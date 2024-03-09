import { recycling } from "../constants"

const Recycle = () => {
  return (
    <>
      <section className="">
        {recycling.map((item => (
          <aside key={item.definition} className="pt-8 pr-4 leading-6 ">
            <p className="font-montserrat flex justify-start ml-16 leading-8 pb-3 text-gray-700"> {item.definition}</p>

            {
              item.points.map((itm) => (
                <aside key={itm.point}>
                  <span className=" text-green-900  p-2 text-2xl font-palanquin bg- rounded-full absolute ">✔</span>
                  <p className=" font-montserrat flex justify-start ml-16 leading-8 text-slate-gray"> {itm.keypoint}</p>
                </aside>

              ))
            }


          </aside>
        )))}
      </section>
    </>
  )
}

export default Recycle