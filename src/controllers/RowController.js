const Row = require('../models/Row')

module.exports ={
    async save(req, res) {  
        const RowGet = await Row.get()

        const lastId = RowGet[RowGet.length - 1]?.ID || 0;
        
        await Row.create({
            ID: lastId + 1,
            //isto poderia ser simplificado passando o proprio body como parametro( ja que possui os mesmo atributos)
            "UNIORG": Number(req.body.UNIORG) ,
            "NOME_AGENCIA": req.body.NOME_AGENCIA,
            "ENDERECO": req.body.ENDERECO,
            "CIDADE": req.body.CIDADE,
            "TIPO": req.body.TIPO,
            "AMBIENTE": req.body.AMBIENTE,
            "ANDAR": req.body.ANDAR,
            "CAPACIDADE": req.body.CAPACIDADE,
            "QUANTIDADE": req.body.QUANTIDADE,
            "MANTENEDORA": req.body.MANTENEDORA,
            "VENCIMENTO_RECARGA": req.body.VENCIMENTO_RECARGA,
            "TESTE_HIDROSTATICO": req.body.TESTE_HIDROSTATICO,
            "MEMORIAL": req.body.MEMORIAL
        })
        return res.redirect("/inicial")
    },
    create(req,res){
        return res.render("Row")
    },
    async show(req, res){
        const RowGet = await Row.get()
        const rowId = req.params.id
        
        const row = RowGet.find(row => Number(row.ID) === Number(rowId))

        if ( !row){
            return res.send('Row not found')
        }

        return res.render( "row-edit", { row })
    },
    async update(req, res){
        const RowGet = await Row.get()
        const rowId = req.params.id

        const row = RowGet.find(row => Number(row.ID) === Number(rowId))
       

        if ( !row){
            return res.send('Rows not found')
        }
        const updatedRow = {
            ...row,
            UNIORG: Number(req.body.UNIORG),
            NOME_AGENCIA: req.body.NOME_AGENCIA,
            ENDERECO: req.body.ENDERECO,
            CIDADE: req.body.CIDADE,
            TIPO: req.body.TIPO,
            AMBIENTE: req.body.AMBIENTE,
            ANDAR: req.body.ANDAR,
            CAPACIDADE: req.body.CAPACIDADE,
            QUANTIDADE: req.body.QUANTIDADE,
            MANTENEDORA: req.body.MANTENEDORA,
            VENCIMENTO_RECARGA: req.body.VENCIMENTO_RECARGA,
            TESTE_HIDROSTATICO: req.body.TESTE_HIDROSTATICO,
            MEMORIAL: req.body.MEMORIAL
        }
       
        await Row.update(updatedRow);
        
        res.redirect('/row/' + rowId)
    },
    async delete(req, res){
        const rowId = req.params.id

        await Row.delete(rowId)
        
        return res.redirect('/inicial')
    } ,
    //apenas para popular a tabela
    coloca(){
        let fs = require ('fs');

        fs.readFile('./BancoDeDadosUp.txt', 'utf-8', function(err, contents){
            if (err) throw err;
            var linhas = contents.split(/\r?\n/);
            for(var i=1; i < linhas.length; i++){
                var row = linhas[i].split(',')    

                Row.create({
                    ID: i,
                    UNIORG: Number(row[0]),
                    NOME_AGENCIA: row[1],
                    ENDERECO: row[2],
                    CIDADE: row[3],
                    TIPO: row[4],
                    AMBIENTE: row[5],
                    ANDAR: row[6],
                    CAPACIDADE: row[7],
                    QUANTIDADE: row[8],
                    MANTENEDORA: row[9],
                    VENCIMENTO_RECARGA: row[10],
                    TESTE_HIDROSTATICO: row[11],
                    MEMORIAL: row[12]
                })
            }  
        })

        return console.log("finalizado") 
    }  
}