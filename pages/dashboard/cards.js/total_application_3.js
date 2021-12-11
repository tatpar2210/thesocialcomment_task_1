import { Chart } from "chart.js"
import {Component} from "react"



export default class TotalAppl_3 extends Component{
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
            <div className="relative h-96 p-6 border-2 shadow-md border-slate-800 rounded-md w-96 ">
                <div className="space-y-6">
                    <p className="text-white font-semibold">Total Application</p>
                    <div className="space-y-6 pt-8">
                        <p className="text-white">Applications</p>
                        <p className="text-sky-600">Item-2</p>
                        <p className="text-rose-500">Rejected</p>
                        <p className="text-white">OnHold</p>
                        <p className="text-pink-600">Passed</p>
                    </div>
                </div>
                <img src="/option.png/" typeof="circle" className="w-5 h-5 mt-5 absolute top-1 right-3" />
            </div>
        )
    }
}