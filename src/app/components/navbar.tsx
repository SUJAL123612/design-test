import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <div className="border border-indigo-600 h-24 flex w-full ">
                <img src="/logo.png" alt="" className="w-40 ml-7 -mt-8 h-40 justify-between mr-[100px]" />
                <ul className="text-xl mt-5 -mr-8 justify-between">
                    <Link className="mr-[50px]" href="/HOME">HOME</Link>
                    <Link className="mr-[50px]" href="/NEW ARRIVALS">NEW ARRIVALS</Link>
                    <Link className="mr-[50px]" href="/SHOP">SHOP</Link>
                    <Link className="justify-between mr-[100px]" href="/SUPPORT">SUPPORT</Link>
                </ul>
                {/* <p className="border border-black rounded-xl text-xl mt-5 -mr-8 pr-5 pl-5 h-[28px] flex"><img src="Vector.svg" className="" alt="" />Search</p> */}
                <form className="text-xl mt-5 -mr-8 pr-5 pl-5 h-[28px] flex">
                {/* <img src="Vector.svg" className="" alt="" /> */}
                <input type="text" placeholder="Search" className=" rounded-xl bg-[Vector.svg]"/>
                </form>
            </div>
        </>
    )
}

export default Navbar