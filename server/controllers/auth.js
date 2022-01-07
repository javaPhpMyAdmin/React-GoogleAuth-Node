const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client('548284117977-i6o9pkvotmfhu3mgvoj0dt2uqoel82bj.apps.googleusercontent.com')

exports.googleLogin = (req, res) => {
    console.log('LLEGO DESDE EL CLIENT');
    const { idToken } = req.body;

    console.log('TOKEN FROM CLIENT WAS LAND');

    client.verifyIdToken(
        {
            idToken,
            audience: '548284117977-i6o9pkvotmfhu3mgvoj0dt2uqoel82bj.apps.googleusercontent.com'
        }
    ).then((resp) => {
        const { email_verified, name, email } = resp.getPayload();
        if (email_verified) {
            User.findOne({ email }).exec((err, user) => {
                if (err) {
                    res.setHeader('Content-Type', 'aplication/json')
                    return res.status(400).json({
                        error: 'Something went wrong'
                    })
                } else {
                    if (user) {
                        const token = jwt.sign(
                            { _id: user.id },
                            'mysecret_key',
                            { expiresIn: '1h' }
                        )

                        const { _id, name, email } = user;
                        console.log('USER ALREADY EXISTS', { _id, name, email })
                        res.setHeader('Content-Type', 'aplication/json')
                        res.json({
                            token,
                            user: { _id, name, email }
                        })
                    } else {
                        let password = 'mypass'
                        User.create({ name, email, password })
                            .then(data => {
                                console.log('Create Data', data)

                                const token = jwt.sign(
                                    { _id: data.id },
                                    'mysecret_key',
                                    { expiresIn: '1h' }
                                )

                                const { _id, name, email } = data;

                                res.setHeader('Content-Type', 'aplication/json')
                                res.json({
                                    token,
                                    user: { _id, name, email }
                                })
                            })
                            .catch((err) => { console.log('error al crear', err) })
                    }
                }
            })
        }

    }).catch((err) => console.log('Error con el token', err.message));
}