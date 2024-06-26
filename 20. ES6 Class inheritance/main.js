//--class inheritance---

class parent{

    hello1(params){
    console.log("hello Inheritance")
    }
    hello2(params){
    console.log("hello Inheritance")
    }
    hello3(params){
    console.log("hello Inheritance")
    }

}


class child extends parent{

}

var obj=new child()

obj.hello1()
obj.hello2()
obj.hello3()




