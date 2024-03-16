import { useState } from "react"
import { dustbin } from "../assets/images"

const Register = () => {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')

  const handleRegister = () => {

  }

  return (
    <div className=" flex justify-center rounded max-h-[405px] ">
      <div className="max-w-[328px] rounded-tl-lg overflow-hidden rounded-bl-lg max-lg:hidden"><img src={dustbin} alt="" /></div>
      <form action="" className=" gap-5 flex flex-col p-6  border  rounded-tr-lg  rounded-br-lg max-lg:rounded-lg hover:border-green-800">
        <h2 className="flex  justify-center font-montserrat font-bold text-green-900 text-lg">Register</h2>
        <input className="border px-3 py-3 rounded-lg" value={username} onChange={setUserName} type="text" placeholder="Enter username " />
        <input className="border px-3 py-3 rounded-lg" value={email} onChange={setEmail} type="text" placeholder="Enter email " />
        <input className="border px-3 py-3 rounded-lg" value={password} onChange={setPassWord} type="password" placeholder="Enter password" />
        <input className="border px-3 py-3 rounded-lg" value={confirmpassword} onChange={setConfirmPassword} type="password" placeholder="Confirm password" />
        <div className="flex justify-center ">
          <button className="bg-green-900 px-6 py-2 rounded-full text-white max-w-[120px]" onClick={handleRegister}>
            Register
          </button>
        </div>

      </form>
    </div>
  )
}

export default Register