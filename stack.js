class Stack{
    constructor(size){
        this.item=[];
        this.size=size;
    }
    push(value){
       this.item.push(value); 
    }
    display(){
        console.log(this.item);
    }
    pop(){
        this.item.pop();
    }
}

const stack= new Stack(5);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.display();
stack.pop();
stack.display();