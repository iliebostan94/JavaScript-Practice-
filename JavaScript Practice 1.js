
var d= new Date();
document.getElementById("alfa").innerHTML=d;



function greetFunction () {
var hour = new Date().getHours();
var greeting;
    if (hour<18){
    greeting = "Good Day!";
    }
    else {
    greeting = "Good Evening!";    
    }
    alert(greeting);

 }
 greetFunction();

    var text;
    switch (new Date().getMonth()){
        case 11:
        case 0:
        case 1:
        text = "It must be freezing outside...";
        break;
        case 2:
        case 3:
        case 4:
        text = "It must be really nice outside!";
        break;
        case 5:
        case 6:
        case 7:
        text = "Boy, you should get a cold drink...";
        break;
        case 8:
        case 9:
        case 10:
        text = "... not again! I hate this time of year...";
        
    }
    document.getElementById("beta").innerHTML= text;

    
    var cars = ["Mercedes", "BMW", "Porche", "Citroen", "Peugeot", "Fiat", "GM", "Wolkswagen", "Ford", "Lincoln"];
    var text = " ";
    var i;


    function listCars(){
       
        for ( i=0; i<cars.length; i++ ){
            text += cars[i] + "<br>";
        
        document.getElementById("gama").innerHTML= text;
        }
    }

    function listCars_Red(){
        var carsRed = cars;
        carsRed = cars.slice(5);
        document.getElementById("epsilon").innerHTML= carsRed;
    }

    function listCars_Black(){
        var textCarsBlack = text;                           // cum putem simplfica functia listCars_Red() utilizind functia listCars()???
        for ( i=0; i<cars.length; i++ ){
            if (i===5){break;}
            textCarsBlack += cars[i] + "<br>";              // de fiecare data cind apasam butonul lista se multiplica, cum putem opri asta?
        
        document.getElementById("delta").innerHTML= textCarsBlack; 
        
        }
    }

    function listCars_German(){
        for ( i=0; i<cars.length; i++ ){
            if (i===3){continue;}
            if (i===4){continue;}               // de asemenea, cum putem simplifica?
            if (i===5){continue;}               // calculatorul meu listeaza toate masinile cind apas prima oara butonul 4, dupa refresh listeaza corect. de ce oare?
            if (i===6){continue;}
            if (i===8){break;}
            text += cars[i] + "<br>";             
        
        document.getElementById("zeta").innerHTML= text; 
        }
    }



// function HandleUserInput ()   {
//     console.log("UserInputHandled");
//     alert("UserInput: " + document.getElementById("userinput").value.toLowerCase());
// }

// HandleUserInput();  
