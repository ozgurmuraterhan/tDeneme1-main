

const JourneyInput = (props) => {
    const { className } = props
    return (
        <div>
            <input {...props} className={`border placeholder-bold placeholder-gray-400  border-black p-3  w-full ${className}`} />
        </div>
    )
}

export default JourneyInput
