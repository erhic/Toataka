

const Allproducts = () => {
  return (
    <div className="min-h-screen  pt-16">

      <h2 className=" font-montserrat  font-semibold text-lg flex justify-center pt-14 pb-10 text-slate-gray">- Waste products we Handle</h2>
      <section className="flex justify-center  w-3/5 max-container gap-10 flex-wrap p-2 border p-5 ">
        <div className="p-6 py-8 rounded-lg text-lg flex justify-center min-w-[150px] max-w-[150px] bg-green-800 text-white font-palanquin hover:bg-green-700 hover:grow-0 border-2">Industry Waste</div>
        <div className="p-6 py-8 rounded-lg text-lg flex justify-center min-w-[150px] max-w-[150px] bg-green-800 text-white font-palanquin hover:bg-green-700 hover:grow-0 border-2">Medical Waste</div>
        <div className="p-6 py-8 rounded-lg text-lg flex justify-center min-w-[150px] max-w-[150px] bg-green-800 text-white font-palanquin hover:bg-green-700 hover:grow-0 flex-1  border-2">Food Waste</div>
        <div className="p-6 py-8 rounded-lg text-lg flex justify-center min-w-[150px] max-w-[150px] bg-green-800 text-white font-palanquin hover:bg-green-700 hover:grow-0 border-2">Domestic Waste</div>
        <div className="p-6 py-8 rounded-lg text-lg flex justify-center min-w-[150px] max-w-[150px] bg-green-800 text-white font-palanquin hover:bg-green-700 hover:grow-0 border-2">Metal Containers</div>
        <div className="p-6 py-8 rounded-lg text-lg flex justify-center min-w-[150px] max-w-[150px] bg-green-800 text-white font-palanquin hover:bg-green-700 hover:grow-0 border-2">Chemical Waste</div>
      </section>
    </div>

  )
}

export default Allproducts