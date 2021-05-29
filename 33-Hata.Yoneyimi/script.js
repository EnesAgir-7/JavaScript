// ReferenceError
// TypeError
// SyntaxError
// URIError

// Error
//---------------233------------------

// var user={
//     name:`Enes Agir`
// }

// try{
// //    console.log(myFunction());
//     console.log(user.name);
//     if(!user.email){
//         throw new Error('User has no email');
//     }
//     console.log(user.email);
// }
// catch(e){
//     console.log(e);
//     console.log(e.message);
//     console.log(e.name);
//     console.log(e instanceof ReferenceError);
//     console.log(e instanceof TypeError);
//     console.log(typeof e);

// }
// finally{
//     console.log('finally block');
// }

// --------------234-----------------

document.getElementById('myBtn').addEventListener('click',function(e){

    var name = document.getElementById('name');
    var age = document.getElementById('age');
    var errors = document.getElementById('errors');
    errors.innerHTML = '';
    try{
        if(name.value.length === 0){
            throw new Error('name is required');
        }

        if(name.value.length > 20){
            throw new Error('name is too long');
        }

        if(age.value.length === 0){
            throw new Error('age is required');
        }

        if(isNaN(age.value)){
            throw new Error('age is not numeric');
        }

        console.log('form is submitted');

    } catch(err){
        errors.innerHTML = err.message;
    }finally{
        name.value = '';
        age.value = '';
    }
    
    e.preventDefault();
});
























