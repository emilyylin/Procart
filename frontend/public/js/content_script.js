const button = document.createElement('button');
button.textContent = 'Warning'
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

const button2 = document.createElement('button');
button2.textContent = 'Welcome'
document.body.insertAdjacentElement('afterbegin', button2);
button2.addEventListener('click', () => {
  chrome.runtime.sendMessage('', {
    type: 'notification',
    options: {
      title: 'Welcome Back!',
      message: 'You last visited this site yesterday and made a purchase of $90.58',
      iconUrl: '/procart_no_background.png',
      type: 'basic'
    }
  });
});