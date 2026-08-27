const express = require('express');

const Pedidos = require('./dados.json');

const ListarPedidos = (req, res) => {
    res.send(Pedidos);
};

const novoPedido = (req, res) => {
    if (req.body) {
        Pedidos.push(req.body);

        res.send("Pedido recebido em processamento");
    } else {
        res.send("Erro ao receber pedido");
    }
};

const porta = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", ListarPedidos);

app.post("/", novoPedido);

app.listen(porta, () => {
    console.log(`Servidor: http://127.0.0.1:${porta}`);
    console.log(`Cliente: http://127.0.0.1:5500/cliente/`);
});