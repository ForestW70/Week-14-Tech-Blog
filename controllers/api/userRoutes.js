const router = require('express').Router();
const { User } = require('../../models');

router.get('/login', async (req, res) => {
    res.render('login');
})

router.get('/redirect', (req, res) => {
    // res.redirect('/login');
    res.render('login', { msg: "Please login or create an account to continue." })
})

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
            res
                .status(404)
                .json({ message: 'Not found' });
            return;
        }
        res
            .status(200)
            .json({ userData });
        return;
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
        res.redirect('/')
    } else {
        res.status(404).end();
    }
});


router.get('/', async (req, res) => {

    res.status(200).json("BBBBBBBBB");
});

module.exports = router;
