const express = require('express')
const routes = express.Router()

let db = [

    {id: 1, veiculo: 'Camaro', marca: 'Ford', ano: '2015', descricao: 'Carro modelo sport', vendido: 'S'},
    {id: 2, veiculo: 'Kombi', marca: 'Ford', ano: '1998', descricao: 'Carro para transporte', vendido: 'N'}

]

//Buscar Dados
routes.get('/veiculos', (req, res) => {
    return res.json(db)
})

//Buscar Dados ID
routes.get('/veiculos/:id', (req, res) => {
    let found = db.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
})

//Insere Dados
routes.post('/veiculos', (req, res) => {
    const body = req.body
    if (!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})

//Alterar Dados
routes.put('/veiculos/:id', function (req, res) {
    let found = db.find(function (item) {
      return item.id === parseInt(req.params.id);
    });
  
    if (found) {
      let updated = {
        id: found.id,
        veiculo: req.body.veiculo,
        marca: req.body.marca,
        ano: req.body.ano,
        descricao: req.body.descricao,
        vendido: req.body.vendido
      };
  
      let targetIndex = db.indexOf(found);
  
      db.splice(targetIndex, 1, updated);  
      res.sendStatus(204);
      console.log('Item alterado!')
    } else {
      res.sendStatus(404);
    }
  });

//Deletar Dados
routes.delete('/veiculos/:id', function (req, res) {
    let found = db.find(function (item) {
      return item.id === parseInt(req.params.id);
    });
  
    if (found) {
      let targetIndex = db.indexOf(found);
  
      db.splice(targetIndex, 1);
    }
  
    res.sendStatus(204);
    console.log('Item removido!')
  });


module.exports = routes