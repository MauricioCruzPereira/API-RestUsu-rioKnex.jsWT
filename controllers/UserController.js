var User = require("../models/User")

class UserController {
    async index(req, res) {

    }

    async create(req, res) {
        var { email, name, password } = req.body
        if (email == undefined) {
            res.status(400)
            res.json({ err: "Email é inválido!" })
            //encerrar o processo
            return;
        }

        if (name == undefined) {
            res.status(400)
            res.json({ err: "name é inválido!" })
            return;
        }

        if (password == undefined) {
            res.status(400)
            res.json({ err: "Senha é inválida!" })
            return;
        }

        var emailExists = await User.findEmail(email)

        if (emailExists) {
            res.status(406)
            res.json({ err: "O email já está cadastrado!" })
            return
        }

        await User.new(email, password, name)

        res.status(200)
        res.send("Pegando o corpo da requisição")
    }
}

module.exports = new UserController();