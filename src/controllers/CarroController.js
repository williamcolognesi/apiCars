const CarroService = require("../services/CarroService");

module.exports = {
  buscarTodos: async (req, res) => {
    let json = { error: "", result: [] };

    let carros = await CarroService.buscarTodos();

    for (let i in carros) {
      json.result.push({
        codigo: carros[i].codigo,
        marca: carros[i].marca,
        modelo: carros[i].modelo,
        descricao: carros[i].descricao,
        valor: carros[i].valor,
      });
    }
    res.json(json);
  },

  inserir: async (req, res) => {
    let json = { error: "", result: {} };
    let marca = req.body.marca;
    let modelo = req.body.modelo;
    let descricao = req.body.descricao;
    let preco = req.body.preco;

    if (marca && modelo && descricao && preco) {
      let CarroCodigo = await CarroService.inserir(
        marca,
        modelo,
        descricao,
        preco
      );
      json.result = {
        codigo: CarroCodigo,
        marca,
        modelo,
        descricao,
        preco,
      };
    } else {
      json.error = "Campos não enviados";
    }
    res.json(json);
  },

  alterar: async (req, res) => {
    let json = { error: "", result: {} };

    let codigo = req.params.codigo;
    let preco = req.body.preco;

    if (!isNaN(codigo)) {
      await CarroService.alterar(codigo, preco);
      json.result = {
        codigo,
        preco,
      };
    } else {
      json.error = "Campo não enviados";
    }
    res.json(json);
  },
  excluir: async (req, res) => {
    let json = {
      error: "",
      result: {},
    };

    let codigo = req.params.codigo;
    await CarroService.excluir(codigo);

    res.json(json);
  },
};
