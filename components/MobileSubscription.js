import { CheckIcon, InformationCircleIcon, MinusIcon } from "@heroicons/react/outline"
import ReactTooltip from "react-tooltip"

const MobileSubscription = () => {
    return (
        <div>
            
            <div>
                <div className="p-4 border-b text-gray-700">
                    <p className="text-sm text-center md:text-base">Monthly price</p>
                    <div className="p-2 grid grid-cols-3 place-items-center md:text-lg">
                        <p className="px-2">$5.99/mo**</p>
                        <p className="px-2">$11.99/mo**</p>
                        <p className="px-2 text-center">$54.99/mo** for 3 mo. Save $10/month*</p>
                    </div>
                </div>
                <div className="border-b p-4">
                    <div className="flex justify-center items-end space-x-2">
                        <p className="subscription-text">Streaming Library with thousands of TV episodes and movies</p>
                        <InformationCircleIcon className="h-4 text-gray-500 cursor-pointer" data-tip="Streaming Library with thousands of TV episodes and movies info" />
                    </div>
                    <div className="subscription-icon">
                        <CheckIcon className="h-6" />
                        <CheckIcon className="h-6 place-self-center" />
                        <CheckIcon className="h-6 place-self-end" />
                    </div>
                </div>
                <div className="subscription-cover">
                    <p className="subscription-text">Most new episodes the day after they air^</p>
                    <div className="subscription-icon">
                        <CheckIcon className="h-6" />
                        <CheckIcon className="h-6 place-self-center" />
                        <CheckIcon className="h-6 place-self-end" />
                    </div>
                </div>
                <div className="subscription-cover">
                    <p className="subscription-text">Access to award-winning Hulu Originals</p>
                    <div className="subscription-icon">
                        <CheckIcon className="h-6" />
                        <CheckIcon className="h-6 place-self-center" />
                        <CheckIcon className="h-6 place-self-end" />
                    </div>
                </div>
                <div className="subscription-cover">
                    <p className="subscription-text">Watch on your TV, laptop, phone, or tablet</p>
                    <div className="subscription-icon">
                        <CheckIcon className="h-6" />
                        <CheckIcon className="h-6 place-self-center" />
                        <CheckIcon className="h-6 place-self-end" />
                    </div>
                </div>
                <div className="subscription-cover">
                    <div className="flex justify-center items-end space-x-2">
                        <p className="subscription-text">Up to 6 user profiles</p>
                        <InformationCircleIcon className="h-4 text-gray-500 cursor-pointer" data-tip="Up to 6 user profiles info"/>
                    </div>
                    <div className="subscription-icon">
                        <CheckIcon className="h-6" />
                        <CheckIcon className="h-6 place-self-center" />
                        <CheckIcon className="h-6 place-self-end" />
                    </div>
                </div>
                <div className="subscription-cover">
                    <p className="subscription-text">Watch on 2 different screens at the same time</p>
                    <div className="subscription-icon">
                        <CheckIcon className="h-6" />
                        <CheckIcon className="h-6 place-self-center" />
                        <CheckIcon className="h-6 place-self-end" />
                    </div>
                </div>
                <div className="subscription-cover">
                    <div className="flex justify-center items-end space-x-2">
                        <p className="subscription-text">No ads in streaming library</p>
                        <InformationCircleIcon className="h-4 text-gray-500 cursor-pointer" data-tip="No ads in streaming library info" />
                    </div>
                    <div className="subscription-icon">
                        <MinusIcon className="h-6 text-gray-400" />
                        <CheckIcon className="h-6 place-self-center" />
                        <MinusIcon className="h-6 place-self-end text-gray-400" />
                    </div>
                </div>
                <div className="subscription-cover">
                    <div className="flex justify-center items-end space-x-2">
                        <p className="subscription-text">Download and watch</p>
                        <InformationCircleIcon className="h-4 text-gray-500 cursor-pointer" data-tip="Download and watch info"/>
                    </div>
                    <div className="subscription-icon">
                        <MinusIcon className="h-6 text-gray-400" />
                        <CheckIcon className="h-6 place-self-center" />
                        <MinusIcon className="h-6 place-self-end text-gray-400" />
                    </div>
                </div>
                <div className="subscription-cover">
                    <div className="flex justify-center items-end space-x-2">
                        <p className="subscription-text">Live TV with 75+ top channels. No cable required.</p>
                        <InformationCircleIcon className="h-4 text-gray-500 cursor-pointer" data-tip="Live TV with 75+ top channels. No cable required info" />
                    </div>
                    <div className="subscription-icon">
                        <MinusIcon className="h-6 text-gray-400" />
                        <MinusIcon className="h-6 place-self-center text-gray-400" />
                        <CheckIcon className="h-6 place-self-end" />
                    </div>
                </div>
                <div className="subscription-cover">
                    <p className="subscription-text">Live TV guide to navigate channels</p>
                    <div className="subscription-icon">
                        <MinusIcon className="h-6 text-gray-400" />
                        <MinusIcon className="h-6 place-self-center text-gray-400" />
                        <CheckIcon className="h-6 place-self-end" />
                    </div>
                </div>
                <div className="subscription-cover">
                    <p className="subscription-text">Record Live TV with 50 hours of Cloud DVR storage</p>
                    <div className="subscription-icon">
                        <MinusIcon className="h-6 text-gray-400" />
                        <MinusIcon className="h-6 text-gray-400 place-self-center" />
                        <CheckIcon className="h-6 place-self-end" />
                    </div>
                </div>
                <div className="flex flex-col items-center px-4 pt-2 pb-16 text-[10px] text-center text-gray-900">
                    <p>*Then $64.99/month. New and eligible returning subscribers only.</p>
                    <p>**On 10/08/2021, the price of Hulu (ad-supported) will increase to $6.99/month and the price of Hulu (No Ads) will increase to $12.99/month.</p>
                    <p>^For current-season shows in the streaming library only.</p>
                    <p>^^Switches from Live TV to Hulu take effect as of the next billing cycle.</p>
                </div>
            </div>
            <ReactTooltip place="right" type="success" effect="float" />
        </div>
    )
}

export default MobileSubscription
