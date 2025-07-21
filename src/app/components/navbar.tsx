import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <div className="border border-transparent h-24 flex w-full ">
                <img src="logo.png" alt="logo" className="w-40 ml-7 -mt-8 h-40 justify-between mr-[100px]" />
                <ul className="text-xl mt-[38px] -mr-8 justify-between">
                    <Link className="mr-[50px] text-gray-700 hover:text-black" href="#home">HOME</Link>
                    <Link className="mr-[50px] text-gray-700 hover:text-black" href="#new_arrivals">NEW ARRIVALS</Link>
                    <Link className="mr-[50px] text-gray-700 hover:text-black" href="#shop">SHOP</Link>
                    <Link className="justify-between mr-[100px] text-[#00000099] hover:text-black" href="/support">SUPPORT</Link>
                </ul>
                <form className="text-xl mt-[38px] -mr-8 pr-5 pl-5 h-[28px] flex">
                    <input type="text" placeholder="Search..." className="rounded-xl w-40 pl-10 h-full bg-[url('/Vector.svg')] bg-no-repeat bg-left bg-[length:40px_20px]"/>
                    <img src="CART.svg" alt="cart" className="ml-[80px] cursor-pointer"/>
                    <img src="profile.svg" alt="profile" className="ml-[60px] cursor-pointer"/>
                </form>
            </div>
        </>
    )
}

export default Navbar