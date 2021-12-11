import {Component} from "react"
import HomeImage from "../../public/home.png"

export default class DashboardSidebar extends Component{
    render(){
        return(
            <div className="max-w-max bg-slate-800 h-screen w-24 bg-opacity-90 rounded-r-md backdrop-blur-md backdrop-filter">
                <div className="pt-20 space-y-7">
                    <div className="px-4 py-2 border-r-4 cursor-pointer  transition-all duration-300 border-sky-500"><img src="/home.png" className="h-5 w-5 " /></div>
                    <div className="px-4 py-2 border-r-4 cursor-pointer border-opacity-0 transition-all duration-300 border-sky-500 hover:border-opacity-100"><img src="/stats.png" className="h-5 w-5 " /></div>
                    <div className="px-4 py-2 border-r-4 cursor-pointer border-opacity-0 transition-all duration-300 border-sky-500 hover:border-opacity-100"><img src="/briefcase.png" className="h-5 w-5 " /></div>
                    <div className="px-4 py-2 border-r-4 cursor-pointer border-opacity-0 transition-all duration-300 border-sky-500 hover:border-opacity-100"><img src="/folder.png" className="h-5 w-5 " /></div>
                    <div className="px-4 py-2 border-r-4 cursor-pointer border-opacity-0 transition-all duration-300 border-sky-500 hover:border-opacity-100"><img src="/date.png" className="h-5 w-5 " /></div>
                    <div className="px-4 py-2 border-r-4 cursor-pointer border-opacity-0 transition-all duration-300 border-sky-500 hover:border-opacity-100"><img src="/people.png" className="h-5 w-5 " /></div>
                    {/* <div className="px-4 py-2 border-r-4 cursor-pointer border-opacity-0 transition-all duration-300 border-sky-500 hover:border-opacity-100"><img src="/home.png" className="h-5 w-5 " /></div> */}
                    <div className="px-4 py-2 border-r-4 cursor-pointer border-opacity-0 transition-all duration-300 border-sky-500 hover:border-opacity-100"><img src="/logout.png" className="h-5 w-5 " /></div>
                </div>
            </div>
        )
    }
}