import { blog } from "../constants"

const Blog = () => {
  return (
    <section className="flex flex-wrap w-5/5  max-container justify-center gap-10">
      {
        blog.map((item) => (
          <>
            <div key={item.personName} className="border p-5 hover:border-green-700 font-palanquin ">
              <div className="">
                <img className="bg-gray-400 p-3 rounded-full absolute " src="" alt="" />
                <p className="pl-10">{item.personName}</p>
              </div>
              <div className="min-w-[200px] max-w-[200px]">
                <p className="text-slate-gray">{item.comment}</p>
              </div>
            </div>
          </>
        ))
      }


    </section>
  )
}

export default Blog