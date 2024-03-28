# 1. Qual a finalidade do DOM (Document Object Model) ?
### R: Manipular elementos HTML, XML XHTML. O DOM permite que os desenvolvedores manipulem dinamicamente o conteúdo, a estrutura e o estilo de uma página da web usando scripts, como JavaScript.

# 2. Através do comando “document.querySelector('#my-title')” o elemento HTML será selecionado via CSS pelo nome de sua classe ou pelo nome de seu ID?

### R: elecionará o elemento HTML pelo nome de seu ID, não pelo nome de sua classe.

# 3. Qual a finalidade do comando appendChild?
# È  é adicionar um nó filho ao final da lista de filhos de um nó pai especificado.

# 4. Qual a finalidade do comando createTextNode?
### R: Criar um novo nó de texto com o conteúdo especificado.

# 5. Considere a seguinte situação: existe em seu documento HTML 05 elementos de título h3. Você deseja selecionar todos de uma só vez para aplicar, via DOM, uma ação qualquer. Qual o nome do comando utilizado para selecioná-los?
### R: document.querySelectorAll("h3")

# 6. Qual o nome do comando utilizado para selecionar, via DOM, o elemento representado pelo trecho de código abaixo?
### R:  document.getElementById("my-title");

# 7. Qual a finalidade do comando addEventListener() ?
### R: Associar um ouvinte de eventos a um elemento específico do DOM. Sua finalidade é permitir que você especifique um código (uma função) que será executado em resposta a um determinado evento ocorrendo no elemento alvo.

# 8. Qual o resultado obtido pelo trecho de código abaixo?
### R: e.preventDefault() esta impedindo o comportamento padrão do link  se você clicar no link "Acessar o site", nada acontecerá além de evitar a navegação para a URL especificada no atributo