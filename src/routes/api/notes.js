import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.json({msg: 'Get All the Notes' })
})

router.post('/', (req, res) => {
    res.json({msg: 'Create a Note' })
})

router.get('/:id', (req, res) => {
    const {id} = req.params.id
    res.json({msg: 'Getting note ${id}' })
})


router.put('/:id', (req, res) => {
    const {id} = req.params.id
    res.json({msg: 'Updating a Note ${id}' })
})


router.delete('/:id', (req, res) => {
    const {id} = req.params.id
    res.json({msg: 'Deleting a Note #{id}' })
})

export default router
