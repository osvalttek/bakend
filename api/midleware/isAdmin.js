

const isAdmin = (req, res, next) => {
    const { role } = req.user
    if (role === "admin") {
        next()
    } else {

        res.status(401).send({ success: false, message: "Unauthorized" })
    }
}

export default isAdmin