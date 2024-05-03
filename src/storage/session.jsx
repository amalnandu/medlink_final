export function getData(key){
    return sessionStorage.getItem(key);
}

export function setData(key,value){
    sessionStorage.setItem(key, value);
}