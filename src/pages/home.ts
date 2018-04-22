import { PostClient, PhoneMessage } from "../resources/client"

export class Home {
    private _apiClient: PostClient;
    message = 'Hello World!';
    phoneNumber: number;
    textMessage: string;
    todos = [];
  
    constructor() {
      this._apiClient = new PostClient('http://localhost:9001');
    }

    testTexting() {
      const phoneMessage = new PhoneMessage({
        phone_number: this.phoneNumber,
        message: this.textMessage
      });
      this._apiClient.sms(phoneMessage);
    }
  
    displayTodos() {
      if (this.todos.length === 0) {
        console.log('Your registry list is empty!');
      } else {
        console.log('My Registry:');
        for (let i = 0; i < this.todos.length; i++) {
          if (this.todos[i].completed === true ) { 
            console.log('(x)', this.todos[i].todoText);
          } else {
            console.log('( )', this.todos[i].todoText);
          }
        }
      }
    }

    changeTodo(pos, todoText) {
      this.todos[pos].todoText = todoText;
      this.displayTodos();
    }

    deleteTodo(pos) {
      this.todos.splice(pos, 1);
      this.displayTodos();
    }
    
    toggleCompleted(pos) {
      var todo = this.todos[pos];
      todo.completed = !todo.completed;
      this.displayTodos();
    }

    toggleAll() {
      var totalTodos = this.todos.length;
      var completedTodos = 0;
    
      //Get number of completed todos.
      for (let i = 0; i < totalTodos; i++) {
        if (this.todos[i].completed === true) {
          completedTodos++;
        }
      }
      
      // Case 1: If everything's true, make everything false.
      if (completedTodos === totalTodos) {
        for (let i = 0; i < totalTodos; i++) {
          this.todos[i].completed = false;
        }
        // Case 2: Otherwise, make everything true.
      } else {
        for (var i = 0; i < totalTodos; i++) {
          this.todos[i].completed = true;
        }
      }
      
      this.displayTodos();
    }

    addTodo() {
      let addTodoTextInput: HTMLInputElement  = <HTMLInputElement>document.getElementById('addTodoTextInput')
      this.todos.push({
        todoText: addTodoTextInput.value,
        completed: false
      });
      this.displayTodos();
      addTodoTextInput.value = '';
    }
  }