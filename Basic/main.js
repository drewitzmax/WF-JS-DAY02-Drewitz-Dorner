function calcTemp() {
    var i = Math.floor(Math.random() * 30 - 5);

    if (i <= 10) {

        document.getElementById('basic1').innerHTML = "The wether is cold. It has " + i +" C" ;
    }else{
    	document.getElementById('basic1').innerHTML = "The weather is moderate. It has " + i +" C" ;
    }

}