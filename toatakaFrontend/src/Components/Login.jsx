import { recycle } from "../assets/images"

const Login = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="max-w-[400px] max-lg:hidden rounded-tl-lg overflow-hidden rounded-bl-lg h-full ">
        <img src={recycle} width={340} className="max-h-[310px]" alt="" />
      </div>
      <form action="" className="flex flex-col gap-6 border px-7  pt-12 rounded-tr-lg rounded-br-lg pb-9 hover:border-green-900 ">
        <h2 className="flex justify-center font-bold font-montserrat text-green-800 text-lg leading-8">Login</h2>
        <input type="text" className="border rounded-lg p-2" placeholder="Enter email " />
        <input className="border p-2 rounded-lg" type="password" placeholder="Enter password" />
        <div className="flex justify-center">
          <button className="bg-green-900 text-white px-6 py-1 rounded-full overflow-hidden max-w-[150px]">Login </button>
        </div>

      </form>

    </div>
  )
}

export default Login