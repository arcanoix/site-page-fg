var quotes = [
    {
		"quote": "NUESTRO MAYOR COMPROMISO ES LA SATISFACCIÓN DEL CLIENTE CON NUESTRO SERVICIO",
        "author": "- Function Graphics -",
        
      
    }
    , {
        "quote": "APRENDÍ QUE LO DIFICIL NO ES LLEGAR A LA CIMA, SINO JAMÁS DEJAR DE SUBIR",
        "author": "- Walt Disney -",
        
    }
    , {
        "quote": "NO SOLO HAY QUE CREAR, HAY QUE CREER EN LO QUE SE HACE, ESO ES FUNDAMENTAL",
        "author": "- Carlos Cruz Diez -",
        
    }
    , { 
        "quote": "SI CREES QUE PUEDES O NO PUEDES, USUALMENTE TIENES RAZÓN",
        "author": "- Henry Ford -",
       
    }
    , {
        "quote": "AL FIN Y AL CABO, EL DISEÑO LLEGÓ PARA QUEDARSE",
        "author": "- Hasking O´Neill -",
       
    }
    
  ];


$(document).ready(function() {
   /*$.getJSON("../js/quotes.json")
   .done(function(json) {
        console.log("fdsdfsd");
   })
   .fail(function(xhr, status, error) {
       console.log(error);
   })
   .always(function() {
       console.log("Always");
   });*/
    var $backgroundSlider = $('#background-slider'),
        $rotatorWrapper = $('.rotator-wrapper'),
        $quoteText = $rotatorWrapper.find('.quote-text'),
        $quoteAuthor = $rotatorWrapper.find('.quote-author'),
        $randomBtn = $('#random-quote'),
        $tweetBtn = $('#tweet'),
        quotesArr = [],
        fadeTime = 900,
        prevRandom;

    quotes.forEach(function(quote) {
        var $li = $('<li class="background-slider-item" />');
        $li.css('background-image', "url(" + quote["bg-image"] + ")");
        console.log("\"" + quote["bg-image"] + "\"");
        $li.appendTo($backgroundSlider);
        quotesArr.push({
           bgImg: $li,
            quote: quote
        });
    });
    
    function randomQuote() {
        var random = Math.floor(Math.random() * quotes.length);
        while(random === prevRandom) {
            random = Math.floor(Math.random() * quotes.length);
        }
        $('blockquote').fadeOut(fadeTime,function() {
            $quoteText.text(` "  ${quotes[random]["quote"]} " `);
            $quoteAuthor.text(quotes[random]["author"]);
            $(this).fadeIn(fadeTime);
        });
        
        quotesArr[random]["bgImg"].addClass('item-under').show().siblings().filter(':visible').fadeOut(fadeTime * 2,function() {
            quotesArr[random]["bgImg"].removeClass('item-under');
        });;
        prevRandom = random;
    }
    
    function init() {
        var random = Math.floor(Math.random() * quotes.length);
         $quoteText.text(` "  ${quotes[random]["quote"]} " `);
        $quoteAuthor.text(quotes[random]["author"]);
        quotesArr[random]["bgImg"].show().siblings().hide();
        prevRandom = random;
    }
    
    $randomBtn.on('click', randomQuote);

    setInterval(randomQuote, 9000);

    
    
    init();
    
});