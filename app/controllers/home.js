var express = require('express'),
  router = express.Router(),
  Projects = require('../models/projects');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.render('index', {
      title: 'Generator-Express MVC',
    });
});

router.get('/projects/:slug', function (req, res, next) {
    var project = Projects[req.params.slug];
    res.render('project', {
        title: project.title,
        section: 'projects',
        project: project
    });
});





