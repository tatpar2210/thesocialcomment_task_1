import { useEffect } from 'react'

import DashboardBody from './dashboard/body'
import DashboardSidebar from './dashboard/sidebar'
import ApplicantsCards from './dashboard/sidebar_right/applicants_cards'
export default function Home() {

    let siderbar_hide = () => {      
        if (document.getElementById("right-sidebar").style.display === "none"){
            document.getElementById("right-sidebar").style.display = "block"
        }else{
            document.getElementById("right-sidebar").style.display = "none"
        }
    }



  return (
      
    <div className= " bg-gray-700 h-auto space-x-0.5 w-full">

        {/* Sidebar */}
        <div className="fixed left-0 top-0">
            <DashboardSidebar />
        </div>

        {/* body */}
        <div className="pl-14 xl:flex">
            <div className=" flex-grow "><DashboardBody /></div>
            <div id="right-sidebar" className="flex-grow 2xl:block hidden ml-56 right-0"><ApplicantsCards /></div>
        </div>

        {/* <div className="fixed right-0 top-0 ">
            <ApplicantsCards />
        </div> */}

        <div id="sidebar_hider" onClick={siderbar_hide} className="absolute hidden xl:block top-12 right-2 2xl:right-96.5 cursor-pointer rotate-90 rounded-full bg-white max-w-max">
            <img src="/hider_button.png/" className="h-6 w-6" />
        </div>
    </div>
  )
}
