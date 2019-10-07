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

function averageGrade(){
    let arr= [76,85,65,93,81];
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    let average= sum/arr.length;
    console.log(average);
    switch(true){
        case (average< 60): document.getElementById("basic3").innerHTML="F"; break;
        case (average< 70): document.getElementById("basic3").innerHTML="D"; break;
        case (average< 80): document.getElementById("basic3").innerHTML="C"; break;
        case (average< 90): document.getElementById("basic3").innerHTML="B"; break;
        default : document.getElementById("basic3").innerHTML="A"; break;
    }
}