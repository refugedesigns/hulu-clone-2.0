import {useState, useEffect} from "react"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobileDescriptionBundleItem from "./MobileDescriptionBundleItem"
import MobileDescriptionItem from "./MobileDescriptionItem"
import MobilePlansItem from "./MobilePlansItem"


const MobilePlans = () => {
    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    const [active, setActive] = useState(0)
    let slider1
    let slider2

    const settings = {
        asNavFor: nav1,
        ref: slider => (slider2 = slider),
        slidesToShow: 6,
        speed: 2000,
        focusOnSelect: true,
        adaptiveHeight: true,
        rtl: true,
        beforeChange: (current, next) => setActive(next),
        responsive:[
            // {
            //     breakpoint: 1600,
            //     settings: {
            //         slidesToShow: 6
            //     }
            // },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    }

    useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [])
    console.log(active)
    return (
        <>
            <div>
                <div className="h-48 overflow-x-hidden max-w-3xl mx-auto">
                    <Slider
                    {...settings}
                    >
                        <div>
                            <MobilePlansItem
                            title="MOST POPULAR"
                            except="Hulu"
                            titleClass="text-[10px] whitespace-nowrap font-bold tracking-widest bg-gray-500 text-white text-center border-b border-gray-300 rounded-t-md"
                            focusElement={active == 0}
                            />
                        </div>
                        <div>
                            <MobilePlansItem
                            title="BUNDLE & SAVE"
                            except="Hulu, Disney+, and ESPN+"
                            focusElement={active == 1}
                            />
                        </div>
                        <div>
                            <MobilePlansItem 
                            title="BUNDLE & SAVE"
                            except="Hulu (No Ads) Disney+, and ESPN+"
                            focusElement={active == 2}
                            />
                        </div>
                        <div>
                            <MobilePlansItem
                            title="BUNDLE & SAVE"
                            except="Hulu + Live TV, Disney+, and ESPN+"
                            focusElement={active == 3}
                            />
                        </div>
                        <div>
                            <MobilePlansItem
                            except="Hulu (No Ads)"
                            focusElement={active == 4}
                            />
                        </div>
                        <div>
                            <MobilePlansItem
                            except="Hulu + Live TV"
                            focusElement={active == 5}
                            />
                        </div>
                    </Slider>
                </div>
               <div className="max-w-xl mx-auto px-8">
                    <Slider
                    asNavFor={nav2}
                    ref={slider => (slider1 = slider)}
                    fade={true}
                    >
                        <div>
                            <MobileDescriptionItem
                            title="Get Hulu 30 days free"
                            subscription="then $5.99/month*"
                            priceChange="*Price will increase to $6.99/month on 10/08/2021"
                            description="Our ad-supported plan lets you watch exclusive series, hit movies, Originals, kids shows, and tons more."
                            />
                        </div>
                        <div>
                            <MobileDescriptionBundleItem 
                            planDescription="Get Hulu, Disney+, and ESPN+ for $13.99/month."
                            planAccess="Access live sports with ESPN+, endless, ad-free entertainment with Disney+, and award-winning Hulu Originals with Hulu (ad-supported)."
                            />
                        </div>
                        <div>
                            <MobileDescriptionBundleItem
                            planDescription="Get Hulu (No Ads) Disney+, and ESPN+ for $19.99/month."
                            planAccess="Access live sports with ESPN+, endless, ad-free entertainment with Disney+, and award-winning Hulu Originals with Hulu (No Ads)."
                            />
                        </div>
                        <div>
                            <MobileDescriptionBundleItem
                            planDescription="Get Hulu + Live TV, Disney+, and ESPN+ for $72.99/month."
                            planAccess="Access 65+ channels with live TV, endless, ad-free entertainment with Disney+, live sports with ESPN+, and award-winning Hulu originals with Hulu (ad-supported)."
                            />
                        </div>
                        <div>
                            <MobileDescriptionItem 
                            title="Get Hulu (No Ads) 30 days free"
                            subscription="then $11.99/month*"
                            priceChange="*Price will increase to $12.99/month on 10/08/2021."
                            description="Our ad-free plan lets you watch exclusive series, hit movies, Originals, kids shows, and tons more with no ad interruptions."
                            />
                        </div>
                        <div>
                            <MobileDescriptionItem 
                            title="Get Hulu + Live TV 7 days free"
                            subscription="then $64.99/month"
                            description="Watch 65+ channels live & on-demand and get unlimited access to our ad-supported streaming library."
                            />
                        </div>
                    </Slider>
               </div>
            </div>
            <p className="text-center font-bold text-blue-600">Looking for our student discount?</p>
            <div className="fixed bottom-0 z-40 flex justify-center w-full">
                <div className="bg-[#f7f7f9] h-20 w-full">
                    <button className="w-full mx-4 bg-gray-900 text-white py-3 rounded-md">SELECT</button>
                </div>
            </div>
        </>
    )
}

export default MobilePlans
