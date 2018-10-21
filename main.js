document.getElementById('menuIcon').addEventListener('click', function() {
  var icon = document.getElementById('menuIcon');
  var menu = document.getElementById('menu');
  menu.classList.toggle('menuOpen');
  if (menu.classList.contains('menuOpen')) {
    icon.classList = 'fas fa-times';
  } else {
    icon.classList = 'fas fa-bars';
  }
})