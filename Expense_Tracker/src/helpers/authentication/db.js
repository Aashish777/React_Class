
export const dbWrite =(key,value) =>{
    //localstorage
    localStorage.setItem(key,value);
    }
    
    export const getDBRead =(key) => {
    return localStorage.getItem(key);
    }