<html>
<head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="materialize/css/materialize.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="node_modules/@mdi/font/css/materialdesignicons.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body class="grey lighten-2">

<div class="container">

    <div class="row">
        <div class="fixed-action-btn">
            <a class="click-to-toggle btn-floating btn-large red mainbutton" id="wiki">
                <i class="mdi mdi-wikipedia"></i>
            </a>
            <ul>
                <li><a class="btn-floating red"><i class="mdi mdi-wikipedia" id="wiki"></i></a></li>
                <li><a class="btn-floating red"><i class="mdi mdi-chart-areaspline" id="rune"></i></a></li>
                <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
                <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
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