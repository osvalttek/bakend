export const isUser = (req, res, next) => {
    if (req.body.role === "admin") {
        console.log("user ok")
    } else {
        res.redirect(401, "/")
    }
    next()
}