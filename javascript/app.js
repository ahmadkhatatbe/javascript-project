function navigation() {
    let icon = document.getElementById('icon')
    let navbar = document.getElementById('navbar')
    if (icon.classList.contains('fa-bars')) {
      icon.classList.remove('fa-bars')
      icon.classList.add('fa-xmark')
      navbar.style.top = '0'
    } else {
      icon.classList.remove('fa-xmark')
      icon.classList.add('fa-bars')
      navbar.style.top = '-100%'
  
    }
  }