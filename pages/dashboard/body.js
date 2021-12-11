import {Component} from "react"
import ApplicationRevc from "./cards.js/applications_recv"
import OpenPositionByDept from "./cards.js/open_positions_by_department"
import RefralsAndCampignStats from "./cards.js/refrals_and_capign_stats"
import Shortlistedcandidates from "./cards.js/shortlisted_candidates"
import TotalAppl from "./cards.js/total_application"
import TotalAppl_2 from "./cards.js/total_application_2"
import TotalAppl_3 from "./cards.js/total_application_3"

export default class DashboardBody extends Component{
    render(){

        const date = new Date()
        const day_name_list = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const month_name_list = [
            "January", "February", "March",
            "April", "May", "June",
            "July", "August", "September",
            "October", "November", "December"
        ]
        
        const day = date.getDay()
        const date_string = `${date.getDate()} ${month_name_list[date.getMonth() - 1]} ${date.getFullYear()}`

        return(
            <div className="bg-slate-800 w-full bg-opacity-90 backdrop-blur-md backdrop-filter px-8 rounded-l-md py-6 ">
                <div className="space-y-1">
                    <p className="text-white text-xl ">Dashboard</p>
                    <p className="text-white">{day_name_list[day]}, <span className="text-sky-600">{date_string}</span></p>
                </div>

                {/* cards */}
                <div className="py-6 flex flex-col space-y-8">
                    {/* div-wraper-1 for greater than lg */}
                    <div className="lg:flex hidden space-x-6 justify-center items-center">
                        <TotalAppl/>
                        <Shortlistedcandidates />
                        <TotalAppl_2 />
                    </div>

                    {/* div-wraper-1 for lesser than lg */}
                    <div className="space-y-6 lg:hidden flex flex-col">
                        <div className="flex space-x-2 justify-center items-center">
                            <TotalAppl/>
                            <TotalAppl_2 />
                        </div>
                        <div className="justify-center hidden  items-center sm:flex"><Shortlistedcandidates /></div>
                    </div>

                    {/* div-wrapper-2 for greater than lg */}
                    <div className="lg:flex space-x-2 space-y-8 lg:space-y-0">
                        <div className="flex-grow"><ApplicationRevc /></div>
                        <div className="hidden lg:block"><TotalAppl_3 /></div>
                    </div>

                    {/* div-wrapper-3 for greater than lg */}
                    <div className="lg:flex space-x-2 space-y-8 lg:space-y-0">
                    <div className="flex-grow"><RefralsAndCampignStats /></div>
                        <div className="hidden lg:block"><OpenPositionByDept /></div>
                    </div>
                </div>
            </div>
        )
    }
}