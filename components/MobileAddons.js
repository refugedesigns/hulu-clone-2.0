import { CheckIcon, InformationCircleIcon, MinusIcon } from "@heroicons/react/outline"

const MobileAddons = () => {
    return (
        <div>
            <div className="px-16 text-center p-8 pb-6 border-b">
                <h1 className="text-3xl font-extrabold whitespace-nowrap mb-6 text-gray-800">Available Add-ons</h1>
                <p className="text-gray-700">Add-ons available at an additional cost.</p>
                <p className="text-gray-700">Add them up after you sign up for Hulu</p>
            </div>
            <div className="subscription-cover">
                <p className="subscription-text">HBO Max&trade;</p>
                <div className="subscription-icon">
                    <CheckIcon className="h-6" />
                    <CheckIcon className="h-6 place-self-center"/>
                    <CheckIcon className="h-6 place-self-end"/>
                </div>
            </div>
            <div className="subscription-cover">
                <p className="subscription-text">CINEMAX&reg;</p>
                <div className="subscription-icon">
                    <CheckIcon className="h-6" />
                    <CheckIcon className="h-6 place-self-center" />
                    <CheckIcon className="h-6 place-self-end" />
                </div>
            </div>
            <div className="subscription-cover">
                <p className="subscription-text">SHOWTIME&reg;</p>
                <div className="subscription-icon">
                    <CheckIcon className="h-6" />
                    <CheckIcon className="h-6 place-self-center" />
                    <CheckIcon className="h-6 place-self-end" />
                </div>
            </div>
            <div className="subscription-cover">
                <p className="subscription-text">STARZ&reg;</p>
                <div className="subscription-icon">
                    <CheckIcon className="h-6" />
                    <CheckIcon className="h-6 place-self-center" />
                    <CheckIcon className="h-6 place-self-end" />
                </div>
            </div>
            <div className="subscription-cover">
                <p className="subscription-text flex justify-center items-center space-x-2">Unlimited Screens  <span><InformationCircleIcon className="h-4 text-gray-500 cursor-pointer" /></span></p>
                <div className="subscription-icon">
                    <MinusIcon className="h-6 text-gray-300" />
                    <MinusIcon className="h-6 place-self-center text-gray-300" />
                    <CheckIcon className="h-6 place-self-end" />
                </div>
            </div>
            <div className="subscription-cover">
                <p className="subscription-text flex justify-center items-center space-x-1">Enhanced Cloud DVR <InformationCircleIcon className="h-4 text-gray-500 cursor-pointer" /></p>
                <div className="subscription-icon">
                    <MinusIcon className="h-6 text-gray-300" />
                    <MinusIcon className="h-6 place-self-center text-gray-300" />
                    <CheckIcon className="h-6 place-self-end" />
                </div>
            </div>
            <div className="subscription-cover">
                <p className="subscription-text flex justify-center items-center">Entertainment Add-on <InformationCircleIcon className="h-4 text-gray-500 cursor-pointer" /></p>
                <div className="subscription-icon">
                    <MinusIcon className="h-6 text-gray-300" />
                    <MinusIcon className="h-6 place-self-center text-gray-300" />
                    <CheckIcon className="h-6 place-self-end" />
                </div>
            </div>
            <div className="subscription-cover">
                <p className="subscription-text flex justify-center items-center">Espanol Add-on <InformationCircleIcon className="h-4 text-gray-500 cursor-pointer" /></p>
                <div className="subscription-icon">
                    <MinusIcon className="h-6 text-gray-300" />
                    <MinusIcon className="h-6 place-self-center text-gray-300" />
                    <CheckIcon className="h-6 place-self-end" />
                </div>
            </div>
        </div>
    )
}

export default MobileAddons
