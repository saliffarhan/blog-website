import Link from "next/link"
import { AlignRight } from "lucide-react"
import Image from "next/image"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"




export default function Headerpage() {
  return (
    <main className="mx-w-[100%] h-14 bg-slate-100 max-w-screen-2xl sticky top-0 z-50 ">
      <header className="flex justify-between items-center mx-auto md:px-16 md:py-1 p-3 px-4  font-sans  sticky top-0 ">
        {/* logo */}
        <div>
          <Link href="/"><Image width={93} height={200} src="/b-logo.png" alt="" /></Link>
        </div>

        {/* navbar */}
        <ul className="hidden md:block md:flex-row flex-col " >
          <li className="space-x-10 font-sans font-semibold  ">
            <Link className="hover:text-blue-600 text-gray-500" href="/">Home</Link>
            <Link className="hover:text-blue-600 text-gray-500" href="blog">Blogs</Link>

            <Link className="hover:text-blue-600 text-gray-500" href="about">About</Link>
            <Link className="hover:text-blue-600 text-gray-500" href="/contact">Contact Us</Link>

          </li>
        </ul >


        <Sheet>
          <SheetTrigger className="md:hidden">
            <AlignRight />

          </SheetTrigger>
          <SheetContent className="bg-slate-200 py-5">
            <ul  >
              <li className="md:flex-row flex-col flex text-center mt-10">
                <Link className="hover:text-blue-600  text-xl font-semibold" href="/">Home</Link>
                <Link className="hover:text-blue-600 py-5 text-xl font-semibold" href="blog">Blogs</Link>
                <Link className="hover:text-blue-600 text-xl font-semibold" href="about">About</Link>
                <Link className="hover:text-blue-600 text-xl py-5 font-semibold" href="/contact">Contact Us</Link>

              </li>
            </ul >

            <SheetHeader>
              <SheetTitle>

              </SheetTitle>
              <SheetDescription>

              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>




      </header>
    </main>
  )
}

{/* <ul  >
<li className="md:flex-row flex-col flex text-center mt-10">
  <Link className="hover:text-blue-600  text-xl font-semibold" href="/">Home</Link>
  <Link className="hover:text-blue-600 py-5 text-xl font-semibold" href="blog">Blogs</Link>
  <Link className="hover:text-blue-600 text-xl font-semibold" href="about">About</Link>
  <Link className="hover:text-blue-600 text-xl py-5 font-semibold" href="/contact">Contact Us</Link>

</li>
</ul > */}

{/* <AlignRight /> */ }
