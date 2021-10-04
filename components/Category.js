import { Avatar } from "@material-ui/core"
import Image from "next/image"

const Category = ({coverImage, title, except, avatar1, avatar2, avatar3, avatar4}) => {
    return (
        <div className="h-full relative">
           <Image src={coverImage} layout="fill" objectFit="cover" objectPosition="center" alt="" />
           <div className='w-max'>
                <div className="text-white absolute top-40 flex flex-col items-center space-y-4 lg:items-start lg:top-56  lg:mx-20 lg:space-y-6 xl:mx-40">
                    <h1 className="text-4xl font-extrabold px-8 lg:px-14 lg:text-5xl xl:text-6xl">{title}</h1>
                    <p className="text-center px-8 max-w-md lg:px-14 lg:text-left lg:text-2xl lg:max-w-xl">{except}</p>
                <div className="flex justify-center space-x-8 lg:justify-start lg:mx-20 ">
                    <Avatar src={avatar1} style={{width: "50px", height: "50px"}} className="bg-white py-2 px-1" />
                    <Avatar src={avatar2} style={{width: "50px", height: "50px"}} className="bg-white py-2 px-1" />
                    <Avatar src={avatar3} style={{width: "50px", height: "50px"}} className="bg-white py-2 px-1" />
                    <Avatar src={avatar4} style={{width: "50px", height: "50px"}} className="bg-white py-2 px-1" />
                </div>
                </div>
                <p className="absolute top-[400px] text-[10px] text-center mx-auto text-gray-400 px-12 lg:top-[520px] lg:text-left lg:px-14 lg:mx-20 xl:mx-40">Live TV plan required. Regional reactrictions, blackouts and additional terms apply. <span className="underline cursor-pointer">See details</span></p>
           </div>
        </div>
    )
}

export default Category
