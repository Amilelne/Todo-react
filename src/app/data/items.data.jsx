var todoList = module.exports.todoList = [
    {
        "name":"swim",
        "description":"swim for an hour",
        "startAt":"2018-3-13 17:05:30",
        "endAt":"2018-3-14 17:05:30"
    },
    {
        "name":"sleep",
        "description":"have a good night",
        "startAt":"2018-3-13 22:05:30",
        "endAt":"2018-3-14 06:05:30"
    }
];
var idCounting = module.exports.idCounting = 2;

var addTodo = module.exports.addTodo = function (todo) {
    var currentId = idCounting;
    idCounting++;
    todoList[currentId] = todo;
};

var deleteTodo = module.exports.deleteTodo = function (id) {
    delete todoList[id];
};
