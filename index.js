
/**
 * Expose 'text-plugin'
 */

module.exports = function(el, expr){
  el.innerHTML = this.get(expr);
  this.on('change ' + expr, function(val){
    el.innerHTML = val;
  });
};