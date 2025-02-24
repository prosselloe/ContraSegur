/* 
 * Versió β: Versió amb Diccionari i Patrons Contrasenyes Segures: diccionaris.html i diccionaris.js
 */

/**
 * És important conèixer quins aspectes faran que una contrasenya sigui robusta. 
 * Així, s’han d’evitar les contrasenyes més emprades:
 * https://es.statista.com/grafico/23636/contrasenas-mas-usadas-en-el-mundo/
**/

// var diccionari = ["password", "123456", "123456789", "guest", "qwerty", "12345678", "111111", "12345"];
var diccionari = ["password", "guest", "dragon", "baseball", "football", "monkey", "letmein", "696969", 
    "shadow", "master", "mustang", "michael", "pussy", "superman", "fuckyou", "121212", "killer", "trustno1", "jordan", 
    "jennifer", "hunter", "buster", "soccer", "harley", "batman", "tigger", "sunshine", "iloveyou", "fuckme", "charlie", 
    "thomas", "hockey", "ranger", "daniel", "starwars", "klaster", "112233", "george", "asshole", "computer", "michelle", 
    "jessica", "pepper", "131313", "freedom", "pass", "fuck", "maggie", "159753", "ginger", "princess", "joshua", "cheese", 
    "amanda", "summer", "love", "ashley", "6969", "nicole", "chelsea", "biteme", "matthew", "access", "yankees", "dallas", 
    "austin", "thunder", "taylor", "matrix", "minecraft", "william", "corvette", "hello", "martin", "heather", "secret", 
    "fucker", "merlin", "diamond", "hammer", "silver", "anthony", "justin", "test", "bailey", "q1w2e3r4t5", "patrick", 
    "internet", "scooter", "orange", "golfer", "cookie", "richard", "samantha", "bigdog", "guitar", "jackson", "whatever", 
    "mickey", "chicken", "sparky", "snoopy", "maverick", "phoenix", "camaro", "sexy", "peanut", "morgan", "welcome", 
    "falcon", "cowboy", "ferrari", "samsung", "andrea", "smokey", "steelers", "joseph", "mercedes", "dakota", "arsenal", 
    "eagles", "melissa", "boomer", "booboo", "spider", "nascar", "monster", "tigers", "yellow", "gateway", "marina", 
    "diablo", "bulldog", "compaq", "purple", "hardcore", "banana", "junior", "hannah", "porsche", "lakers", "iceman", 
    "money", "cowboys", "london", "tennis", "ncc1701", "coffee", "scooby", "miller", "boston", "q1w2e3r4", "fuckoff", 
    "brandon", "yamaha", "chester", "mother", "forever", "johnny", "edward", "oliver", "redsox", "player", "nikita"];

// var patrons = ["/123/", "/abc/", "/qwerty/"];
var patrons = [/098/, /0pm/, /0pñ/, /123/, /1aq/, /1qa/, /234/, /2ws/, /2zs/, /321/, /345/, /3ed/, /432/, /456/, 
    /4rf/, /543/, /567/, /5tg/, /654/, /678/, /6yh/, /765/, /789/, /7uj/, /876/, /890/, /8ik/, /987/, /9ol/, 
    /abc/, /aq1/, /aqw/, /asd/, /aze/, /bcç/, /bcd/, /bgt/, /bnm/, /bvc/, /cba/, /çcb/, /cçd/, /cde/, /çde/, 
    /cvb/, /cxw/, /cxz/, /dcb/, /dçc/, /de3/, /def/, /dfg/, /dsa/, /dsq/, /edc/, /edç/, /efg/, /ert/, /ewq/, 
    /eza/, /fds/, /fed/, /fgh/, /fr4/, /gfd/, /gfe/, /ghi/, /ghj/, /gt5/, /hgf/, /hij/, /hjk/, /hy6/, /ihg/, 
    /ijk/, /iop/, /iuy/, /jhg/, /jih/, /jkl/, /ju7/, /ki8/, /kjh/, /kji/, /klm/, /klñ/, /lkj/, /lmn/, /lo9/, 
    /mju/, /mlk/, /mnb/, /mnñ/, /mno/, /mp0/, /nbv/, /nhy/, /nml/, /nño/, /nop/, /ñlk/, /ñnm/, /ñop/, /ñp0/, 
    /oiu/, /onm/, /oñn/, /opq/, /poi/, /pon/, /poñ/, /pqr/, /qa1/, /qaz/, /qpo/, /qrs/, /qsd/, /qwe/, /rew/, 
    /rez/, /rfv/, /rqp/, /rst/, /rty/, /sdf/, /srq/, /stu/, /sw2/, /sz2/, /tgb/, /tre/, /tsr/, /tuv/, /tyu/, 
    /uio/, /ujm/, /uts/, /uvw/, /uyt/, /vbn/, /vcx/, /vfr/, /vut/, /vwx/, /wer/, /wqa/, /wsx/, /wvu/, /wxc/, 
    /wxy/, /xcv/, /xsw/, /xsz/, /xwv/, /xyz/, /yhn/, /ytr/, /yui/, /yxw/, /zaq/, /zer/, /zsx/, /zxc/, /zyx/];

// Variables Globals  
var Base = 0;
var Exponent = 0;
 
function Comprovar()
{
    var password = document.getElementById("password").value;
    // window.alert(password);
    document.getElementById("minimcar").checked = false;
    document.getElementById("majuscula").checked = false;
    document.getElementById("minuscula").checked = false;
    document.getElementById("numero").checked = false;
    document.getElementById("carespecial").checked = false;

    // Comprovam la mida mímina
    if (password.length >= 8) {
        document.getElementById("minimcar").checked = true;
    } 
    
    var lletra = "";
    for (i = 0; i < password.length; i++) {
        lletra = password.charAt(i);
        // window.alert(lletra);
        
        // Comprovam que hi hagi un número
        if (!isNaN(lletra)) {
            document.getElementById("numero").checked = true;
            
        // Comprovam que hi hagi una lletra
        // if (((lletra.toLowerCase() >= "a") && (lletra.toLowerCase() <= "z")) || 
        //      (lletra.toLowerCase() == "ñ") || (lletra.toLowerCase() == "ç")) {             
           
        // Si no és un número ni una lletra, aleshores serà un caràcter especial
        } else if (lletra.toUpperCase() === lletra.toLowerCase()) {
            document.getElementById("carespecial").checked = true;
            // Comprovam que hi hagi una lletra majúscula    
            } else {if (lletra === lletra.toUpperCase()) {
                document.getElementById("majuscula").checked = true;
            // Comprovam que hi hagi una lletra minúscula    
            } else /* if (lletra === lletra.toLowerCase()) */ {
                document.getElementById("minuscula").checked = true;
            }
        }
    }
    
    // Si es compleixen totes les condicions, activam el botó d'Iniciar Sessió
    if (document.getElementById("majuscula").checked &&
        document.getElementById("minuscula").checked &&
        document.getElementById("numero").checked &&
        document.getElementById("carespecial").checked &&
        document.getElementById("minimcar").checked) 
    {
        document.getElementById("inisessio").disabled = false;
    } else {
        document.getElementById("inisessio").disabled = false //true;
    }
    
    Base = 0;
    if (document.getElementById("numero").checked) {Base = Base + 10;} // Dígits 
    if (document.getElementById("minuscula").checked) {Base = Base + 40;} // Lletres minúscules mes vocals amb diacrítics  
    if (document.getElementById("majuscula").checked) {Base = Base + 40;} // Lletres majúscules mes vocals amb diacrítics 
    if (document.getElementById("carespecial").checked) {Base = Base + 41;} // Caràctes especials teclat espanyol/català    
    Exponent = document.getElementById("password").value.length;
    Nivell = Base * Exponent / 16;
    document.getElementById("nivell").value = Nivell.toString();
}

function Iniciar()
{
    /** 
     * Càlcul del Cost Computacional per Força Bruta
     * En funció de les dades d’entrada, calcular el nombre d’intents són necessaris per trobar una contrasenya similar:
     * Per exemple, si només són dígits: 10X on x és el nombre de dígits de la contrasenya
    **/
    CostComputacional = Math.pow(Base , Exponent) / 1e6; // Per una màquina a 1 MIPS 
    
    // Too guessable: risky password. (guesses < 1e3)
         if (CostComputacional < 1e3)  Robustesa = 0; 
    // Very guessable: protection from throttled online attacks. (guesses < 1e6)
    else if (CostComputacional < 1e6)  Robustesa = 1; 
    // Somewhat guessable: protection from unthrottled online attacks. (guesses < 1e8)
    else if (CostComputacional < 1e8)  Robustesa = 2;
    // Safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 1e10)
    else if (CostComputacional < 1e10) Robustesa = 3; 
    // Very unguessable: strong protection from offline slow-hash scenario. (guesses >= 1e10)
    else                               Robustesa = 4; 
    
    AnysProcessament = CostComputacional / (365*24*60*60); 
    DiesProcessament = CostComputacional /     (24*60*60); 

    /** 
     * Dropbox.Tech: zxcvbn | realistic password strength estimation
     *   https://dropbox.tech/security/zxcvbn-realistic-password-strength-estimation     
     *   https://github.com/dropbox/zxcvbn
     *   https://www.cdnpkg.com/zxcvbn
     *     
     * result.entropy            # bits
     * result.crack_time         # estimation of actual crack time, in seconds.
     * result.crack_time_display # same crack time, as a friendlier string:
     *                           # "instant", "6 minutes", "centuries", etc.
     * result.score              # 0, 1, 2, 3 or 4 if crack time is less than
     *                           # 10**2, 10**4, 10**6, 10**8, Infinity.
     *                           # (helpful for implementing a strength bar.)
     * result.match_sequence     # the detected patterns used to calculate entropy.
     * result.calculation_time   # how long it took to calculate an answer,
     *                           # in milliseconds. usually only a few ms.
    **/
    result = zxcvbn(document.getElementById("password").value);
    
    /**
    window.alert("Password: "  + document.getElementById("password").value + "\n" + 
        "Entropy: "            + result.entropy + "\n" +
        "Crack Time: "         + result.crack_time + "\n" + 
        "Crack Time Display: " + result.crack_time_display + "\n" +
        "Score: "              + result.score + "\n" + 
        "Match Sequence: "     + result.match_sequence + "\n" + 
        "Calculation Time: "   + result.calculation_time 
    ); 
    **/   

    /**
    document.write("Password: "     + document.getElementById("password").value + "\n\
                   <br>SHA1: " + SHA1(document.getElementById("password").value) + "\n\
                   <br>MD5: "   + MD5(document.getElementById("password").value) + "\n\
                   <br>md5: "   + md5(document.getElementById("password").value));  
    **/ 
    
    // CryptoJS functions
    /**
    document.write("Password: "                    + document.getElementById("password").value + "\n\
                   <br>SHA1: "       + CryptoJS.SHA1(document.getElementById("password").value) + "\n\
                   <br>AES: " + CryptoJS.AES.encrypt(document.getElementById("password").value, 
                                                     document.getElementById("password").value) + "\n\
                   <br>SHA256: "   + CryptoJS.SHA256(document.getElementById("password").value));
    **/ 
   
    window.alert("Password: "                + document.getElementById("password").value + "\n\
            - " + comprovaRobustesa(document.getElementById("password").value) + "\n\
            - Tendria un Cost Computacional per Força Bruta de: " + CostComputacional.toExponential() + 
            " pel que una màquina a 1 MIPS podria arribar a necessitar " + AnysProcessament.toExponential() + 
            " anys de processament, es a dir, " + DiesProcessament.toExponential() +  " dies.\n\
            - Tendria un Nivell de Robustesa de: " + Robustesa + "/4, i un zxcvbn Score de: " + result.score + "/4."); 
}

function Mostrar()
{
    document.getElementById("taulaASCII").hidden = !document.getElementById("taulaASCII").hidden; 
    if (document.getElementById("taulaASCII").hidden)
        document.getElementById("mostrartaula").innerText = "Mostrar taula ASCII-HTML";
    else
        document.getElementById("mostrartaula").innerText = "Amagar taula ASCII-HTML";
}

/**
* Llegir un fitxer des del sistema d'arxius del client.
* Read Text Files Using the JavaScript FileReader | HTML Goodies:
* https://www.htmlgoodies.com/javascript/read-text-files-using-the-javascript-filereader/ 
**/
function readSingleFile(evt) {
  //Retrieve the first (and only!) File from the FileList object
  var f = evt.target.files[0]; 

  if (f) {
    var r = new FileReader();
    r.onload = function(e) { 
      var contents = e.target.result;
      /** alert("Got the file.\n" 
           + "name: " + f.name + "\n"
           + "type: " + f.type + "\n"
           + "size: " + f.size + " bytes\n"
           + "starts with: " + contents.substr(0, contents.indexOf("\n"))
      ); **/
      if (contents.substr(0, 1) == "/") {
        // patrons = contents.replaceAll("\r\n", ",");
        stream1 = contents.replaceAll("\r\n", ",");
        stream2 = stream1.replaceAll("/", "");
        stream3 = stream2.split(",");
        for (i = 0; i < stream3.length; i++) {
            patrons[i] = new RegExp(stream3[i]);
        }        
        // alert("Patrons:" + patrons); 
      } else {
        // stream1 = contents.replaceAll("\r\n", ",");
        stream1 = contents.replaceAll("\n", ",");
        diccionari = stream1.split(",");
        // alert("Diccionari:" + diccionari); 
      }
    }
    r.readAsText(f);
  } else { 
    alert("Failed to load file");
  }
}

/**
* Funcions generades amb ChatGPT.
* Algorisme de comprovació completa de la robustesa de contrasenyes en JavaScript, diccionari de dades, 
* comprovació repeticions múltiples de caràcters i seguiment de patrons:
* https://chat.openai.com/
**/

/**
const fs = require('fs');

// Càrrega del diccionari de dades
const diccionari = fs.readFileSync('diccionari.txt', 'utf8').split('\n');
**/

function esComuna(contrasenya) {
    /**
    for (i = 1; i < diccionari.length; i++)
        if (diccionari[i] == contrasenya)
            return true;
    **/
    return diccionari.includes(contrasenya);
}

function teRepeticions(contrasenya) {
    const repeticionsMultiples = /(.)\1{2,}/; // Detecta tres o més repeticions consecutives
    return repeticionsMultiples.test(contrasenya.toLowerCase());
}

function tePatrons(contrasenya) {
    // cosnt patrons = [/123/, /abc/, /qwerty/]; // Afegir altres patrons si cal
    for (i = 0; i < patrons.length; i++) {
        // alert(patrons[i]);
        if (patrons[i].test(contrasenya.toLowerCase())) { return true; }
    }
    return false;
    // return patrons.some(pat => pat.test(contrasenya));
    /*
    return patrons.some(checkPat);
        checkPat(pat) { return pat.test(contrasenya); }
    */
}

function comprovaRobustesa(contrasenya) {
    const longitudMinima = 8;
    const especials = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=|"'+´`¨º!ª·¿¬€]/; // Afegides del teclat ES: /["'+´`¨º!ª·¿¬€]/
    const majuscules = /[A-Z]|Ñ|Ç|[ÁÉÍÓÚÀÈÏÒÜ]/; // Afegides Ñ, Ç i les vocals majúscules accentuades/dieresi
    const minuscules = /[a-z]|ñ|ç|[áéíóúàèïòü]/; // Afegides ñ, ç i les vocals minúscules accentuades/dieresi
    const numeros = /[0-9]/;

    if (esComuna(contrasenya)) {
        return "La contrasenya és massa comuna. Si us plau, tria una contrasenya més forta.";
    }

    if (tePatrons(contrasenya)) {
        return "La contrasenya no pot contenir patrons previsibles.";
    }

    if (teRepeticions(contrasenya)) {
        return "La contrasenya no pot contenir repeticions múltiples de caràcters.";
    }

    if (!majuscules.test(contrasenya) || !minuscules.test(contrasenya) || !numeros.test(contrasenya)) {
        return "La contrasenya ha de contenir almenys una lletra majúscula, una minúscula i un número.";
    }

    if (!especials.test(contrasenya)) {
        return "La contrasenya ha de contenir almenys un caràcter especial.";
    }

    if (contrasenya.length < longitudMinima) {
        return "La contrasenya és massa curta. Ha de tenir almenys 8 caràcters.";
    }

    // La contrasenya sembla ser prou robusta
    return "Contrasenya robusta!";
}
/**
const contrasenya = "Exxempl3!";
const resultat = comprovaRobustesa(contrasenya);
console.log(resultat);
**/

// HTML includes are done by JavaScript
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}
