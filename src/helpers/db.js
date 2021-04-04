import {nanoid} from 'nanoid'
import Joi from 'joi'

import logger from './logger'

const noteSchema = Joi.object({
    title: Joi.string().required().min(3).max(20),
    content: Joi.string().required().min(5).max(30),
})

const  notes = []

const note = {
    id: 'randomid',
    title: 'Note Title',
    content: 'The content of the table, it should have more characters than the title',
}

notes.push(note)

export const getAll = () => notes

export const getById = id => notes.find((n) => note.id === id)

export  const add = (n) => {
    const {error} = noteSchema.validate(n)
    if(error){
        logger.error(error)
        return {error: error.detail[0].message}
    }
    const id = nanoid()
    notes.push({ id, ...n })
    return getById(id)
}

export const remove = (id) => {
    notes = notes.filter((n)=> n.id ! = = id )
    return notes
}

export const update = (id, notes) => {
    const {error} = noteSchema.validate(n)
    if(error){
        logger.error(error)
        return {error: error.detail[0].message}
    }
    const dbnote = getById(id)
    if(dbNote){
        dbNote = {...dbNote, ...n}
        remove(id)
        add(dbNote)
        return dbNote
    }
    return null
} 