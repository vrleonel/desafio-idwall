# Desafio IDwall - Frontend

<img src="https://github.com/idwall/desafios-iddog/blob/master/frontend/media/id-dog.gif?raw=true" />

## Objetivos do desafio

Com este desafio, esperamos aprender os seguintes pontos sobre seu trabalho:

* Como é seu estilo de trabalho e código
* Como é sua organização para o projeto
* Qual é o seu estágio atual de conhecimento sobre as ferramentas requeridas

## Stack sugerida

* React
* Testes
* Linter

## O que é esperado do projeto

A entrega está baseada em 3 pilares, esperamos que você cumpra os requisitos funcionais descritos abaixo, escreva um Readme falando sobre o seu projeto com instruções para execução e escreva testes unitários.

Você pode utilizar os plugins e packages que achar necessários para a realização do desafio.
Sinta-se livre, também, para adicionar funcionalidades à aplicação.

## Instruções

Esperamos que você crie uma aplicação que capture os dados da [API do IDdog](https://api-iddog.idwall.co), e apresente numa interface cumprindo os itens abaixo.
**Dica:** Utilize o GIF da introdução como inspiração para as interações e etapas do desafio. Mas não precisa aplicar o mesmo estilo, sinta-se livre para criar como quiser.

### Página de Signup

* Crie uma página `/signup` com um campo de email, e autentique o usuário postando apenas seu email no [endpoint de autenticação](https://api-iddog.idwall.co/signup).
* A chamada na API retornará um `token` JWT, que deverá ser armazenado para ser utilizada nas chamadas seguintes.
* Após receber e armazenar o `token`, redirecione para a página de `/feed`. 
* A página de `/signup/` é a única página de acesso público. As demais rotas são todas privadas e requerem o envio do token [conforme a documentação da API](https://github.com/idwall/desafios-iddog)

### Página de Feed

* No carregamento inicial da página de `/feed`, deverá ser feita uma chamada no [endpoint do feed](https://api-iddog.idwall.co/feed).
* A página de `/feed` deverá ter um menu com quatro rotas - `husky`, `labrador`, `hound` e `pug`.
* Cada rota, ao ser clicada, deve realizar uma chamada no [endpoint do feed](https://api-iddog.idwall.co/feed), passando a respectiva `category`. Quando não especificada, a `category` default é `husky`.

### Página de Foto

* Ao clicar em uma foto, a URL da página deve ser atualizada para `/feed?category=X&id=Y`, sendo `id` o id da imagem recebido nas requisições anteriores.
* A foto deverá ser ampliada e destacada dos demais itens da página, com um overlay. 

## Deploy

* Publique sua aplicação ([now](https://zeit.co/now) / [heroku](https://www.heroku.com/) / [netlify](https://www.netlify.com/)).
* Publique seu código no seu perfil no Github.
* Não faça um `fork` deste repositório, nem mande `pull requests` para o mesmo. 
