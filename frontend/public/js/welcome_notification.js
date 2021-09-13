chrome.runtime.sendMessage('', {
    type: 'notification',
    options: {
      title: 'Welcome Back!',
      message: 'You last visited this site yesterday and made a purchase of $90.58',
      iconUrl: '/procart_no_background.png',
      type: 'basic'
    }
  });