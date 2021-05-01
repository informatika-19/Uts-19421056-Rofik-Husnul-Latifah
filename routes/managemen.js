const router = require('express').Router()
const managemenController = require('../controller/managemen')

router.post('/insert', (req, res) => {
    managemenController.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getall', (req, res) => {
    managemenController.showALLData()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
router.get('/getbyid/:id', (req, res) => {
    managemenController.showALLDataById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/update/:id', (req, res) => {
    managemenController.update(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res) => {
    managemenController.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
module.exports = router