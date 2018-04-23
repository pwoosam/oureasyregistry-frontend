import { GetClient, PutClient, CreateItemModel, InsertRowModel } from './../resources/client';
import { PostClient, PhoneMessageModel, ItemModel } from "../resources/client"

export class Home {
    private _postClient: PostClient;
    private _getClient: GetClient;
    private _putClient: PutClient;
    message = 'Hello World!';
    phoneNumber: number;
    textMessage: string;
    items: ItemModel[] = [];
  
    constructor() {
      this._postClient = new PostClient('http://localhost:9001');
      this._putClient = new PutClient('http://localhost:9001');
      this._getClient = new GetClient('http://localhost:9001');
    }

    attached() {
      this._getClient.db('').then(results => {
        results.forEach(result => {
          if (this.items.findIndex(val => {
            if (val.name === result.name) {
              return true;
            } else {
              return false;
            }
          })) {
            this.items.push(result);
          }
        })
      })
    }

    testTexting(messageOverride?: string) {
      const phoneMessageModel = new PhoneMessageModel({
        phone_number: this.phoneNumber,
        message: messageOverride? messageOverride : this.textMessage
      });
      this._postClient.sms(phoneMessageModel);
    }
  
    // displayList() {
    //   if (this.items.length === 0) {
    //     console.log('Your registry list is empty!');
    //   } else {
    //     console.log('My Registry:');
    //     for (let i = 0; i < this.items.length; i++) {
    //       if (this.items[i].completed === true ) { 
    //         console.log('(x)', this.items[i].itemText);
    //       } else {
    //         console.log('( )', this.items[i].itemText);
    //       }
    //     }
    //   }
    // }

    // changeItem(pos, itemText) {
    //   this.items[pos].itemText = itemText;
    //   this.displayList();
    // }

    // deleteItem(pos) {
    //   this.items.splice(pos, 1);
    //   this.displayList();
    // }
    
    // toggleCompleted(pos) {
    //   var item = this.items[pos];
    //   item.completed = !item.completed;
    //   this.displayList();
    // }

    // toggleAll() {
    //   var totalitems = this.items.length;
    //   var completeditems = 0;
    
    //   //Get number of completed items.
    //   for (let i = 0; i < totalitems; i++) {
    //     if (this.items[i].completed === true) {
    //       completeditems++;
    //     }
    //   }
      
    //   // Case 1: If everything's true, make everything false.
    //   if (completeditems === totalitems) {
    //     for (let i = 0; i < totalitems; i++) {
    //       this.items[i].completed = false;
    //     }
    //     // Case 2: Otherwise, make everything true.
    //   } else {
    //     for (var i = 0; i < totalitems; i++) {
    //       this.items[i].completed = true;
    //     }
    //   }
      
    //   this.displayList();
    // }

    addItem() {
      let addnameTextInput: HTMLInputElement  = <HTMLInputElement>document.getElementById('addNameTextInput')
      let addpriceTextInput: HTMLInputElement  = <HTMLInputElement>document.getElementById('addPriceTextInput')
      let addurlTextInput: HTMLInputElement  = <HTMLInputElement>document.getElementById('addUrlTextInput')
      
      const item = new ItemModel({
        name: addnameTextInput.value,
        price: Number.parseFloat(addpriceTextInput.value),
        url: addurlTextInput.value,
        is_purchased: false
      });

      this.items.push(item);

      this._postClient.db(new CreateItemModel({
        name: item.name,
        price: item.price,
        url: item.url
      }));
      addnameTextInput.value = '';
    }

    setPurchased(item: ItemModel) {
      this._putClient.db(new InsertRowModel({
        name: item.name,
        is_purchased: !item.is_purchased
      }));
      item.is_purchased = !item.is_purchased;
      if (item.is_purchased) {
        this.testTexting(`Item ${item.name} has been purchased`);
      }
    }
  }