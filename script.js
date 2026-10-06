// Project filters: each <article class="project"> lists its tags in data-tags.
(function () {
  var buttons = document.querySelectorAll('.filter');
  var projects = document.querySelectorAll('.project');
  var countEl = document.getElementById('project-count');
  var noResults = document.querySelector('.no-results');

  function applyFilter(filter) {
    var shown = 0;
    projects.forEach(function (p) {
      var tags = (p.getAttribute('data-tags') || '').split(/\s+/);
      var match = filter === 'all' || tags.indexOf(filter) !== -1;
      p.hidden = !match;
      if (match) shown += 1;
    });
    if (countEl) countEl.textContent = shown;
    if (noResults) noResults.hidden = shown !== 0;
    buttons.forEach(function (b) {
      var on = b.getAttribute('data-filter') === filter;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { applyFilter(b.getAttribute('data-filter')); });
  });

  // Total count in "Showing X of Y"
  var total = document.querySelector('.filter-count');
  if (total) total.lastChild.textContent = ' of ' + projects.length;

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
