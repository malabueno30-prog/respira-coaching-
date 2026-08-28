document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Label sync for breath ring (inhala / exhala)
  var label = document.querySelector('.breath-label');
  if (label) {
    var phase = true;
    label.textContent = 'Inhala';
    setInterval(function () {
      phase = !phase;
      label.textContent = phase ? 'Inhala' : 'Exhala';
    }, 4000);
  }
});
