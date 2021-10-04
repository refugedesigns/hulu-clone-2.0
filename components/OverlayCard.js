import Image from "next/image"
const OverlayCard = () => {
    return (
        <div className="bg-black w-full bg-opacity-40 p-6 flex flex-col items-center md:grid grid-cols-3 lg:py-2">
            <div className="md:hidden">
                <h3 className="text-green-400 font-bold text-sm">BUNDLE WITH ANY HULLY PLAN & SAVE</h3>
            </div>
                       
            <div className="flex justify-center items-center space-x-4 -mt-2">
                <div className="relative mt-4  h-12 w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
                    <Image src="/images/hulu.png" layout="fill" objectFit="contain" />
                </div>
                <div className="relative h-24 w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32">
                    <Image src="/images/disnep.png" layout="fill" objectFit="contain" />
                </div>
                <div className=" relative mt-4 h-12 w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
                    <Image src="/images/espn.png" layout="fill" objectFit="contain" />
                </div>
            </div>
            <div className="hidden md:block space-y-2">
                <h3 className="text-green-400 font-bold text-sm">BUNDLE WITH ANY HULLY PLAN & SAVE</h3>
                <h1 className="hidden md:block text-white lg:text-2xl">Get Hulu, Disney+, and ESPN+.</h1>
                <p className="hidden md:block text-gray-500 text-sm underline hover:cursor-pointer">Details</p>
            </div> 
            <p className="text-white -mt-4 md:hidden">Get all three. <span className="text-gray-500 underline hover:cursor-pointer">Details</span></p>
            <div className="mt-4 flex flex-col items-center">
                <button className="text-white font-bold py-2 px-8 border-2 rounded-md whitespace-nowrap hover:border-gray-500">GET THE DISNEY BUNDLE</button>
                <p className="text-center mt-2 text-xs text-gray-500 underline hover:cursor-pointer">Terms apply</p>
            </div> 
        </div>
    )
}

export default OverlayCard
