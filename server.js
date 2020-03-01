const express = require('express')
const nunjucks = require('nunjucks')
const receitas = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express:server,
    autoescape: false,
    noCache: true
})

server.get ('/', function(req, res){
    return res.render('index', {itens: caderno})
})

server.get ('/receitas', function(req, res){
    

    return res.render('receitas', {itens:caderno})

})

const caderno = [
        {id:0, img:'img/burger.png',
        title:'Triplo Bacon Burger',
        author:'por Jorge Relato'},
        
        {id:1, img:'img/pizza.png',
        title: 'Pizza 4 estações',
        author: 'Fabiana Melo'},

        {id:2, img:'img/asinhas.png',
        title: 'Asinhas de frango ao barbecue',
        author: 'Vania Steroski'},

        {id:3, img:'img/lasanha.png',
        title: "Lasanha mac n' cheese",
        author: 'Juliano Vieira'},

        {id:4, img:'img/espaguete.png',
        title: 'Espaguete ao alho',
        author: 'Júlia Kinoto'},

        {id:5, img:'img/doce.png',
        title: 'Docinhos pão-do-céu',
        author: 'Ricardo Gouvea'}
    ]


server.get ('/receita_info', function(req, res){
    const id = req.query.id

    return res.render('receita_info', {receitas: receitas[id]})
})


server.get ('/sobre', function(req, res){
    return res.render('sobre')
})

server.listen(5100, function(){
    console.log('server is running')
})
