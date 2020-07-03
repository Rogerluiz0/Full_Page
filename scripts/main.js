window.addEventListener( 'load' , () => {
	const elementos = document.querySelectorAll( '[data-animation]' )
	const animacaoClass = 'animacao'

	function animaScroll () {
		const topoPaginaNaJanela = window.pageYOffset + ( ( window.innerHeight * 3 ) / 4 )
		elementos.forEach( elemento => {
			if ( topoPaginaNaJanela > elemento.offsetTop ) {
				elemento.classList.add( animacaoClass )
			} else {
				elemento.classList.remove( animacaoClass )
			}
		} )
	}

	if ( elementos.length ) {
		window.addEventListener( 'scroll', () => {
			animaScroll()
		} )
	}
} )


function cliqueModal ( img ) {
	const janelaModal = document.getElementById( 'janelaModal' )
	const imgModal = document.getElementById( 'imgModal' )
	const textoModal = document.getElementById( 'textoModal' )
	const btnFechar = document.getElementById( 'btnFechar' )

	janelaModal.classList.remove( 'esconderJanelaModal' )
	janelaModal.classList.add( 'mostrarJanelaModal' )

	imgModal.src = img.src
	imgModal.alt = img.alt
	textoModal.innerHTML = img.alt

	btnFechar.onclick = () => {
		janelaModal.classList.add( 'esconderJanelaModal' )
		janelaModal.classList.remove( 'mostrarJanelaModal' )
	}
}