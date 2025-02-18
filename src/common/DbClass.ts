import { db } from "../firebase";


class DbClass {
    
    dbfire;

    constructor() {
        this.dbfire = db;
    }

    sendMessage= async(message:string) => {
        console.log("message", message);
    }
}

export default DbClass;