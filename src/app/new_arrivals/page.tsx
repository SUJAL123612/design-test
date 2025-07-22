import Home from "../home/page";


export default function New_arrivals() {
    return (
        <>
            <Home />
            <div className="border border-transparent h-[515px]" >
                <p className="relative rounded-xl border border-[#000000] mt-[31px] w-32 pl-[40px] pt-2 pb-1 ml-8" id="new_arrivals">POPULAR</p>
                <div className="absolute rounded-l-xl border border-[#FF7F3E] bg-[#FF7F3E] -mt-[40px] w-2 h-10 pl-8 pt-2 pb-2 ml-[32px] ">

                </div>
                <div className="border border-transparent h-[450px] flex">
                    <div className="rounded-lg bg-[#F8F8F8] h-90 w-55 mt-8 ml-[150px] border border-transparent relative cursor-pointer">
                    <div className="absolute border border-transparent h-73 rounded-b-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] w-55">
                        <img src="pic3.png" alt="" className="h-73 ml-[33px] z-1 -mt-[7px] w-50 absolute"/>
                        <img src="pic3_1.png" alt="" className=" h-78 -ml-[10px] -mt-[25px] w-50 "/>
                    </div>
                        <p className="text-[10px] font-bold ml-3 pt-[300]">Meta Moon Men’s Oversized T-shirt</p>
                        <p className="font-bold text-[14px] ml-3">₹ 549.00 <span className="line-through text-[#0000006B] ml-3 text-[14px]">₹ 1,249.00</span></p>
                        <img src="STARS.png" alt="" className="w-24 -pt-[7px] pl-3"/>
                    </div>
                    <div className="rounded-lg bg-[#F8F8F8] h-90 w-55 mt-8 ml-[150px] border border-transparent relative cursor-pointer">
                    <div className="absolute border border-transparent h-73 rounded-b-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] w-55">
                        <img src="pic1.png" alt="" className="h-73 ml-[5px] z-1 -mt-[7px] w-50 absolute"/>
                       
                    </div>
                    <p className="text-[10px] font-bold ml-3 pt-[300]">Wiseman Black Men’s Oversized T-shirt</p>
                        <p className="font-bold text-[14px] ml-3">₹ 549.00 <span className="line-through text-[#0000006B] ml-3 text-[14px]">₹ 1,249.00</span></p>
                        <img src="STARS.png" alt="" className="w-24 -pt-[7px] pl-3"/>
                    </div>
                    <div className="rounded-lg bg-[#F8F8F8] h-90 w-55 mt-8 ml-[150px] border border-transparent relative cursor-pointer">
                    <div className="absolute border border-transparent h-73 rounded-b-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] w-55">
                        <img src="pic4.png" alt="" className="h-73 ml-[5px] z-1 -mt-[7px] w-50 absolute"/>
                    </div>
                    <p className="text-[10px] font-bold ml-3 pt-[300]">Wiseman White Men’s Oversized T-shirt</p>
                        <p className="font-bold text-[14px] ml-3">₹ 549.00 <span className="line-through text-[#0000006B] ml-3 text-[14px]">₹ 1,249.00</span></p>
                        <img src="STARS.png" alt="" className="w-24 -pt-[7px] pl-3"/>
                    </div>
                    
                </div>
                <div className="border border-transparent h-65 bg-[#D9D9D9CC] flex">
                <div className="w-[100px] h-[180px]  border-[3px] border-[#FF7F3E] ml-[180px] mt-[50px]">
                <img src="pic5.jpg" alt="pic5" className="w-96 h-[173px] mt-[1px]"/>
                </div>
                <div className="relative w-24 h-19 border-[3px] border-[#FF7F3E] ml-3 mt-[50px]">
                    <img src="pic6.jpg" alt="" className="absolute w-24 h-18 mt-[0px]"/>
                    <div className="relative w-24 h-24 border-[3px] border-[#FF7F3E] -ml-1 mt-[80px]">
                    <img src="pic7.png" alt="" className="absolute w-24 h-23 mt-[0px]"/>
                </div>
                </div>
                <p className="text-5xl font-bold tracking-wide mt-[60px] ml-[50px] w-[500px]">EXCLUSIVE SALE IS <span className="text-[#FF7F3E] font-bold ml-[180px] ">LIVE</span></p>
                <div className="w-[40px] h-[35px] bg-[#FF7F3E] rounded-l-lg -rotate-[45deg] -ml-[80px] mt-[200px]"></div>
            </div>
            </div>


        </>
    );
}
