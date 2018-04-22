import { PostClient, PhoneMessage } from "../resources/client"

export class Home {
    private _apiClient: PostClient;
    message = 'Hello World!';
    phoneNumber: number;
    textMessage: string;
    items = [];
  
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
  
    displayList() {
      if (this.items.length === 0) {
        console.log('Your registry list is empty!');
      } else {
        console.log('My Registry:');
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].completed === true ) { 
            console.log('(x)', this.items[i].itemText);
          } else {
            console.log('( )', this.items[i].itemText);
          }
        }
      }
    }

    changeItem(pos, itemText) {
      this.items[pos].itemText = itemText;
      this.displayList();
    }

    deleteItem(pos) {
      this.items.splice(pos, 1);
      this.displayList();
    }
    
    toggleCompleted(pos) {
      var item = this.items[pos];
      item.completed = !item.completed;
      this.displayList();
    }

    toggleAll() {
      var totalitems = this.items.length;
      var completeditems = 0;
    
      //Get number of completed items.
      for (let i = 0; i < totalitems; i++) {
        if (this.items[i].completed === true) {
          completeditems++;
        }
      }
      
      // Case 1: If everything's true, make everything false.
      if (completeditems === totalitems) {
        for (let i = 0; i < totalitems; i++) {
          this.items[i].completed = false;
        }
        // Case 2: Otherwise, make everything true.
      } else {
        for (var i = 0; i < totalitems; i++) {
          this.items[i].completed = true;
        }
      }
      
      this.displayList();
    }

    addItem() {
      let addnameTextInput: HTMLInputElement  = <HTMLInputElement>document.getElementById('addnameTextInput')
      let addpriceTextInput: HTMLInputElement  = <HTMLInputElement>document.getElementById('addpriceTextInput')
      let addurlTextInput: HTMLInputElement  = <HTMLInputElement>document.getElementById('addurlTextInput')
      
      this.items.push({
        name: addnameTextInput.value,
        price: addpriceTextInput.value,
        url: addurlTextInput.value,
        purchased: false
      });
      this.displayList();
      addnameTextInput.value = '';
    }
  }