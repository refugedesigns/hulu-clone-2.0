import { Fragment } from "react"
import Image from "next/image"

const FeaturedMovieCard = ({img, except, title, premium}) => {
    return (
        <Fragment>       
            <div className="relative cursor-pointer">
            <div className="absolute w-full h-full bg-black opacity-40 top-0 z-20" />
                <Image src={img} layout="responsive" height={300} width={200} objectFit="contain" objectPosition="center" />
                <div className="absolute top-2 left-4 z-50">
                    <p className="text-sm text-white md:text-lg">{except}</p>
                    <h3 className="text-white font-bold text-lg md:text-2xl">{title}</h3>
                </div>
            </div>
            <p className="text-white text-[10px] pt-2">{premium}</p>
        </Fragment>
    )
}

export default FeaturedMovieCard
