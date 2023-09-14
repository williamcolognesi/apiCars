
# ApiCarros

Api de carros criada em Node.js com armazenamento em SQL. 




## Iniciar projeto

npm start




## Documentação da API

#### Retorna todos os carros

```http
  GET /api/carros
```

#### Adiciona um carro

```http
  POST /api/carro
```

#### Edita um carro

```http
  PUT /api/carro/:codigo
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `codigo`      | `string` | **Obrigatório**. O ID do carro que você esta editando |

#### Excluir um carro

```http
  DELETE /api/carro/:codigo
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `codigo`      | `string` | **Obrigatório**. O ID do carro que você esta excluindo |

