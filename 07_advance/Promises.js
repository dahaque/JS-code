// TO CREATE A PROMISE
const PromiseOne = new Promise( function(resolve, reject){
    setTimeout( () => {
        console.log('Async task is Complete');
        resolve();
    } , 1000)
} );

// .then() is directly connected to resolve 
PromiseOne.then( function(){
    console.log('Promise consumed/resolved');
} );

// Writing it all together without storing it an variable.
new Promise( function(resolve, reject){
    setTimeout( () => {
        console.log('Async task is Complete');
        resolve();
    } , 1000)
} ).then( function(){
    console.log('Promise consumed/resolved');
} );


// To pass data when promise is resolved 
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Sadiq", email: "something@example.com"})
    }, 1000)
})
promiseThree.then( (user) => {
    console.log(user)
} )


// When the promise is not resolved it is rejected.
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "Sadiq", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// IMPORTANT
// if we want to take only username form the upcoming data object rather than the whole object 
// the variable returned in the first .then() method is parameter for the next consecutive .then() method
// this is known as chaining 
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// async await cant handle error on its own thats why we gotta use try-catch 
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// Intro of fetch with async await.
async function getUserData(){
   try {
        const response = await fetch('https://api.github.com/users/dahaque'); //fetch returns a promise.
        const data = await response.json() // IMP -> Here conversion of response takes time so we have to user 'await' here also.
        console.log(data);
   } catch (error) {
        console.log('E : ',error);
   }
}

getUserData();

//Writing same code of fetch() with .then()

fetch('https://api.github.com/users/dahaque')
.then( (response) => {
   return response.json(); //conversion of response and passing it into second .then() as data 
} )
.then( (data) => {
    console.log(data);
} )
.catch( (error) => {
    console.log('E',error);
} )

// study promise.all()