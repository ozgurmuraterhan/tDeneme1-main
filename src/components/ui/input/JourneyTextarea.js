

const JourneyTextarea = (props) => {
    const { className } = props
    return (
        <div>
            <textarea {...props} className={`h-20  w-full ${className}`}>

            </textarea>
        </div>
    )
}

export default JourneyTextarea
