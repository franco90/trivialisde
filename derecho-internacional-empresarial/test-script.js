

/* Ocultamos todas las section que hay, es decir, todas las preguntas e inmediatamente después mostramos la pregunta 1 */
$("section").hide();
$("#p-1").show();
var art1 = $("#art1");
art1.toggleClass("block");


var puntos = [0,0,0,0,0,0,0,0,0,0]; //array para acumular el puntaje obtenido


$(document).ready(function () {
    $(".boton").click(function () {

        $.get("buscar.php", {
            b: "pregunta_diez"
        }, function (mensaje) {

            if ($("#form10 input[name='preg10']:radio").is(':checked')) {
                
                $("#form10 input[name='preg10']:radio").attr('disabled', true);
                if ($(".diez").is(":visible")) {

                    $("#art10").toggleClass("block");
                    $(".principal").show();
                    
                }
                $(".diez").hide();


                if ($('input:radio[name=preg10]:checked').val() === mensaje) {
                    $("#diez").addClass("right");
                    puntos[9] = 1;
                    
                } else {
                    $("#diez").addClass("wrong");
                }
               $("#modal-resultados").click();
            }

        });

        $.get("buscar.php", {
            b: "pregunta_nueve"
        }, function (mensaje) {

            if ($("#form9 input[name='preg9']:radio").is(':checked')) {

                $("#form9 input[name='preg9']:radio").attr('disabled', true);
                if ($(".nueve").is(":visible")) {

                    $("#art9").toggleClass("block");
                    $("#p-10").show();
                    $("#art10").toggleClass("block");
                }
                $(".nueve").hide();

                if ($('input:radio[name=preg9]:checked').val() === mensaje) {
                    $("#nueve").addClass("right");
                    puntos[8] = 1;
                } else {
                    $("#nueve").addClass("wrong");
                }
            }

        });

        $.get("buscar.php", {
            b: "pregunta_ocho"
        }, function (mensaje) {

            if ($("#form8 input[name='preg8']:radio").is(':checked')) {

                $("#form8 input[name='preg8']:radio").attr('disabled', true);
                if ($(".ocho").is(":visible")) {

                    $("#art8").toggleClass("block");
                    $("#p-9").show();
                    $("#art9").toggleClass("block");
                }
                $(".ocho").hide();

                if ($('input:radio[name=preg8]:checked').val() === mensaje) {
                    $("#ocho").addClass("right");
                    puntos[7] = 1;
                } else {
                    $("#ocho").addClass("wrong");
                }
            }

        });

        $.get("buscar.php", {
            b: "pregunta_siete"
        }, function (mensaje) {

            if ($("#form7 input[name='preg7']:radio").is(':checked')) {

                $("#form7 input[name='preg7']:radio").attr('disabled', true);
                if ($(".siete").is(":visible")) {

                    $("#art7").toggleClass("block");
                    $("#p-8").show();
                    $("#art8").toggleClass("block");
                }
                $(".siete").hide();

                if ($('input:radio[name=preg7]:checked').val() === mensaje) {
                    $("#siete").addClass("right");
                    puntos[6] = 1;
                } else {
                    $("#siete").addClass("wrong");
                }
            }

        });



        $.get("buscar.php", {
            b: "pregunta_seis"
        }, function (mensaje) {

            if ($("#form6 input[name='preg6']:radio").is(':checked')) {

                $("#form6 input[name='preg6']:radio").attr('disabled', true);
                if ($(".seis").is(":visible")) {

                    $("#art6").toggleClass("block");
                    $("#p-7").show();
                    $("#art7").toggleClass("block");
                }
                $(".seis").hide();

                if ($('input:radio[name=preg6]:checked').val() === mensaje) {
                    $("#seis").addClass("right");
                    puntos[5] = 1;
                } else {
                    $("#seis").addClass("wrong");
                }
            }
        });



        $.get("buscar.php", {
            b: "pregunta_cinco"
        }, function (mensaje) {

            if ($("#form5 input[name='preg5']:radio").is(':checked')) {

                $("#form5 input[name='preg5']:radio").attr('disabled', true);
                if ($(".cinco").is(":visible")) {

                    $("#art5").toggleClass("block");
                    $("#p-6").show();
                    $("#art6").toggleClass("block");
                }
                $(".cinco").hide();

                if ($('input:radio[name=preg5]:checked').val() === mensaje) {
                    $("#cinco").addClass("right");
                    puntos[4] = 1;
                } else {
                    $("#cinco").addClass("wrong");
                }
            }
        });

        $.get("buscar.php", {
            b: "pregunta_cuatro"
        }, function (mensaje) {
            if ($("#form4 input[name='preg4']:radio").is(':checked')) {

                $("#form4 input[name='preg4']:radio").attr('disabled', true);
                if ($(".cuatro").is(":visible")) {

                    $("#art4").toggleClass("block");
                    $("#p-5").show();
                    $("#art5").toggleClass("block");
                }
                $(".cuatro").hide();

                if ($('input:radio[name=preg4]:checked').val() === mensaje) {
                    $("#cuatro").addClass("right");
                    puntos[3] = 1;
                } else {
                    $("#cuatro").addClass("wrong");
                }
            }
        });

        $.get("buscar.php", {
            b: "pregunta_tres"
        }, function (mensaje) {
            if ($("#form3 input[name='preg3']:radio").is(':checked')) {

                $("#form3 input[name='preg3']:radio").attr('disabled', true);
                if ($(".tres").is(":visible")) {

                    $("#art3").toggleClass("block");
                    $("#p-4").show();
                    $("#art4").toggleClass("block");
                }
                $(".tres").hide();

                if ($('input:radio[name=preg3]:checked').val() === mensaje) {
                    $("#tres").addClass("right");
                    puntos[2] = 1;
                } else {
                    $("#tres").addClass("wrong");
                }
            }
        });

        $.get("buscar.php", {
            b: "pregunta_dos"
        }, function (mensaje) {
            if ($("#form2 input[name='preg2']:radio").is(':checked')) {

                $("#form2 input[name='preg2']:radio").attr('disabled', true);
                if ($(".dos").is(":visible")) {

                    $("#art2").toggleClass("block");
                    $("#p-3").show();
                    $("#art3").toggleClass("block");
                }
                $(".dos").hide();

                if ($('input:radio[name=preg2]:checked').val() === mensaje) {
                    $("#dos").addClass("right");
                    puntos[1] = 1;
                } else {
                    $("#dos").addClass("wrong");
                }
            }
        });

        $.get("buscar.php", {
            b: "pregunta_uno"
        }, function (mensaje) {



            if ($("#form1 input[name='preg1']:radio").is(':checked')) {
                $("#form1 input[name='preg1']:radio").attr('disabled', true);
                if ($(".uno").is(":visible")) {

                    $("#art1").toggleClass("block");
                    $("#p-2").show();
                    $("#art2").toggleClass("block");
                }

                $(".uno").hide();

                if ($('input:radio[name=preg1]:checked').val() === mensaje) {
                    $("#uno").addClass("right");
                    puntos[0] = 1;
                } else {
                    $("#uno").addClass("wrong");
                }
            }
        });

    });

});


function evaluar() {
    var URLactual = window.location;
    var suma = puntos.reduce((a, b) => a + b, 0);
    var media = ((suma * 10) / 10).toFixed(1);

    $(".modal-body").html(
        '<div class="text-center"><h3>¡Deberías dedicarte profesionalmente al Derecho internacional y empresarial!</h3></div><p><strong>Nota:</strong> '+ media +'</p><p>+ info <a href="#">MÁSTER EN DERECHO INTERNACIONAL Y EMPRESARIAL</a></p><div id="share-buttons"><hr><div class="text-center"><p>Comparte y reta a tus amigos</p><a href="http://www.facebook.com/sharer.php?u='+URLactual+'" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" /></a><a href="https://plus.google.com/share?url='+URLactual+'" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" /></a><a href="http://www.linkedin.com/shareArticle?mini=true&amp;url='+URLactual+'" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" /></a><a href="javascript:void((function()%7Bvar%20e=document.createElement("script");e.setAttribute("type","text/javascript");e.setAttribute("charset","UTF-8");e.setAttribute("src","http://assets.pinterest.com/js/pinmarklet.js?r="+Math.random()*99999999);document.body.appendChild(e)%7D)());"><img src="https://simplesharebuttons.com/images/somacro/pinterest.png" alt="Pinterest" /></a><a href="https://twitter.com/share?url='+URLactual+'" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a></div></div>'
    );

}

/*
function resultado() {

    if (($("#form1 input[name='preg1']:radio").is(':checked')) && ($("#form2 input[name='preg2']:radio").is(':checked')) && ($("#form3 input[name='preg3']:radio").is(':checked')) && ($("#form4 input[name='preg4']:radio").is(':checked')) && ($("#form5 input[name='preg5']:radio").is(':checked')) && ($("#form6 input[name='preg6']:radio").is(':checked')) && ($("#form7 input[name='preg7']:radio").is(':checked')) && ($("#form8 input[name='preg8']:radio").is(':checked')) && ($("#form9 input[name='preg9']:radio").is(':checked')) && ($("#form10 input[name='preg10']:radio").is(':checked'))) {

        $(".principal").show();

        var suma = (uno + dos + tres + cuatro + cinco + seis + siete + ocho + nueve + diez);

        var media = ((suma * 10) / 10).toFixed(1);

        if (suma === 10) {

            $("body").append('<div class="velo"></div><div class="modal"><h3>Deberías dedicarte profesionalmente al Derecho internacional y empresarial!</h3><h2>' + media + '</h2><a href="http://www.isdemasters.com" id="banner">+ info MÁSTER EN DERECHO<br>INTERNACIONAL Y EMPRESARIAL</a><p>Comparte y reta a tus amigos</p><iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fdifusisde.esy.es%2F&layout=button&mobile_iframe=false&width=81&height=20&appId" width="81" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe><a href="http://twitter.com/share?text=Acabo%20de%20realizar%20el%20test%20de%20Derecho%20Internacional%20y%20Empresarial%20y%20lo%20he%20bordado&url=http://difusisde.esy.es/" class="twitter">Twittear</a>');
        } else if (suma < 10 && suma >= 7) {
            $("body").append('<div class="velo"></div><div class="modal"><h3>Tienes aptitudes! Has pensado dedicarte profesionalmente al Derecho internacional y empresarial?</h3><h2>' + media + '</h2><a href="http://www.isdemasters.com" id="banner">+ info MÁSTER EN DERECHO<br>INTERNACIONAL Y EMPRESARIAL</a><p>Comparte y reta a tus amigos</p><iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fdifusisde.esy.es%2F&layout=button&mobile_iframe=false&width=81&height=20&appId" width="81" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe><a href="http://twitter.com/share?text=Acabo%20de%20realizar%20el%20test%20de%20Derecho%20Internacional%20y%20Empresarial%20y%20no%20se%20me%20ha%20dado%20nada%20mal.&url=http://difusisde.esy.es/" class="twitter">Twittear</a>');
        } else if (suma < 7 && suma >= 5) {
            $("body").append('<div class="velo"></div><div class="modal"><h3>Con la formación adecuada podrías llegar a ser un experto en Derecho internacional y empresarial</h3><h2>' + media + '</h2><a href="http://www.isdemasters.com" id="banner">+ info MÁSTER EN DERECHO<br>INTERNACIONAL Y EMPRESARIAL</a><p>Comparte y reta a tus amigos</p><iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fdifusisde.esy.es%2F&layout=button&mobile_iframe=false&width=81&height=20&appId" width="81" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe><a href="http://twitter.com/share?text=Acabo%20de%20realizar%20el%20test%20de%20Derecho%20Intrernacional%20y%20Empresarial%20y%20he%20aprobado&url=http://difusisde.esy.es/" class="twitter">Twittear</a>');
        } else if (suma < 5 && suma >= 3) {
            $("body").append('<div class="velo"></div><div class="modal"><h3>No está mal...Te recomendamos reforzar tu formación en Derecho internacional y empresarial</h3><h2>' + media + '</h2><a href="http://www.isdemasters.com" id="banner">+ info MÁSTER EN DERECHO<br>INTERNACIONAL Y EMPRESARIAL</a><p>Comparte y reta a tus amigos</p><iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fdifusisde.esy.es%2F&layout=button&mobile_iframe=false&width=81&height=20&appId" width="81" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe><a href="http://twitter.com/share?text=Acabo%20de%20realizar%20el%20test%20de%20Derecho%20Internacional%20y%20Empresarial%20y%20he%20suspendido&url=http://difusisde.esy.es/" class="twitter">Twittear</a>');
        } else if (suma < 3) {
            $("body").append('<div class="velo"></div><div class="modal"><h3>Esta no es tu especialidad</h3><h2>' + media + '</h2><a href="http://www.isdemasters.com" id="banner">+ info MÁSTER EN DERECHO<br>INTERNACIONAL Y EMPRESARIAL</a><p>Comparte y reta a tus amigos</p><iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fdifusisde.esy.es%2F&layout=button&mobile_iframe=false&width=81&height=20&appId" width="81" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe><a href="http://twitter.com/share?text=Acabo%20de%20realizar%20el%20test%20de%20Derecho%20Internacional%20y%20Empresarial,%20%20no%20es%20lo%20mío...&url=http://difusisde.esy.es/" class="twitter customer share" title="Twitter share" target="_blank">Twittear</a>');
        }

        $(".velo").fadeOut(0);
        $(".modal").fadeOut(0);
        $(".velo").fadeIn(800);
        $(".modal").fadeIn(800);

        $(".velo").click(borrarModal);
        $(".modal .btn").click(borrarModal);
        $("body").keydown(capturaTeclado);

        function capturaTeclado(tecla) {
            if (tecla.keyCode === 27) {
                borrarModal();
            }
        }

    }

    function borrarModal() {
        $(".velo").fadeOut(800, function () {
            $(".velo").remove();
        });
        $(".modal").fadeOut(800, function () {
            $(".modal").remove();
        });
    }
}*/
