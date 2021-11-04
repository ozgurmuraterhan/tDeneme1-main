

const JourneyInput = (props) => {
    const { className } = props
    return (
        <div>
            <input {...props} className={`border border-black p-3  w-full ${className}`} />
        </div>
    )
}

export default JourneyInput
