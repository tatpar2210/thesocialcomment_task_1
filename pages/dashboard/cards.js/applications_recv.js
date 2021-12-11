import { Component } from "react";

export default class ApplicationRevc extends Component{
    render(){
        return(
            <div className="relative p-6 border-2 h-96 border-slate-800 shadow-md rounded-md ">
                <div className="">
                    <p className="text-white font-semibold">Applicatons Received</p>
                    <div className="absolute flex xl:top-6 xl:right-3 bottom-2 right-2 space-x-3 xl:space-x-5">
                        <p className="text-white text-xs xl:text-base">This Year</p>
                        <p className="text-white text-xs xl:text-base">This Week</p>    
                        <p className="text-white text-xs xl:text-base">Today</p>
                        <div className="flex space-x-2 xl:h-10 bg-gray-800 select-none hover:bg-gray-600 cursor-pointer transition-all duration-300 p-2 px-3 -mt-2">
                            <img src="/download.png/" className="w-3 h-3 xl:mt-1.5 mt-0.5" />
                            <p className="text-white text-xs xl:text-base">Download Report</p>
                        </div>
                        <img src="/option.png/" className="w-5 h-5 xl:mt-0.5 -mt-0.5 rotate-90" />

                    </div>

                    <img src="/chart-2.png/" className="lg:h-72 h-60 w-full lg:mt-4 mt-7" />
                </div>
            </div>
        )
    }
}