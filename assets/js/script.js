const hamburguer = document.getElementById('hamburguer');
const navLinks = document.getElementById('nav-links');

hamburguer.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


const form = document.getElementById('formulario');
const statusMsg = document.getElementById('status-msg');

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const data = new FormData(form);

  statusMsg.textContent = 'Enviando...';

  const response = await fetch(form.action, {
    method: 'POST',
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    statusMsg.textContent = 'Mensagem enviada com sucesso!';
    statusMsg.classList.remove('error');
    statusMsg.classList.add('success');
    form.reset();
  } else {
    statusMsg.textContent = 'Erro ao enviar. Tente novamente.';
    statusMsg.classList.remove('success');
    statusMsg.classList.add('error');
  }
});
