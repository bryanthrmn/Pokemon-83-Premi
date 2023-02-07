if (!navigator.cookieEnabled) {
    window.location.replace('NoCookies/index.html');
  }
  
if (!document.cookie.includes('cookiesAccept=true')) {
    window.location.replace('Cookies.html');
  }  