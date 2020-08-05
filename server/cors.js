module.exports = (req, res, next) => {
    if(req.method.toUpperCase() == 'OPTIONS') {
        res.writeHead(200, {
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
            'Access-Control-Allow-Methods': 'ANY,DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
            'Access-Control-Allow-Origin': '*'
        })
        res.end()
    } else {
        res.setHeader('Access-Control-Allow-Origin', '*')
        next()
    }
  }