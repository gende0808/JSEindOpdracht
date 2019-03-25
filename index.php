<html>
<head>
<title>JavaScript Browser</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="materialize/css/materialize.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="node_modules/@mdi/font/css/materialdesignicons.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body class="grey lighten-4">
<nav>
    <div class="nav-wrapper">
        <ul id="nav" class="right">
            <li>
                <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Informatie over deze app</a>
            </li>
        </ul>
    </div>
</nav>
<div class="container">



    <!-- Modal Structure -->
    <div id="modal1" class="modal">
        <div class="modal-content">
            <h4>Over deze app</h4>
            <p>Dit is een voorbeeld voor de JavaScript Browser.</p>
            <p>De selectieknop in de rechteronderhoek geeft je de keuze tussen twee manieren van zoeken.</p>
            <p class="underlined thick">Optie 1: Wikipedia</p>
            <p>Bij het gebruik van deze optie wordt bij het invoeren van een zoekterm gezocht naar resultaten via de Wikipedia API</p>
            <p class="underlined thick">Optie 2: Runescape</p>
            <p>Bij het gebruik van deze optie wordt in een mysql database gezocht naar items die overeenkomen met het ingevoerde woord</p>
        </div>
    </div>
    <div class="row">
        <div class="fixed-action-btn">
            <a class="click-to-toggle btn-floating btn-large red mainbutton" id="wiki">
                <i class="mdi mdi-wikipedia"></i>
            </a>

            <ul>
                <li><a class="btn-floating red"><i class="mdi mdi-wikipedia" id="wiki"></i></a></li>
                <li><a class="btn-floating red"><i class="mdi mdi-currency-brl" id="rune"></i></a></li>
            </ul>
        </div>
        <form id="search" class="col s12 m12 l12">
            <div class="col l3 s3"></div>
            <div class="input-field col s6">
                <i class="material-icons
                    prefix">search</i>
                <input id="searchFor" type="text" class="validate">
                <label for="searchFor"></label>
            </div>
        </form>

    </div>
    <div class="row" id="panels">
    </div>
    </div>
</div>
</body>
</html>


<script src="jquery/jquery-3.3.1.min.js"></script>
<script src="materialize/js/materialize.js"></script>
<script src="js/custom.js"></script>