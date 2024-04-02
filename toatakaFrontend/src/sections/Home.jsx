import About from "./About"
import Blog from "./Blog"
import Contact from "./Contact"
import Footer from "./Footer"
import Hero from "./Hero"
import Newsletter from "./Newsletter"
import Product from "./Product"
import Services from "./Services"
import Works from "./Works"

const Home = () => {
  return (
    <>
      {/* <section className="padding"><Login /></section>
      <section className="padding"><Register /></section>
      <section className="padding"><Pickupservice /></section> */}
      <section className="xl:padding-l px-16 wide:padding-r padding-b"><Hero /> </section>
      <section className="padding"><About /> </section>
      <section className="padding"><Services />
      </section> <section className="padding-x py-10"><Product /> </section>
      <section className="padding bg-pale-blue"><Blog /> </section>
      <section className="padding ">
        <h2 className="font-montserrat  text-slate-gray text-2xl  pb-10 flex justify-center font-semibold">Our Stories</h2>
        <Works /> </section>
      <section className="padding "><Newsletter /> </section>
      <section className=""><Contact /></section>
      <section className=""><Footer /></section>
    </>
  )
}

export default Home