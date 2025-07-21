import Navbar from "../components/navbar";
import Home from "../home/page";


export default function New_arrivals() {
    return (
        <>
            <Home />
            <div className="border border-red-500 h-[596px]" >
                <p className="relative rounded-xl border border-[#000000] mt-[31px] w-32 pl-[40px] pt-2 pb-1 ml-8" id="new_arrivals">POPULAR</p>
                <div className="absolute rounded-l-xl border border-[#FF7F3E] bg-[#FF7F3E] -mt-[40px] w-2 h-10 pl-8 pt-2 pb-2 ml-[32px] ">

                </div>
                <div className="border border-green-500 h-[450px] flex">
                    <div className="rounded-lg bg-[#F8F8F8] h-90 w-55 mt-8 ml-[150px] border border-black relative">
                        <p className="text-[10px] font-bold ml-3 pt-[300]">Meta Moon Men’s Oversized T-shirt</p>
                        <p className="font-bold text-[14px] ml-3">₹ 549.00 <span className="line-through text-[#0000006B] ml-3 text-[14px]">₹ 1,249.00</span></p>
                        <img src="STARS.png" alt="" className="w-24 -pt-[7px] pl-3"/>
                    </div>
                    <div className="rounded-lg bg-[#F8F8F8] h-90 w-55 mt-8 ml-[150px] border border-black relative">
                    <p className="text-[10px] font-bold ml-3 pt-[300]">Wiseman Black Men’s Oversized T-shirt</p>
                        <p className="font-bold text-[14px] ml-3">₹ 549.00 <span className="line-through text-[#0000006B] ml-3 text-[14px]">₹ 1,249.00</span></p>
                        <img src="STARS.png" alt="" className="w-24 -pt-[7px] pl-3"/>
                    </div>
                    <div className="rounded-lg bg-[#F8F8F8] h-90 w-55 mt-8 ml-[150px] border border-black relative">
                    <p className="text-[10px] font-bold ml-3 pt-[300]">Wiseman White Men’s Oversized T-shirt</p>
                        <p className="font-bold text-[14px] ml-3">₹ 549.00 <span className="line-through text-[#0000006B] ml-3 text-[14px]">₹ 1,249.00</span></p>
                        <img src="STARS.png" alt="" className="w-24 -pt-[7px] pl-3"/>
                    </div>
                </div>
            </div>


        </>
    );
}
