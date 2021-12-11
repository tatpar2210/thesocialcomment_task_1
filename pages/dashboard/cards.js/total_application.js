import { Chart } from "chart.js"
import {Component} from "react"



export default class TotalAppl extends Component{
    render(){

        // const total_appl_progress_bar_chart = document.getElementById("total_appl_progress_bar").getContext("2d")

        // const mychart = new Chart(total_appl_progress_bar_chart, {
        //     type: "doughnut",
        //     data: {
        //         labels: ["25%", "50%", "75%", "100%"],
        //         datasets:[{
        //             label: "",
        //             data: [25, 50, 75, 100],
        //             backgroundColor: ["#ffa366", "#ffe680", "#80ffaa", "#009933"]
        //         }]
        //     }
        // })

        return(
            <div className="relative p-6 border-2 shadow-md border-slate-800 rounded-md w-96 ">
                <div className="flex ">
                    <div className="space-y-2">
                        <p className="text-white font-semibold">Total Application</p>
                        <p className="font-semibold text-white text-3xl">7956</p>
                        <div className="space-x-0.5 flex">
                            <img src="/arrow-pink.png/" className="h-3 w-3 mt-1 -rotate-90 transform" />
                            <p className="font-semibold text-fuchsia-500 text-sm">+3.59%</p>
                        </div>
                    </div>

                    {/* <div className="">
                        <canvas id="total_appl_progress_bar" width="400" height="400"></canvas>
                    </div> */}

                </div>
                <img src="/option.png/" typeof="circle" className="w-5 h-5 mt-5 absolute top-1 right-3" />
            </div>
        )
    }
}