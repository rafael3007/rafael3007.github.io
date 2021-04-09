const Database = require('../db/config')


module.exports = {
    async get() {
        //conexão
        const db = await Database()

        const data = await db.all(`SELECT * FROM ROW`);
        await db.close()

        return data;
    },
    async update(newRow) {
        const db = await Database()
        await db.run(`UPDATE ROW 
        SET 
            UNIORG = ${newRow.UNIORG},
            NOME_AGENCIA = "${newRow.NOME_AGENCIA}",
            ENDERECO = "${newRow.ENDERECO}",
            CIDADE = "${newRow.CIDADE}",
            TIPO = "${newRow.TIPO}",
            AMBIENTE = "${newRow.AMBIENTE}",
            ANDAR = "${newRow.ANDAR}",
            CAPACIDADE = "${newRow.CAPACIDADE}",
            QUANTIDADE = "${newRow.QUANTIDADE}",
            MANTENEDORA = "${newRow.MANTENEDORA}",
            VENCIMENTO_RECARGA = "${newRow.VENCIMENTO_RECARGA}",
            TESTE_HIDROSTATICO = "${newRow.TESTE_HIDROSTATICO}",
            MEMORIAL = "${newRow.MEMORIAL}" 
            WHERE ID = ${newRow.ID};    
             `)
        
        await db.close()
    },
    async delete(id) {
        const db = await Database()
        await db.run(`DELETE FROM ROW WHERE ID = ${id}`)

        await db.close()

    },
    async create(newRow) {

        const db = await Database()

        await db.all(`INSERT INTO ROW (ID, UNIORG, NOME_AGENCIA, ENDERECO, CIDADE, TIPO, AMBIENTE, ANDAR, CAPACIDADE, QUANTIDADE, MANTENEDORA, VENCIMENTO_RECARGA, TESTE_HIDROSTATICO, MEMORIAL)
            VALUES (
            ${newRow.ID},
            ${newRow.UNIORG},
            "${newRow.NOME_AGENCIA}",
            "${newRow.ENDERECO}",
            "${newRow.CIDADE}",
            "${newRow.TIPO}",
            "${newRow.AMBIENTE}",
            "${newRow.ANDAR}",
            "${newRow.CAPACIDADE}",
            "${newRow.QUANTIDADE}",
            "${newRow.MANTENEDORA}",
            "${newRow.VENCIMENTO_RECARGA.split('/').reverse().join('-')}",
            "${newRow.TESTE_HIDROSTATICO.split('/').reverse().join('-')}",
            "${newRow.MEMORIAL}"
            )`
        );

        await db.close()

    },
    async getUniorg(uniorg) {
        //conexão
        const db = await Database()

        const data = await db.all(`SELECT * FROM Row WHERE UNIORG= ${uniorg}`);

        await db.close()
        return data;
    }
    
}