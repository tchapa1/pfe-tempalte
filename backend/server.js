const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
// Connecting with mongo db
mongoose
  .connect('mongodb://127.0.0.1:27017/projetmanagement')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })
// Setting up port with express js


const affectationgroupeRoute = require('../backend/routes/affectationgroupe.route')

const useruserRoute = require('../backend/routes/user.route')

const adminabsenceRoute = require('../backend/routes/adminabsence.route')
const adminavancementprojetRoute = require('../backend/routes/adminavancementprojet.route')
const adminavancementtacheRoute = require('../backend/routes/adminavancementtache.route')
const admincongeRoute = require('../backend/routes/adminconge.route')
const admingroupeRoute = require('../backend/routes/admingroupe.route')
const adminmessageRoute = require('../backend/routes/adminmessage.route')
const adminnotificationRoute = require('../backend/routes/adminnotification.route')
const adminpostRoute = require('../backend/routes/adminpost.route')
const adminprofileRoute = require('../backend/routes/adminprofile.route')
const adminprojetRoute = require('../backend/routes/adminprojet.route')
const admintacheRoute = require('../backend/routes/admintache.route')
const adminuserRoute = require('../backend/routes/adminuser.route')
const admincalandarRoute = require('../backend/routes/admincalandar.route')


const chefabsenceRoute = require('../backend/routes/chefabsence.route')
const chefavancementprojetRoute = require('../backend/routes/chefavancementprojet.route')
const chefavancementtacheRoute = require('../backend/routes/chefavancementtache.route')
const chefcongeRoute = require('../backend/routes/chefconge.route')
const chefgroupeRoute = require('../backend/routes/chefgroupe.route')
const chefmessageRoute = require('../backend/routes/chefmessage.route')
const chefnotificationRoute = require('../backend/routes/chefnotification.route')
const chefpostRoute = require('../backend/routes/chefpost.route')
const chefprofileRoute = require('../backend/routes/chefprofile.route')
const chefprojetRoute = require('../backend/routes/chefprojet.route')
const cheftacheRoute = require('../backend/routes/cheftache.route')
const chefuserRoute = require('../backend/routes/chefuser.route')


const coordinateurabsenceRoute = require('../backend/routes/coordinateurabsence.route')
const coordinateuravancementprojetRoute = require('../backend/routes/coordinateuravancementprojet.route')
const coordinateuravancementtacheRoute = require('../backend/routes/coordinateuravancementtache.route')
const coordinateurcongeRoute = require('../backend/routes/coordinateurconge.route')
const coordinateurgroupeRoute = require('../backend/routes/coordinateurgroupe.route')
const coordinateurmessageRoute = require('../backend/routes/coordinateurmessage.route')
const coordinateurnotificationRoute = require('../backend/routes/coordinateurnotification.route')
const coordinateurpostRoute = require('../backend/routes/coordinateurpost.route')
const coordinateurprofileRoute = require('../backend/routes/coordinateurprofile.route')
const coordinateurprojetRoute = require('../backend/routes/coordinateurprojet.route')
const coordinateurtacheRoute = require('../backend/routes/coordinateurtache.route')
const coordinateuruserRoute = require('../backend/routes/coordinateuruser.route')



const dgabsenceRoute = require('../backend/routes/dgabsence.route')
const dgavancementprojetRoute = require('../backend/routes/dgavancementprojet.route')
const dgavancementtacheRoute = require('../backend/routes/dgavancementtache.route')
const dgcongeRoute = require('../backend/routes/dgconge.route')
const dggroupeRoute = require('../backend/routes/dggroupe.route')
const dgmessageRoute = require('../backend/routes/dgmessage.route')
const dgnotificationRoute = require('../backend/routes/dgnotification.route')
const dgpostRoute = require('../backend/routes/dgpost.route')
const dgprofileRoute = require('../backend/routes/dgprofile.route')
const dgprojetRoute = require('../backend/routes/dgprojet.route')
const dgtacheRoute = require('../backend/routes/dgtache.route')
const dguserRoute = require('../backend/routes/dguser.route')


const modeleurabsenceRoute = require('../backend/routes/modeleurabsence.route')
const modeleuravancementprojetRoute = require('../backend/routes/modeleuravancementprojet.route')
const modeleuravancementtacheRoute = require('../backend/routes/modeleuravancementtache.route')
const modeleurcongeRoute = require('../backend/routes/modeleurconge.route')
const modeleurgroupeRoute = require('../backend/routes/modeleurgroupe.route')
const modeleurmessageRoute = require('../backend/routes/modeleurmessage.route')
const modeleurnotificationRoute = require('../backend/routes/modeleurnotification.route')
const modeleurpostRoute = require('../backend/routes/modeleurpost.route')
const modeleurprofileRoute = require('../backend/routes/modeleurprofile.route')
const modeleurprojetRoute = require('../backend/routes/modeleurprojet.route')
const modeleurtacheRoute = require('../backend/routes/modeleurtache.route')
const modeleuruserRoute = require('../backend/routes/modeleuruser.route')



const rhabsenceRoute = require('../backend/routes/rhabsence.route')
const rhavancementprojetRoute = require('../backend/routes/rhavancementprojet.route')
const rhavancementtacheRoute = require('../backend/routes/rhavancementtache.route')
const rhcongeRoute = require('../backend/routes/rhconge.route')
const rhgroupeRoute = require('../backend/routes/rhgroupe.route')
const rhmessageRoute = require('../backend/routes/rhmessage.route')
const rhnotificationRoute = require('../backend/routes/rhnotification.route')
const rhpostRoute = require('../backend/routes/rhpost.route')
const rhprofileRoute = require('../backend/routes/rhprofile.route')
const rhprojetRoute = require('../backend/routes/rhprojet.route')
const rhtacheRoute = require('../backend/routes/rhtache.route')
const rhuserRoute = require('../backend/routes/rhuser.route')






const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist/mean-stack-crud-app')))
app.use('/', express.static(path.join(__dirname, 'dist/mean-stack-crud-app')))
app.use('/uploads', express.static('uploads'));






app.use('/apiaffectationgroupe', affectationgroupeRoute)




app.use('/adminapiabsence', adminabsenceRoute)
app.use('/adminapiavancementprojet', adminavancementprojetRoute)
app.use('/adminapiavancementtache', adminavancementtacheRoute)
app.use('/adminapiconge', admincongeRoute)
app.use('/adminapigroupe', admingroupeRoute)
app.use('/adminapimessage', adminmessageRoute)
app.use('/adminapinotification', adminnotificationRoute)
app.use('/adminapipost', adminpostRoute)
app.use('/adminapiprofile', adminprofileRoute)
app.use('/adminapiprojet', adminprojetRoute)
app.use('/adminapitache', admintacheRoute)
app.use('/adminapiuser', adminuserRoute)
app.use('/adminapicalandar', admincalandarRoute)

/////////////////////////////////////////

app.use('/modeleurapiabsence', modeleurabsenceRoute)
app.use('/modeleurapiavancementprojet', modeleuravancementprojetRoute)
app.use('/modeleurapiavancementtache', modeleuravancementtacheRoute)
app.use('/modeleurapiconge', modeleurcongeRoute)
app.use('/modeleurapigroupe', modeleurgroupeRoute)
app.use('/modeleurapimessage', modeleurmessageRoute)
app.use('/modeleurapinotification', modeleurnotificationRoute)
app.use('/modeleurapipost', modeleurpostRoute)
app.use('/modeleurapiprofile', modeleurprofileRoute)
app.use('/modeleurapiprojet', modeleurprojetRoute)
app.use('/modeleurapitache', modeleurtacheRoute)
app.use('/modeleurapiuser', modeleuruserRoute)


app.use('/coordinateurapiabsence', coordinateurabsenceRoute)
app.use('/coordinateurapiavancementprojet', coordinateuravancementprojetRoute)
app.use('/coordinateurapiavancementtache', coordinateuravancementtacheRoute)
app.use('/coordinateurapiconge', coordinateurcongeRoute)
app.use('/coordinateurapigroupe', coordinateurgroupeRoute)
app.use('/coordinateurapimessage', coordinateurmessageRoute)
app.use('/coordinateurapinotification', coordinateurnotificationRoute)
app.use('/coordinateurapipost', coordinateurpostRoute)
app.use('/coordinateurapiprofile', coordinateurprofileRoute)
app.use('/coordinateurapiprojet', coordinateurprojetRoute)
app.use('/coordinateurapitache', coordinateurtacheRoute)
app.use('/coordinateurapiuser', coordinateuruserRoute)



app.use('/rhapiabsence', rhabsenceRoute)
app.use('/rhapiavancementprojet', rhavancementprojetRoute)
app.use('/rhapiavancementtache', rhavancementtacheRoute)
app.use('/rhapiconge', rhcongeRoute)
app.use('/rhapigroupe', rhgroupeRoute)
app.use('/rhapimessage', rhmessageRoute)
app.use('/rhapinotification', rhnotificationRoute)
app.use('/rhapipost', rhpostRoute)
app.use('/rhapiprofile', rhprofileRoute)
app.use('/rhapiprojet', rhprojetRoute)
app.use('/rhapitache', rhtacheRoute)
app.use('/rhapiuser', rhuserRoute)


app.use('/dgapiabsence', dgabsenceRoute)
app.use('/dgapiavancementprojet', dgavancementprojetRoute)
app.use('/dgapiavancementtache', dgavancementtacheRoute)
app.use('/dgapiconge', dgcongeRoute)
app.use('/dgapigroupe', dggroupeRoute)
app.use('/dgapimessage', dgmessageRoute)
app.use('/dgapinotification', dgnotificationRoute)
app.use('/dgapipost', dgpostRoute)
app.use('/dgapiprofile', dgprofileRoute)
app.use('/dgapiprojet', dgprojetRoute)
app.use('/dgapitache', dgtacheRoute)
app.use('/dgapiuser', dguserRoute)




app.use('/chefapiabsence', chefabsenceRoute)
app.use('/chefapiavancementprojet', chefavancementprojetRoute)
app.use('/chefapiavancementtache', chefavancementtacheRoute)
app.use('/chefapiconge', chefcongeRoute)
app.use('/chefapigroupe', chefgroupeRoute)
app.use('/chefapimessage', chefmessageRoute)
app.use('/chefapinotification', chefnotificationRoute)
app.use('/chefapipost', chefpostRoute)
app.use('/chefapiprofile', chefprofileRoute)
app.use('/chefapiprojet', chefprojetRoute)
app.use('/chefapitache', cheftacheRoute)
app.use('/chefapiuser', chefuserRoute)


app.use('/userapiuser', useruserRoute)



// Create port
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404))
})
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message) // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500 // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message) // All HTTP requests must have a response, so let's send back an error with its status code and message
})