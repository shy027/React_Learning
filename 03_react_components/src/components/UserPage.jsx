/*
 * @Author: shy 1533103845@qq.com
 * @Date: 2025-02-24 14:41:22
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2025-02-24 14:44:37
 * @FilePath: \03_react_components\src\components\UserPage.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import UserProfile from "./UserProfile";
import {useState} from "react"

const UserPage = () => {
    const [user,setUser] = useState({name:'张三',age:20})
    const handleAgeChange = () => {
        setUser((user) => ({...user,age:user.age + 1}))
    }

    return (
        <>
            <UserProfile name={user.name} age={user.age} onAgeChange={handleAgeChange}></UserProfile>
        </>
    )
}
export default UserPage
