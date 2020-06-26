import store from "store"
const USER="USER"

export default {
    // 传递信息
    setUser(user){
        // localStorage.setItem("user",JSON.stringify(user))
      store.set(USER,user)
    },
    // 得到信息
    getUser(){
    //  return  JSON.parse(localStorage.getItem("user")) 
    return store.get(USER)
    },
    // 删除信息
    removeUser(){
        store.remove(USER)

    }
}