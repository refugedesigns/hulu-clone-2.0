import { useState } from "react"
import Banner from "../components/Banner"
import FeaturedMovieCard from "../components/FeaturedMovieCard"
import { ArrowNarrowRightIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid"
import { motion } from "framer-motion"
import Category from "../components/Category"
import MobileSubscription from "../components/MobileSubscription"
import DesktopSubscription from "../components/DesktopSubscription"
import MobileAddons from "../components/MobileAddons"
import DesktopAddons from "../components/DesktopAddons"
import MobileFooter from "../components/MobileFooter"
import DesktopFooter from "../components/DesktopFooter"


const CARDINFO = [
    {
        img: "/images/bob.jpg",
        title: "TV Shows",
        except: "Past & Current Seasons"
    },
    {
        img: "/images/billie.jpg",
        title: "Movies",
        except: "New & Classic"
    },
    {
        img: "/images/strangers.jpg",
        title: "Hulu Originals",
        except: "Groundbreaking"
    },
    {
        img: "/images/billions.jpg",
        title: "Premiums",
        except: "Add-on",
        premium: "Premium network add-ons available for an additional cost"
    }
]

function welcomePage() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [opacity, setOpacity] = useState(0.5)
    const [width, setWidth] = useState(null)
    const [active, setActive] = useState("firstContainer")
    const [showAddons, setShowAddons] = useState(false)


    const firstContainerHandler = () => {
        setActive("firstContainer")
        if(active === "secondContainer" || active === "thirdContainer") {
            setX(0)
            setWidth(null)
        }
    }
    const secondContainerHandler = () => {
        setActive("secondContainer")
        if(active === "firstContainer" || active === "thirdContainer") {
            setX(112)
            setWidth("118px")
        }
    }
    const thirdContainerHandler = () => {
        setActive("thirdContainer")
        if(active === "firstContainer" || active === "secondContainer") {
            setX(256)
            setWidth("118px")
        }
    }

    const showAddonsMobileHandler = () => {
        setShowAddons(prevShowAddons => !prevShowAddons)
        setY(0)
    }

    const hideAddonsMobileHandler = () => {
        setY(-1000)
        setShowAddons(prevShowAddons => !prevShowAddons)
    }
    return (
        <div>
            <Banner />
            <section className="bg-black py-6 px-4">
                <div className="flex flex-col items-center w-full mx-auto">
                    <p className="text-green-400 text-sm font-bold tracking-wide py-4">INCLUDED IN ALL PLANS</p>
                    <h1 className="text-white font-extrabold text-4xl md:text-6xl lg:text-5xl xl:text-6xl">All The TV You Love</h1>
                    <p className="text-white text-center py-6 px-6 lg:px-16 md:max-w-2xl xl:text-xl xl:max-w-2xl xl:px-0">Stream full seasons of exlusive series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.</p>
                </div>
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 py-8 px-4 md:max-w-2xl xl:max-w-7xl mx-auto">
                    {CARDINFO.map((item, index) => (
                        <div>
                            <FeaturedMovieCard
                            key={index}
                            img={item.img}
                            except={item.except}
                            title={item.title}
                            premium={item.premium}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-[#141414] py-6 px-4 md:py-12">
                <div className="pb-2 pt-10 px-4 flex flex-col items-center space-y-4 ring-4 ring-green-500 rounded-xl md:pt-24 md:pb-6 xl:pb-24">
                    <p className="text-sm font-bold text-green-500">HULU + LIVE TV</p>
                    <h1 className="text-white text-4xl font-extrabold md:text-5xl xl:text-7xl">Limited-Time Savings</h1>
                    <p className="text-white text-center text-md tracking-wide pt-4 md:px-10 lg:max-w-xl xl:text-2xl xl:max-w-4xl">Save $10/month for 3 months on Hulu + Live TV. Just $54.99/mo for your first 3 months (after 7 day free trial, if eligible), then $64.99/mo. Cancel anytime.</p>
                    <p className="text-white text-[10px] text-center tracking-wide md:leading-8 md:text-gray-400 md:px-8 lg:max-w-3xl xl:max-w-5xl">
                        Offer for Hulu(ad-supported) + Live TV plan only. $54.99/month for 3 months, then $64.99/month. Ends 11:59 PM PST on 10/28/21. Hulu + Live TV discount offer valid for new and eligible returning subscribers(who have not had Hulu in the past 3 months) only. Hulu + Live TV free trial offer valid for new and eligible returning subscribers(who have not taken a free trial of Hulu in the past 12 months) only. <span className="underline cursor-pointer">Additional terms apply</span>
                    </p>
                    <p className="flex items-end text-sm underline text-gray-200 lg:text-lg cursor-pointer">VIEW CHANNELS IN YOUR AREA <span><ArrowNarrowRightIcon className="h-4 text-white" /></span></p>
                    <motion.div
                    animate={{y: -10}} 
                    transition={{yoyo:Infinity, duration:0.8  }}
                    className="pt-8">
                        <ChevronDownIcon className="h-9 text-white cursor-pointer" />
                    </motion.div>
                </div>
            </section>
            <section className="h-[900px] relative">
                <div className="absolute top-10 space-x-6 mx-14 flex justify-center text-sm text-white z-20 lg:top-40 lg:mx-[8.5rem] xl:mx-[13.6rem]">
                    <motion.button  onClick={firstContainerHandler} className={`font-extrabold opacity-50 whitespace-nowrap ${active === "firstContainer" ? "opacity-100" : ''}`}>LIVE SPORTS</motion.button>
                    <motion.button  onClick={secondContainerHandler} className={`font-extrabold opacity-50 whitespace-nowrap ${active === "secondContainer" ? "opacity-100" : ''}`}>BREAKING NEWS</motion.button>
                    <motion.button  onClick={thirdContainerHandler} className={`font-extrabold opacity-50 whitespace-nowrap ${active === "thirdContainer" ? "opacity-100" : ''}`}>BIGGEST EVENTS</motion.button>
                <motion.div animate={{x:x, width:width}} transition={{duration: 0.5}} className="border-b-8 absolute  -left-6 w-[5.5rem] border-white mt-6 z-20 lg:border-b-[6px] " />
                </div>
                <div className="h-full">
                {active === "firstContainer" && (
                    <Category
                    coverImage="/images/sports.jpg"
                    title="Live Sports"
                    except="Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA, NBA, NHL, NFL, and more."
                    avatar1="/images/sports/cbs-sports-network-logo.png"
                    avatar2="/images/sports/espn-network-logo.png"
                    avatar3="/images/sports/nbcsn-network-logo.svg"
                    avatar4="/images/sports/golf-network-logo.png"
                    />
                )}
                {active === "secondContainer" && (
                    <Category
                    coverImage="/images/news.jpg"
                    title="Breaking News"
                    except="Keep pace with what's going on locally and globally with trusted opinions from all the top news networks."
                    avatar1="/images/news/abc-news-live-network-logo.png"
                    avatar2="/images/news/cnn-network-logo.svg"
                    avatar3="/images/news/msnbc-network-logo.png"
                    avatar4="/images/news/foxnews-network-logo.svg"
                    />
                )}
                {active === "thirdContainer" && (
                    <Category
                    coverImage="/images/events.jpg"
                    title="Biggest Events"
                    except="Spectacular, can't-miss moments like the Olympics, Grammys&reg;, Oscars&reg;, Emmys&reg;, and more."
                    avatar1="/images/events/emmys-logo.png"
                    avatar2="/images/events/golden-globe-logo.png"
                    avatar3="/images/events/grammys-logo.png"
                    avatar4="/images/events/oscars-logo.png"
                    />
                )}
                </div>
            </section>
            <section className="max-w-7xl mx-auto">
                <div className="lg:hidden">
                    <div className="py-8 px-8 flex flex-col items-center text-center border-b">
                        <h3 className="pb-4 font-extrabold text-3xl text-gray-800">Select Your Plan</h3>
                        <p className="max-w-[20rem] md:max-w-lg">No hidden fees, equipment rentals, or installation appointments.</p>
                        <p className="font-bold text-lg text-gray-800">Switch plans or cancel anytime.^^</p>
                    </div>
                <div className="grid grid-cols-3 border-b px-2 sticky top-0 z-50 bg-white">
                    <div className="pt-2 pr-2 pb-4 flex flex-col items-center space-y-1">
                        <p className="text-[10px] font-extrabold bg-gray-600 py-2 px-4 rounded-full text-white">MOST POPULAR</p>
                        <p className="text-sm font-extrabold md:text-xl md:text-gray-800">Hulu</p>
                        <p className="text-[10px] font-extrabold text-gray-500 md:text-sm md:text-gray-400">30 DAY FREE TRIAL</p>
                        <button className="buttons md:w-full">SELECT</button>
                    </div>
                    <div className="border-r border-l px-2 flex flex-col items-center pt-11 space-y-1 ">
                        <p className="text-sm font-extrabold md:text-xl md:text-gray-800">Hulu(No Ads)</p>
                        <p className="text-[10px] font-extrabold text-gray-500 md:text-sm md:text-gray-400">30 DAY FREE TRIAL</p>
                        <button className="buttons md:w-full">SELECT</button>
                    </div>
                    <div className="pl-2 pt-2 pb-4 flex flex-col items-center space-y-1">
                        <p className="text-[10px] font-extrabold bg-gray-600 py-2 px-4 rounded-full text-white">LIMITED TIME</p>
                        <p className="text-sm font-extrabold md:text-xl md:text-gray-800">Hulu + Live TV</p>
                        <p className="text-[10px] font-extrabold text-gray-500 md:text-sm md:text-gray-400">7DAY FREE TRIAL</p>
                        <button className="buttons px-3 md:w-full">GET DEAL</button>
                    </div>
                </div>
                    <MobileSubscription />
                    {showAddons && <MobileAddons />}
                    {!showAddons ? <button onClick={showAddonsMobileHandler} className="flex justify-center items-center mx-auto py-4 w-full border-b border-t mb-8 text-gray-700">Show Add-ons <ChevronDownIcon className="h-10 text-gray-400" /></button> : <motion.button  onClick={hideAddonsMobileHandler} className="flex justify-center items-center mx-auto py-4 w-full border-b border-t mb-8 text-gray-700" animate={{ y: y}} transition={{ duration: 0.8, delay: 1 }}>Hide Add-ons <ChevronUpIcon className="h-10 text-gray-400" /></motion.button> }
                </div>
                <div className="hidden lg:block max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto px-6">
                     <div className="grid grid-cols-5 gap-2 border-b sticky top-0 bg-white z-50">
                        <div className="col-span-2 pt-8">
                            <h3 className="pb-4 font-extrabold text-3xl text-gray-800">Select Your Plan</h3>
                            <p className="max-w-[20rem]">No hidden fees, equipment rentals, or installation appointments.</p>
                            <p className="font-bold text-lg text-gray-800">Switch plans or cancel anytime.^^</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2 pt-8 pl-2">
                            <p className="text-xs font-bold bg-gray-500 text-white py-2 px-4 rounded-full">MOST POPULAR</p>
                            <p className="text-xl font-extrabold text-gray-700 2xl:text-3xl 2xl:text-gray-900">Hulu</p>
                            <p className="text-sm font-bold text-gray-400 2xl:text-lg 2xl:pb-2">30 DAY FREE TRIAL</p>
                            <button className="buttons w-full px-12 py-3">SELECT</button>
                        </div>
                        <div className="flex flex-col items-center space-y-2 pt-[4.5rem] bg-gray-100 px-2 pb-2">
                            <p className="text-xl font-extrabold text-gray-700 2xl:text-3xl 2xl:text-gray-900">Hulu(No Ads)</p>
                            <p className="text-sm font-bold text-gray-400 2xl:text-lg 2xl:pb-2">30 DAY FREE TRIAL</p>
                            <button className="buttons w-full px-12 py-3">SELECT</button>
                        </div>
                        <div className="flex flex-col items-center space-y-2 pt-8 pr-2">
                            <p className="text-xs font-bold bg-gray-500 text-white py-2 px-4 rounded-full">LIMITED TIME</p>
                            <p className="text-xl font-extrabold text-gray-700 2xl:text-3xl 2xl:text-gray-900">Hulu + Live TV</p>
                            <p className="text-sm font-bold text-gray-400 2xl:text-lg 2xl:pb-2">7 DAY FREE TRIAL</p>
                            <button className="buttons w-full px-12 py-3 whitespace-nowrap">GET DEAL</button>
                        </div>
                    </div>
                    <DesktopSubscription />
                    {showAddons && <DesktopAddons />}
                    {!showAddons ? <button onClick={showAddonsMobileHandler} className="flex justify-center items-center mx-auto py-4 w-full border-b border-t mb-8 text-gray-700">Show Add-ons <ChevronDownIcon className="h-10 text-gray-400" /></button> : <motion.button  onClick={hideAddonsMobileHandler} className="flex justify-center items-center mx-auto py-4 w-full border-b border-t mb-8 text-gray-700" animate={{ y: y}} transition={{ duration: 0.8, delay: 1 }}>Hide Add-ons <ChevronUpIcon className="h-10 text-gray-400" /></motion.button> }
                </div>
            </section>
            <section>
                <div className="md:hidden">
                    <MobileFooter />
                </div>
                <div className="hidden md:block">
                    <DesktopFooter />
                </div>
            </section>
        </div>
    )
}

export default welcomePage