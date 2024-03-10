
const Newsletter = () => {
  return (
    <section className="flex justify-center pb-10">
      <div>
        <h2 className="text-2xl font-montserrat font-semibold text-slate-gray">
          Subscribe to Our Newsletter
        </h2>
        <form action="">
          <input type="text" placeholder="Enter your email here ." className="border px-16 py-10 rounded-full mt-10 border-green-900" />
        </form>
      </div>
    </section>
  )
}

export default Newsletter