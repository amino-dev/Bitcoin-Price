const url = 'https://blockchain.info/ticker';

function bitcoinPrice() {
  // Créer une requête
  let request = new XMLHttpRequest(); // Créer un objet
  request.open('GET', url); // Premier paramètre GET / POST, deuxième paramètr : url
  request.responseType = 'json'; // Nous attendons du JSON
  request.send(); // Nous envoyons notre requête

  // Dèss qu'on reçoit une réponse, cette fonction est executée
  request.onload = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        let response = request.response; // on stock la réponse
        
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
 

      }
      else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
  console.log('bitcoinPrice');
}

setInterval(bitcoinPrice, 1000);