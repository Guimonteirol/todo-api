const Todo = require('../models/TodoModel')

class ToDoController{

    static async addTodo(req, res){
        const dataAtual = new Date();
        const dataFormatada = dataAtual.toLocaleDateString(
            'pt-BR',
            {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }
        )
        const {description, title, urgency} = req.body;
        const todolist = Todo({description, title, urgency, dataFormatada});
        await todolist.save()
        res.status(201).redirect("/")
    }

    static async addTasksTodo(req, res){
        res.render('add')
    }

    static async showTodo(req,res){
        let query = {}
        const show = await Todo.find(query).lean()
        res.render('home', {show})
    }

    static async editTodo(req, res){
        const { _id } = req.body;
        const todo = await Todo.findById(_id).lean();
        console.log({todo})
        res.render('edit', {todo})
    }

    static async updateTodo(req, res){
        const {_id, title, description, urgency} = req.body;
      
        await Todo.findByIdAndUpdate(_id, {title, description, urgency});
       
        res.status(201).redirect("/")
    }

    static async deleteTodo(req, res){
        const {_id} = req.body;
        await Todo.findByIdAndDelete(_id)
        res.status(201).redirect("/")
    }

}

module.exports = ToDoController;