//--class inheritance over riding ---


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

// ---over riting--
class child extends parent{
    hello1(params){
        console.log("hello Inheritance hello Inheritance")
        }
}

var obj=new child()

obj.hello1()
obj.hello2()
obj.hello3()