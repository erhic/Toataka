
const Contact = () => {
  return (
    <section className="flex flex-wrap max-container w-5/5 gap-10 justify-between px-16 bg-green-900 text-white py-16 font-palanquin ">
      <div className="max-w-[187px]">
        <h2 className="text-lg font-semibold pb-3">About Us</h2>

        <p >Factories can’t be recycling, which causes pollution.Industries do not focus on recycling; they concentrate only on the raw material.</p>
        <p></p>
      </div>
      <div>
        <h2 className="text-lg font-semibold pb-3">Quick Links</h2>
        <p>About Us </p>
        <p>Services</p>
        <p>Request Pickup</p>
        <p>Contact Us</p>
      </div>
      <div className="max-w-[187px] ">
        <h2 className=" text-lg font-semibold pb-3 leading-normal">Working Hours</h2>
        <p>We are all available at our offices within the week</p>
        <p className="py-1"> <span>Weekday <br /></span>Mon - Fri:  9:00AM - 6:00PM</p>
        <p> <span>Weekend<br /></span> Sat - Sun:  8:00AM - 4:00PM</p>
        <p></p>
      </div>

      <div>
        <h2 className="text-lg font-semibold pb-3">Get in Touch</h2>
        <p>North Airport Road , Embakasi</p>
        <p>Nairobi</p>
        <p> (+254) 790 999 999</p>
        <p> customercare@toataka.com</p>
      </div>
    </section>
  )
}

export default Contact