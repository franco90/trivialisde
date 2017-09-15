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
		<div class="reloj" id="Minutos">:04</div>
		<div class="reloj" id="Segundos">:59</div>
		<div class="reloj" id="Centesimas">:00</div>
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
            <img src="../imgs/QUESTIONSCIMA.png">
            <h1></h1> <!-- titulo asignado desde JS -->
            <p id="intro">Completa el test y averigua si tu futuro está en este campo de la abogacía</p>

        </div>
        <main>
            <form name="formulario" action="" method="get">
                <section id="p-1">

                    <h2 class="texto-pregunta"></h2>
                    <article id="art1">
                        <div class="opciones" id="form1">
                            <input type="radio" id="preg1_1" name="preg1" value="1" style="display:none;">
                            <div class="label-preg">
                                <label class="preg1_1" for="preg1_1"><span></span></label><br><br>
                            </div>
                            <input type="radio" id="preg1_2" name="preg1" value="2" style="display:none;">
                            <div class="label-preg">
                                <label class="preg1_2" for="preg1_2"><span></span></label><br><br>
                            </div>
                            <input type="radio" id="preg1_3" name="preg1" value="3" style="display:none;">
                            <div class="label-preg">
                                <label class="preg1_3" for="preg1_3"><span></span></label><br><br>
                            </div>

                        </div>
                        <div class="imagen img1"></div>

                    </article>

                </section>


                <section id="p-2">
                    <h2 class="texto-pregunta"></h2>
                    <article id="art2">
                        <div class="opciones" id="form2">
                            <div class="label-preg">
                                <label for="preg2_1"><span></span>Se basa en el establecimiento de dos supervisores, uno encargado de la vigilancia de la solvencia de todo tipo de entidades financieras y otro encargado de vigilar las normas de conducta.</label><br><br>
                                <input type="radio" id="preg2_1" name="preg2" value="1" style="display:none;">
                            </div>

                            <label for="preg2_2"><span></span>Es el sistema actualmente establecido para llevar a cabo la supervisión de los mercados financieros en España a través del Banco de España y la Comisión Nacional del Mercado de Valores.</label><br><br>
                            <input type="radio" id="preg2_2" name="preg2" value="2" style="display:none;">


                            <label for="preg2_3"><span></span>Establece una distribución sectorial de las funciones de supervisión asignando a un regulador la vigilancia del cumplimiento de normas prudenciales y de conducta en un determinado sector de actividad.</label><br><br>
                            <input type="radio" id="preg2_3" name="preg2" value="3" style="display:none;">

                            <input type="button" class="boton dos" value="Aceptar">
                        </div>
                        <div class="imagen img2"></div>

                    </article>
                </section>

                <section id="p-3">
                    <h2 class="texto-pregunta"></h2>
                    <article id="art3">
                        <div class="opciones" id="form3">
                            <input type="radio" id="preg3_1" name="preg3" value="1" style="display:none;">
                            <label for="preg3_1"><span></span>Sí, pero únicamente cuando se trate de un tribunal nacional de última instancia y lo solicite una de las partes. </label><br><br>
                            <input type="radio" id="preg3_2" name="preg3" value="2" style="display:none;">
                            <label for="preg3_2"><span></span>Únicamente cuando el acto interpretado sea claro.</label><br><br>
                            <input type="radio" id="preg3_3" name="preg3" value="3" style="display:none;">
                            <label for="preg3_3"><span></span>Sí, pero únicamente cuando se trate de un tribunal nacional de última instancia y la cuestión no sea un acto claro.</label><br><br>

                            <input type="button" class="boton tres" value="Aceptar">
                        </div>
                        <div class="imagen img3"></div>

                    </article>
                </section>

                <section id="p-4">
                    <h2 class="texto-pregunta"></h2>
                    <article id="art4">
                        <div class="opciones" id="form4">
                            <input type="radio" id="preg4_1" name="preg4" value="1" style="display:none;">
                            <label for="preg4_1"><span></span>El principio de libre configuración del procedimiento.</label><br><br>
                            <input type="radio" id="preg4_2" name="preg4" value="2" style="display:none;">
                            <label for="preg4_2"><span></span>El principio de legalidad.</label><br><br>
                            <input type="radio" id="preg4_3" name="preg4" value="3" style="display:none;">
                            <label for="preg4_3"><span></span>El principio de igualdad. </label><br><br>

                            <input type="button" class="boton cuatro" value="Aceptar">
                        </div>
                        <div class="imagen img4"></div>

                    </article>
                </section>

                <section id="p-5">
                    <h2 class="texto-pregunta"></h2>
                    <article id="art5">
                        <div class="opciones" id="form5">
                            <input type="radio" id="preg5_1" name="preg5" value="1" style="display:none;">
                            <label for="preg5_1"><span></span>No, deben recurrir a través de una organización representativa de intereses colectivos.</label><br><br>
                            <input type="radio" id="preg5_2" name="preg5" value="2" style="display:none;">
                            <label for="preg5_2"><span></span>No, salvo que la decisión les afecte como a un destinatario.</label><br><br>
                            <input type="radio" id="preg5_3" name="preg5" value="3" style="display:none;">
                            <label for="preg5_3"><span></span>Si, en todo caso.</label><br><br>

                            <input type="button" class="boton cinco" value="Aceptar">
                        </div>
                        <div class="imagen img5"></div>

                    </article>
                </section>

                <section id="p-6">
                    <h2 class="texto-pregunta"></h2>
                    <article id="art6">
                        <div class="opciones" id="form6">
                            <input type="radio" id="preg6_1" name="preg6" value="1" style="display:none;">
                            <label for="preg6_1"><span></span>Se ofrece a los accionistas la posibilidad de percibir el dividendo en efectivo o en acciones mediante el ejercicio de derechos de suscripción preferente previamente emitidos por la sociedad y vendidos a los accionistas.</label><br><br>
                            <input type="radio" id="preg6_2" name="preg6" value="2" style="display:none;">
                            <label for="preg6_2"><span></span>Los accionistas que opten por percibir el dividendo en especie podrán disfrutar de un tratamiento fiscal favorable.</label><br><br>
                            <input type="radio" id="preg6_3" name="preg6" value="3" style="display:none;">
                            <label for="preg6_3"><span></span>La remuneración en acciones deberá atenderse necesariamente con acciones ya emitidas en autocartera dada la prohibición de suscripción originaria de acciones prevista para las sociedades cotizadas.</label><br><br>

                            <input type="button" class="boton seis" value="Aceptar">
                        </div>
                        <div class="imagen img6"></div>

                    </article>
                </section>

                <section id="p-7">
                    <h2 class="texto-pregunta"></h2>
                    <article id="art7">
                        <div class="opciones" id="form7">
                            <input type="radio" id="preg7_1" name="preg7" value="1" style="display:none;">
                            <label for="preg7_1"><span></span>En todo caso, ya que el intercambio de información entre competidores se considera por su propia naturaleza una infracción del artículo 101 del TFUE sin necesidad de probar su concreto efecto anticompetitivo.</label><br><br>
                            <input type="radio" id="preg7_2" name="preg7" value="2" style="display:none;">
                            <label for="preg7_2"><span></span>Sólo cuando se demuestre que el intercambio de información entre competidores resultó apto para producir un efecto anticompetitivo.</label><br><br>
                            <input type="radio" id="preg7_3" name="preg7" value="3" style="display:none;">
                            <label for="preg7_3"><span></span>Dependerá de si la información intercambiada tiene carácter estratégico. </label><br><br>

                            <input type="button" class="boton siete" value="Aceptar">
                        </div>
                        <div class="imagen img7"></div>

                    </article>
                </section>

                <section id="p-8">

                    <h2 class="texto-pregunta"></h2>

                    <article id="art8">
                        <div class="opciones" id="form8">
                            <input type="radio" id="preg8_1" name="preg8" value="1" style="display:none;">
                            <label for="preg8_1"><span></span>El arbitraje es internacional.</label><br><br>
                            <input type="radio" id="preg8_2" name="preg8" value="2" style="display:none;">
                            <label for="preg8_2"><span></span>El arbitraje tiene su sede fuera de España.</label><br><br>
                            <input type="radio" id="preg8_3" name="preg8" value="3" style="display:none;">
                            <label for="preg8_3"><span></span>En el momento de celebrar el contrato, las partes tienen su domicilio en Estados diferentes.</label><br><br>

                            <input type="button" class="boton ocho" value="Aceptar">
                        </div>
                        <div class="imagen img8"></div>

                    </article>
                </section>

                <section id="p-9">
                    <h2 class="texto-pregunta"></h2>
                    <article id="art9">
                        <div class="opciones" id="form9">
                            <input type="radio" id="preg9_1" name="preg9" value="1" style="display:none;">
                            <label for="preg9_1"><span></span>Sí, la competencia de la Comisión Europea para examinar aquellas concentraciones que tienen dimensión de la Unión es exclusiva y excluyente frente a las autoridades nacionales de competencia, por lo que las autoridades nacionales nunca podrán examinar una concentración que cumpla los umbrales del Reglamento Europeo.</label><br><br>
                            <input type="radio" id="preg9_2" name="preg9" value="2" style="display:none;">
                            <label for="preg9_2"><span></span>No, en determinadas circunstancias el reenvío del examen de la concentración propuesta a una determinada autoridad nacional de competencia puede ser solicitado por las partes en la concentración o por la propia autoridad nacional de competencia.</label><br><br>
                            <input type="radio" id="preg9_3" name="preg9" value="3" style="display:none;">
                            <label for="preg9_3"><span></span>No, corresponde a las partes en la concentración decidir si, siempre que concurran determinadas circunstancias, prefieren someter el examen de la concentración propuesta a una determinada autoridad nacional de competencia.</label><br><br>

                            <input type="button" class="boton nueve" value="Aceptar">
                        </div>
                        <div class="imagen img9"></div>

                    </article>
                </section>

                <section id="p-10">
                    <h2 class="texto-pregunta"></h2>
                    <article id="art10">
                        <div class="opciones" id="form10">
                            <input type="radio" id="preg10_1" name="preg10" value="1" style="display:none;">
                            <label for="preg10_1"><span></span>Es desleal en todo caso porque supone una denigración de las prestaciones ajenas.</label><br><br>
                            <input type="radio" id="preg10_2" name="preg10" value="2" style="display:none;">
                            <label for="preg10_2"><span></span>Puede ser lícita, siempre que cumpla unos requisitos, pues favorece la toma de decisiones de consumo con el debido conocimiento de causa y, por tanto, la competencia.</label><br><br>
                            <input type="radio" id="preg10_3" name="preg10" value="3" style="display:none;">
                            <label for="preg10_3"><span></span>No admite la <i>exceptio veritatis</i>. </label><br><br>

                            <input type="button" class="boton diez" value="Aceptar">
                        </div>
                        <div class="imagen img10"></div>

                    </article>
                </section>

                <button type="button" id="modal-resultados" class="btn btn-info btn-lg" data-toggle="modal" onclick="evaluar();" data-target="#myModal">Ver resultados</button>
                <!-- ventana modal con los resultados del test -->
                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                        <!-- Modal content-->
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Resultado</h4>
                            </div>
                            <div class="modal-body">

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                            </div>
                        </div>

                    </div>
                </div>

                <a href="http://difusisde.esy.es/" class="boton volver"> volver al trivial</a>
            </form>
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
