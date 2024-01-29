/* 
 * Versió α: Versió amb Nivell de Robustesa Contrasenyes Segures: robustesa.html i robustesa.js
 */

/**
 * És important conèixer quins aspectes faran que una contrasenya sigui robusta. 
 * Així, s’han d’evitar les contrasenyes més emprades:
 * https://es.statista.com/grafico/23636/contrasenas-mas-usadas-en-el-mundo/
**/
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

    var lletra = "";
    for (i = 0; i < password.length; i++) {
        lletra = password.charAt(i);
        // window.alert(lletra);

        // Comprovam la mida mímina
        if (password.length >= 8) {
            document.getElementById("minimcar").checked = true;
        } 
        
        // Comprovam que hi hagi un número
        if (!isNaN(lletra)) {
            document.getElementById("numero").checked = true;
            
        // Comprovam que hi hagi una lletra
        // if (((lletra.toLowerCase() >= "a") && (lletra.toLowerCase() <= "z")) || 
        //             (lletra.toLowerCase() == "ñ") || (lletra.toLowerCase() == "ç")) {             

            
        // Si no és un número ni una lletra, aleshores serà un caràcter especial
        } else if (lletra === lletra.toUpperCase() && lletra === lletra.toLowerCase()) {
            document.getElementById("carespecial").checked = true;
            // Comprovam que hi hagi una lletra majúscula    
            } else {if (lletra === lletra.toUpperCase()) {
                document.getElementById("majuscula").checked = true;
            // Comprovam que hi hagi una lletra minúscula    
            } else if (lletra === lletra.toLowerCase()) {
                document.getElementById("minuscula").checked = true;
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
    CostComputacional = Math.pow(Base , Exponent) / 10e6; // Per una màquina a 1 MIPS 
    
    // Too guessable: risky password. (guesses < 10e3)
    if (CostComputacional < 10e3)        Robustesa = 0; 
    // Very guessable: protection from throttled online attacks. (guesses < 10e6)
    else if (CostComputacional < 10e6)   Robustesa = 1; 
    // Somewhat guessable: protection from unthrottled online attacks. (guesses < 10e8)
    else if (CostComputacional < 10e8)  Robustesa = 2;
    // Safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 10e10)
    else if (CostComputacional < 10e10)  Robustesa = 3; 
    // Very unguessable: strong protection from offline slow-hash scenario. (guesses >= 10e10)
    else                                Robustesa = 4; 
    
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
    
    window.alert("Password: "                + document.getElementById("password").value + "\n\
            - " + comprovaRobustesaContrasenya(document.getElementById("password").value) + "\n\
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

function comprovaRobustesaContrasenya(contrasenya) {
    if (!document.getElementById("majuscula").checked ||
        !document.getElementById("minuscula").checked ||
        !document.getElementById("numero").checked) {
        return "La contrasenya ha de contenir almenys una lletra majúscula, una minúscula i un número.";
    }
    if (!document.getElementById("carespecial").checked) {
        return "La contrasenya ha de contenir almenys un caràcter especial.";
    }
    if (!document.getElementById("minimcar").checked) {
        return "La contrasenya és massa curta. Ha de tenir almenys 8 caràcters.";
    }
    // La contrasenya sembla ser prou robusta
    return "Contrasenya robusta!";
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