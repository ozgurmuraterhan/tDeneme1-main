

const JourneyCheckbox = (props) => {
    const { id, textlabel, className, classNameLabel } = props
    return (
        <div>
            <input {...props} type="checkbox" className={`form-checkbox h-8 w-8  transition-all    delay-200  text-green-600 ${className}`} />
            <label htmlFor={id} className={`mx-3 font-bold ${classNameLabel}`} >{textlabel}</label>
        </div>
    )
}


export default JourneyCheckbox
