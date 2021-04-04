import {Router} from 'express'

import notes from './notes'

const router = Router()

router.get('/api', (req, res) => {
    res.json({msg: 'API Endpoit' })
})

router.use('/notes', notes)

export default router