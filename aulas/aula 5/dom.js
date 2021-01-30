var p1 = document.getElementsByTagName('p')[1] //buscar variável no HTML por meio da tag. Como tem mais de um elemento coloquei [] com a posição do que eu quero. Se for o segundo que quero seria [1] e assim por diante.

console.log(p1) //Aqui consigo ver o elemento capturado no console do chrome.

p1.style.color = "black" //mudei a cor do parágrafo sem precisar ir no css. 
 

window.document.write(p1.innerHTML) //reproduzi do html.
var test = document.querySelector('div#mensagem') //Capturei por meio do QUERY SELECTOR forma nova. 
console.log(test) // testei no console.