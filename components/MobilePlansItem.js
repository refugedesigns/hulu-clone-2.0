import { CheckCircleIcon } from "@heroicons/react/solid"

const MobilePlansItem = ({title, except, focusElement, titleClass}) => {
    return (
        <div className={`mx-2 mb-4 bg-white h-44 shadow-xl rounded-md hover:cursor-pointer max-w-36 ${focusElement && "border-2 border-green-600"}`}>
            {title && <p className={titleClass || "text-[10px] whitespace-nowrap font-bold tracking-widest bg-gray-200 text-gray-800 text-center border-b border-gray-300 rounded-t-md"}>{title}</p>}
            <h3 className="flex justify-center items-center text-center text- font-bold text-gray-800 py-4 px-2 h-[60%]">{except}</h3>
            {focusElement ? <div className="flex justify-center"><CheckCircleIcon className="h-10 text-green-700" /></div> : <div className="flex justify-center items-center"><div className="h-8 w-8 bg-white border-2 rounded-full mt-2" /></div>}
        </div>
    )
}

export default MobilePlansItem
