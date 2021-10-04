import { CheckIcon, InformationCircleIcon, MinusIcon } from "@heroicons/react/outline"

const DesktopAddons = () => {
    return (
        <div>
            <div className="pt-8 pb-6 border-b">
                <h1 className="text-3xl font-extrabold whitespace-nowrap mb-6 text-gray-800">Available Add-ons</h1>
                <p className="text-gray-700">Add-ons available at an additional cost.</p>
                <p className="text-gray-700">Add them up after you sign up for Hulu</p>
            </div>
            <div className="desktop-sub">
                <p className="col-span-2 py-6">HBO Max&trade;</p>
                <CheckIcon className="desktop-icons" />
                <div className="place-self-center bg-gray-100 h-full w-full flex justify-center items-center">
                    <CheckIcon className="desktop-icons" />
                </div>
                <CheckIcon className="desktop-icons" />
            </div>
            <div className="desktop-sub">
                <p className="col-span-2 py-6">CINEMAX&reg;</p>
                <CheckIcon className="desktop-icons" />
                <div className="place-self-center bg-gray-100 h-full w-full flex justify-center items-center">
                    <CheckIcon className="desktop-icons" />
                </div>
                <CheckIcon className="desktop-icons" />
            </div>
            <div className="desktop-sub">
                <p className="col-span-2 py-6">SHOWTIME&reg;</p>
                <CheckIcon className="desktop-icons" />
                <div className="place-self-center bg-gray-100 h-full w-full flex justify-center items-center">
                    <CheckIcon className="desktop-icons" />
                </div>
                <CheckIcon className="desktop-icons" />
            </div>
            <div className="desktop-sub">
                <p className="col-span-2 py-6">STARZ&reg;</p>
                <CheckIcon className="desktop-icons" />
                <div className="place-self-center bg-gray-100 h-full w-full flex justify-center items-center">
                    <CheckIcon className="desktop-icons" />
                </div>
                <CheckIcon className="desktop-icons" />
            </div>
            <div className="desktop-sub">
                <p className="col-span-2 py-6">Unlimited Screens <InformationCircleIcon className="h-4 inline-flex text-gray-500 cursor-pointer" /></p>
                <MinusIcon className="desktop-icons" />
                <div className="place-self-center bg-gray-100 h-full w-full flex justify-center items-center">
                    <MinusIcon className="desktop-icons" />
                </div>
                <CheckIcon className="desktop-icons" />
            </div>
            <div className="desktop-sub">
                <p className="col-span-2 py-6">Enhanced Cloud DVR <InformationCircleIcon className="h-4 inline-flex text-gray-500 cursor-pointer" /></p>
                <MinusIcon className="desktop-icons" />
                <div className="place-self-center bg-gray-100 h-full w-full flex justify-center items-center">
                    <MinusIcon className="desktop-icons" />
                </div>
                <CheckIcon className="desktop-icons" />
            </div>
            <div className="desktop-sub">
                <p className="col-span-2 py-6">Entertainment Add-on <InformationCircleIcon className="h-4 inline-flex text-gray-500 cursor-pointer" /></p>
                <MinusIcon className="desktop-icons" />
                <div className="place-self-center bg-gray-100 h-full w-full flex justify-center items-center">
                    <MinusIcon className="desktop-icons" />
                </div>
                <CheckIcon className="desktop-icons" />
            </div>
            <div className="desktop-sub">
                <p className="col-span-2 py-6">Espanol Add-on <InformationCircleIcon className="h-4 inline-flex text-gray-500 cursor-pointer" /></p>
                <MinusIcon className="desktop-icons" />
                <div className="place-self-center bg-gray-100 h-full w-full flex justify-center items-center">
                    <MinusIcon className="desktop-icons" />
                </div>
                <CheckIcon className="desktop-icons" />
            </div>
        </div>
    )
}

export default DesktopAddons
