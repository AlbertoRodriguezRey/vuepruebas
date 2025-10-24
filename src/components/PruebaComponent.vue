<template>
    <div>
        <img src="../assets/images/logoChampions.png"/>
        <h1>Este es un VUE de prueba</h1>
        <h2>Mensaje del data {{mensaje}}</h2>
        <h3>Mi nombre es {{nombre}} y tengo {{edad}} años</h3>
    </div>
</template>

<script>
export default {
    name: "PruebaComponent",

    data() {
        return {
            mensaje: "Esto es un mensaje de prueba",
            nombre: "Alberto",
            edad: 22
        }
    }
    
}
</script>

<style>
    @import '../assets/css/estilos.css';
</style>