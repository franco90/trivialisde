<?php
 
      $buscar = $_GET['b'];
       
	 if (isset($_GET['b']) and ($_GET['b'] !="")){
		 
		 switch ($_GET['b']) {
	case "pregunta_diez":
        echo "2";
        break;
    case "pregunta_nueve":
        echo "2";
        break;
    case "pregunta_ocho":
        echo "1";
        break;
    case "pregunta_siete":
        echo "3";
        break;
    case "pregunta_seis":
        echo "2";
        break;
    case "pregunta_cinco":
        echo "2";
        break;
		
	case "pregunta_cuatro":
        echo "2";
        break;
		
		case "pregunta_tres":
        echo "3";
        break;
		
		case "pregunta_dos":
        echo "1";
        break;
		
		case "pregunta_uno":
        echo "1";
        break;
}
	 }
	 
	
?>
