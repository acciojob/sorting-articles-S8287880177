//your JS code here. If required.
const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

function stripArticle(name) {
  return name
    .toLowerCase()
    .replace(/^(a|an|the)\s+/, '')  // remove article + ANY spaces
    .trim();
}

bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

const ul = document.getElementById('band');
ul.innerHTML = bands.map(band => `<li>${band}</li>`).join('');

