const mongoose = require('mongoose')

const todosSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    priority: [

        {
            type: String,
            enum: [ 'Low', 'Medium', 'High']
        }
    ],
    dueDate: {
        type: Date
    },
    completed: {
        type: Boolean,
        default: false
    },
    tags: [
        {type: String}
    ]
}, {
    timestamps: true
})

const Todos = mongoose.models("Todo", todosSchema)

module.exports = Todos