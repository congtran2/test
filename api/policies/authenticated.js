module.exports = function(req, res, next) {
  console.log('Authenticated');
  return next();
}