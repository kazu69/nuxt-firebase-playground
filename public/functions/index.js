'use strict'

const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')
const app = express()

// debug
process.env.DEBUG = 'nuxt:*'

const dev = false
const config = {
    dev,
    buildDir: 'nuxt',
    build: {
      publicPath: '/assets/'
    }
}
const nuxt = new Nuxt(config)
const setHeaders = (req, res, next) => {
    res.header('no-cache', 'Set-Cookie')
    res.header('x-xss-protection', '1; mode=block')
    res.header('x-frame-options', 'DENY')
    res.header('x-content-type-options', 'nosniff')
    res.header('Cache-Control', 'max-age=120')
    next()
}

const handleRequest = (req, res, next) => {
    if (req.url === '/robots.txt') {
        next()
    }
    console.log('Request: ', req.url)
    return new Promise((resolve, reject) => {
        nuxt.render(req, res, (promise) => {
            promise.then(resolve).catch(reject);
        });
    });
}

app.use(setHeaders)
app.use(handleRequest)

exports.nuxtssr = functions.https.onRequest(app)
