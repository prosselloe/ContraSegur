/* 
Versió β: Versió amb Estructures de Dades Joc del Penjat: estructures.html i estructures.js
*/
    // Diferents idiomes per la GUI
    const Idiomes = [
        {
            "IdIdioma": "ca",
            "Titol": "Versió amb Estructures de Dades Joc del Penjat",
            "Versio": "Versió β Joc del Penjat",
            "Input": "Escriu una lletra minúscula",
            "Pregunta": "Anam a la quinta forca?",
            "Comprovar": "Comprovar",
            "Paraula": "Paraula:",
            "Sopes": "Demanes sopes?",
            "Pista": "Pista",
            "Vides": "Vides:",
            "Moix": "Un moix en té set?",
            "Lletres": "Lletres:",
            "Ets": "Ets de lletres?",
            "URLpistes": "URLpistes:",
            "Dita": "Dita",
            "Dita1": "A la quinta forca, ",
            "Dita2": "A ca un penjat, no hi anomenis cordes, ",
            "Dita3": "Setze jutges d'un jutjat mengen fetge d'un penjat, …",
            "Credits": "Crèdits:",
            "YouTube": "Joc Penjat on Scratch",
            "Wikis": "Penjat",
            "Idioma": "en Català",
            "Diccionari": "Diccionari",
            "Teclat": "Mostra o Amaga",
            "Incorrecte": "Caràcter incorrecte!",
            "Repetida": "Lletra repetida!",
            "Encertat": "Has encertat!",
            "Guanyat": "i has guanyat!",
            "Fallat": "Has fallat!",
            "Perdut": "i has perdut!",
            "Descansi": "En pau descansi – RIP!",
            "Puntuacio": "Puntuació:"
        },
        {
            "IdIdioma": "es",
            "Titol": "Versión con Estructuras de Datos Juego del Ahorcado",
            "Versio": "Versión β Juego del Ahorcado",
            "Input": "Escribe una letra minúscula",
            "Pregunta": "Vamos al quinto pino?",
            "Comprovar": "Comprobar",
            "Paraula": "Palabra:",
            "Sopes": "Te rindes?",
            "Pista": "Pista",
            "Vides": "Vidas:",
            "Moix": "Un gato tiene siete?",
            "Lletres": "Letras:",
            "Ets": "Eres de letras?",
            "URLpistes": "URLpistas:",
            "Dita": "Dicho",
            "Dita1": "Al quinto pino, ",
            "Dita2": "En casa de un ahorcado, no hables de cuerdas,",
            "Dita3": "Dieciséis jueces de un juzgado comen hígado de un ahorcado, …",
            "Credits": "Crèditos:",
            "YouTube": "Juego Ahorcado on Scratch",
            "Wikis": "Ahorcado",
            "Idioma": "en Español",
            "Diccionari": "Diccionario",
            "Teclat": "Muestra o Esconde",
            "Incorrecte": "Carácter incorrecto!",
            "Repetida": "Letra repetida!",
            "Encertat": "Has acertado!",
            "Guanyat": "y has ganado!",
            "Fallat": "Has fallado!",
            "Perdut": "y has perdido!",
            "Descansi": "En paz descanse - RIP!",
            "Puntuacio": "Puntuación:"
        },
        {
            "IdIdioma": "en",
            "Titol": "Hangman Game Data Structures Version",
            "Versio": "Hangman Game β Version",
            "Input": "Write a lowercase letter",
            "Pregunta": "Are we going to the boondocks?",
            "Comprovar": "Check it",
            "Paraula": "Word:",
            "Sopes": "You give up?",
            "Pista": "Clue",
            "Vides": "Lives:",
            "Moix": "A cat has seven?",
            "Lletres": "Letters:",
            "Ets": "Are you in liberal arts?",
            "URLpistes": "URLclues:",
            "Dita": "Saying",
            "Dita1": "To the boondocks,",
            "Dita2": "In a hanged man's home, don't talk about ropes,",
            "Dita3": "Sixteen judges of a court eat the liver of a hangman, …",
            "Credits": "Credits:",
            "YouTube": "Hangman Game on Scratch",
            "Wikis": "Hangman",
            "Idioma": "in English",
            "Diccionari": "Dictionary",
            "Teclat": "Show or Hide",
            "Incorrecte": "Wrong character!",
            "Repetida": "Repeated letter!",
            "Encertat": "You're right!",
            "Guanyat": "and you have won!",
            "Fallat": "You have failed!",
            "Perdut": "and you have lost!",
            "Descansi": "Rest in peace - RIP!",
            "Puntuacio": "Score:"
        },
        {
            "IdIdioma": "fr",
            "Titol": "Version avec Base de Données Jeu du Pendu",
            "Versio": "Version γ Jeu du Pendu",
            "Input": "Ecrire une lettre minuscule",
            "Pregunta": "Allons-nous aux banlieue?",
            "Comprovar": "Vérifier",
            "Paraula": "Mot:",
            "Sopes": "Tu abandonnes?",
            "Pista": "Indice",
            "Vides": "Vies:",
            "Moix": "Un chat en a sept?",
            "Lletres": "Lettres:",
            "Ets": "Êtes-vous dans les lettres?",
            "URLpistes": "URLindices:",
            "Dita": "Dit",
            "Dita1": "Aux banlieue,",
            "Dita2": "Chez un pendu, ne parle pas de cordes,",
            "Dita3": "Seize juges d'un tribunal mangent le foie d'un pendu, …",
            "Credits": "Crédits:",
            "YouTube": "Jeu Pendu sur Scratch",
            "Wikis": "Pendu",
            "Idioma": "en Français",
            "Diccionari": "Dictionnaire",
            "Teclat": "Afficher ou Masquer",
            "Incorrecte": "Caractère non valide!",
            "Repetida": "Lettre répétée!",
            "Encertat": "Vous as raison!",
            "Guanyat": "et vous avez gagné!",
            "Fallat": "Vous avez échoué!",
            "Perdut": "et vous avez perdu!",
            "Descansi": "Repose en paix - RIP!",
            "Puntuacio": "Score:"
        }
    ]
    var Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == "ca");

    // Variables Globals.
    var Paraula = [];
    var Lletres = ["_", "_", "_", "_", "_", "_", "_"];
    var Vides = 7;
    var Punts = 0;
    var IdIdioma_ant = "";

    // Llista de paraules per al joc i les pistes associades
    var paraules = ["cordes", "fetge", "forca", "jutges", 
        "jutjat", "mengen", "penjat", "quinta", "setze"];
    var pistes = ["A la quinta forca", 
        "A ca un penjat, no hi anomenis cordes", 
        "Setze jutges d'un jutjat mengen fetge d'un penjat"];
    var paraulespistes = [1, 2, 0, 2, 2, 2, 1, 0, 2];
    
    // Simulam una taula de base de dades amb un array d'objectes
    var taula = [
        {"Paraula": "cordes", "Pista": "A ca un penjat, no hi anomenis cordes"},
        {"Paraula": "fetge", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "forca", "Pista": "A la quinta forca"},
        {"Paraula": "jutges", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "jutjat", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "mengen", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "penjat", "Pista": "A ca un penjat, no hi anomenis cordes"},
        {"Paraula": "quinta", "Pista": "A la quinta forca"},
        {"Paraula": "setze", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        
        {"Paraula": "ahorcado", "Pista": "En casa del ahorcado, no hay que mentar la soga"},
        {"Paraula": "mentar", "Pista": "En casa del ahorcado, no hay que mentar la soga"},
        {"Paraula": "soga", "Pista": "En casa del ahorcado, no hay que mentar la soga"},
        {"Paraula": "miente", "Pista": "El que miente es adorado, el que dice la verdad, ahorcado"},
        {"Paraula": "adorado", "Pista": "El que miente es adorado, el que dice la verdad, ahorcado"},
        {"Paraula": "verdad", "Pista": "El que miente es adorado, el que dice la verdad, ahorcado"},
        {"Paraula": "ladrón", "Pista": "Tan bien parece el ladrón ahorcado, como en el altar el santo"},
        {"Paraula": "altar", "Pista": "Tan bien parece el ladrón ahorcado, como en el altar el santo"},
        {"Paraula": "santo", "Pista": "Tan bien parece el ladrón ahorcado, como en el altar el santo"},
        
        {"Paraula": "god", "Pista": "God tempers the wind to the shorn lamb"},
        {"Paraula": "wind", "Pista": "God tempers the wind to the shorn lamb"},
        {"Paraula": "lamb", "Pista": "God tempers the wind to the shorn lamb"},
        {"Paraula": "dog", "Pista": "Give a dog a bad name and hang it"},
        {"Paraula": "name", "Pista": "Give a dog a bad name and hang it"},
        {"Paraula": "hang", "Pista": "Give a dog a bad name and hang it"},
        {"Paraula": "healthy", "Pista": "Early to bed, early to rise, makes the man healthy, wealthy and wise"},
        {"Paraula": "wealthy", "Pista": "Early to bed, early to rise, makes the man healthy, wealthy and wise"},
        {"Paraula": "wise", "Pista": "Early to bed, early to rise, makes the man healthy, wealthy and wise"}   
    ];
    
    // Escull una paraula aleatòriament
    var aleatori = Math.floor(Math.random() * paraules.length);
    var paraula = paraules[aleatori];
    var pista = pistes[paraulespistes[aleatori]];
    
    // Alternativament, fent servir l'array d'objectes
    // window.alert(taula.length);
    aleatori = Math.floor(Math.random() * taula.length);
    paraula = taula[aleatori].Paraula;
    pista = taula[aleatori].Pista;
    // window.alert("aleatori="  + aleatori + ", paraula=" + paraula + ", pista=" + pista);
    
    // Assignam la bandera de l'idioma de la paraula
    if (aleatori <  9) { IdIdioma_ant = "ca"; } else 
    if (aleatori < 18) { IdIdioma_ant = "es"; } else 
                       { IdIdioma_ant = "gb"; }                               
    
    // Marcam cada lletra amb un "_"
    for (var i = 0; i < paraula.length; i++) {
        Paraula[i] = "_";
    }

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
         * Comprovam que la lletra no sigui repetida, Inici
        */    
        if ((Paraula.indexOf(lletra) != -1) || (Lletres.indexOf(lletra) != -1)) {
            document.getElementById("disfraz3").hidden = false;
            document.getElementById("disfraz2").hidden = true;
            document.getElementById("disfraz1").hidden = true;
            window.alert(Idioma.Repetida);
        } else {
            
        /*
         * Cercam la posició de la lletra a la paraula, si no hi es, obtenim -1
         */
        var pos = paraula.indexOf(lletra);
        if ((pos != -1) && (lletra != "")) {
            if (document.getElementById('off').hidden) {            
                document.getElementById("miau").play();
            }
            document.getElementById("disfraz3").hidden = true;
            document.getElementById("disfraz2").hidden = false;
            document.getElementById("disfraz1").hidden = true;
            window.alert(Idioma.Encertat);

            // Afegim lletra a Paraula i actualitzam la pantalla.
            for (var i = pos; i < paraula.length; i++) {
              if (paraula[i] == lletra) {
                Paraula[i] = lletra;
              }
            }
            document.getElementById("paraula").innerHTML = Paraula;
        } else if (((lletra >= "a") && (lletra <= "z")) || 
                    (lletra == "ñ") || (lletra == "-") || 
                    (lletra == "ç") || (lletra == "·")) {
            if (document.getElementById('off').hidden) {
                document.getElementById("boom_cloud").play();
            }
            document.getElementById("disfraz3").hidden = true;
            document.getElementById("disfraz2").hidden = true;
            document.getElementById("disfraz1").hidden = false;
            window.alert(Idioma.Fallat);

            // Afegim lletra a Lletres i actualitzam la pantalla.
            // Lletres = Lletres + "<del>" + lletra + "<del>,";
            // Lletres.push(lletra);
            Lletres[7 - Vides] = lletra;
            document.getElementById("lletres").innerHTML = Lletres;
            
            // Decrementam el comptador Vides.    
            // Vides = Vides - 1;
            Vides--;
            // window.alert(Vides);

            // Mostram la imatge corresponent.
            MostraImg();
        } else {
            document.getElementById("disfraz3").hidden = false;
            document.getElementById("disfraz2").hidden = true;
            document.getElementById("disfraz1").hidden = true;
            window.alert(Idioma.Incorrecte);
        }
        
        /*
         * Comprovam que la lletra no sigui repetida. Final
        */
        }
        
        document.getElementById("lletra").focus();

        // Actualitzam Vides a la pantalla.
        document.getElementById("vides").innerHTML = 
                "&nbsp;&nbsp;&nbsp;\n\
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vides;

        // Comprovam si has perdut! o has guanyat!.
        if (Vides <= 0) {
            window.alert(Idioma.Perdut);
            document.body.style.backgroundImage = "url('img/Jungle.png')";
            document.getElementById("disfraz1").hidden = true;
            document.getElementById("rotar").hidden = false;
            if (document.getElementById('off').hidden) {
                document.getElementById("cat-fight").play();
                const myTimeout6 = setTimeout(BellTollX3Play, 6000);
            }            
            AturaTot();
        } else {
            if (Paraula.indexOf("_") == -1) {
                AmagaImg();
                document.getElementById("ahorcado").hidden = false;
                
                // Calculam i mostram la puntuació
                Punts = paraula.length * Vides * 10 - document.getElementById("Segons").innerHTML;
                if (Punts < 0) { Punts = 0; };
                document.getElementById("Punts").innerHTML = Idioma.Puntuacio + " " + Punts;
                
                window.alert(Idioma.Guanyat);
                document.body.style.backgroundImage = "url('img/Party.png')";
                document.getElementById("disfraz2").hidden = true;
                document.getElementById("caminar").hidden = false;
                if (document.getElementById('off').hidden) {
                    document.getElementById("cheer").play();
                }
                AturaTot();
            } else {
                if (document.getElementById('off').hidden) {
                    // document.getElementById("clock_ticking").loop = true;
                    document.getElementById("clock_ticking").play();
                    // const myTimeout3 = setTimeout(BellTollPlay, 3000);
                }
            }
        }
    }

    function BellTollPlay() {
        document.getElementById("bell_toll").play();
    }    

    function BellTollX3Play() {
        window.alert(Idioma.Descansi);
        document.getElementById("bell_toll_x3").play();
    }            

    // Deshabilitam tant <input id="lletra" com <button id="comprovar".
    function AturaTot() {
        document.getElementById("lletra").disabled = true;
        document.getElementById("comprovar").disabled = true;
        document.getElementById('teclat').disabled = true;
        document.getElementById('sons').disabled = true;
        document.getElementById("pista").disabled = true;
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
        document.getElementById('Teclat').hidden = true;
        
        document.getElementById("paraula").innerHTML = Paraula;
        document.body.style.display = "block";

        // Cream els options del Select pels Idiomes sense "ca" i "es"
        var IdiomesSelect = document.getElementById('Idiomes');
        IdiomesSelect.options.length = 0;
        Idiomes.forEach(function(idioma){
            if ((idioma.IdIdioma != "ca") && (idioma.IdIdioma != "es")) {
                opcion = document.createElement('option');
                opcion.value = idioma.IdIdioma;
                opcion.text = idioma.IdIdioma;
                IdiomesSelect.add(opcion);
            }
        });
        
        // Mostram la bandera de l'idioma de la paraula
        document.getElementById("bandera").src = "img/" + IdIdioma_ant + ".png";
    }

    // Canviam els diferents literals de la GUI segons IdIdioma
    function CanviarIdioma(IdIdioma) {
        if ((IdIdioma != "ca") && (IdIdioma != "es")) {
            document.getElementById("Idiomes").value = IdIdioma;
        }
        if (Idiomes.find(Idioma => Idioma.IdIdioma == IdIdioma) == undefined) {
            window.alert("GUI: Idioma no trobat / Idioma no encontrado / Language not found!");
        } else {
            Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == IdIdioma);
        }
        
        document.title = Idioma.Titol;
        document.getElementById("Versio").innerHTML = Idioma.Versio;
        document.getElementById("lletra").placeholder = Idioma.Input;
        document.getElementById("comprovar").innerHTML = Idioma.Comprovar;
        document.getElementById("Paraula").innerHTML = Idioma.Paraula;
        document.getElementById("Sopes").innerHTML = Idioma.Sopes;
        document.getElementById("pista").innerHTML = Idioma.Pista;        
        document.getElementById("Vides").innerHTML = Idioma.Vides;
        document.getElementById("Moix").innerHTML = Idioma.Moix;
        document.getElementById("Lletres").innerHTML = Idioma.Lletres;
        document.getElementById("Ets").innerHTML = Idioma.Ets;
        document.getElementById("URLpistes").innerHTML = Idioma.URLpistes;
        document.getElementById("Dita1").title = Idioma.Dita1;
        document.getElementById("Dita_1").innerHTML = Idioma.Dita + " 1";
        document.getElementById("Dita2").title = Idioma.Dita2;
        document.getElementById("Dita_2").innerHTML = Idioma.Dita + " 2";
        document.getElementById("Dita3").title = Idioma.Dita3;
        document.getElementById("Dita_3").innerHTML = Idioma.Dita + " 3";
        document.getElementById("Credits").innerHTML = Idioma.Credits;
        document.getElementById("Scratch").innerHTML = Idioma.YouTube;
        document.getElementById("YouTube").innerHTML = Idioma.YouTube;
        document.getElementById("teclat").title = Idioma.Teclat;
        if (Punts > 0) {
            document.getElementById("Punts").innerHTML = Idioma.Puntuacio + " " + Punts;
        }

        if ((IdIdioma != "ca") && (IdIdioma != "es")) {
            // Per a l'idioma "en = English" la bandera es la de "gb = Great Britain"  
            if (IdIdioma == "en") { IdIdioma = "gb"; }                                 
            document.getElementById("gb").src = "img/" + IdIdioma + ".png";        
        }
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