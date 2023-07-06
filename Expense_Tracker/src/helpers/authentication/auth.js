//Api
import {DB_KEYS} from "../../utils/constants";
import { dbWrite, getDBRead } from "./db";
import { v4 } from "uuid";

export const apiLogin =(username, password) =>{
    //get all users
    const users = JSON.parse( getDBRead(DB_KEYS.USERS) ||'[]');
    let IsRegister = false;
    let uId = null;
    username.map(user => {
        if(user.username === username && user.password === password){
            IsRegister = true;
            uId = user.id;
            return;
        }
    });
    let value ={};
//save in database if user credentials match
if(IsRegister){
    value ={
        username = username,
        password = password,
        id = uId,
    }
    dbWrite(DB_KEYS.CURRENT_USER, JSON.stringify(value));
    return{
        status: 200,
        statusText: 'Ok',
        message: 'Logged in sucessfully',
    }
}
return {
    status: 401,   
    message: 'Username and password does not match',
}
}

const apiRegister =(username, email, password) =>{
 const value ={
     id=v4(),
     username: username,
     email: email,
     password: password,
    
 }   
 const users = JSON.parse(getDBRead(DB_KEYS.USERS)|| '[]');
 users.push(value);
dbWrite(DB_KEYS.USERS,JSON.stringify(value));
return{
    status:200,
    message: "Sucessfull",
}
}