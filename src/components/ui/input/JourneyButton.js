

const JourneyButton = (props) => {
    const { className, text } = props
    return (
        <div>
            <button {...props} className={` h-12 font-bold  w-full ${className}`} >
                {text}
            </button>

        </div >
    )
}

export default JourneyButton
