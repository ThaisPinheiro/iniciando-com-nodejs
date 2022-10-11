const http = require("http"); // padrão

http
    .createServer((request, response) => {
        response.writeHead(200, {'Content-Type': 'application/json'}); //tipo de retorno, status da requisição
        
        if(request.url === '/produto'){
            response.end(JSON.stringify({
                message: "Rota de Produto"
            }))
        }

        if(request.url === '/usuario'){
            response.end(JSON.stringify({
                message: "Rota de Usuário"
            }))
        }
        
        response.end(JSON.stringify({
            message: "Qualquer outra rota"
        }))

    })
    .listen(8080,() => console.log("Servidor está rodando na porta 8080"));