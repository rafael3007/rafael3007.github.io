const Profile = require('../models/Profile')

module.exports = {
    async index(req, res) {
        return res.render( "profile", {profile : await Profile.get()})
    },
    async update(req, res) {  
        await Profile.update({
            name: req.body.name,
            avatar: req.body.avatar
        }) 
        return res.redirect('/profile')
    },
} 