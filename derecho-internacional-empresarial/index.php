<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content='Completa el test y averigua tus aptitudes para el mundo de la abogacía' />
    <meta http-equiv="description" content='Completa el test y averigua tus aptitudes para el mundo de la abogacía' />
    <!--metas facebook-->
    <meta property="og:title" content="Test: Cuánto sabes de derecho">
    <meta property="og:description" content="Completa el test y averigua tus aptitudes para el mundo de la abogacía">
    <meta property="og:type" content="website">
    <meta property="og:url" content="http://difusisde.esy.es">
    <meta property="og:image" content="http://difusisde.esy.es/imgs/questions_cima_portada.jpg">
    <meta property="og:site_name" content="difusisde.esy.es">

    <title>Test:Internacional y empresarial</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


    <link href='https://fonts.googleapis.com/css?family=Raleway:400,300,500,200,100' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="../css/test-style.css">
    <link rel="stylesheet" href="../css/test-responsive.css">
    <link rel="stylesheet" href="img-test.css">
</head>

<body onload="inicio()">
    <div id="fb-root"></div>
    <div id="fb-root"></div>
    <div id="fb-root"></div>
    <div id="fb-root"></div>

    <div id="contenedor-reloj">
        <div class="reloj" id="Horas">00</div>
        <div class="reloj" id="Minutos">:01</div>
        <div class="reloj" id="Segundos">:10</div>
        <!--        <div class="reloj" id="Centesimas">:00</div>-->
        <!--
		<input type="button" class="boton" id="inicio" value="Start &#9658;" onclick="inicio();">
		<input type="button" class="boton" id="parar" value="Stop &#8718;" onclick="parar();" disabled>
		<input type="button" class="boton" id="continuar" value="Resume &#8634;" onclick="inicio();" disabled>
		<input type="button" class="boton" id="reinicio" value="Reset &#8635;" onclick="reinicio();" disabled>
-->
    </div>




    <div id="content">
        <header>
            <div>
                <div>
                    <img src="../imgs/QUESTIONSCIMA.png">
                </div>
            </div>
        </header>

        <div id="titulo">
            <div class="logo">
                <img src="../imgs/QUESTIONSCIMA.png">
            </div>
            <h1></h1>
        </div>
        <!-- titulo asignado desde JS -->
        <main>
            <form name="formulario" action="" method="get">
                <section id="p-1">

                    <h2 class="texto-pregunta"></h2>
                    <article id="art1">
                        <div class="opciones" id="form1">
                            <input type="radio" id="preg1_1" name="preg1" value="1" style="display:none;">
                            <label class="btn btn-lg btn-primary btn-block" for="preg1_1"><span></span></label>
                            <input type="radio" id="preg1_2" name="preg1" value="2" style="display:none;">
                            <label class="btn btn-lg btn-primary btn-block" for="preg1_2"><span></span></label>
                            <input type="radio" id="preg1_3" name="preg1" value="3" style="display:none;">
                            <label class="btn btn-lg btn-primary btn-block" for="preg1_3"><span></span></label>
                        </div>
                        <div class="imagen img1"></div>

                    </article>

                </section>


                <section id="p-2">
                    <h2 class="texto-pregunta"></h2>
                    <article id="art2">
                        <div class="opciones" id="form2">
                            <input type="radio" id="preg2_1" name="preg2" value="1" style="display:none;">
                            <label for="preg2_1" class="btn btn-lg btn-primary btn-block"><span></span></label>
                            <input type="radio" id="preg2_2" name="preg2" value="2" style="display:none;">
                            <label for="preg2_2" class="btn btn-lg btn-primary btn-block"><span></span></label>
                            <input type="radio" id="preg2_3" name="preg2" value="3" style="display:none;">
                            <label for="preg2_3" class="btn btn-lg btn-primary btn-block"><span></span></label>
                        </div>
                        <div class="imagen img2"></div>

                    </article>
                </section>

                <section id="p-3">
                    <h2 class="texto-pregunta"></h2>
                    <article id="art3">
                        <div class="opciones" id="form3">
                            <input type="radio" id="preg3_1" name="preg3" value="1" style="display:none;">
                            <label for="preg3_1" class="btn btn-lg btn-primary btn-block"><span></span></label>
                            <input type="radio" id="preg3_2" name="preg3" value="2" style="display:none;">
                            <label for="preg3_2" class="btn btn-lg btn-primary btn-block"><span></span></label>
                            <input type="radio" id="preg3_3" name="preg3" value="3" style="display:none;">
                            <label for="preg3_3" class="btn btn-lg btn-primary btn-block"><span></span></label>
                        </div>
                        <div class="imagen img3"></div>

                    </article>
                </section>

                <section id="p-4">
                    <h2 class="texto-pregunta"></h2>
                    <article id="art4">
                        <div class="opciones" id="form4">
                            <input type="radio" id="preg4_1" name="preg4" value="1" style="display:none;">
                            <label for="preg4_1" class="btn btn-lg btn-primary btn-block"><span></span></label>
                            <input type="radio" id="preg4_2" name="preg4" value="2" style="display:none;">
                            <label for="preg4_2" class="btn btn-lg btn-primary btn-block"><span></span></label>
                            <input type="radio" id="preg4_3" name="preg4" value="3" style="display:none;">
                            <label for="preg4_3" class="btn btn-lg btn-primary btn-block"><span></span></label>
                        </div>
                        <div class="imagen img4"></div>

                    </article>
                </section>

                <section id="p-5">
                    <h2 class="texto-pregunta"></h2>
                    <article id="art5">
                        <div class="opciones" id="form5">
                            <input type="radio" id="preg5_1" name="preg5" value="1" style="display:none;">
                            <label for="preg5_1" class="btn btn-lg btn-primary btn-block"><span></span></label>
                            <input type="radio" id="preg5_2" name="preg5" value="2" style="display:none;">
                            <label for="preg5_2" class="btn btn-lg btn-primary btn-block"><span></span></label>
                            <input type="radio" id="preg5_3" name="preg5" value="3" style="display:none;">
                            <label for="preg5_3" class="btn btn-lg btn-primary btn-block"><span></span></label>
                        </div>
                        <div class="imagen img5"></div>

                    </article>
                </section>

                <section id="p-6">
                    <h2 class="texto-pregunta"></h2>
                    <article id="art6">
                        <div class="opciones" id="form6">
                            <input type="radio" id="preg6_1" name="preg6" value="1" style="display:none;">
                            <label for="preg6_1" class="btn btn-lg btn-primary btn-block"><span></span></label>
                            <input type="radio" id="preg6_2" name="preg6" value="2" style="display:none;">
                            <label for="preg6_2" class="btn btn-lg btn-primary btn-block"><span></span></label>
                            <input type="radio" id="preg6_3" name="preg6" value="3" style="display:none;">
                            <label for="preg6_3" class="btn btn-lg btn-primary btn-block"><span></span></label>
                        </div>
                        <div class="imagen img6"></div>

                    </article>
                </section>

                <section id="p-7">
                    <h2 class="texto-pregunta"></h2>
                    <article id="art7">
                        <div class="opciones" id="form7">
                            <input type="radio" id="preg7_1" name="preg7" value="1" style="display:none;">
                            <label for="preg7_1" class="btn btn-lg btn-primary btn-block"><span></span></label>
                            <input type="radio" id="preg7_2" name="preg7" value="2" style="display:none;">
                            <label for="preg7_2" class="btn btn-lg btn-primary btn-block"><span></span></label>
                            <input type="radio" id="preg7_3" name="preg7" value="3" style="display:none;">
                            <label for="preg7_3" class="btn btn-lg btn-primary btn-block"><span></span></label>
                        </div>
                        <div class="imagen img7"></div>

                    </article>
                </section>

                <section id="p-8">

                    <h2 class="texto-pregunta"></h2>

                    <article id="art8">
                        <div class="opciones" id="form8">
                            <input type="radio" id="preg8_1" name="preg8" value="1" style="display:none;">
                            <label for="preg8_1" class="btn btn-lg btn-primary btn-block"><span></span></label>
                            <input type="radio" id="preg8_2" name="preg8" value="2" style="display:none;">
                            <label for="preg8_2" class="btn btn-lg btn-primary btn-block"><span></span></label>
                            <input type="radio" id="preg8_3" name="preg8" value="3" style="display:none;">
                            <label for="preg8_3" class="btn btn-lg btn-primary btn-block"><span></span></label>
                        </div>
                        <div class="imagen img8"></div>

                    </article>
                </section>

                <section id="p-9">
                    <h2 class="texto-pregunta"></h2>
                    <article id="art9">
                        <div class="opciones" id="form9">
                            <input type="radio" id="preg9_1" name="preg9" value="1" style="display:none;">
                            <label for="preg9_1" class="btn btn-lg btn-primary btn-block"><span></span></label>
                            <input type="radio" id="preg9_2" name="preg9" value="2" style="display:none;">
                            <label for="preg9_2" class="btn btn-lg btn-primary btn-block"><span></span></label>
                            <input type="radio" id="preg9_3" name="preg9" value="3" style="display:none;">
                            <label for="preg9_3" class="btn btn-lg btn-primary btn-block"><span></span></label>
                        </div>
                        <div class="imagen img9"></div>

                    </article>
                </section>

                <section id="p-10">
                    <h2 class="texto-pregunta"></h2>
                    <article id="art10">
                        <div class="opciones" id="form10">
                            <input type="radio" id="preg10_1" name="preg10" value="1" style="display:none;">
                            <label for="preg10_1" class="btn btn-lg btn-primary btn-block"><span></span></label>
                            <input type="radio" id="preg10_2" name="preg10" value="2" style="display:none;">
                            <label for="preg10_2" class="btn btn-lg btn-primary btn-block"><span></span></label>
                            <input type="radio" id="preg10_3" name="preg10" value="3" style="display:none;">
                            <label for="preg10_3" class="btn btn-lg btn-primary btn-block"><span></span></label>
                        </div>
                        <div class="imagen img10"></div>

                    </article>
                </section>
            </form>
            <a href="http://difusisde.esy.es/" class="boton volver"> volver al trivial</a>

            <button type="button" id="modal-resultados" class="btn btn-info btn-lg" data-toggle="modal" onclick="evaluar();" data-target="#myModal">Ver resultados</button>
            <!-- ventana modal con los resultados del test -->
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog" style="width:100%;">
                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Tu resultado</h4>
                        </div>
                        <div class="modal-body">

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>

                </div>


            </div>
        </main>

        <footer>
        </footer>
    </div>

    <script src="test-script.js"></script>

</body>

<?php
require 'Classes/PHPExcel/IOFactory.php'; //Agregamos la librería 

	$nombreArchivo = 'test1.xlsx';
	$objPHPExcel = PHPExcel_IOFactory::load($nombreArchivo);
	$objPHPExcel->setActiveSheetIndex(0);
	$numRows = $objPHPExcel->setActiveSheetIndex(0)->getHighestRow();

    for ($i = 1; $i <= $numRows; $i++) {
        $pregunta = $objPHPExcel->getActiveSheet()->getCell('A'.$i)->getCalculatedValue();
		$resp1 = $objPHPExcel->getActiveSheet()->getCell('B'.$i)->getCalculatedValue();
		$resp2 = $objPHPExcel->getActiveSheet()->getCell('C'.$i)->getCalculatedValue();
        $resp3 = $objPHPExcel->getActiveSheet()->getCell('D'.$i)->getCalculatedValue();
        echo "<script>";
        echo "anadir($i,'$pregunta','$resp1','$resp2','$resp3');";
        echo "</script>";

    } 
?>

</html>
