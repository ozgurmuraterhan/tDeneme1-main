

const JourneySelect = (props) => {
    const { className } = props
    return (
        <select  {...props} className={`border border-black p-3  w-full ${className}`}>
            {props.data.map(item => <option key={item.value} value={item.value}>{item.label} </option>)}
        </select>

    )
}

export default JourneySelect
