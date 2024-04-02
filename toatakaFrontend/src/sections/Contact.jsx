const Contact = () => {
  return (
    <section className="flex flex-wrap max-container w-5/5 gap-10 justify-between px-16 bg-green-900 text-white py-16 font-palanquin ">
      <div className="max-w-[187px]">
        <h2 className="text-lg font-semibold pb-3">About Us</h2>

        <p>
          Factories can’t be recycling, which causes pollution.Industries do not
          focus on recycling; they concentrate only on the raw material.
        </p>
        <p></p>
      </div>
      <div>
        <h2 className="text-lg font-semibold pb-3">Quick Links</h2>
        <p>
          About Us <span className="text-[20px] px-3 font-semibold">→</span>
        </p>
        <p>
          Services <span className="text-[20px] px-3 font-semibold">→</span>
        </p>
        <p>
          Request Pickup{" "}
          <span className="text-[20px] px-3 font-semibold">→</span>
        </p>
        <p>
          Contact Us <span className="text-[20px] px-3 font-semibold">→</span>
        </p>
      </div>
      <div className="max-w-[250px] ">
        <h2 className=" text-lg font-semibold pb-3 leading-normal">
          Working Hours
        </h2>
        <p>We are all available at our offices within the week</p>
        <p className="py-1">
          {" "}
          <span className="hover:underline">
            Weekday <br />
          </span>
          Mon - Fri: 9:00AM - 6:00PM
        </p>
        <p>
          {" "}
          <span className="hover:underline">
            Weekend
            <br />
          </span>{" "}
          Sat - Sun: 8:00AM - 4:00PM
        </p>
        <p></p>
      </div>

      <div>
        <h2 className="text-lg font-semibold pb-3">Get in Touch</h2>
        <p>North Airport Road </p>
        <p> Embakasi - Nairobi</p>
        <p> (+254) 790 999 999</p>
        <p> customercare@toataka.com</p>
      </div>
    </section>
  );
};

export default Contact;
