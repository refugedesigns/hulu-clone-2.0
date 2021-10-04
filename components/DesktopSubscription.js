import { CheckIcon, InformationCircleIcon, MinusIcon } from "@heroicons/react/outline"

const DesktopSubscription = () => {
    return (
        <div className="">
                <div className="grid grid-cols-5 gap-2 text-center text-lg text-gray-700 border-b">
                    <p className="col-span-2 place-self-start my-auto">Monthly price</p>
                    <p className="px-2  place-self-center">$5.99/mo**</p>
                    <p className="px-2  bg-gray-100 h-full flex justify-center items-center">$11.99/mo**</p>
                    <p className="px-2 py-4">$54.99/mo for 3 mo. Save $10/month*</p>
                </div>
                <div className="desktop-sub">
                    <div className="flex col-span-2 py-6">
                        <p>Streaming Library with thousands of TV episodes and movies <InformationCircleIcon className="h-4 inline-flex text-gray-500 cursor-pointer" data-tip="Streaming Library with thousands of TV episodes and movies info" /></p>     
                    </div>
                    <CheckIcon className="desktop-icons" />
                    <div className="place-self-center bg-gray-100 h-full w-full flex justify-center items-center">
                        <CheckIcon className="desktop-icons" />
                    </div>
                    <CheckIcon className="desktop-icons" />
                </div>
                <div className="desktop-sub">
                    <p className="col-span-2 py-6">Most new episodes the day after they air^</p>
                    <CheckIcon className="desktop-icons" />
                    <div className="place-self-center bg-gray-100 h-full w-full flex justify-center items-center">
                        <CheckIcon className="desktop-icons" />
                    </div>
                    <CheckIcon className="desktop-icons" />
                </div>
                <div className="desktop-sub">
                    <p className="col-span-2 py-6">Access to award-winning Hulu Originals</p>
                    <CheckIcon className="desktop-icons" />
                    <div className="place-self-center bg-gray-100 h-full w-full flex justify-center items-center">
                        <CheckIcon className="desktop-icons" />
                    </div>
                    <CheckIcon className="desktop-icons" />
                </div>
                <div className="desktop-sub">
                    <p className="col-span-2 py-6">Watch on your TV, laptop, phone, or tablet</p>
                    <CheckIcon className="desktop-icons" />
                    <div className="place-self-center bg-gray-100 h-full w-full flex justify-center items-center">
                        <CheckIcon className="desktop-icons" />
                    </div>
                    <CheckIcon className="desktop-icons" />
                </div>
                <div className="desktop-sub">
                    <div className="flex items-end space-x-1 col-span-2 py-6">
                        <p>Up to 6 user profiles</p>
                        <InformationCircleIcon className="h-4 inline-flex text-gray-500 cursor-pointer" />
                    </div>
                    <CheckIcon className="desktop-icons" />
                    <div className="place-self-center bg-gray-100 h-full w-full flex justify-center items-center">
                        <CheckIcon className="desktop-icons" />
                    </div>
                    <CheckIcon className="desktop-icons" />
                </div>
                <div className="desktop-sub">
                    <p className="col-span-2 py-6">Watch on 2 different screens at the same time</p>
                    <CheckIcon className="desktop-icons" />
                    <div className="place-self-center bg-gray-100 h-full w-full flex justify-center items-center">
                        <CheckIcon className="desktop-icons" />
                    </div>
                    <CheckIcon className="desktop-icons" />
                </div>
                <div className="desktop-sub">
                    <div className="flex items-center space-x-1 col-span-2 py-6">
                        <p>No ads in streaming library</p>
                        <InformationCircleIcon className="h-4 inline-flex text-gray-500 cursor-pointer" />
                    </div>
                    <MinusIcon className="desktop-icons text-gray-300" />
                    <div className="place-self-center bg-gray-100 h-full w-full flex justify-center items-center">
                        <CheckIcon className="desktop-icons" />
                    </div>
                    <MinusIcon className="desktop-icons text-gray-300" />
                </div>
                <div className="desktop-sub">
                    <div className="flex items-center col-span-2 space-x-2 py-6">
                        <p>Download and watch</p>
                        <InformationCircleIcon className="h-4 inline-flex text-gray-500 cursor-pointer" />
                    </div>
                    <MinusIcon className="desktop-icons text-gray-300" />
                    <div className="place-self-center bg-gray-100 h-full w-full flex justify-center items-center">
                        <CheckIcon className="desktop-icons" />
                    </div>
                    <MinusIcon className="desktop-icons text-gray-300" />
                </div>
                <div className="desktop-sub">
                    <div className="flex items-center col-span-2 py-6">
                        <p>Live TV with 75+ top channels. No cable required. <InformationCircleIcon className="h-4 inline-flex text-gray-500 cursor-pointer" /></p>                       
                    </div>
                    <MinusIcon className="desktop-icons text-gray-300" />
                    <div className="place-self-center bg-gray-100 h-full w-full flex justify-center items-center">
                        <MinusIcon className="desktop-icons text-gray-300" />
                    </div>   
                    <CheckIcon className="desktop-icons" />
                </div>
                <div className="desktop-sub">
                    <p className="col-span-2 py-6">Live TV guide to navigate channels</p>
                    <MinusIcon className="desktop-icons text-gray-300" />
                    <div className="place-self-center bg-gray-100 h-full w-full flex justify-center items-center">
                        <MinusIcon className="desktop-icons text-gray-300" />
                    </div>
                    <CheckIcon className="desktop-icons" />
                </div>
                <div className="desktop-sub">
                    <p className="col-span-2 py-6">Record Live TV with 50 hours of Cloud DVR storage</p>
                    <MinusIcon className="desktop-icons text-gray-300" />
                    <div className="place-self-center bg-gray-100 h-full w-full flex justify-center items-center">
                        <MinusIcon className="desktop-icons text-gray-300" />
                    </div>
                    <CheckIcon className="desktop-icons" />
                </div>           
            <div className="text-[10px] pb-16 mb-4 px-2 pt-4 max-w-sm xl:max-w-md">
                <p>*Then $64.99/month. New and eligible returning subscribers only.</p>
                <p>**On 10/08/2021, the price of Hulu(ad-supported) will increase to $6.99/month and the price of Hulu (No Ads) will increase to $12.99/month.</p>
                <p>^For current-season shows in the streaming library only.</p>
                <p>^^Switches from Live TV to Hulu take effect as of the next billing cycle.</p>
            </div>
        </div>
    )
}

export default DesktopSubscription
