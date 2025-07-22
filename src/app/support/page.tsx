export default function Support() {
    return (
        <>
            <footer className="bg-black text-white p-8 flex justify-between items-start flex-wrap"> 
        
                <div className="space-y-4 text-sm" id="support">
                    <p>TERMS & CONDITIONS</p>
                    <p>SHIPPING AND RETURN</p>
                    <p>PRIVACY POLICY</p>
                    <p>CONTACT -</p>

                    <div className="flex items-center space-x-2">
                        <img src="mail.svg" alt="mail icon" className="w-5 h-5" />
                        <span>teamphonkyhood@gmail.com</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <img src="map.svg" alt="map icon" className="w-5 h-5" />
                        <span>Janipur colony, Jammu - 180007</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <img src="phone.svg" alt="phone icon" className="w-5 h-5" />
                        <span>011-987654321</span>
                    </div>
                </div>

            
                <div className="mt-4">
                    <img src="logo2.png" alt="Phonky logo" className="w-40 h-auto" />
                </div>
            </footer>


        </>
    );
}