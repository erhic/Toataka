
import Nav from "./Components/Nav"
import { Hero, About, Footer, Product, Blog, Services, Works } from "./sections"
import Contact from "./sections/Contact"
import Newsletter from "./sections/Newsletter"

export default function App() {
  return (
    <main>
      <section><Nav /> </section>
      <section className="xl:padding-l px-16 wide:padding-r padding-b"><Hero /> </section>
      <section className="padding"><About /> </section>
      <section className="padding"><Services />
      </section> <section className="padding-x py-10"><Product /> </section>
      <section className="padding bg-pale-blue"><Blog /> </section>
      <section className="padding "><Works /> </section>
      <section className="padding "><Newsletter /> </section>
      <section className=""><Contact /></section>
      <section className=""><Footer /></section>

    </main>
  )
}