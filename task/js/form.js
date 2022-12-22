// var btn = document.querySelector('#btn');

// var firstbox = document.querySelector('#firstbox');

//  btn.addEventListener('click',val);

//  function val(){
//     var username = document.querySelector('#name').value;
//     // console.log(username.length);
//     if(username > 'a' && username < 'z'){
//         firstbox.textContent = '';
//     }
//     else{
//         firstbox.textContent = "enter only characters";
//     }
//     var number = document.querySelector('#ph-no').value;
//     var thirdbox = document.querySelector('#thirdbox');
//     if(number.length == ''){
//         thirdbox.textContent = 'please fill your phone number';
//     }
//     else if(number.length == 10)
//     {
//        console.log('hii');
//     }
//     else{
//         thirdbox.textContent = 'enter 10 digit number';
//     }
//     var age = document.querySelector('#age').value;
//     console.log(age);
//     var mon = new Date();
//     console.log(mon);
// }

var app = angular.module('task',[]);

app.controller('taskCtrl',function($scope){
    var dat = new Date('05/04/1999');
    var m = Date.now() - dat.getTime();
    console.log(m);
    console.log(dat);
    var age_dt = new Date(m);
    console.log(age_dt);

    var year = age_dt.getUTCFullYear();
    console.log(year);

    var ages = 2022 - year;
    console.log(ages);


    $scope.country=['india','england','pakisthan'];
    $scope.save = function(){   
    var x = $scope.fname;
    if(x > 'a' && x < 'z'){
       alert('USERNAME : ' + x);
    }
    else{
        alert('please valid user name');
    }
    var y = $scope.lname;
    console.log(y);
    var z = $scope.age;
    var age = dat - z;
    console.log(age);
    var number = $scope.usernumber;
    if(number.length == 10){
        alert(number);
    }
    else{
        alert('please enter valid phone number');
    }
    var country = $scope.country;
    // console.log(country)
    }
});