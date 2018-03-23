const express = require('express');
const router = express.Router();
const model = require('../model/user')();

router.get('/',	(req, res) => {

	model.find({}, (err, users) => {

		if (err) throw err;
		res.render('index');
	});
});

router.post('/add', (req, res, next) => {
  let body = req.body;
  body.status = false;
  model.create(body, (err, user) => {
    if(err) throw err;
    res.redirect('/');
  });
});

module.exports = router;