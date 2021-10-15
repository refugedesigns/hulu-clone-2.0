import { XIcon } from "@heroicons/react/outline"

const Login = () => {
    return (
        <div className="w-full flex flex-col mx-auto">
            <div className="bg-black fixed top-0 left-0 opacity-40 w-screen h-screen z-40" />
            <div className="md:flex justify-center">
                <div className="bg-white max-w-max h-full z-50 fixed flex flex-col md:absolute md:top-16 md:h-[65%] md:mx-auto">
                    <div className="w-full flex justify-end pt-8 pr-6">
                        <XIcon className="h-6" />
                    </div>
                    <form className="px-12">
                        <h2 className="text-2xl font-extrabold pb-8 text-gray-800">Log In</h2>
                        <div className="flex flex-col">
                            <label className="uppercase py-2 text-sm font-semibold text-gray-500" htmlFor="email">Email</label>
                            <input className="py-3 px-4 rounded-md border-2 border-gray-400 w-72" type="text" id="email" />
                        </div>
                        <div className="flex flex-col">
                            <label className="uppercase py-2 text-sm font-semibold text-gray-500" htmlFor="password">Password</label>
                            <input className="py-3 px-4 rounded-md border-2 border-gray-400 w-72" type="password" id="password" />
                        </div>
                        <p className="py-8 text-sm text-blue-700 cursor-pointer">Forgot your email or password?</p>
                        <button className="flex flex-col justify-center items-center w-full bg-black text-white text-center py-4 rounded-md font-bold">LOG IN</button>
                    </form>
                    <div className="flex h-full items-end">
                        <p className="bg-gray-100 w-full py-8 flex justify-center space-x-1 border-t border-b text-sm md:mt-12">Don't have an account?<span className="pl-1 text-blue-800 hover:cursor-pointer"> Start your free trial</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
