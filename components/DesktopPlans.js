import { InformationCircleIcon } from "@heroicons/react/outline"
import { useState } from "react"
import PlansCard from "./PlansCard"

const DesktopPlans = () => {
    const [plan, setPlan] = useState("base")
    
    return (
        <div>
            <div className="flex justify-center font-bold text-gray-900 tracking-widest border-b border-gray-300 w-max mx-auto">
                <h3 onClick={() => setPlan("base")} className={`p-2 cursor-pointer ${plan === "base" ? "border-b-4 border-gray-900 opacity-100" : "opacity-40"}`}>BASE PLANS</h3>
                <h3 onClick={() => setPlan("bundle")} className={`p-2 cursor-pointer ${plan === "bundle" ? "border-b-4 border-gray-900 opacity-100" : "opacity-40"}`}>BUNDLE & SAVE</h3>
            </div>
            {plan === "base" && <div className="flex justify-center items-center  mt-16 max-w-5xl mx-auto">
                <div className="shadow-sm">
                    <PlansCard 
                    planTitle="Hulu (No Ads)"
                    except="Get First Month Free, then"
                    monthlySubscription="$12.99"
                    description="Our ad-free plan lets you watch exclusive series, hit movies, Originals, kids shows, and tons more with no ad interruptions."
                    cardClass="h-[400px] pt-8"
                    btnClass="py-3 border-2 border-gray-700 w-[90%] rounded-md font-bold tracking-widest text-gray-700 mb-6 mt-2"
                    descClass="text-[14px] text-center py-4 max-w-[20rem] px-8 text-gray-500"
                    isBase
                    />
                </div>
                <div className="shadow-lg z-20 border-t-4 border-green-600">
                    <PlansCard 
                    planTag="MOST POPULAR"
                    planTitle="Hulu"
                    except="Get First month Free, Then"
                    monthlySubscription="$6.99"
                    description="Our ad-supported plan lets you watch exclusive series, hit movies, Originals, kids shows, and tons more."
                    cardClass="h-[430px]"
                    btnClass="py-3 bg-gray-900 font-bold tracking-widest rounded-md w-[90%] text-white my-8"
                    descClass="text-[14px] text-center py-4 px-8 max-w-[20rem] text-gray-500"
                    isBase
                    />
                </div>
                <div className="shadow-sm">
                    <PlansCard 
                    planTitle="Hulu + Live TV"
                    except="Get First month Free, Then"
                    monthlySubscription="$64.99"
                    description="Watch 65+ channels live & on-demand and get unlimited access to our ad-supported streaming library."
                    cardClass="h-[400px] pt-4"
                    btnClass="py-3 border-2 w-[90%] font-bold tracking-widest border-gray-700 text-gray-700 rounded-md mb-4 mt-8"
                    descClass="text-[14px] text-center py-4 px-8 max-w-[20rem] text-gray-500"
                    isBase
                    />
                </div>
            </div> }
            {plan === "base" && <div className="max-w-5xl mx-auto grid grid-cols-3 -mt-2">
                <p className="place-self-center flex items-center text-xs text-gray-500">A few excluded shows play with ads.<InformationCircleIcon className="h-4 hover:cursor-pointer" /> </p>
                <p className="col-end-4 place-self-center text-xs text-blue-600 hover:cursor-pointer">Terms Apply</p>
            </div> }
            {plan === "bundle" && <div className="flex justify-center items-center max-w-5xl mx-auto mt-16">
                <div className="shadow-sm">
                    <PlansCard
                    planTitle="Hulu (No Ads)"
                    monthlySubscription="$19.99"
                    description="Access live sports with ESPN+, endless, ad-free entertainment with Disney+, and award-winning Hulu Originals with Hulu (No Ads)."
                    cardClass="h-[500px]"
                    btnClass="py-3 border-2 w-[90%] font-bold tracking-widest border-gray-700 text-gray-700 rounded-md mb-6 mt-8"
                    descClass="text-[14px] text-center py-4 px-8 max-w-[20rem] text-gray-500"
                    />
                </div>
                <div className="shadow-lg z-20 border-t-4 border-green-600">
                    <PlansCard
                    planTitle="Hulu"
                    monthlySubscription="$13.99"
                    description="Access live sports with ESPN+, endless, ad-free entertainment with Disney+, and award-winning Hulu Originals with Hulu (ad-supported)."
                    cardClass="h-[550px]"
                    btnClass="py-3  w-[90%] font-bold tracking-widest bg-gray-900 text-white rounded-md mb-6 mt-8"
                    descClass="text-[14px] text-center py-4 px-8 max-w-[20rem] text-gray-500"
                    />
                </div>
                <div className="shadow-sm">
                    <PlansCard
                    planTitle="Hulu + Live TV"
                    monthlySubscription="$72.99"
                    description="Access 65+ channels with Live TV, endless, ad-free entertainment with Disney+, live sports with ESPN+, and award-winning Hulu originals with Hulu (ad-supported)."
                    cardClass="h-[500px]"
                    btnClass="py-3 border-2 w-[90%] font-bold tracking-widest border-gray-700 text-gray-700 rounded-md mb-6 mt-2"
                    descClass="text-[14px] text-center py-4 px-8 max-w-[20rem] text-gray-500"
                    />
                </div>
            </div> }
            {plan === "bundle" && <div className="max-w-5xl mx-auto grid grid-cols-3 -mt-4">
                <div className="place-self-center text-xs">
                    <p className=" text-gray-500 flex items-center ">A few excluded shows play with ads.<InformationCircleIcon className="h-4 hover:cursor-pointer" /> </p>
                    <p className="text-center pt-2 text-blue-600 hover:cursor-pointer">Terms Apply</p>
                </div>
                <p className="place-self-center text-xs text-blue-600 hover:cursor-pointer mt-8">Terms Apply</p>
                <p className="place-self-center text-xs text-blue-600 hover:cursor-pointer -mt-4">Terms Apply</p>
            </div> }
        </div>
    )
}

export default DesktopPlans
