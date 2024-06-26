
//---- normal constructor paramiter -----

class myClass{

constructor(c,d){

console.log(c+d)
}

}

new myClass(30,40)




//---complex constructor peramitar pass---

class myClass{

constructor(a,b){
this.firstNum=a
this.secondNum=b

}

add(){
  let result=  this.firstNum +  this.secondNum

  console.log(result)
}

}

 var obj= new myClass(100,20);

 obj.add();
