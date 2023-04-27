'use strict'

//routes é um objeto
const routes = {
    '/':         '/pages/home.html',
    '/vermelho': '/pages/vermelho.html',
    '/azul':     '/pages/azul.html',
    '/verde':     '/pages/verde.html',
    '/amarelo':     '/pages/amarelo.html'


}

const route = async () => {
    //linha abaixo serve pra quando clicar nao ir pra outra pagina,porem nao muda a url
    window.event.preventDefault()

    //linha abaixo serve pra manter na msm pagina,mas mudar o conteudo dela
    window.history.pushState({}, "", window.event.target.href)
    // console.log(window.event.target.href)

    //linha abaixo pega a url do que clicamos exemplo: /vermelho, /azul
    const path = window.location.pathname
    console.log(path);

    //to falando pro fetch ir la em routes e pegar a posicao path que são alguma das paginas
    const response = await  fetch(routes[path])

    //linha abaixo pega o conteudo de cada página
    const html = await response.text()

    // console.log(html);

    //essa linha faz manter o header e mudar somente o conteudo
    document.getElementById('root').innerHTML = html



}


window.route = route