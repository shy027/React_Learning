const Student = ({name,avatar,age}) => {
    return(
        <>
        <img src={avatar} width="200px"/>
            <h1>姓名：{name}</h1>
            <h2>年龄：{age}</h2>
        </>
    )
}
export default Student