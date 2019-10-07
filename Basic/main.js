function calcTemp() {
    var i = Math.floor(Math.random() * 30 - 5);

    if (i <= 10) {

        document.getElementById('basic1').innerHTML = "The wether is cold. It has " + i +" C" ;
    }else{
    	document.getElementById('basic1').innerHTML = "The weather is moderate. It has " + i +" C" ;
    }

}

function getMax(arr){
    let max;
    let sum = 1;
    for(let i=0; i<arr.length; i++){
        sum *= arr[i];
        if(i==0){
            max = arr[i];
        }
        if(max<arr[i]){
            max = arr[i];
        }
    }
    document.getElementById("basic2").innerHTML = "Max: " +max+ " Sum: " + sum; 
    console.log(max);
    console.log(sum);
    return max;

}

function randomArray(length){
    let arr = new Array;
    for(let i=0; i<length;i++){
        arr.push(Math.floor(Math.random()*length*10));
    }
    return arr;
}


    
    for (let i = 1; i<= 100; i++){
        if (i%3 == 0 && i%5 == 0){
            console.log("FizzBuzz");
        } else if (i%5 == 0){
            console.log("Buzz");
        } else if (i%3 == 0){
            console.log("Fizz");
        } 
        else{
            console.log(i);
        }
    }
