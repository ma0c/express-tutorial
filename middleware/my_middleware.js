module.exports = function(options)
{
  return function(req, res, next)
  {
      req.custom_params = options
      next()
  }
}
