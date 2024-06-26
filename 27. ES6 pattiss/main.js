//---------- spread operator -----------

// var a=[1,2,]

// var b=[...a, 5,6,]

// console.log(b)

//--------- Rest operator ----------

// function myFunc(...x){
// console.log(x)
// }
// myFunc(5,3,6,7,9,8,2,)

// -----arrow function-----

// let welcome= ()=>{
// console.log('hello every one')
// }

// welcome();

// ------- multidaimansonal array --------

// var bangladesh= ["dhaka","pabna","seraggong"]

// var india=["mumbai","chennai", "kolkata"]

// var china=["uhan", "shanhai","hongkong"]

// var asia=[bangladesh,india, china]

// console.log(asia[1][2])

//------- Destructring Array ---------

// var numbers=[1,2,3,4,5,6]
// var [,,,a,b,c]=numbers
// console.log(a,b,c)

// --------- Destructring object --------

// const user={
// id:339,
// na:"rakib",
// age:35
// }
// const {age}=user;
// console.log(age)

//------- function default parameter ------

// function myFunc(x =10){
// return x;
// }
// console.log(myFunc())

//--------- Template literals ------

// var user="Rakibul vai";
// console.log(`hello ${user}`)

// var a=10;
// var b=20;
// console.log(`I am ${a} and I am ${b}`)

//-------- tarnari oparator --------

// var age=18;
// var type=(age>=18)?"adult":"child";

// console.log(type)

// ------- map method ---------

// var a =[1,2,3,4,5,6];

// var b =a.map((x)=>{

// return x * 5;

// });

// console.log(b)

//----------set method------

// const letters = new Set();

// letters.add('a')
// letters.add('b')
// letters.add('c')

// console.log(letters)

//---------- class method -----------

// class MyClass{


// myFun1(){

//     console.log('hello i am fine1')

// }

// myFun2(){

//     console.log('hello i am fine2')

// }

// myFun3(){

//     console.log('hello i am fine3')

// }

// }
// var obj= new MyClass;

// obj.myFun1()
// ----------class constructor------

// class MyClass{
// constructor(){
// console.log('hello class constructor')

// }
// }
// new MyClass

 //---- normal constructor paramiter -----
// class myClass{

// constructor(a,b){

// console.log(a+b)

// }

// }

// new myClass(30,20)

// ----------stick keyword------------

// class myClass{
// static hello(){
// console.log('hello stick key word')
// }
// }
// myClass.hello()

//---------- class inheritance -------------

// class parent{

// hello1(params){
//     console.log('hello class inheritance 1')
// }

// hello2(params){
//     console.log('hello class inheritance 2')
// }

// hello3(params){
//     console.log('hello class inheritance 3')
// }

// }

// class child extends parent{

// }

// var obj=new child()

// obj.hello1()
// obj.hello2()
// obj.hello3()

//----- Class inheritance over riding -------


// class parent{

// hello1(params){
//     console.log('hello class inheritance 1')
// }

// hello2(params){
//     console.log('hello class inheritance 2')
// }

// hello3(params){
//     console.log('hello class inheritance 3')
// }

// }

// class child extends parent{

//     hello1(params){
// console.log('hello class inheritance 1,2,3,4,5,6,7,8,9,10')
//     }
// }

// var obj=new child()

// obj.hello1()
// obj.hello2()
// obj.hello3()

// ------ json patties ------

// let studentData = [

//     {'id' :1,

//     'name' :'Rakib',

//     'email' :'rakib@gmail.com',

//     },

//     {'id' :2,

//     'name' :'jarif',

//     'email' :'jarif@gmail.com',
//     },

//     {'id' :3,

//     'name' :'jasmin',

//     'email' :'jasmin@gmail.com',
//     },

//     ];

//     console.log(studentData[0]);

// --iif function--() ()------

// (()=>{
// console.log('hello iif function !!!')
// })()