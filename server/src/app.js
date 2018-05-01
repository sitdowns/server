const { exec } = require('child_process');
const router = require('./router')
const { SERVER, express, ODM, MONGO_DB_HOST, bodyParser, morgan, hash, STATIC_RESOURCES_PATH } = require('./rules')

require('./models') /* generate all the models */

const app = express()
ODM.connect(MONGO_DB_HOST)

app.use(express.static(STATIC_RESOURCES_PATH))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
router(app)

app.listen(SERVER.PORT, SERVER.HOST, () => {
    console.log(`Server listening on ${SERVER.HOST}:${SERVER.PORT}/`)
})
