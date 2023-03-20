function pegacor(){
    var body = window.document.body;
    var campo = document.querySelector('#pegaCor');
    var valorcampo = campo.value.toLowerCase();
    if (valorcampo == 'verde'){
        body.style.background ='green'

    }
    if (valorcampo == 'azul'){
        body.style.background ='blue'

    }
    if (valorcampo == 'amarelo'){
        body.style.background ='yellow'

    }
    if (valorcampo == 'vermelho'){
        body.style.background ='red'

    }
    if (valorcampo == 'rosa'){
        body.style.background ='pink'

    }
    if (valorcampo == 'roxo'){
        body.style.background ='purple'

    }
    if (valorcampo == 'morrom'){
        body.style.background ='brown'

    }
    if (valorcampo == 'laranja'){
        body.style.background ='orange'

    }
    if (valorcampo == 'cinza'){
        body.style.background ='grey'

    }
    if (valorcampo == 'preto'){
        body.style.background ='black'

    }
    if (valorcampo == 'branco'){
        body.style.background ='white'

    }
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallButton();
});

function showInstallButton() {
  const installButton = document.querySelector('#install-button');
  installButton.style.display = 'block';
  installButton.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou a instalação');
      } else {
        console.log('Usuário rejeitou a instalação');
      }
      deferredPrompt = null;
    });
  });
}
  
