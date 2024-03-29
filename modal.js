$(document).ready(function () {
    // Função para abrir o modal
    function openModal() {
        $('.overlay').fadeIn(); // Mostra o overlay
        $('.modal-box').css('opacity', '1').fadeIn(); // Mostra o modal
    }

    // Função para fechar o modal
    function closeModal() {
        window.location.reload(); // Esconde o modal
    }

    $('#contactForm').submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: 'https://api.staticforms.xyz/submit',
            method: 'POST',
            data: $(this).serialize(),
            success: function (response) {
                openModal();
            },
            error: function (xhr, status, error) {
                alert('Erro ao enviar formulário. Tente novamente mais tarde.');
            }
        });
    });

    // Evento de clique no botão de fechar
    $('.modal-box .close-btn').click(function () {
        closeModal();
    });

    // Evento de clique no overlay para fechar o modal
    $('.overlay').click(function () {
        closeModal();
    });
});