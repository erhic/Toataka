import { Outlet } from "react-router-dom"
import Nav from "./Components/Nav"
import { Footer, } from "./sections"
import { FormProvider } from "./Context/PickupServiceContext"

export default function App() {
  return (
    <FormProvider>
      <main>
        <section ><Nav /> </section>
        <Outlet />
        <section className=""><Footer /></section>

      </main>
    </FormProvider>
  )
}