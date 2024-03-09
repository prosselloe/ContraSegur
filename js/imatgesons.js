/* 
Versió α: Versió amb Imatges i Sons Joc del Penjat: imatgesons.html i imatgesons.js
*/
    // Variables Globals.
    var Paraula = ""; 
    var Lletres = "";
    var Vides = 7;

    // Funció per tractar la tecla de retrocés, BACKSPACE, del teclat en pantalla
    function Retroces() {
        var temporal = document.getElementById('lletra').value;
        temporal = temporal.substring(0, temporal.length - 1); 
        document.getElementById('lletra').value = temporal;
    } 
    
    // Comprovam si la lletra es troba a la Paraula.
    function Comprovar() {
        // Variables Locals.
        var lletra = document.getElementById("lletra").value;
        // Assignam el valor <input id="lletra" a lletra, 
        // i deixam <input id="lletra" en blanc.
        document.getElementById("lletra").value = "";
        // window.alert(lletra);

        // Convertim les majúsculues a minúscules
        lletra = lletra.toLowerCase();

        // Eliminam els accents o dièresis de les vocals
        switch (lletra) {
            case "á":
            case "à":
                lletra = "a";
                break;
            case "é":
            case "è":
                lletra = "e";
                break;
            case "í":
            case "ï":
                lletra = "i";
                break;
            case "ó":
            case "ò":
                lletra = "o";
                break;
            case "ú":
            case "ü":
                lletra = "u";
                break;
            default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
        }

        /*
         * L'abecedari català + castellà es composa 
         * de les vint-i-vuit lletres següents: 
         * a, b, c, ç, d, e, f, g, h, i, j, k, l, m, (Has encertat!)
         * n, ñ, o, p, q, r, s, t, u, v, w, x, y, z. (Has fallat!)
         */
        if (((lletra >= "a") && (lletra <= "m")) || (lletra == "ç") || 
             (lletra == "·")) {
            document.getElementById("miau").play();
            document.getElementById("disfraz3").hidden = true;
            document.getElementById("disfraz2").hidden = false;
            document.getElementById("disfraz1").hidden = true;
            window.alert("Has encertat!");

            // Afegim lletra a Paraula i actualitzam la pantalla.
            Paraula = Paraula + lletra + " ";
            document.getElementById("Paraula").innerHTML = Paraula;
        } else if (((lletra >= "n") && (lletra <= "z")) || (lletra == "ñ") || 
                    (lletra == "-")) {
            document.getElementById("boom_cloud").play();
            document.getElementById("disfraz3").hidden = true;
            document.getElementById("disfraz2").hidden = true;
            document.getElementById("disfraz1").hidden = false;
            window.alert("Has fallat!");

            // Afegim lletra a Lletres i actualitzam la pantalla.
            Lletres = Lletres + "<del>" + lletra + "<del> ";
            document.getElementById("Lletres").innerHTML = Lletres;

            // Decrementam el comptador Vides.    
            Vides = Vides - 1;
            // window.alert(Vides);

            // Mostram la imatge corresponent.
            MostraImg();
        } else {
            document.getElementById("disfraz3").hidden = false;
            document.getElementById("disfraz2").hidden = true;
            document.getElementById("disfraz1").hidden = true;
            window.alert("Caràcter incorrecte!");
        }
        document.getElementById("lletra").focus();

        // Actualitzam Vides a la pantalla.
        document.getElementById("Vides").innerHTML = 
                "&nbsp;&nbsp;&nbsp;\n\
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vides;

        // Comprovam si has perdut! o has guanyat!.
        if (Vides <= 0) {
            window.alert("i has perdut!");
            document.body.style.backgroundImage = "url('img/Jungle.png')";
            document.getElementById("disfraz1").hidden = true;
            document.getElementById("rotar").hidden = false;
            document.getElementById("cat-fight").play();
            const myTimeout6 = setTimeout(BellTollX3Play, 6000);
            AturaTot();
        } else {
            if (Paraula.length >= 14) {
                AmagaImg();
                document.getElementById("ahorcado").hidden = false;
                window.alert("i has guanyat!");
                document.body.style.backgroundImage = "url('img/Party.png')";
                document.getElementById("disfraz2").hidden = true;
                document.getElementById("caminar").hidden = false;
                document.getElementById("cheer").play();
                AturaTot();
            } else {
                // document.getElementById("clock_ticking").loop = true;
                document.getElementById("clock_ticking").play();
                // const myTimeout3 = setTimeout(BellTollPlay, 3000);
            }
        }
    }

    function BellTollPlay() {
        document.getElementById("bell_toll").play();
    }    

    function BellTollX3Play() {
        window.alert("En pau descansi – RIP!");
        document.getElementById("bell_toll_x3").play();
    }            

    // Deshabilitam tant <input id="lletra" com <button id="comprovar".
    function AturaTot() {
        document.getElementById("lletra").disabled = true;
        document.getElementById("comprovar").disabled = true;
        document.getElementById('teclat').disabled = true;
        document.getElementById("Segons").hidden = true;    
    }

    // Amagam totes les imatges.
    function AmagaImg() {
        document.getElementById("ahorcado_6").hidden = true;
        document.getElementById("ahorcado_5").hidden = true;
        document.getElementById("ahorcado_4").hidden = true;
        document.getElementById("ahorcado_3").hidden = true;
        document.getElementById("ahorcado_2").hidden = true;
        document.getElementById("ahorcado_1").hidden = true;
        document.getElementById("ahorcado_0").hidden = true;
        document.getElementById("ahorcado").hidden = true;

        // document.getElementById("disfraz3").hidden = true;
        document.getElementById("disfraz2").hidden = true;
        document.getElementById("disfraz1").hidden = true;
        document.getElementById("caminar").hidden = true;
        document.getElementById("rotar").hidden = true;

        document.getElementById("Audios").style.display = "none";
        document.getElementById("sons").disabled = true;
        document.getElementById("pista").disabled = true;
        document.getElementById('Teclat').hidden = true;
        
        document.body.style.display = "block";
        
        // CanviarIdioma("en");
    }
    
    // Canviam els diferents literals de la GUI segons l'idioma
    function CanviarIdioma(IdIdioma) {
        document.getElementById("Idiomes").value = IdIdioma;
        document.getElementById("en").href = 
            "https://penjat--github-netlify-app.translate.goog/imatgesons.html?_x_tr_sl=auto&_x_tr_tl=" + 
            IdIdioma + "&_x_tr_hl=" + IdIdioma;
        if (IdIdioma == "ca") {
            document.getElementById("ca").disabled = true;
            document.getElementById("es").disabled = false;
        } else if (IdIdioma == "es") {
            document.getElementById("ca").disabled = false;
            document.getElementById("es").disabled = true;
        } else {
            document.getElementById("ca").disabled = false;
            document.getElementById("es").disabled = false;
        }
    
        // Per a l'idioma "en = English" la bandera es la de "gb = Great Britain"  
        if (IdIdioma == "en") { IdIdioma = "gb" }                                 
        document.getElementById("gb").src = "img/" + IdIdioma + ".png";        
    }
  
    // Mostram la imatge corresponent.
    function MostraImg() {
        switch (Vides) {
            case 6:
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
                document.getElementById("ahorcado_6").hidden = false;
                break;
            case 5:
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
                document.getElementById("ahorcado_5").hidden = false;
                document.getElementById("ahorcado_6").hidden = true;
                break;
            case 4:
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor3
                document.getElementById("ahorcado_4").hidden = false;
                document.getElementById("ahorcado_5").hidden = true;
                break;
            case 3:
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor4
                document.getElementById("ahorcado_3").hidden = false;
                document.getElementById("ahorcado_4").hidden = true;
                break;
            case 2:
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor5
                document.getElementById("ahorcado_2").hidden = false;
                document.getElementById("ahorcado_3").hidden = true;
                break;
            case 1:
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor6
                document.getElementById("ahorcado_1").hidden = false;
                document.getElementById("ahorcado_2").hidden = true;
                break;
            case 0:
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor7
                document.getElementById("ahorcado_0").hidden = false;
                document.getElementById("ahorcado_1").hidden = true;
                break;
            default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
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