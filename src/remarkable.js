var Remarkable = require('remarkable')
var md = new Remarkable({
  breaks: false,
  html: true
});

module.exports = function(markdown) {
  markdown = (markdown || '').toString();
  return md.render(markdown);
};