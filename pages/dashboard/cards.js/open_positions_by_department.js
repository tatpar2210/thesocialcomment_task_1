import { Chart } from "chart.js"
import {Component} from "react"



export default class OpenPositionByDept extends Component{
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
            <div className="relative p-6 border-2 shadow-md h-96 border-slate-800 rounded-md w-full 2xl:w-96 ">
                <div className="space-y-6">
                    <p className="text-white font-semibold">Open Positions By Department</p>
                    <img src="/pie-chart.png/" />
                </div>
                <img src="/option.png/" typeof="circle" className="w-5 h-5 mt-1 absolute top-6 right-3" />
            </div>
        )
    }
}