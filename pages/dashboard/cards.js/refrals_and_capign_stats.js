import { Component } from "react";

export default class RefralsAndCampignStats extends Component{
    render(){

        const data = [
            {
                title: "User's Reached",
                count: "7956",
                perc: "1.53%",
                border: "2px"
            },

            {
                title: "Referals",
                count: "0662",
                perc: "1.53%",
                border: "2px"
            },

            {
                title: "Shares",
                count: "1478",
                perc: "19.58%",
                border: "2px"
            },

            {
                title: "Applications",
                count: "0564",
                perc: "12%",
                border: "0px"
            },
            
        ]

        
        const cards_array = data.map((element)=>
        <div key={element.title} id={element.title} style={{borderRightWidth: element.border}} className="space-y-2 border-r-2 border-slate-800 p-2">
            <p className="text-white text-xs lg:text-base font-medium">{element.title}</p>
            <p className="font-semibold text-fuchsia-500 text-center lg:text-left text-sm">{element.perc}</p>
            <p className="font-semibold text-white text-xl text-center lg:text-left lg:text-3xl">{element.count}</p>
        </div>
        )
        
        return(
            <div className="relative space-y-10 p-6 border-2 h-98 lg:h-96 shadow-md border-slate-800  rounded-md ">
                <p className="text-white font-semibold">Refrals and Campign Stats</p>
                <div className=" flex justify-center items-center flex-col space-y-10">
                    
                    <div className="flex space-x-12 p-3">
                        {cards_array}
                    </div>

                    <div className="flex space-x-4 items-center justify-center">
                        <button className="bg-cyan-600 text-xs lg:text-base hover:bg-sky-400 transition-all duration-300 text-white p-4 px-8 rounded-md">Start a New Campign now</button>
                        <button className="bg-rose-500 text-white p-4 text-xs lg:text-base px-8 transition-all duration-300 hover:bg-rose-400 rounded-md">Pause all Running Campigns</button>
                    </div>
                </div>

                <div className="absolute right-3 lg:-top-4 bottom-2 p-2 flex space-x-3">
                    <div>
                        <p className="text-rose-400 text-sm text-center">40 Campaigns sent in total</p>
                        <p className="text-white text-sm text-center">4 Campaigns sent in last month</p>
                    </div>
                    <img src="/option.png/" className="w-5 mt-2.5 h-5 rotate-90" />
                </div>
            </div>
        )
    }
}