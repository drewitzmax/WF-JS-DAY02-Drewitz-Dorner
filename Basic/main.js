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
    for(let i=0; i<arr.length; i++){
        if(i==0){
            max = arr[i];
        }
        if(max<arr[i]){
            max = arr[i];
        }
    }
    return max;
}

function randomArray(length){
    let arr = new Array;
    for(let i=0; i<length;i++){
        arr.push(Math.floor(Math.random()*length*10));
    }
    return arr;
}