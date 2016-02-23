'use strict';

var $ = require('jquery');
var bootstrp = require('bootstrap');
var angular = require('angular');

angular.module('ngLpFormGenerator', [])

.controller('Ctrl', function ($scope) {
  this.title = 'Form';
  this.model = require('../models/contact.json');

  this.data = {};
  this.data.name = 'Amit Triffon';
  this.data.email = 'amit@ronin.co.il';
})

;
