import Image from "next/image"

const MobileDescriptionBundleItem = ({planDescription, planAccess}) => {
    return (
        <div className="max-w-max">
            <div className="flex items-center space-x-3">
                <div className="relative h-10 w-10 mt-4">
                    <Image src="/images/hulu-black.png" layout="fill" alt="" objectFit="contain" />
                </div>
                <div className="relative h-20 w-20">
                    <Image src="/images/disnepblack.png" layout="fill" alt="" objectFit="contain" />
                </div>
                <div className="relative h-16 w-16 mt-4">
                    <Image src="/images/espnblack.png" layout="fill" alt="" objectFit="contain" />
                </div>
            </div>
            <p className="text-sm pb-2 text-gray-800">{planDescription}</p>
            <p className="pb-4 text-sm text-gray-600 max-w-sm">{planAccess}</p>
            <p className="text-sm text-blue-700 hover:cursor-pointer">Learn more</p>
        </div>
    )
}

export default MobileDescriptionBundleItem
