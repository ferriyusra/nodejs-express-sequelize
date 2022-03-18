const {Todolist} = require('../../db/models');

module.exports = {
    getAllTodolist: async (req, res, next) => {

        try {
            const data = await Todolist.findAll({
                attributes: ['id', 'todolist']
            });

            res.status(200).json({
                code: 200,
                status: 'ok',
                message: 'get all data todolist',
                data: data
            })

        } catch (err) {
            next(err);
        }

    },
    createTodolist: async (req, res, next) => {

        try {
            const {todolist} = req.body;

            const data = await Todolist.create({
                todolist: todolist
            });

            res.status(201).json({
                code: 201,
                status: 'ok',
                message: 'success create todolist',
                data: data
            })

        } catch (err) {
            next(err);
        }

    },

    updateTodolist: async (req, res, next) => {

        try {
            const {id} = req.params;
            const {todolist} = req.body;

            const checkTodolist = await Todolist.findOne({
                where: {
                    id: id
                }
            })

            if(checkTodolist){
                const data = await checkTodolist.update({
                    todolist: todolist
                });

                res.status(200).json({
                    code: 200,
                    status: 'ok',
                    message: 'success update todolist',
                    data: data
                });

            } else {

                res.status(404).json({
                    code: 404,
                    status: 'not found',
                    message: 'todolist not found',
                    data: data
                });

            }
 

        } catch (err) {
            next(err);
        }

    },

    deleteTodolist: async (req, res, next) => {

        try {
            const {id} = req.params;

            const todolist = await Todolist.findOne({
                where: {
                    id: id
                }
            })

            if(!todolist){
              
                res.status(404).json({
                    code: 404,
                    status: 'not found',
                    message: 'todolist not found',
                    data: todolist
                });
             
            } 

            todolist.destroy();

            res.status(200).json({
                code: 200,
                status: 'ok',
                message: 'success delete todolist',
                data: todolist
            });

 

        } catch (err) {
            next(err);
        }

    },

  
}