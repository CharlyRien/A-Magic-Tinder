/**
 * Generic response with error, result or nothing
 *
 * @param res response object
 * @param err [optional] error
 * @param result [optional] result data
 */
exports.computeResponse = function (res, err, result) {
    if (err) {
        res.writeHead(409, {"Content-Type": "text/plain"});
        res.write(err.message);
    } else {
        res.setHeader("Cache-Control", "no-cache");
        res.setHeader("Expires", "-1");
        res.writeHead(200, {"Content-Type": "application/json"});
        if (result != null) {
            res.write(JSON.stringify(result));
        } else {
            res.write("");
        }
    }
    res.end();
};
