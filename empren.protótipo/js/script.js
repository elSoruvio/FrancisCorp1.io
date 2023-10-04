window.addEventListener('load', () => {
  // Quando a página estiver totalmente carregada, oculte a animação de carregamento
  const loaderWrapper = document.querySelector('.loader-wrapper');
  loaderWrapper.style.display = 'none';
});


// Simule um banco de dados de usuários com credenciais

const users = [
    { username: "Rodney", password: "12345" },
    { username: "Sávio", password: "34214" },
    // Adicione mais usuários conforme necessário
  ];
  
  function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar se o usuário e senha correspondem a um usuário no banco de dados
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
        // Login bem-sucedido, redirecionar para a página "home_page.html"
        window.location.href = "file:///C:/Users/ssxx2/OneDrive/%C3%81rea%20de%20Trabalho/Cear%C3%A1%20Cient%C3%ADfico/home_page.html"; // Substitua 'home_page.html' pelo caminho correto da sua página
        return true; // Permitir o envio do formulário
    } else {
        // Exibir mensagem de erro
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "Nome de usuário ou senha incorretos.";
        return false; // Impedir o envio do formulário
    }
}

  