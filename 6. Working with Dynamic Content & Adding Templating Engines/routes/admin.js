const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products=[]

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product',
  {docTitle:'Add Product',
  activeProduct:true,
  path:'/admin/add-product',
  formCSS:true,
  productCSS:true,
  activeAddProduct:true})
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({title:req.body.title})
  console.log(req.body);
  res.redirect('/');

});

exports.routes = router;
exports.products=products;

