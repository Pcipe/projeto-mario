const botaoTrailer = document.querySelector('.botao-trailer');
const modal = document.querySelector('.modal')
const fecharModal = document.querySelector('.fechar-modal')
const video = document.getElementById('video')
const linkVideo = video.src

function alternarModal (){
    modal.classList.toggle('aberto')
}
botaoTrailer.addEventListener('click', () => {
    video.setAttribute('src', linkVideo)
    alternarModal()
})

fecharModal.addEventListener ('click', () =>{
    alternarModal()
    video.setAttribute('src', '')
})



