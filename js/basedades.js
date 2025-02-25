/* 
 * Versió δ: Versió amb Base de Dades Contrasenyes Segures: basedades.html, desar.html i basedades.js
 */

/**
 * És important conèixer quins aspectes faran que una contrasenya sigui robusta. 
 * Així, s’han d’evitar les contrasenyes més emprades:
 * https://es.statista.com/grafico/23636/contrasenas-mas-usadas-en-el-mundo/
**/

// Diferents idiomes per la GUI
const Idiomes_dft = [
    {
        "IdIdioma": "ca",
        "Titol": "Versió amb Base de Dades Contrasenyes Segures",
        "Username": "Usuari o correu: ",
        "Password": "Contrasenya: ",
        "Mostrar": "Mostrar: ",
        "Minimcar": " Mínim 8 caràcters,",        
        "Majuscula": " almenys una lletra majúscula,",
        "Minuscula": " almenys una lletra minúscula,",
        "Numero": " almenys un número,",
        "Carespecial": " almenys un carácter especial.",
        "Robustesa": "Dèbil - Regular - Bona - Forta",
        "Inisessio": "Iniciar sessió",
        "Massacomu": "La contrasenya és massa comuna. Si us plau, tria una contrasenya més forta.",
        "Nopatrons": "La contrasenya no pot contenir patrons previsibles.",
        "Norepmult": "La contrasenya no pot contenir repeticions múltiples de caràcters.",
        "Majminnum": "La contrasenya ha de contenir almenys una lletra majúscula, una minúscula i un número.",
        "Almcaresp": "La contrasenya ha de contenir almenys un caràcter especial.",
        "Almmincar": "La contrasenya és massa curta. Ha de tenir almenys 8 caràcters.",
        "Contrarob": "Contrasenya robusta!",        
        "Computacional": "\n\     - Tendria un Cost Computacional per Força Bruta de: ",
        "Maquina": " pel que una màquina a 1 MIPS podria arribar a necessitar ",
        "Processament": " anys de processament, es a dir, ",
        "Nivell": " dies.\n\     - Tendria un Nivell de Robustesa de: ",
        "Score": "/4, i un zxcvbn Score de: ",
        "Voldesar": "Vol desar l'inici de sessió?",
        "Diccionari": "Diccionari: ",
        "Patrons": "Patrons: ",
        "Mostrartaula": "Mostrar taula ASCII-HTML",
        "Amagartaula": "Amagar taula ASCII-HTML"
    },
    {
        "IdIdioma": "es",
        "Titol": "Versión con Base de Datos Contraseñas Seguras",
        "Username": "Usuario o correo: ",
        "Password": "Contraseña: ",
        "Mostrar": "Mostrar: ",
        "Minimcar": " Mínimo 8 carácteres,",        
        "Majuscula": " almenos una letra mayúscula,",
        "Minuscula": " almenos una letra minúscula,",
        "Numero": " almenos un número,",
        "Carespecial": " almenos un carácter especial.",
        "Robustesa": "Débil - Regular - Buena - Fuerte",
        "Inisessio": "Iniciar sesión",
        "Massacomu": "La contraseña es demasiado común. Por favor, elige una contraseña más fuerte.",
        "Nopatrons": "La contraseña no puede contener patrones previsibles.",
        "Norepmult": "La contraseña no puede contener múltiples repeticiones de caracteres.",
        "Majminnum": "La contraseña debe contener al menos una letra mayúscula, una minúscula y un número.",
        "Almcaresp": "La contraseña debe contener al menos un carácter especial.",
        "Almmincar": "La contraseña es demasiado corta. Debe tener al menos 8 caracteres.",
        "Contrarob": "¡Contraseña robusta!",        
        "Computacional": "\n\     - Tendría un Coste Computacional por Fuerza Bruta de: ",
        "Maquina": " por lo que una máquina a 1 MIPS podría llegar a necesitar ",
        "Processament": " años de procesamiento, es decir, ",
        "Nivell": " días.\n\     - Tendría un Nivel de Robustez de: ",
        "Score": "/4, y un zxcvbn Score de: ",
        "Voldesar": "¿Quiere guardar el inicio de sesión?",
        "Diccionari": "Diccionario: ",
        "Patrons": "Patrones: ",
        "Mostrartaula": "Mostrar tabla ASCII-HTML",
        "Amagartaula": "Esconder tabla ASCII-HTML"
    },
    {
        "IdIdioma": "en",
        "Titol": "Secure Passwords Database Version",
        "Username": "User or email: ",
        "Password": "Password: ",
        "Mostrar": "Show: ",
        "Minimcar": " Minimum 8 characters,",        
        "Majuscula": " at least one capital letter,",
        "Minuscula": " at least one lowercase letter,",
        "Numero": " at least one number,",
        "Carespecial": " at least one special character.",
        "Robustesa": "Weak - Fair - Good - Strong",
        "Inisessio": "Log in",
        "Massacomu": "The password is too common. Please choose a stronger password.",
        "Nopatrons": "Password cannot contain predictable patterns.",
        "Norepmult": "The password cannot contain multiple repetitions of characters.",
        "Majminnum": "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
        "Almcaresp": "Password must contain at least one special character.",
        "Almmincar": "The password is too short. It must be at least 8 characters long.",
        "Contrarob": "Strong password!",        
        "Computacional": "\n\     - It would have a Brute Force Computational Cost of: ",
        "Maquina": " for what a 1 MIPS machine might need ",
        "Processament": " years of processing, that is, ",
        "Nivell": " days.\n\     - It would have a Robustness Level of: ",
        "Score": "/4, and a zxcvbn Score of: ",
        "Voldesar": "Do you want to save your login?",
        "Diccionari": "Dictionary: ",
        "Patrons": "Patterns: ",
        "Mostrartaula": "Show ASCII-HTML table",
        "Amagartaula": "Hide ASCII-HTML table"
    }
];
var Idiomes = Idiomes_dft;
var Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == "ca");

// Canviam estructura de dades Array() per Set()
// var Diccionari_dft = new Array(["password", "123456", "123456789", "guest", "qwerty", "12345678", "111111", "12345"]);
var Diccionari_dft = new Set(["password", "guest", "dragon", "baseball", "football", "monkey", "letmein", "696969", 
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
    "brandon", "yamaha", "chester", "mother", "forever", "johnny", "edward", "oliver", "redsox", "player", "nikita"]);
var Diccionari = Diccionari_dft;
var SqlDiccionari = [];

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
var SqlPatrons = [];

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
        document.getElementById("inisessio").style = "background-color: #04AA6D; color: white; \n\
                                                      padding: 6px; margin-top: 6px;";            
    } else {
        document.getElementById("inisessio").disabled = false //true;
        document.getElementById("inisessio").style = "background-color: #04AA6D; color: white; \n\
                                                      padding: 6px; margin-top: 6px;";            
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
 
// Funció per tractar la tecla de retrocés, BACKSPACE, del teclat en pantalla
function Retroces() {
    var temporal = document.getElementById('password').value;
    temporal = temporal.substring(0, temporal.length - 1); 
    document.getElementById('password').value = temporal;
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
         if (CostComputacional < 1e3)  {Robustesa = 0;} 
    // Very guessable: protection from throttled online attacks. (guesses < 1e6)
    else if (CostComputacional < 1e6)  {Robustesa = 1;} 
    // Somewhat guessable: protection from unthrottled online attacks. (guesses < 1e8)
    else if (CostComputacional < 1e8)  {Robustesa = 2;}
    // Safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 1e10)
    else if (CostComputacional < 1e10) {Robustesa = 3;}
    // Very unguessable: strong protection from offline slow-hash scenario. (guesses >= 1e10)
    else                               {Robustesa = 4;} 
    
    if (SqlDiccionari.includes(document.getElementById("password").value) ||
        tePatrons(document.getElementById("password").value) || 
        teRepeticions(document.getElementById("password").value)) 
        {Robustesa = 0;}
      
    // Reproduim els sons en funció del nivell de Robustesa
    // if (document.getElementById('off').hidden) {
        switch (Robustesa) {
            case 0:
            case 1:
                if (document.getElementById('off').hidden) { 
                    document.getElementById("boom_cloud").play();
                    document.getElementById("bell_toll_x3").play();
                }
                break;
            case 2:            
            case 3:
                if (document.getElementById('off').hidden) { 
                    document.getElementById("clock_ticking").play();
                }
                break;
            default:
                if (document.getElementById('off').hidden) { 
                    document.getElementById("miau").play();
                    document.getElementById("cheer").play();
                }
                break;
        }
     // }
     
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

    window.alert("Password: "              + document.getElementById("password").value + 
            "\n\     - " + comprovaRobustesa(document.getElementById("password").value) + 
            Idioma.Computacional + CostComputacional.toExponential() + 
            Idioma.Maquina + AnysProcessament.toExponential() + 
            Idioma.Processament + DiesProcessament.toExponential() +  
            Idioma.Nivell + Robustesa + 
            Idioma.Score + result.score + "/4."); 
    
    // Demanam a l'usuari si vol desar l'inici de sessió
    if (confirm(Idioma.Voldesar) == true) {
        localStorage.setItem("username", document.getElementById("username").value);
        localStorage.setItem("password", document.getElementById("password").value);
        localStorage.setItem("IdIdioma", Idioma.IdIdioma);
        const myWindow = window.open("desar.html", "_blank", "width=550, height=600, left=0, top=0, \n\
            location=0, menubar=0, resizable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
    }
}

function Mostrar()
{
    document.getElementById("taulaASCII").hidden = !document.getElementById("taulaASCII").hidden; 
    if (document.getElementById("taulaASCII").hidden)
        document.getElementById("Mostrartaula").innerHTML = Idioma.Mostrartaula;
    else
        document.getElementById("Mostrartaula").innerHTML = Idioma.Amagartaula;
}

/**
* Crear Contraseña Automáticamente en Javascript
* https://compubinario.com/crear-contrasena-automaticamente-en-javascript/
**/
function autoCreate(plength){
    const majuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZÑÇÁÉÍÓÚÀÈÏÒÜ"; // Afegides Ñ, Ç i les vocals majúscules accentuades/dieresi
    const minuscules = "abcdefghijklmnopqrstubwsyzñçáéíóúàèïòü"; // Afegides ñ, ç i les vocals minúscules accentuades/dieresi
    const numeros = "1234567890";
    const especials = "!" + '"' + "#$%&'()*+,-./:;<=>?@[\]^_`{|}~¡¨ª¬´·º¿€"; // Afegides del teclat ES: "'+´`¨º!ª·¿¬€
    const chars = majuscules + minuscules + numeros + especials;

    var password = '';
    password += majuscules.charAt(Math.floor(Math.random() * majuscules.length))  
    password += minuscules.charAt(Math.floor(Math.random() * minuscules.length))  
    password += numeros.charAt(Math.floor(Math.random() * numeros.length))  
    password += especials.charAt(Math.floor(Math.random() * especials.length))  
    
    for (i = password.length--; i < plength; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    // window.alert(password);
    return password;
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
      /** window.alert("Got the file.\n" 
           + "name: " + f.name + "\n"
           + "type: " + f.type + "\n"
           + "size: " + f.size + " bytes\n"
           + "starts with: " + contents.substr(0, contents.indexOf("\n"))
      ); **/
      if (contents.substr(0, 1) == "/") {
        // patrons = contents.replaceAll("\r\n", ",");
        stream1 = contents.replaceAll("\r\n", ",");
        stream3 = stream1.replaceAll("\n", ",");
        stream2 = stream3.replaceAll("/", "");
        stream3 = stream2.split(",");
        for (i = 0; i < stream3.length; i++) {
            if (stream3[i] != "") {
                patrons[i] = new RegExp(stream3[i]);
            }
        }        
        // window.alert("Patrons:" + patrons); 
      } else {
        // Canviam estructura de dades Array() per Set()
        // Diccionari = contents.replaceAll("\r\n", ",");
        // window.alert("Diccionari:" + Diccionari); 
        stream1 = contents.replaceAll("\r\n", ",");
        stream2 = stream1.replaceAll("\n", ",");
        stream3 = stream2.split(",");
        for (i = 0; i < stream3.length; i++) {
            // window.alert("Diccionari.add: " + stream3[i]);
            if (stream3[i] != "") {
                Diccionari.add(stream3[i]);
            }
        }        
      }
    }
    r.readAsText(f);
  } else { 
    window.alert("Failed to load file");
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
const Diccionari = fs.readFileSync('diccionari.txt', 'utf8').split('\n');
**/

function esComuna(contrasenya) {
    /**
    for (i = 1; i < Diccionari.length; i++)
        if (Diccionari[i] == contrasenya)
            return true;
    **/
   
    // Canviam estructura de dades Array() per Set()
    // return Diccionari.includes(contrasenya);
    return Diccionari.has(contrasenya.toLowerCase());
}

function teRepeticions(contrasenya) {
    const repeticionsMultiples = /(.)\1{2,}/; // Detecta tres o més repeticions consecutives
    return repeticionsMultiples.test(contrasenya.toLowerCase());
}

function tePatrons(contrasenya) {
    // cosnt patrons = [/123/, /abc/, /qwerty/]; // Afegir altres patrons si cal
    for (i = 0; i < patrons.length; i++) {
        // window.alert(patrons[i]);
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
        return Idioma.Massacomu;
    }

    if (tePatrons(contrasenya)) {
        return Idioma.Nopatrons;
    }

    if (teRepeticions(contrasenya)) {
        return Idioma.Norepmult;
    }

    if (!majuscules.test(contrasenya) || !minuscules.test(contrasenya) || !numeros.test(contrasenya)) {
        return Idioma.Majminnum;
    }

    if (!especials.test(contrasenya)) {
        return Idioma.Almcaresp;
    }

    if (contrasenya.length < longitudMinima) {
        return Idioma.Almmincar;
    }

    // La contrasenya sembla ser prou robusta
    return Idioma.Contrarob;
}
/**
const contrasenya = "Exxempl3!";
const resultat = comprovaRobustesa(contrasenya);
console.log(resultat);
**/

// Canviam els diferents literals de la GUI segons l'idioma
function CanviarIdioma(IdIdioma) {
    if ((IdIdioma != "ca") && (IdIdioma != "es")) {
        document.getElementById("Idiomes").value = IdIdioma;
    }
    AlaWeb_SQLite(IdIdioma);
    Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == IdIdioma);
    // window.alert("CanviarIdioma(" + IdIdioma + "). " + Idioma.Titol);
    
    document.title = Idioma.Titol;
    document.getElementById("Username").innerHTML = Idioma.Username;
    document.getElementById("Password").innerHTML = Idioma.Password;
    document.getElementById("Mostrar").innerHTML = Idioma.Mostrar;
    document.getElementById("Minimcar").innerHTML = Idioma.Minimcar;
    document.getElementById("Majuscula").innerHTML = Idioma.Majuscula;
    document.getElementById("Minuscula").innerHTML = Idioma.Minuscula;
    document.getElementById("Numero").innerHTML = Idioma.Numero;
    document.getElementById("Carespecial").innerHTML = Idioma.Carespecial;
    document.getElementById("Robustesa").innerHTML = Idioma.Robustesa;
    document.getElementById("inisessio").innerHTML = Idioma.Inisessio;
    document.getElementById("Diccionari").innerHTML = Idioma.Diccionari;
    document.getElementById("Patrons").innerHTML = Idioma.Patrons;
    document.getElementById("Mostrartaula").innerHTML = Idioma.Mostrartaula;    
}

// Funció per carregar la base de dades ContraSegur.db
function AlaWeb_SQLite(IdIdioma) {
    // window.alert("AlaWeb_SQLite IdIdioma = '" + IdIdioma + "'");
    config = {
        locateFile: filename => `/dist/${filename}`
        // locateFile: file => `https://sql.js.org/dist/${file}`
        // locateFile: filename => `https://unpkg.com/sql.js@1.6.2/dist/${filename}`
    };
    // The `initSqlJs` function is globally provided by all of the main dist files if loaded in the browser.
    // We must specify this locateFile function if we are loading a wasm file from anywhere other than the 
    // current html page's folder.

    // Recuperam de la base de dades els TextosGUI per tots els Idiomes
    // SELECT * FROM TblTextosGUI;
    alasql('ATTACH SQLITE DATABASE contrasegur("db/ContraSegur.db"); USE contrasegur; \n\
            SELECT * FROM TblTextosGUI;',
    //    [], function(idiomes) {Print_Data(TblTextosGUI = idiomes.pop());}
        [], function(idiomes) {SQL_TextosGUI(IdIdioma, idiomes.pop());}
    );

    // Recuperam de la base de dades el Diccionari del IdIdioma
    // SELECT Password FROM TblDiccionari WHERE IdIdioma IS NULL OR IdIdioma = "" OR IdIdioma = "ca";
    alasql('ATTACH SQLITE DATABASE contrasegur("db/ContraSegur.db"); USE contrasegur; \n\
            SELECT Password FROM TblDiccionari \n\
            WHERE IdIdioma IS NULL OR IdIdioma = "" OR IdIdioma = "' + IdIdioma + '";',
    //    [], function(diccionari) {Print_Data(TblDiccionari = diccionari.pop());}
        [], function(diccionari) {SQL_Diccionari(IdIdioma, diccionari.pop());}
    );  
    
    // Recuperam de la base de dades els Patrons del IdIdioma
    // SELECT Pattern FROM TblPatrons WHERE IdIdioma IS NULL OR IdIdioma = "" OR IdIdioma = "ca";
    alasql('ATTACH SQLITE DATABASE contrasegur("db/ContraSegur.db"); USE contrasegur; \n\
            SELECT Pattern FROM TblPatrons \n\
            WHERE IdIdioma IS NULL OR IdIdioma = "" OR IdIdioma = "' + IdIdioma + '";',
    //    [], function(diccionari) {Print_Data(TblPatrons = diccionari.pop());}
        [], function(diccionari) {SQL_Patrons(IdIdioma, diccionari.pop());}
    );  
}

function SQL_TextosGUI(IdIdioma, TblTextosGUI) {
    // window.alert("SQL_TextosGUI IdIdioma = '" + IdIdioma + "'");
    Idiomes = TblTextosGUI;
    if (Idiomes.length == 0) {Idiomes = Idiomes_dft;};
    if (Idiomes.find(Idioma => Idioma.IdIdioma == IdIdioma) == undefined) {
        window.alert("GUI: Idioma no trobat / Idioma no encontrado / Language not found!");
        Idiomes = Idiomes_dft;
    };  
    // window.alert(Idiomes[0].Titol);
}

function SQL_Patrons(IdIdioma, TblPatrons) {
    // window.alert("SQL_Patrons IdIdioma = '" + IdIdioma + "'");
    patrons = [];
    SqlPatrons = [];
    for (i = 0; i < TblPatrons.length; i++) {
        // console.log("TblPatrons[" + i + "].Pattern: " + TblPatrons[i].Pattern); 
        patrons[i] = new RegExp(TblPatrons[i].Pattern.replaceAll("/", ""));
        SqlPatrons[i] = TblPatrons[i].Pattern;
    }  
    // window.alert(TblPatrons[0].Pattern);
}
function SQL_Diccionari(IdIdioma, TblDiccionari) {
    // window.alert("SQL_Diccionari IdIdioma = '" + IdIdioma + "'");    
    Diccionari.clear();
    SqlDiccionari = [];
    for (var i in TblDiccionari) {
        // console.log("TblDiccionari[" + i + "].Password: " + TblDiccionari[i].Password); 
        Diccionari.add(TblDiccionari[i].Password);  
        SqlDiccionari[i] = TblDiccionari[i].Password; 
    } 
    // window.alert(Diccionari.size);  
    // if (Diccionari.length == 0) {
    if (Diccionari.size == 0) {
        window.alert("Idioma sense contrasenyes / Idioma sin contraseñas / Language without passwords!");
        Diccionari = Diccionari_dft;
        IdIdioma = "ca";
        IdIdioma_ant = "ca";
    } else {
        // window.alert("Contrasenyes en idioma / Contraseñas en idioma / Language passwords = '" + IdIdioma + "'");
    }; 
    // window.alert(TblDiccionari[0].Password);
}

function UPDATE_Diccionari(IdIdioma) {
    const myWindow = window.open("", "_blank", "width=640, height=640, left=15, top=235,\n\
        location=0, menubar=0, resizable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
    myWindow.document.open();
    myWindow.document.write("<html><head><title>SQL UPDATE TblDiccionari for SQLite Sudio</title></head>" + 
        "<body style='background-size: 640px 604px; " + 
        'background-image: url("img/passwordCL.png"); background-repeat: no-repeat;' +
        "'><p><a href='https://sqlitesudio.netlify.app/' target='_blank'> \n\
        <font size='+2'>SQL UPDATE TblDiccionari for SQLite Sudio IdIdioma='" + IdIdioma + "'</font></a></p>");
    // window.alert(SqlDiccionari);
    Diccionari.forEach (function(Password) {
        if (SqlDiccionari.includes(Password)) {
            myWindow.document.write("<p>UPDATE TblDiccionari SET <br>&nbsp;&nbsp;&nbsp; \n\
                MD5 = '" + md5(Password) + "', <br>&nbsp;&nbsp;&nbsp; \n\
                SHA1 = '" + SHA1(Password) + "', <br>&nbsp;&nbsp;&nbsp; \n\
                AES = '" + CryptoJS.AES.encrypt(Password, Password) + 
                "'<br> WHERE TblDiccionari.Password = '" + Password + "';</p>");
        }
    })
    myWindow.document.write("</body></html>");
    myWindow.document.close();            
}  

function INSERT_Diccionari(IdIdioma) {
    const myWindow = window.open("", "_blank", "width=640, height=640, left=15, top=235,\n\
        location=0, menubar=0, resizable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
    myWindow.document.open();
    myWindow.document.write("<html><head><title>SQL INSERT TblDiccionari for SQLite Sudio</title></head>" + 
        "<body style='background-size: 640px 604px; " + 
        'background-image: url("img/passwordCL.png"); background-repeat: no-repeat;' +
        "'><p><a href='https://sqlitesudio.netlify.app/' target='_blank'> \n\
        <font size='+2'>SQL INSERT TblDiccionari for SQLite Sudio IdIdioma='" + IdIdioma + "'</font></a></p> \n\
        <p>DELETE FROM TblDiccionari WHERE IdIdioma='" + IdIdioma + "';</p>");
    // window.alert(SqlDiccionari);
    Diccionari.forEach (function(Password) {
        /*
        console.log("Password:" + Password + ", \n\
                    !SqlDiccionari:" + !SqlDiccionari.includes(Password) + ", \n\
                    !tePatrons:" + !tePatrons(Password) + ", \n\
                    !teRepeticions:" + !teRepeticions(Password));
        */
        if (!SqlDiccionari.includes(Password) && !tePatrons(Password) && 
            !teRepeticions(Password)) {
            myWindow.document.write("<p>INSERT INTO TblDiccionari \n\
                (Password, IdIdioma, MD5, SHA1, AES) <br>VALUES ( \n\
                '" + Password + "', '" + IdIdioma + "', <br>&nbsp;&nbsp;&nbsp; \n\
                '" + md5(Password) + "', <br>&nbsp;&nbsp;&nbsp; \n\
                '" + SHA1(Password) + "', <br>&nbsp;&nbsp;&nbsp; \n\
                '" + CryptoJS.AES.encrypt(Password, Password) + "');</p>");
        }
    })
    myWindow.document.write("</body></html>");
    myWindow.document.close();            
} 
    
// Print data   
function Print_Data(res) {
    for (var i in res) 
    {
       // console.log("row " + i);
       // document.getElementById("res").innerHTML += "<br>";
       for (var j in res[i]) 
         {
          // console.log(" " + res[i][j]);
          // document.getElementById("res").innerHTML += res[i][j] + ", ";
          window.alert("res[" + i + "][" +j + "] = " + res[i][j]);
         }
    }
}

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

/**
* Secure Hash Algorithm (SHA1):
* https://coursesweb.net/javascript/sha1-encrypt-data_cs
**/
function SHA1(msg) {
    function rotate_left(n, s) {
        var t4 = (n << s) | (n >>> (32 - s));
        return t4;
    };
    
    /*
    function lsb_hex(val) {
        var str = '';
        var i;
        var vh;
        var vl;
        for (i = 0; i <= 6; i += 2) {
            vh = (val >>> (i * 4 + 4)) & 0x0f;
            vl = (val >>> (i * 4)) & 0x0f;
            str += vh.toString(16) + vl.toString(16);
        }
        return str;
    };
    */
   
    function cvt_hex(val) {
        var str = '';
        var i;
        var v;
        for (i = 7; i >= 0; i--) {
            v = (val >>> (i * 4)) & 0x0f;
            str += v.toString(16);
        }
        return str;
    };
    
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, '\n');
        var utftext = '';
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    };
    
    var blockstart;
    var i, j;
    var W = new Array(80);
    var H0 = 0x67452301;
    var H1 = 0xEFCDAB89;
    var H2 = 0x98BADCFE;
    var H3 = 0x10325476;
    var H4 = 0xC3D2E1F0;
    var A, B, C, D, E;
    var temp;
    msg = Utf8Encode(msg);
    var msg_len = msg.length;
    var word_array = new Array();
    for (i = 0; i < msg_len - 3; i += 4) {
        j = msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 |
                msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3);
        word_array.push(j);
    }
    switch (msg_len % 4) {
        case 0:
            i = 0x080000000;
            break;
        case 1:
            i = msg.charCodeAt(msg_len - 1) << 24 | 0x0800000;
            break;
        case 2:
            i = msg.charCodeAt(msg_len - 2) << 24 | msg.charCodeAt(msg_len - 1) << 16 | 0x08000;
            break;
        case 3:
            i = msg.charCodeAt(msg_len - 3) << 24 | msg.charCodeAt(msg_len - 2) << 16 | msg.charCodeAt(msg_len - 1) << 8 | 0x80;
            break;
    }
    word_array.push(i);
    while ((word_array.length % 16) != 14)
        word_array.push(0);
    word_array.push(msg_len >>> 29);
    word_array.push((msg_len << 3) & 0x0ffffffff);
    for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
        for (i = 0; i < 16; i++)
            W[i] = word_array[blockstart + i];
        for (i = 16; i <= 79; i++)
            W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
        A = H0;
        B = H1;
        C = H2;
        D = H3;
        E = H4;
        for (i = 0; i <= 19; i++) {
            temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }
        for (i = 20; i <= 39; i++) {
            temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }
        for (i = 40; i <= 59; i++) {
            temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }
        for (i = 60; i <= 79; i++) {
            temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }
        H0 = (H0 + A) & 0x0ffffffff;
        H1 = (H1 + B) & 0x0ffffffff;
        H2 = (H2 + C) & 0x0ffffffff;
        H3 = (H3 + D) & 0x0ffffffff;
        H4 = (H4 + E) & 0x0ffffffff;
    }
    var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

    return temp.toLowerCase();
}

/**
* JavaScript MD5 function:
* https://css-tricks.com/snippets/javascript/javascript-md5/ 
**/
var MD5 = function (string) {

   function RotateLeft(lValue, iShiftBits) {
           return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
   }

   function AddUnsigned(lX,lY) {
           var lX4,lY4,lX8,lY8,lResult;
           lX8 = (lX & 0x80000000);
           lY8 = (lY & 0x80000000);
           lX4 = (lX & 0x40000000);
           lY4 = (lY & 0x40000000);
           lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
           if (lX4 & lY4) {
                   return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
           }
           if (lX4 | lY4) {
                   if (lResult & 0x40000000) {
                           return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                   } else {
                           return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                   }
           } else {
                   return (lResult ^ lX8 ^ lY8);
           }
   }

   function F(x,y,z) { return (x & y) | ((~x) & z); }
   function G(x,y,z) { return (x & z) | (y & (~z)); }
   function H(x,y,z) { return (x ^ y ^ z); }
   function I(x,y,z) { return (y ^ (x | (~z))); }

   function FF(a,b,c,d,x,s,ac) {
           a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
           return AddUnsigned(RotateLeft(a, s), b);
   };

   function GG(a,b,c,d,x,s,ac) {
           a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
           return AddUnsigned(RotateLeft(a, s), b);
   };

   function HH(a,b,c,d,x,s,ac) {
           a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
           return AddUnsigned(RotateLeft(a, s), b);
   };

   function II(a,b,c,d,x,s,ac) {
           a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
           return AddUnsigned(RotateLeft(a, s), b);
   };

   function ConvertToWordArray(string) {
           var lWordCount;
           var lMessageLength = string.length;
           var lNumberOfWords_temp1=lMessageLength + 8;
           var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
           var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
           var lWordArray=Array(lNumberOfWords-1);
           var lBytePosition = 0;
           var lByteCount = 0;
           while ( lByteCount < lMessageLength ) {
                   lWordCount = (lByteCount-(lByteCount % 4))/4;
                   lBytePosition = (lByteCount % 4)*8;
                   lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
                   lByteCount++;
           }
           lWordCount = (lByteCount-(lByteCount % 4))/4;
           lBytePosition = (lByteCount % 4)*8;
           lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
           lWordArray[lNumberOfWords-2] = lMessageLength<<3;
           lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
           return lWordArray;
   };

   function WordToHex(lValue) {
           var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
           for (lCount = 0;lCount<=3;lCount++) {
                   lByte = (lValue>>>(lCount*8)) & 255;
                   WordToHexValue_temp = "0" + lByte.toString(16);
                   WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
           }
           return WordToHexValue;
   };

   function Utf8Encode(string) {
           string = string.replace(/\r\n/g,"\n");
           var utftext = "";

           for (var n = 0; n < string.length; n++) {

                   var c = string.charCodeAt(n);

                   if (c < 128) {
                           utftext += String.fromCharCode(c);
                   }
                   else if((c > 127) && (c < 2048)) {
                           utftext += String.fromCharCode((c >> 6) | 192);
                           utftext += String.fromCharCode((c & 63) | 128);
                   }
                   else {
                           utftext += String.fromCharCode((c >> 12) | 224);
                           utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                           utftext += String.fromCharCode((c & 63) | 128);
                   }

           }

           return utftext;
   };

   var x=Array();
   var k,AA,BB,CC,DD,a,b,c,d;
   var S11=7, S12=12, S13=17, S14=22;
   var S21=5, S22=9 , S23=14, S24=20;
   var S31=4, S32=11, S33=16, S34=23;
   var S41=6, S42=10, S43=15, S44=21;

   string = Utf8Encode(string);

   x = ConvertToWordArray(string);

   a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

   for (k=0;k<x.length;k+=16) {
           AA=a; BB=b; CC=c; DD=d;
           a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
           d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
           c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
           b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
           a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
           d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
           c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
           b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
           a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
           d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
           c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
           b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
           a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
           d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
           c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
           b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
           a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
           d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
           c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
           b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
           a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
           d=GG(d,a,b,c,x[k+10],S22,0x2441453);
           c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
           b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
           a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
           d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
           c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
           b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
           a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
           d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
           c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
           b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
           a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
           d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
           c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
           b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
           a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
           d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
           c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
           b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
           a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
           d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
           c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
           b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
           a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
           d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
           c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
           b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
           a=II(a,b,c,d,x[k+0], S41,0xF4292244);
           d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
           c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
           b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
           a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
           d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
           c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
           b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
           a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
           d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
           c=II(c,d,a,b,x[k+6], S43,0xA3014314);
           b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
           a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
           d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
           c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
           b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
           a=AddUnsigned(a,AA);
           b=AddUnsigned(b,BB);
           c=AddUnsigned(c,CC);
           d=AddUnsigned(d,DD);
        }

   	var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);

   	return temp.toLowerCase();
}