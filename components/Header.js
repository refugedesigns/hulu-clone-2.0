import Image from "next/image"
import HeaderItem from "./HeaderItem"
import 
{ 
BadgeCheckIcon, 
CollectionIcon, 
HomeIcon, 
LightningBoltIcon, 
SearchIcon, 
UserIcon } from "@heroicons/react/outline"

export const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row p-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly items-center max-w-2xl my-auto">
                <HeaderItem title="Home" Icon={HomeIcon} />
                <HeaderItem title="Trending" Icon={LightningBoltIcon} />
                <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
                <HeaderItem title="Collections" Icon={CollectionIcon} />
                <HeaderItem title="Search" Icon={SearchIcon} />
                <HeaderItem title="Account" Icon={UserIcon} />
            </div>
            <div className="relative h-24 w-24 -mt-4 cursor-pointer">
                <Image src="/images/hulu-white.png" layout="fill" objectFit="contain" />
            </div>
        </header>
    )
}
