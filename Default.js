window.onload = function() {

  var theme = getCookie('theme');

  if (theme) {
    switchTheme(theme);
  }

  updateThemeButtons();

}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function updateThemeButtons() {
  var theme = getCookie('theme');

  if (theme === 'dark') {
    document.getElementById('dark-theme-button').style.display = 'none';
    document.getElementById('light-theme-button').style.display = 'inline-block';
  } else {
    document.getElementById('dark-theme-button').style.display = 'inline-block';
    document.getElementById('light-theme-button').style.display = 'none';
  }
}

function switchTheme(theme) {
  if (theme === 'dark') {
    document.getElementById('light-theme').href = 'CSS/dark.css';
    document.getElementById('dark-theme').href = 'CSS/light.css';
  } else {
    document.getElementById('light-theme').href = 'CSS/light.css';
    document.getElementById('dark-theme').href = 'CSS/dark.css';
  }

  var date = new Date();
  date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
  var expires = "expires="+ date.toUTCString();
  document.cookie = "theme=" + theme + ";" + expires + ";path=/";

  updateThemeButtons();

}
