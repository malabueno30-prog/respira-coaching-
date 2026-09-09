function renderPosts(containerId, max) {
  var container = document.getElementById(containerId);
  if (!container || !window.SITE_ARTICLES) return;
  var items = max ? window.SITE_ARTICLES.slice(0, max) : window.SITE_ARTICLES;
  container.innerHTML = items.map(function (a) {
    return '<a class="post-row" href="posts/' + a.slug + '">' +
      '<span class="date">' + (a.date || '') + '</span>' +
      '<div><h3>' + a.title + '</h3><p>' + a.excerpt + '</p></div>' +
      '</a>';
  }).join('');
}

function renderArticleCards(containerId) {
  var container = document.getElementById(containerId);
  if (!container || !window.SITE_ARTICLES) return;
  container.innerHTML = window.SITE_ARTICLES.map(function (a) {
    return '<article class="article-card">' +
      '<div><h3>' + a.title + '</h3><p>' + a.excerpt + '</p></div>' +
      '<a href="posts/' + a.slug + '" class="article-link">Leer artículo completo →</a>' +
      '</article>';
  }).join('');
}
