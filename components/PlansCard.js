import Image from "next/image"
import { Fragment } from "react"

const PlansCard = ({planTag, planTitle, monthlySubscription, description, except, btnClass, descClass, cardClass, isBase}) => {
    return (
        <div className={`flex flex-col items-center justify-center px-4 bg-white ${cardClass}`} >
        {planTag && <p className="text-xs bg-gray-600 px-6 py-2 text-white font-extrabold tracking-widest text-center w-max mx-auto rounded-full">{planTag}</p> }
            <p className="text-xl font-extrabold text-gray-900 py-6">{planTitle}</p>
            {isBase ? <p className="font-bold text-green-600">{except}</p> : <div className="flex justify-center space-x-2 -mt-4">
                <div className="relative h-12 w-12 mt-6">
                    <Image src="/images/hulu-black.png" layout="fill" alt="" objectFit="contain"/>
                </div>
                <div className="relative h-20 w-20">
                    <Image src="/images/disnepblack.png" layout="fill" alt="" objectFit="contain"/>
                </div>
                <div className="relative h-20 w-20 mt-2">
                    <Image src="/images/espnblack.png" layout="fill" alt="" objectFit="contain"/>
                </div>
                </div>}
            <h2 className={`text-3xl font-bold text-gray-900 ${isBase ? "pt-4" : false}`}>{monthlySubscription}<span className="text-xl font-bold"> / month</span></h2>
            <p className={descClass}>{description}</p>
            <button className={btnClass}>SELECT</button>
            { !isBase && <p className="text-[15px] text-blue-600 hover:cursor-pointer">Learn more</p> }
        </div>
    )
}

export default PlansCard
