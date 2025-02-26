const RegistForm = ({onInputChange}) => {
    return (
        <>
        <input type="text" onChange={(e) => onInputChange(e.target.value)}/>
        </>
    )
}
export default RegistForm