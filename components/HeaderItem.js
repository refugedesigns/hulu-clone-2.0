const HeaderItem = ({title, Icon}) => {
    return (
        <div className="group cursor-pointer flex flex-col justify-center items-center w-12 sm:w-20 hover:text-white">
            <Icon className="h-8 mb-1 group-hover:animate-bounce" />
            <p className="opacity-0 group-hover:opacity-100 uppercase tracking-widest">{title}</p>
        </div>
    )
}

export default HeaderItem
