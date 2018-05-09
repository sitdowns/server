const SERVER = {
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 54321
}

const express = require('express')
const ODM = require('mongoose')
const Schema = ODM.Schema
const bodyParser = require('body-parser')
const morgan = require('morgan')
const localMiddleware = require('./app.middleware')

const MONGO_DB_HOST = process.env.MONGO_DB_HOST || 'mongodb://localhost/sitdowns'
const STATIC_RESOURCES_PATH = process.env.STATIC_RESOURCES_PATH || '../../static'

const DB = {
    Models: {},
    Schemas: {}
}

// const hash = {
//     rounds: 31,
//     minor: 'b',
//     lib: require('bcrypt')
// }
// const session = {
//     lib: require('express-session'),
//     SECRET: process.env.SESSION_SECRET || 'huhwotlol?'
// }
// const connect = {
//     lib: undefined,
//     flash: require('connect-flash')
// }
// const cookieParser = require('cookie-parser')
// const passport = require('passport')
// const passportLocal = require('passport-local')

const toexport = {
    Schema,
    morgan,
    express,
    bodyParser,
    localMiddleware,
    ODM,
    SERVER,
    MONGO_DB_HOST,
    STATIC_RESOURCES_PATH,
    DB
    // hash,
    // session,
    // cookieParser,
    // connect,
    // passport,
    // passportLocal
}

module.exports = toexport
