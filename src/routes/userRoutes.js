import mongoose from 'mongoose';
import parseBody from '../utils/parseBody';
import express from 'express';

const router = express.Router();
const User = mongoose.model('User');

router.get('/', async (req, res) => {
    const { page = 1, limit = 10 } = req.query

    const users = await User.paginate({}, {page, limit});

    return res.json(users);
});

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);

    return res.json(user);
})

router.post('/', async (req, res) => {
    console.log('aaaaaaaaaaaaaaaaaaaa');
    

    let body = parseBody(req.body);

    //TODO: encriptar password

    const user = await User.create(body).catch(err => {
        console.log(err);
        return res.send(err).status(400);
    });

    return res.json(user);
});

router.delete('/:id', async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);

    return res.json(user);
});

router.put('/:id', async (req, res) => {
    let body = parseBody(req.body);

    const user = await User.findByIdAndUpdate(req.params.id, body, { new: true });

    return res.json(user);
});

module.exports = router;
