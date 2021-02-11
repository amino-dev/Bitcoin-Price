const url = 'https://blockchain.info/ticker';

function bitcoinPrice() {

  // Create a request
  let request = new XMLHttpRequest(); // Create an object
  request.open('GET', url); // First parameter GET,  second parameter : url
  request.responseType = 'json'; // Response type : JSON
  request.send(); // Send the request

  // execution of the function upon receipt of the response,
  request.onload = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        let response = request.response; // response storage
        
        // Currency price section 
        
        // Japenese Yen
        let YenPrice =  response.JPY.last;
        let YenSymbol = response.JPY.symbol;

        document.getElementById('price-label-Yen').innerHTML = YenPrice;
        document.getElementById('price-symbol-Yen').innerHTML = YenSymbol;


        // U.S Dollar
        let DollarPrice =  response.USD.last;
        let DollarSymbol = response.USD.symbol;

        document.getElementById('price-label-Dollar').innerHTML = DollarPrice;
        document.getElementById('price-symbol-Dollar').innerHTML = DollarSymbol;
        

        // Euro
        let EuroPrice = response.EUR.last;
        let EuroSymbol = response.EUR.symbol;

        document.getElementById('price-label-Euro').innerHTML = EuroPrice;
        document.getElementById('price-symbol-Euro').innerHTML = EuroSymbol;
        
   
        // British Pound
        let PoundPrice = response.GBP.last;
        let PoundSymbol = response.GBP.symbol;

        document.getElementById('price-label-Pound').innerHTML = PoundPrice;
        document.getElementById('price-symbol-Pound').innerHTML = PoundSymbol;


        // Russian Rubble
        let RubblePrice = response.RUB.last;
        let RubbleSymbol = response.RUB.symbol;

        document.getElementById('price-label-Rubble').innerHTML = RubblePrice;
        document.getElementById('price-symbol-Rubble').innerHTML = RubbleSymbol;


        // Polish Zloty
        let ZlotyPrice = response.PLN.last;
        let ZlotySymbol = response.PLN.symbol;

        document.getElementById('price-label-Zloty').innerHTML = ZlotyPrice;
        document.getElementById('price-symbol-Zloty').innerHTML = ZlotySymbol;


         // Australian Dollar
        let AustralianDollarPrice = response.AUD.last;
        let AustralianDollarSymbol = response.AUD.symbol;
 
        document.getElementById('price-label-Australian-Dollar').innerHTML = AustralianDollarPrice;
        document.getElementById('price-symbol-Australian-Dollar').innerHTML = AustralianDollarSymbol;


         // Turkish Lira
        let LiraPrice = response.TRY.last;
        let LiraSymbol = response.TRY.symbol;
 
        document.getElementById('price-label-Lira').innerHTML = LiraPrice;
        document.getElementById('price-symbol-Lira').innerHTML = LiraSymbol;


         // button
        let button = document.querySelector('button');

        button.addEventListener('click', (e) => {
          if(confirm('Are you sure ?')) {
            location.href = "https://www.x-rates.com/";
          }
        });

       }
      }
      else {
        alert('Something went wrong, please come back later.');
      }
    }
  }
  console.log('bitcoinPrice');

  


setInterval(bitcoinPrice, 1000); //Repeat the function every 1 second