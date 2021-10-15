import { XIcon } from "@heroicons/react/outline"


const MobileLoginDropdown = ({setShowMobileLogin}) => {
    return (
        <div className="absolute top-0 left-0 z-40 w-full bg-white pl-6 pr-8 lg:hidden">
            <div onClick={() => setShowMobileLogin(false)} className="flex justify-end py-14">
                <XIcon className="h-7 text-gray-400" />
            </div>
            <hr className="w-12 pb-16" />
            <h2 className="pb-16 text-2xl font-thin text-gray-500 hover:cursor-pointer">Log In</h2>
            <button className="mb-6 py-3 px-8 bg-black text-white font-bold rounded-md tracking-wide hover:bg-opacity-80">START YOUR FREE TRIAL</button>
        </div>
    )
}

export default MobileLoginDropdown
