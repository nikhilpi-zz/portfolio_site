var express = require('express'),
  router = express.Router(),
  Projects = require('../models/projects');
  Home = require('../models/home');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.render('index', {info: Home, proj: Projects});
});

// router.get('/projects', function (req, res, next) {
//     res.render('projects', {
//       projs: Projects,
//       section: 'projects',
//     });
// });

router.get('/projects/:slug', function (req, res, next) {
    var project = Projects[req.params.slug];
    res.render('project', {
        title: project.title,
        section: 'projects',
        project: project
    });
});





