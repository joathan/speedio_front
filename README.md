# README

### Setup:

1 - Usando o docker, crie uma rede se não existir, executando no terminal o comando:

```sh
docker network create -d bridge rede
```

2 - Faça um build da aplicação com o comando:

```sh
docker build -t speedio_front:latest .
```

3 - Suba o container

```sh
docker run -d --network=rede -p 8080:8080 speedio_front
```

### Endereço do projeto: http://localhost:8080

## Melhorias futuras na implementação:

- Implementação do login 
- Paginação dos resultados no front
- Criar testes
- Melhorar a usabilidade