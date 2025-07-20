import Navbar from "../components/navbar";
import Home from "../home/page";


export default function new_arrivals() {
    return (
        <>
            <Home/>
            <div className="border border-red-500 h-64">
                <p className="rounded-xl border border-[#000000] mt-[30px] w-32 pl-7 pt-2 pb-2 ml-8">POPULAR</p>
            </div>
            
        </>
    );
}
