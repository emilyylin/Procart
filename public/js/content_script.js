console.log('Greet bot!');

const button = document.createElement('button');
button.textContent = 'Click me for a Notif!'
document.body.insertAdjacentElement('afterbegin', button);
button.addEventListener('click', () => {
  chrome.runtime.sendMessage('', {
    type: 'notification',
    options: {
      title: 'Are you sure you want to make this purchase?',
      message: 'Try to keep within your budget goal!',
      iconUrl: '/procart_no_background.png',
      type: 'basic'
    }
  });
});