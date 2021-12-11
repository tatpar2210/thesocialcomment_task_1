import {Component} from "react"


export default class ApplicantsCards extends Component{
    render(){

        var new_applicants = [
            {
                key: 1,
                name: "Rosie Metts",
                applied_for: "Sales Manager"
            },

            {
                key: 2,
                name: "James Scott",
                applied_for: "Assistant Sales Manager"
            },

            {
                key: 3,
                name: "Jamie Laurenson",
                applied_for: "Web Developer"
            },

            {
                key: 4,
                name: "Elizabeth  Hurton",
                applied_for: "Sales Manager"
            },

            {
                key: 5,
                name: "Danny Watson",
                applied_for: "Human Resourse"
            },

            {
                key: 6,
                name: "Reha Scarlet",
                applied_for: "IOS Developer"
            },

        ]


        var new_appl_collapsed_cards = new_applicants.map((appl)=>
            <div key={appl.key} className="w-96 relative">
                
                <div className="flex space-x-4">
                    <img src="/user-avatar.png/" className="w-8 h-8 mt-2" />
                    <div>
                        <p className="text-white text-md">{appl.name}</p>
                        <p className="text-xs text-white ">Applied for: <span className="text-sky-600">{appl.applied_for}</span></p>
                    </div>
                </div>
                <div className="flex space-x-3 absolute top-1.5 right-2">
                    <img src="/message.png/" className="h-8 w-8" />
                    <img src="/phone-call.png/" className="h-8 w-8" />
                </div>
            </div>
        )

        return(
            <div className=" w-97 h-screen fixed right-0 bg-slate-800 bg-opacity-90 rounded-r-md backdrop-blur-md backdrop-filter ">
                <div className="relative">

                    {/* <div className="absolute top-20 -left-3 rotate-90 rounded-full bg-white max-w-max">
                        <img src="/hider_button.png/" className="h-6 w-6" />
                    </div> */}
                    <div className="flex space-x-4 p-2">
                        <button className="bg-sky-600 text-white px-6 py-1"> + Add</button>
                        <div className="absolute top-1.5 right-2 flex space-x-0 bg-gray-800">
                            <img src="/search.png/" className="h-5 w-5 m-2" />
                            <input placeholder="Search for Application here" className="outline-none rounded-md bg-transparent placeholder-zinc-400 text-slate-400  p-1.5  w-60" />
                        </div>
                    </div>

                    <div className="py-6">
                        <p className="text-center text-white">Hello John Bayer,</p>
                        <p className="text-center text-white">You have 8 New Applications Today!</p>
                    </div>

                    <div className="space-y-5 bg-gray-800 fixed bottom-0 right-0 px-2 pb-4 pt-5 rounded-tl-3xl rounded-tr-3xl">
                        <div className="p-1 relative">
                            <p className="font-semibold text-white text-lg">New Applicants </p>
                            <img src="/next.png/" className="h-6 w-6 absolute top-1 right-3" />
                        </div>
                        <div className="space-y-10">
                            {new_appl_collapsed_cards}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}