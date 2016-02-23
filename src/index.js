'use strict';

var $ = require('jquery');
var bootstrp = require('bootstrap');
var angular = require('angular');
var _ = require('lodash');

angular.module('ngLpFormGenerator', [])

.controller('Ctrl', function ($scope) {
  this.title = 'Form';
  this.model = require('../models/contact.json');


  this.fields = this.model.properties;
  this.relations = this.model.relations;




  this.data = {};
  this.data.name = 'Amit Triffon';
  this.data.email = 'amit@ronin.co.il';
})

;
