

const validateHeader= function ( req, res, next) {
    let headers = req.headers
    let appType = headers["isFreeAppUser"]
    if(!appType) {
        appType = headers["isfreeappuser"]
    }
    if(!appType) {
        return res.send({status: false, message: "A mandatory header is missing"})
    }

    //let appTypeFree = Boolean(appType)//This works on truthy/falsy
    if(appType == 'true') {
        req.appTypeFree = true
    } else {
        req.appTypeFree = false
    }

    next()
}

module.exports.validateHeader= validateHeader