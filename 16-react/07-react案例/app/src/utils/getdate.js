// 格式化时间
export function formatDate(time){
    if(!time) return ""
    let date =new Date(time)
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+"-"+date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds()
}
export function getDate(){
    let date=new Date()
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+"-"+date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds()
}