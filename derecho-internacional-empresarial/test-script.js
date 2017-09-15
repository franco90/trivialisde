/* inicialización de variables: Nombre del Curso, preguntas... */
var titulo_programa = "Derecho Internacional y Empresarial";
var nombre_master = "MÁSTER EN DERECHO INTERNACIONAL Y EMPRESARIAL";
var link_master = "http://www.isdemasters.com";
var mensaje1 = "¡Deberías dedicarte profesionalmente al " + titulo_programa;
var mensaje2 = "¡Tienes aptitudes! ¿Has pensado dedicarte profesionalmente al " + titulo_programa + "?";
var mensaje3 = "Con la formación adecuada podrías llegar a ser un experto en " + titulo_programa;
var mensaje4 = "No está mal...Te recomendamos reforzar tu formación en " + titulo_programa;
var mensaje5 = "Esta no es tu especialidad";

$("#titulo h1").append("Cuánto sabes de " + titulo_programa);



function anadir(i, p, r1, r2, r3) {
    $("#p-" + i + " h2").append(p);
    $("#preg" + i + "_1").next().append(r1);
    $("#preg" + i + "_2").next().append(r2);
    $("#preg" + i + "_3").next().append(r3);
}



/* Ocultamos todas las section que hay, es decir, todas las preguntas e inmediatamente después mostramos la pregunta 1 */
$("section").hide();
$("#p-1").show();
var art1 = $("#art1");
art1.toggleClass("block");

var puntos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //array para acumular el puntaje obtenido

$(document).ready(function () {
    $("label").click(function () {

        $.get("buscar.php", {
            b: "pregunta_diez"
        }, function (mensaje) {

            if ($("#form10 input[name='preg10']:radio").is(':checked')) {

                var attr = $("#form10 input[name='preg10']:radio").attr('disabled');

                if (typeof attr == typeof undefined) {
                    $("#art10").toggleClass("block");
                }

                $("#form10 input[name='preg10']:radio").attr('disabled', true);
                if ($(".diez").is(":visible")) {

                    $("#art10").toggleClass("block");
                    $(".principal").show();

                }
                $(".diez").hide();


                if ($('input:radio[name=preg10]:checked').val() === mensaje) {
                    $("#p-10 h2").addClass("right");
                    puntos[9] = 1;

                } else {
                    $("#p-10 h2").addClass("wrong");
                }
                $("#modal-resultados").click();
                parar();
            }

        });

        $.get("buscar.php", {
            b: "pregunta_nueve"
        }, function (mensaje) {

            if ($("#form9 input[name='preg9']:radio").is(':checked')) {

                var attr = $("#form9 input[name='preg9']:radio").attr('disabled');

                if (typeof attr == typeof undefined) {
                    $("#art9").toggleClass("block");
                    $("#p-10").show();
                    $("#art10").toggleClass("block");
                }
                $("#form9 input[name='preg9']:radio").attr('disabled', true);


                if ($('input:radio[name=preg9]:checked').val() === mensaje) {
                    $("#p-9 h2").addClass("right");
                    puntos[8] = 1;
                } else {
                    $("#p-9 h2").addClass("wrong");
                }
            }

        });

        $.get("buscar.php", {
            b: "pregunta_ocho"
        }, function (mensaje) {

            if ($("#form8 input[name='preg8']:radio").is(':checked')) {

                var attr = $("#form8 input[name='preg8']:radio").attr('disabled');

                if (typeof attr == typeof undefined) {
                    $("#art8").toggleClass("block");
                    $("#p-9").show();
                    $("#art9").toggleClass("block");
                }
                $("#form8 input[name='preg8']:radio").attr('disabled', true);

                if ($('input:radio[name=preg8]:checked').val() === mensaje) {
                    $("#p-8 h2").addClass("right");
                    puntos[7] = 1;
                } else {
                    $("#p-8 h2").addClass("wrong");
                }
            }

        });

        $.get("buscar.php", {
            b: "pregunta_siete"
        }, function (mensaje) {

            if ($("#form7 input[name='preg7']:radio").is(':checked')) {

                var attr = $("#form7 input[name='preg7']:radio").attr('disabled');

                if (typeof attr == typeof undefined) {
                    $("#art7").toggleClass("block");
                    $("#p-8").show();
                    $("#art8").toggleClass("block");
                }

                $("#form7 input[name='preg7']:radio").attr('disabled', true);


                if ($('input:radio[name=preg7]:checked').val() === mensaje) {
                    $("#p-7 h2").addClass("right");
                    puntos[6] = 1;
                } else {
                    $("#p-7 h2").addClass("wrong");
                }
            }

        });

        $.get("buscar.php", {
            b: "pregunta_seis"
        }, function (mensaje) {

            if ($("#form6 input[name='preg6']:radio").is(':checked')) {

                var attr = $("#form6 input[name='preg6']:radio").attr('disabled');

                if (typeof attr == typeof undefined) {
                    $("#art6").toggleClass("block");
                    $("#p-7").show();
                    $("#art7").toggleClass("block");
                }


                $("#form6 input[name='preg6']:radio").attr('disabled', true);


                if ($('input:radio[name=preg6]:checked').val() === mensaje) {
                    $("#p-6 h2").addClass("right");
                    puntos[5] = 1;
                } else {
                    $("#p-6 h2").addClass("wrong");
                }
            }
        });



        $.get("buscar.php", {
            b: "pregunta_cinco"
        }, function (mensaje) {

            if ($("#form5 input[name='preg5']:radio").is(':checked')) {

                var attr = $("#form5 input[name='preg5']:radio").attr('disabled');

                if (typeof attr == typeof undefined) {
                    $("#art5").toggleClass("block");
                    $("#p-6").show();
                    $("#art6").toggleClass("block");
                }


                $("#form5 input[name='preg5']:radio").attr('disabled', true);


                if ($('input:radio[name=preg5]:checked').val() === mensaje) {
                    $("#p-5 h2").addClass("right");
                    puntos[4] = 1;
                } else {
                    $("#p-5 h2").addClass("wrong");
                }
            }
        });

        $.get("buscar.php", {
            b: "pregunta_cuatro"
        }, function (mensaje) {
            if ($("#form4 input[name='preg4']:radio").is(':checked')) {

                var attr = $("#form4 input[name='preg4']:radio").attr('disabled');

                if (typeof attr == typeof undefined) {
                    $("#art4").toggleClass("block");
                    $("#p-5").show();
                    $("#art5").toggleClass("block");
                }


                $("#form4 input[name='preg4']:radio").attr('disabled', true);


                if ($('input:radio[name=preg4]:checked').val() === mensaje) {
                    $("#p-4 h2").addClass("right");
                    puntos[3] = 1;
                } else {
                    $("#p-4 h2").addClass("wrong");
                }
            }
        });

        $.get("buscar.php", {
            b: "pregunta_tres"
        }, function (mensaje) {
            if ($("#form3 input[name='preg3']:radio").is(':checked')) {



                var attr = $("#form3 input[name='preg3']:radio").attr('disabled');

                if (typeof attr == typeof undefined) {
                    $("#art3").toggleClass("block");
                    $("#p-4").show();
                    $("#art4").toggleClass("block");
                }


                $("#form3 input[name='preg3']:radio").attr('disabled', true);


                if ($('input:radio[name=preg3]:checked').val() === mensaje) {
                    $("#p-3 h2").addClass("right");
                    puntos[2] = 1;
                } else {
                    $("#p-3 h2").addClass("wrong");
                }
            }
        });

        $.get("buscar.php", {
            b: "pregunta_dos"
        }, function (mensaje) {
            if ($("#form2 input[name='preg2']:radio").is(':checked')) {

                var attr = $("#form2 input[name='preg2']:radio").attr('disabled');

                if (typeof attr == typeof undefined) {
                    $("#art2").toggleClass("block");
                    $("#p-3").show();
                    $("#art3").toggleClass("block");
                }

                $("#form2 input[name='preg2']:radio").attr('disabled', true);



                if ($('input:radio[name=preg2]:checked').val() === mensaje) {
                    $("#p-2 h2").addClass("right");
                    puntos[1] = 1;
                } else {
                    $("#p-2 h2").addClass("wrong");
                }
            }
        });

        $.get("buscar.php", {
            b: "pregunta_uno"
        }, function (mensaje) {

            if ($("#form1 input[name='preg1']:radio").is(':checked')) {

                var attr = $("#form1 input[name='preg1']:radio").attr('disabled');

                if (typeof attr == typeof undefined) {
                    $("#art1").toggleClass("block");
                    $("#p-2").show();
                    $("#art2").toggleClass("block");
                }

                $("#form1 input[name='preg1']:radio").attr('disabled', true);

                if ($('input:radio[name=preg1]:checked').val() === mensaje) {
                    $("#p-1 h2").addClass("right");
                    puntos[0] = 1;
                } else {
                    $("#p-1 h2").addClass("wrong");
                }
            }
        });

    });

});


function evaluar() {
    var URLactual = window.location;
    var suma = puntos.reduce((a, b) => a + b, 0);
    var media = ((suma * 10) / 10).toFixed(1);

    if (suma === 10) {

        $(".modal-body").html(
            
            '<div class="tiempo-agotado"></div><div class="text-center"><h3>' + mensaje1 + '</h3></div><p><strong>Tu nota:</strong> ' + media + '</p><div class="text-center"><p>Te recomendamos<br> <a href="' + link_master + '">' + nombre_master + '</a></p></div><div id="share-buttons"><hr><div class="text-center"><p>Comparte y reta a tus amigos</p><a href="http://www.facebook.com/sharer.php?u=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" /></a><a href="https://plus.google.com/share?url=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" /></a><a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" /></a><a href="javascript:void((function()%7Bvar%20e=document.createElement("script");e.setAttribute("type","text/javascript");e.setAttribute("charset","UTF-8");e.setAttribute("src","http://assets.pinterest.com/js/pinmarklet.js?r="+Math.random()*99999999);document.body.appendChild(e)%7D)());"><img src="https://simplesharebuttons.com/images/somacro/pinterest.png" alt="Pinterest" /></a><a href="https://twitter.com/share?url=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a></div></div>'
        );
    } else if (suma < 10 && suma >= 7) {

        $(".modal-body").html(
            '<div class="tiempo-agotado"></div><div class="text-center"><h3>' + mensaje2 + '</h3></div><p><strong>Tu nota:</strong> ' + media + '</p><div class="text-center"><p>Te recomendamos<br> <a href="' + link_master + '">' + nombre_master + '</a></p></div><div id="share-buttons"><hr><div class="text-center"><p>Comparte y reta a tus amigos</p><a href="http://www.facebook.com/sharer.php?u=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" /></a><a href="https://plus.google.com/share?url=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" /></a><a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" /></a><a href="javascript:void((function()%7Bvar%20e=document.createElement("script");e.setAttribute("type","text/javascript");e.setAttribute("charset","UTF-8");e.setAttribute("src","http://assets.pinterest.com/js/pinmarklet.js?r="+Math.random()*99999999);document.body.appendChild(e)%7D)());"><img src="https://simplesharebuttons.com/images/somacro/pinterest.png" alt="Pinterest" /></a><a href="https://twitter.com/share?url=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a></div></div>'
        );
    } else if (suma < 7 && suma >= 5) {

        $(".modal-body").html(
            '<div class="tiempo-agotado"></div><div class="text-center"><h3>' + mensaje3 + '</h3></div><p><strong>Tu nota:</strong> ' + media + '</p><div class="text-center"><p>Te recomendamos<br> <a href="' + link_master + '">' + nombre_master + '</a></p></div><div id="share-buttons"><hr><div class="text-center"><p>Comparte y reta a tus amigos</p><a href="http://www.facebook.com/sharer.php?u=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" /></a><a href="https://plus.google.com/share?url=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" /></a><a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" /></a><a href="javascript:void((function()%7Bvar%20e=document.createElement("script");e.setAttribute("type","text/javascript");e.setAttribute("charset","UTF-8");e.setAttribute("src","http://assets.pinterest.com/js/pinmarklet.js?r="+Math.random()*99999999);document.body.appendChild(e)%7D)());"><img src="https://simplesharebuttons.com/images/somacro/pinterest.png" alt="Pinterest" /></a><a href="https://twitter.com/share?url=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a></div></div>'
        );
    } else if (suma < 5 && suma >= 3) {

        $(".modal-body").html(
            '<div class="tiempo-agotado"></div><div class="text-center"><h3>' + mensaje4 + '</h3></div><p><strong>Tu nota:</strong> ' + media + '</p><div class="text-center"><p>Te recomendamos<br> <a href="' + link_master + '">' + nombre_master + '</a></p></div><div id="share-buttons"><hr><div class="text-center"><p>Comparte y reta a tus amigos</p><a href="http://www.facebook.com/sharer.php?u=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" /></a><a href="https://plus.google.com/share?url=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" /></a><a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" /></a><a href="javascript:void((function()%7Bvar%20e=document.createElement("script");e.setAttribute("type","text/javascript");e.setAttribute("charset","UTF-8");e.setAttribute("src","http://assets.pinterest.com/js/pinmarklet.js?r="+Math.random()*99999999);document.body.appendChild(e)%7D)());"><img src="https://simplesharebuttons.com/images/somacro/pinterest.png" alt="Pinterest" /></a><a href="https://twitter.com/share?url=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a></div></div>'
        );
    } else if (suma < 3) {

        $(".modal-body").html(
            '<div class="tiempo-agotado"></div><div class="text-center"><h3>' + mensaje5 + '</h3></div><p><strong>Tu nota:</strong> ' + media + '</p><div class="text-center"><p>Te recomendamos<br> <a href="' + link_master + '">' + nombre_master + '</a></p></div><div id="share-buttons"><hr><div class="text-center"><p>Comparte y reta a tus amigos</p><a href="http://www.facebook.com/sharer.php?u=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" /></a><a href="https://plus.google.com/share?url=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" /></a><a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" /></a><a href="javascript:void((function()%7Bvar%20e=document.createElement("script");e.setAttribute("type","text/javascript");e.setAttribute("charset","UTF-8");e.setAttribute("src","http://assets.pinterest.com/js/pinmarklet.js?r="+Math.random()*99999999);document.body.appendChild(e)%7D)());"><img src="https://simplesharebuttons.com/images/somacro/pinterest.png" alt="Pinterest" /></a><a href="https://twitter.com/share?url=' + URLactual + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a></div></div><iframe src="http://www.isdemasters.com/es/grado-en-derecho-master-en-abogacia-internacional-0" width="100%" height="600px"></iframe>'
        );
    }




}

var centesimas = 100;
var segundos = 10;
var minutos = 1;
var horas = 0;

function inicio() {
    control = setInterval(cronometro, 10);
}

function parar() {
    clearInterval(control);
}

function reinicio() {
    clearInterval(control);
    centesimas = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    //Centesimas.innerHTML = ":00";
    Segundos.innerHTML = ":00";
    Minutos.innerHTML = ":00";
    Horas.innerHTML = "00";

}

function cronometro() {
    if (centesimas < 100) {
        centesimas--;
        if (centesimas < 10) {
            centesimas = "0" + centesimas
        }
        //Centesimas.innerHTML = ":"+centesimas;
    }
    if (centesimas == 100) {
        minutos--;
        Minutos.innerHTML = ":0" + minutos;
        centesimas = 99;
    }
    if (centesimas == 0) {
        centesimas = 99;
        segundos--;
        if (segundos < 10) {
            segundos = "0" + segundos
        }
        Segundos.innerHTML = ":" + segundos;
    }
    if (segundos == 0) {
        segundos = 60;
        minutos--;
        if (minutos < 10) {
            Minutos = "0" + minutos
        }
        Minutos.innerHTML = ":" + minutos;

    }
    if (minutos < 0) {
        parar();
        reinicio();
        $("input:radio").attr('disabled', true);
        $("#modal-resultados").click();
        $(".tiempo-agotado").append("Tiempo agotado");

    }

}
