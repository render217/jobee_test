
import Contracts from "@/components/contracts";
import Hero from "@/components/hero";
import Navbar from "@/components/shared/navbar";

export default function App() {
  return (
    <div className='bg-clr-porcelain font-poppins py-4 px-4 max-w-[1990px] mx-auto'>
      <Navbar />
      <Hero />
      <Contracts />
    </div>
  )
}