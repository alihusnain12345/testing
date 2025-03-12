let string='({[]})';
let stack=[];
for(let i=0;i<string.length;i++){
    if(string[i]==='(' || string[i]==='[' ||string[i]==='{'){
        stack.push(string[i]);
    }
    
    else if(string[i]===')' && stack[stack.length-1]==='('){
        stack.pop();    
    }
    else if(string[i]===']' && stack[stack.length-1]==='['){
        
        stack.pop();
    } 
    else if(string[i]==='}' && stack[stack.length-1]==='{'){
        stack.pop();
    }else{
        stack.push(string[i]);
    }  
}
console.log(stack);
console.log(stack.length===0 ?true :false);

