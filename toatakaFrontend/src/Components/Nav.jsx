import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"

const Nav = () => {
  return (
    <>
      <header className="padding-x py-4 absolute w-full z-10">
        <nav className='flex justify-between items-center max-container'>
          <a className="flex flex-row justify-center items-center gap-1 font-semibold" href="">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Recycling_symbol.svg/150px-Recycling_symbol.svg.png" alt="" width={50} height={30} /> Toataka
          </a>
          <ul className="flex justify-center items-center gap-10 max-lg:hidden">
            {
              navLinks.map((item) => (

                <li key={item.label}>
                  <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:border-b-4 border-green-700'>
                    {item.label}
                  </a>
                </li>
              ))

            }</ul>
          <div className="hidden max-lg:block">
            <img src={hamburger} alt="" width={25} height={25} />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav