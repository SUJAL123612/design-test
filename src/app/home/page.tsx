import Navbar from "../components/navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="h-full flex w-full ">
                <div className="ml-[120px] ">
                    <img src="NAME.svg" alt="name" className="ml-[80px] h-24 mt-[50px] mb-5" />
                    <p className="text-xl ml-[80px] text-wrap  w-63 text-[#00000099] mb-[100px]">Unleash your phonky style. Stand out Be <span className="text-[#FF7F3E] font-bold">bold.</span></p>
                    <button className="rounded-xl w-38 ml-[80px] pl-7 pt-4 pb-4 font-semibold bg-[#FF7F3E] flex text-lg text-white hover:bg-[#e66f30] cursor-pointer">Explore<img src="arrow.svg" alt="arrow" className="h-[20px] mt-1 ml-2" /></button><button />
                </div>
                <div className="ml-[300px]">
                    <img src="pic1.png" alt="pic" className="h-96" />
                </div>
            </div>
            <div className="border border-transparent h-50 bg-[#D9D9D9CC] flex">
                <div className="relative w-[100px] h-[100px] -rotate-[20deg] border-[3px] border-[#FF7F3E] ml-[230px] mt-[50px]">
                <img src="pic2.png" alt="pic2" className="absolute w-96 h-96 object-contain rotate-[-5deg] -top-4 -mt-[150px]"/>
                </div>
                <p className="text-5xl font-light tracking-wide mt-[60px] ml-[50px]">Quality is our first priority</p>
                <div className="w-[60px] h-[45px] bg-[#FF7F3E] rounded-l-lg rotate-[30deg] ml-[50px] mt-[50px]"></div>
            </div>
        </>
    );
}
