chrome.runtime.sendMessage('', {
    type: 'notification',
    options: {
      title: 'Are you sure you want to make this purchase?',
      message: 'Try to keep within your budget goal!',
      iconUrl: '/procart_no_background.png',
      type: 'basic'
    }
  });