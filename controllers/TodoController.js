const Todo = require('../models/TodoModel')

class ToDoController{

    static async addTodo(req, res){
        let priority = false;
        let prioritymax = false;
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

        if( urgency === "Prioridade"){
            priority = true;
        }
        else if( urgency === "Urgente"){
            prioritymax = true
        }

        const todolist = Todo({description, title, urgency, dataFormatada, priority,prioritymax});
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