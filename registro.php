<?php
include("cone_db.php");
if(isset($_POST['registro'])){
    if(strlen($_POST['nombre'])>=1 &&
   strlen($_POST['apellidos'])>=1 &&
   strlen($_POST['direccion'])>=1 &&
   strlen($_POST['numero'])>=1 &&
   strlen($_POST['correo'])>=1 &&
   strlen($_POST['texto'])>=1){

   $nombre = trim($_POST['nombre']);
   $apellidos = trim($_POST['apellidos']);
   $direccion = trim($_POST['direccion']);
   $numero =  trim($_POST['numero']);
   $correo = trim($_POST['correo']);
   $texto  = trim($_POST['texto']);
   $fechareg = date("d/m/y");
   $consulta = "INSERT INTO datos_clientes(nombre, apellidos, direccion, numero, correo, observaciones, fecha_entrada) VALUES ('$nombre','$apellidos','$direccion','$numero','$correo','$texto','$fechareg')";
   $resultado = mysqli_query($conex, $consulta);

   if($resultado){
       ?>
        <h3 class="bien">Tus datos han sido enviados de manera correcta</h3>
       <?php


   }else{
       ?>
        <h3 class="bad">Sucedio algo inesperado,intentalo otra vez</h3>
       <?php
   }

}else{
       ?>
       <h3 class="bad">Por favor,completa todos los campos!</h3>
       <?php
}

}
?>
