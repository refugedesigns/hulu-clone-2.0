

const MobileDescriptionItem = ({title, subscription, priceChange, description}) => {
    return (
        <div className="w-full pt-4 mx-auto">
            <div>
                <h2 className="text-[15px] font-bold text-gray-800">{title}</h2>
                <p className="text-sm py-1 text-gray-800">{subscription}</p>
                {/* <p>{priceChange}</p> */}
            </div>
            <p className="mt-2 text-sm max-w-md text-gray-600">{description}</p>
        </div>
    )
}

export default MobileDescriptionItem
