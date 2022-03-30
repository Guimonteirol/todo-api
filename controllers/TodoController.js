const Todo = require('../models/TodoModel')

class ToDoController{

    static async addTodo(req, res){
        const {description} = req.body;
        const todolist = Todo({description});
        await todolist.save()
        res.status(201).redirect("/")

    
    }

    static async showTodo(req,res){
        let query = {}
        const show = await Todo.find(query).lean()
 
        res.render('home', {show})
    }

    static async updateTodo(req, res){
        const {description} = req.body;

        const search = await Todo.find({_id:_id})

        if(search == null || !search || search == ""){
            res.status(401).json({message: `parâmetro-${_id}-inexistente`});
            return
        }

        await Todo.findByIdAndUpdate(_id, {description});
        res.status(202).json({message: `registro - ${_id} - atualizado`})
    }

    static async deleteTodo(req, res){
        const {_id} = req.body;
        await Todo.findByIdAndDelete(_id)
        res.status(202).json({Todo})
    }

}

module.exports = ToDoController;