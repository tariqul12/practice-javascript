function keys(obj){
    if(!isObject(obj)) return[];
    if (Object.keys) return Object.keys(obj);
    var keys=[];
}
function isObject(obj){
    var type=typeof obj;
    return type==="function"||type==="object"&& !!obj;
}
