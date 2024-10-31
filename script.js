
//1. {a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }: Using this object make an array consisting of all the keys of the given object in reverse order. (output should be ['q', 'p', 'c', 'f', 'b', 'a'])
const obj = { a: 'one', b: '2', f: '5', c: '33', p: 'do', q: 'one' };

const reversedKeys = Object.keys(obj).reverse();

console.log(reversedKeys);


//2. { data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] }
//From the given object remove the data arrays item with id as '24'. (consider that the data arrays order will be different every time you get, so write code in such a way that given any object it will remove the item with id as 24 if it exists )
const obj2 = {
    data: [
        { a: 'one', id: '22' },
        { a: 'four', id: '7' },
        { a: 'six', id: '2' },
        { a: 'sixty', id: '24' },
        { a: 'five', id: '212' }
    ]
};

obj2.data = obj2.data.filter(item => item.id !== '24');

console.log(obj2);


//3. Write a function to 
//a. Calculate the height of the end user's browser screen
const screenHeight = window.innerHeight;
console.log("Browser screen height:", screenHeight);

//b.To console the name of the web host
const hostName = window.location.hostname;
console.log("The name of the web host is :" ,hostName);

//c.To show a warning message if there is no https protocol used in the visited website.
if(window.localStorage.potocol !== "http:"){
    console.log("There is no https protocol used in the website");
}

//d.To show an alert message after 10sec while the page is refereshed.
setTimeout(() => {
    alert("The page is reloaded");
}, 10000);


//4. Store your basic details in localstorage of the browser every time the page loads, then console them and finally delete them after 1 minute of the page load. 
const userdeatiles = {
    name:'Arjun',
    place:'Palakkad',
    age:'23'
}

localStorage.setItem(userdeatiles, JSON.stringify(userdeatiles));

const storedItems = localStorage.getItem(userdeatiles);
console.log('stored deatils are :'+ storedItems);

setTimeout(()=>{
    localStorage.removeItem(storedItems);
    console.log("there no data will stored");
},60000);


//5. Redirect to the homepage of google from the console.
window.location.href="https://www.google.com";
