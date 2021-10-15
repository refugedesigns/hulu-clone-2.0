import { Fragment } from "react";
import Image from "next/image"
import MobilePlans from "../components/MobilePlans";

import { PlayIcon } from "@heroicons/react/outline";
import DesktopPlans from "../components/DesktopPlans";

export default function PlansPage() {
    return (
    <div className="bg-[#f7f7f9] min-h-screen overflow-x-hidden relative">
        <div className="bg-white flex items-center justify-between px-8 border-b">
            <div className="relative h-14 w-14 hover:cursor-pointer">
                <Image src="/images/hulu-black.png" layout="fill" alt="" objectFit="contain" />
            </div>
            <p className="text-sm font-bold tracking-wide hover:cursor-pointer">LOG IN</p>
        </div>
            <div className="py-10 flex flex-col items-center space-y-3">
                <h1 className="text-3xl font-extrabold">Choose Your Plan</h1>
                <p className="text-gray-500 text-sm hover:cursor-pointer">Switch plans or cancel anytime</p>
            </div>
        <div className="lg:hidden">
            <MobilePlans />
        </div>
        <div className="hidden lg:block">
            <DesktopPlans />
        </div>
         <div className="mt-32 pb-24 mx-auto">
                <div className="lg:flex justify-center space-x-8">
                    <div className="sm:flex justify-center space-x-8">
                        <div className="flex space-x-4 justify-center text-gray-600 text-sm mb-4">
                            <div className="flex items-center text-gray-600 hover:cursor-pointer"><PlayIcon className="h-5 text-blue-700" /> <p>About Ads</p></div>
                            <p className="hover:cursor-pointer">Terms of Use</p>
                            <p className="hover:cursor-pointer">Privacy Policy</p>
                        </div>
                        <p className="flex justify-center text-sm text-gray-600 pr-8 sm:pr-0 hover:cursor-pointer mb-4">Do Not Sell My Personal Information</p>
                    </div>
                    <div className="sm:flex justify-center sm:space-x-4">
                        <p className="flex justify-center text-sm text-gray-600 pr-10 sm:pr-0 hover:cursor-pointer mb-4">Your California Privacy Rights</p>
                        <p className="flex justify-center text-sm text-gray-600 pr-12 sm:pr-0 hover:cursor-pointer mb-4">&copy; 2021 Hulu, LLC</p>
                    </div>
                </div>
                <div>
                </div>
            </div>
    </div>    
    )
}