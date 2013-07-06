/**
 * Expose `print`
 */

module.exports = print;

/**
 * Initialize `print`
 *
 * @param {Element} print
 * @return {String}
 */

function print(el) {
  if (1 != el.nodeType && window != el) throw Error('Expecting an element node');
  var tagName = el.tagName.toLowerCase();
  var className = el.className.replace(/\s+/g, '.');
  var id = el.id;

  if (className) className = '.' + className;
  if (id) id = '#' + id;

  return tagName + id + className;
}
