import { dustbin } from "../assets/images"

const Register = () => {
  return (
    <div className="border flex justify-center rounded max-h-[405px] ">
      <div className="max-w-[328px] rounded-tl-lg overflow-hidden rounded-bl-lg max-lg:hidden"><img src={dustbin} alt="" /></div>
      <form action="" className=" gap-5 flex flex-col p-6 border border-green-900 rounded-tr-lg  rounded-br-lg max-lg:rounded-lg">
        <h2 className="flex  justify-center font-montserrat font-bold text-green-900 text-lg">Register</h2>
        <input className="border px-3 py-3 rounded-lg" type="text" placeholder="Enter username " />
        <input className="border px-3 py-3 rounded-lg" type="text" placeholder="Enter email " />
        <input className="border px-3 py-3 rounded-lg" type="password" placeholder="Enter password" />
        <input className="border px-3 py-3 rounded-lg" type="password" placeholder="Confirm password" />
        <div className="flex justify-center ">
          <button className="bg-green-900 px-6 py-2 rounded-full text-white max-w-[120px]">
            Register
          </button>
        </div>

      </form>
    </div>
  )
}

export default Register