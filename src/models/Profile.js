const Database = require('../db/config')


module.exports = {
    async get(){
        const db = await Database()
   
        const data = await db.get(`SELECT * FROM PROFILE`)
        
        await db.close()
  
        return {
            name: data.NAME,
            avatar: data.AVATAR
        };
    },
     async update(newData){
        const db = await Database()

        db.run(`UPDATE PROFILE SET NAME = "${newData.name}", AVATAR = "${newData.avatar}"`)
    
        await db.close()
    }
}