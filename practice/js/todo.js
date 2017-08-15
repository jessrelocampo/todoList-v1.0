var todoList = {
	todos: [],

	addTodos: function(add){
		this.todos.push({
			objText: add,
			done: false
		});
	},

	editTodos: function(loc, change){
		this.todos[loc].objText = change;
	},

	deleteTodos: function(loc){
		this.todos.splice(loc, 1);
	},

	toggleDone: function(loc){
		var todo = this.todos[loc];
		todo.done = !todo.done;
	},

	toggleAll: function(){
		var totalTodos = this.todos.length
		var doneTodos = 0;
		// //if specific value was selected
		this.todos.forEach(function(todo){
			if(todo.done === true){
				doneTodos++;
			}
		});
		this.todos.forEach(function(todo) {
			//case 1 if everything true make everything false
		if (doneTodos === totalTodos){
			todo.done = false;
			//case 2 otherwise make everything true
		}else{
			todo.done = true;
		}
		});
	}
};

var handlers = {

	addTodos: function(){
		var addTodoText = document.getElementById('addTodoText');
		if (addTodoText.value){
		todoList.addTodos(addTodoText.value);
		addTodoText.value ='' ;
		view.viewTodos();
	}
	},

	editTodos: function(){
		var editTodosPosition = document.getElementById('editTodosPosition');
		var editTodosChangeText = document.getElementById('editTodosChangeText');
		todoList.editTodos(editTodosPosition.valueAsNumber, editTodosChangeText.value);
		editTodosPosition.value = '';
		editTodosChangeText.value = '';
		view.viewTodos();
	},

	deleteTodos: function(position){
		todoList.deleteTodos(position);
		view.viewTodos();
	},

	toggleDone: function() {
		var toggleDonePosition = document.getElementById('toggleDonePosition');
		todoList.toggleDone(toggleDonePosition.valueAsNumber);
		toggleDonePosition.value = '';
		view.viewTodos();
	},

	toggleAll: function(){
		todoList.toggleAll();
		view.viewTodos();
}
};

var view = {
	viewTodos: function (){
		var todosUl  = document.querySelector('ul');
		todosUl.innerHTML = '';

		todoList.todos.forEach(function(todo, position){
			var todosLi = document .createElement('li');
			var objTextDone = ' ';

			if (todo.done === true) {
				objTextDone = ' (x) ' + todo.objText;
			}else{
				objTextDone = ' ( ) ' + todo.objText;
			}

			todosLi.id = position;
			todosLi.textContent = objTextDone;
			todosLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todosLi);
		
		}, this);
	},
	createDeleteButton: function(){
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
//EVENT DELEGATION METHOD
	setUpEventListeners: function(){
		var todosUl = document.querySelector('ul');
		todosUl.addEventListener('click', function(event) {
			// get the elementthe was clicked on
			var elementClicked = event.target;
			//check if elementClicked is a delete button
			if (elementClicked.className === 'deleteButton'){
			//run handlers.deleteTodos(position)
			handlers.deleteTodos(parseInt(elementClicked.parentNode.id));
}

} );
	}
};
view.setUpEventListeners();
