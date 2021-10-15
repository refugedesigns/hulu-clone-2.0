import Image from "next/image"
import { MenuIcon } from "@heroicons/react/outline"
import OverlayCard from "./OverlayCard"

const Banner = ({setShowMobileLogin}) => {
    return (
        <div className="relative h-[730px]">
            <div className="absolute w-full h-56 bg-gradient-to-b from-black to-transparent top-0 z-20" />
            <Image src="/images/hulu-background.jpg" layout="fill" objectFit="cover" />
            <div className="absolute z-30 p-6 md:px-12 w-full">
                <div onClick={() => setShowMobileLogin(true)} className="flex justify-end cursor-pointer">
                    <MenuIcon className="h-7 text-white lg:hidden" />
                </div>
                <h3 className="hidden lg:block text-white text-right font-bold cursor-pointer hover:text-gray-200">LOG IN</h3>
                <div className="text-white text-center flex flex-col items-center mt-20">
                    <h3 className="py-3 uppercase text-sm font-bold text-green-400">Try up to one month free</h3>
                    <div className="relative h-14 sm:h-20 w-full">
                        <Image src="/images/hulu.png" layout="fill" objectFit="contain" />
                    </div>
                    <h2 className="pt-3 font-bold text-lg md:text-2xl">Watch thousands of TV shows and movies</h2>
                    <p className="hidden md:inline-flex mt-4 text-sm">HBO Max&trade;, SHOWTIME&reg;, CINEMAX&reg;, and STARZ&reg; available as add-ons </p>
                    <button className="mt-6 mb-4 py-3 px-6 bg-white text-black whitespace-nowrap w-min uppercase font-bold tracking-wider rounded-lg hover:bg-gray-200">Start your free trial</button>
                    <p className="text-[10px] text-gray-300">Free trial for new & eligible returning subscribers only</p>
                </div>
            </div>
            <div className="absolute bottom-0 z-40 w-full">
                <OverlayCard />
            </div>
        </div>
    )
}

export default Banner
