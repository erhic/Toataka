
const Blog = () => {
  return (
    <section className="flex flex-row max-lg:flex-col justify-center gap-10">
      <div className="border p-5 hover:border-green-700  font-palanquin">
        <div className="">
          <img className="bg-gray-400 p-3 rounded-full absolute " src="" alt="" />
          <p className="pl-10">Job Mark</p>
        </div>
        <div className="min-w-[200px] max-w-[200px]">
          <p className="text-slate-gray ">" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis sequi suscipit delectus atque eos sint, blanditiis accusamus. "</p>
        </div>
      </div>

      <div className="border p-5 hover:border-green-700 font-palanquin">
        <div className="">
          <img className="bg-gray-400 p-3 rounded-full absolute " src="" alt="" />
          <p className="pl-10">Job Mark</p>
        </div>
        <div className="max-w-[180px]">
          <p className="text-slate-gray">" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis sequi suscipit delectus atque eos sint, blanditiis accusamus. "</p>
        </div>
      </div>
      <div className="border p-5 hover:border-green-700 font-palanquin ">
        <div className="">
          <img className="bg-gray-400 p-3 rounded-full absolute " src="" alt="" />
          <p className="pl-10">Job Mark</p>
        </div>
        <div className="max-w-[180px]">
          <p className="text-slate-gray">" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis sequi suscipit delectus atque eos sint, blanditiis accusamus. "</p>
        </div>
      </div>

    </section>
  )
}

export default Blog