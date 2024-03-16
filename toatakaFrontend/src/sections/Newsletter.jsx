
const Newsletter = () => {
  return (
    <section className="flex justify-center pb-10 w-3/5 max-container ">
      <div className="">
        <h2 className="text-2xl font-montserrat font-semibold text-slate-gray flex justify-center">
          Subscribe to Our Newsletter
        </h2>
        <form action="" className="flex  flex-col justify-center">
          <input type="text" placeholder="Enter your email for updates" className="border py-10 rounded-full px-5 mt-10 flex justify-center border-green-900" />
          <button className="bg-green-900 text-white px-4 py-2 rounded-full max-container flex justify-end max-w-20 mt-8">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter