var express = require('express');
var router = express.Router();
const hbs = require('hbs');
const expressHbs = require('express-hbs');
const ejs = require('ejs');
const exhbs = require('express-handlebars')

/* GET 'not-found' page. */
router.get('/notFound', function(req, res, next) {
  res.render('notFound.hbs', { title: '!!!אופס משהו השתבש' });
});

module.exports = router;