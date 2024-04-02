import { useState } from "react"
import { dustbin } from "../assets/images"
import { Link } from "react-router-dom"

const Register = () => {

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [message, setMessage] = useState({ type: "invisible", text: "some text" })

  const handleInput = (e) => {
    setUserDetails((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value }
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:/8076/register", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => response.json())
      .then((data) => {
        setMessage({ type: "success", text: data.message })
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })

        setTimeout(() => {
          setMessage({ type: "invisible-msg", text: "some txte" })
        }, 5000)
      }).catch((err) => console.log(err))
  }

  return (
    <div className="max-h-screen m-1 pt-[93px] ">
      <div className=" flex justify-center rounded max-h-[405px] ">
        <div className="max-w-[328px] rounded-tl-lg overflow-hidden rounded-bl-lg max-lg:hidden"><img src={dustbin} alt="" /></div>
        <form action="" className=" gap-5 flex flex-col p-6  border  rounded-tr-lg  rounded-br-lg max-lg:rounded-lg hover:border-green-600" onSubmit={handleSubmit}>
          <h2 className="flex  justify-center font-montserrat font-bold text-green-900 text-lg">Register</h2>
          <input className="border px-3 py-3 rounded-lg outline-green-600" value={setUserDetails.username} onChange={handleInput} type="text" placeholder="Enter username " />
          <input className="border px-3 py-3 rounded-lg outline-green-600" value={setUserDetails.email} onChange={handleInput} type="text" placeholder="Enter email " />
          <input className="border px-3 py-3 rounded-lg outline-green-600" value={setUserDetails.password} onChange={handleInput} type="password" placeholder="Enter password" />
          <input className="border px-3 py-3 rounded-lg outline-green-600" value={setUserDetails.confirmpassword === setUserDetails.password ? '' : alert("Password does not match")} onChange={handleInput} type="password" placeholder="Confirm password" />
          <div className="flex justify-center ">
            <button className="bg-green-900 px-6 py-2 rounded-full text-white max-w-[120px]" type="submit">
              Register
            </button>
          </div>
          <p className="font-palanquin text-slate-gray">Already with an account?<Link to="/login" className="text-green-800 underline"> Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register