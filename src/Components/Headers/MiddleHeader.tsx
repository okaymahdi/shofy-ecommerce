import { logo } from "@/assets"
import Image from "next/image"
import Link from "next/link"
import { LiaUser } from "react-icons/lia"
import Container from "../Container/Container"
import SearchInput from "./SearchInput/SearchInput"
import HeaderIcons from "./HeaderIcons"

const MiddleHeader = () => {
  return (
    <div className="border-b-[1px] border-b-gray-400">
      <Container className="py-5 flex items-center gap-4 md:gap-6 lg:gap-20 justify-between">
        <Link href={'/'}>
          <Image src={logo} alt="logo" className="w-28" />
        </Link>
        <SearchInput />
        <div className="hidden md:inline-flex items-center gap-3">
          <Link href={'/SignIn'} className="flex items-center gap-2 text-sm">
            <div className="border border-green-700 p-1.5 rounded-full">
            <LiaUser />
            </div>
            <div>
              <p className="text-xs">Hello, Guests</p>
              <p className="font-medium">Login / Register</p>
            </div>
          </Link>
          {/* user icon */}
          {/* header icons */}
          <HeaderIcons />
        </div>
      </Container>
    </div>
  )
}

export default MiddleHeader
