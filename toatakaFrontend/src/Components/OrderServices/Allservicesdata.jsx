import { useContext, useState } from "react"
import FormContext from "../../Context/PickupServiceContext"

const Allservicesdata = () => {
  const {
    service,
    wastetype,
    quantity,
    packagetype,
    phoneno,
    location,
    street, } = useContext(FormContext)

  console.log(
    service,
    wastetype,
    quantity,
    packagetype,
    phoneno,
    location,
    street,
  )

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    setIsSubmitted(true)
  }



  return (
    <>
      {isSubmitted == false && (
        <div className="flex flex-col gap-10 py-16 font-montserrat text-lg font-semibold">
          <h2 className="text-2xl">Confirm submit</h2>
          <button className="text-white bg-green-900 px-4 py-2 rounded-lg" onClick={handleSubmit}>Submit</button>
        </div>)
      }

      {isSubmitted == true && (


        <div className="flex justify-center  flex-col  flex-wrap items-center pt-16 gap-5 max-container">
          <div className="flex  items-center gap-5 ">
            <p className="flex justify-center p-4 bg-green-800 text-white  font-bold  text-lg  font-montserrat rounded-full items-center max-h-[46px] max-w-[60px] max-container border"><span className="text-[16px]" >✔</span></p>
            <span className="font-montserrat font-bold text-2xl text-slate-gray">Done</span>
          </div>
          <div className="text-2xl p-16 text-slate-gray font-montserrat font-bold">
            <p className=" flex flex-wrap justify-center text-green-900">  <span>Request received ,</span>we will get back to you soon !!</p>
          </div>


        </div>

      )}

    </>
  )
}

export default Allservicesdata