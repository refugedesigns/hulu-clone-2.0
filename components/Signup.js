import { PlayIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { Form,  Input, Select } from "./useForm/Inputs"

const Signup = () => {
    const years = Array.from(Array(new Date().getFullYear() - 1899), (_, i) => (i + 1899).toString())
    return (
        <div className="bg-[#f7f7f9] min-h-screen w-full mx-auto">
            <div className="flex items-center justify-between px-8 py-2 bg-white border-b">
                <div className="relative h-14 w-14 hover:cursor-pointer">
                    <Image src="/images/hulu-black.png" layout="fill" alt="hulu logo" objectFit="contain" objectPosition="left" />
                </div>
                <h3 className="text-sm font-extrabold tracking-wider text-gray-900 hover:cursor-pointer">LOG IN</h3>
            </div>
            <div className="p-12 text-center">
                <h2 className="text-3xl font-extrabold pb-2">Create Your Account</h2>
                <p className="text-[15px] text-gray-500">Use your email and password to watch on your favorite devices.</p>
            </div>
            <Form className="bg-white mx-8 shadow-lg px-4 py-8 max-w-lg sm:mx-auto">
                <label className="block uppercase py-1 text-sm font-bold text-gray-500" htmlFor="email">Email</label>
                <Input className="py-2 px-4 w-full rounded-md border-2 border-gray-400 mb-8" name="email" />
                <label className="block uppercase py-1 text-sm font-bold text-gray-500" htmlFor="password">Password</label>
                <Input className="py-2 px-4 w-full rounded-md border-2 border-gray-400 mb-8" name="password" type="password" />
                <label className="block uppercase py-1 text-sm font-bold text-gray-500" htmlFor="name">Name</label>
                <Input className="bg-[#E8F0FE] py-2 px-4 w-full rounded-md border-2 border-gray-400 mb-8" name="name" type="text" />
                <label className="block uppercase py-1 text-sm font-bold text-gray-500" htmlFor="birthdate">BIRTHDATE</label>
                <Select className="form-select border-2 border-gray-400 rounded-md mt-1 mb-8 w-[35%] inline  hover:cursor-pointer" name="month" defaultSelect="Month" options={["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]} />
                <Select className="form-select border-2 border-gray-400 rounded-md mt-1 mb-8 w-[25%]  mx-[5%] inline  hover:cursor-pointer" name="day" defaultSelect="Day" options={[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]} />
                <Select className="form-select border-2 border-gray-400 rounded-md mt-1 mb-8 w-[30%] inline hover:cursor-pointer" name="year" defaultSelect="Year" options={years} />
                <label className="block uppercase py-1 text-sm font-bold text-gray-500" htmlFor="gender">Gender</label>
                <Select className="form-select overflow-scroll border-2 border-gray-400 rounded-md mt-1 mb-8 p-2 w-full inline  hover:cursor-pointer" name="gender" defaultSelect="Select" options={["Female", "Male", "Prefer not to say"]} />
                <p className='text-[13px] text-center text-gray-500'>By clicking "CONTINUE" you agree to the <span className="text-blue-700 hover:cursor-pointer">Hulu Terms of Use</span> and <span className="text-blue-700 hover:cursor-pointer">Privacy Policy.</span></p>
                <button className="w-[80%] bg-black text-white mx-auto text-center flex justify-center py-2 mt-8 rounded-md hover:bg-opacity-80">CONTINUE</button>
            </Form>
            <div className="mt-32 pb-16 mx-auto">
                <div className="lg:flex justify-center space-x-8">
                    <div className="sm:flex justify-center space-x-8">
                        <div className="flex space-x-4 justify-center text-gray-600 text-sm mb-4">
                            <div className="flex items-center text-gray-600 hover:cursor-pointer"><PlayIcon className="h-5 text-blue-700" /> <p>About Ads</p></div>
                            <p className="hover:cursor-pointer">Terms of Use</p>
                            <p className="hover:cursor-pointer">Privacy Policy</p>
                        </div>
                        <p className="flex justify-center text-sm text-gray-600 hover:cursor-pointer mb-4">Do Not Sell My Personal Information</p>
                    </div>
                    <p className="flex justify-center text-sm text-gray-600 hover:cursor-pointer mb-4">Your California Privacy Rights</p>
                    <p className="flex justify-center text-sm text-gray-600 hover:cursor-pointer mb-4">&copy; 2021 Hulu, LLC</p>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Signup
