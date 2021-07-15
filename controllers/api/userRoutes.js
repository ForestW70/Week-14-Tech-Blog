const router = require('express').Router();
const { User } = require('../../models');

// renders login page.
router.get('/login', async (req, res) => {
    res.render('login');
})

// login page render triggered by the with auth function. custom message.
router.get('/redirect', (req, res) => {
    res.render('login', { msg: "Please login or create an account to continue." })
})

// create a login request. checks if user exists, then checks password to validate.
// if sucessful, set some session variables, then redirect to homepage.
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

        if (!userData) {
            res.status(400).json(
                { message: 'Incorrect information, please try again' }
            );
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json(
                { message: 'Incorrect information, please try again' }
            );
            return;
        }

        const user = userData.get({ plain: true })

        if (!req.session.initialised) {
            req.session.initialised = true;
            req.session.user_id = user.id;
            req.session.username = user.username;
            req.session.logged_in = true;
        }
        res.status(200)
        res.render('homepage', { username: user.username, logged_in: true });

    } catch (err) {
        res.status(400).json(":(");
    }
});

// create a new user. 
router.post('/add', async (req, res) => {
    try {
        const userData = await User.create(req.body);


        if (!req.session.initialised) {
            req.session.initialised = true;
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;
        }

        res.status(200)
        res.render('homepage', { username: req.session.username, logged_in: true });

    } catch (err) {
        res.status(400).json(err);
    }
});

// checks if username exists. (used in create user function).
router.get('/:username', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.params.username,
            },
            attributes: {
                exclude: ['password']
            }
        });

        if (!userData) {
            res.status(404).json({ message: 'Not found' });
            return;
        }
        res.status(200).json({ userData });
        return;
    } catch (err) {
        res.status(400).json(err);
    }
});

// logs out and destroys current session.
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(200).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
