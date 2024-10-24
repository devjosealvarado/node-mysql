import { pool } from "./database/connectionMySQL.js";

const getLanguages= async ()=>{
    try {
        const [result]= await pool.query("SELECT id, name, developers, active FROM Language;");
        console.table(result);
        
    } catch (error) {
        console.error(error);
    }
}

const addLanguage = async () => {
    try {
        const result = await pool.query("INSERT INTO language (name, developers, active)"
                                        + "VALUES (?, ?, ?)", ["Java", "201", 1]);
        console.log(result);
        console.log("Language added!");
        
        
    } catch (error) {
        console.error(error);
        
    }
}

getLanguages();
// addLanguage();