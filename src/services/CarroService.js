const db = require("../db");

module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM carros", (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(results);
      });
    });
  },
  inserir: (marca, modelo, descricao, preco) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO carros (marca, modelo, descricao, valor) VALUES (?, ?, ?, ?)",
        [marca, modelo, descricao, preco],
        (error, results) => {
          if (error) {
            console.error("Erro ao inserir carro no banco de dados:", error);
            rejeitado(error);
            return;
          }
          aceito(results.insertCodigo);
        }
      );
    });
  },
  alterar: (codigo, preco) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "UPDATE carros SET valor = ? WHERE codigo = ?",
        [preco, codigo],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results);
        }
      );
    });
  },

  excluir: (codigo) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "DELETE FROM carros WHERE codigo = ?",
        [codigo],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(`Carro deletado com sucesso: ${results}`);
        }
      );
    });
  },
};
