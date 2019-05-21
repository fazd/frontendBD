<template>
    <div class="showProduct">
        <div class="logoImg"><img :src="dir.ruta" :alt="dir"></div>
            <div class="info">
                <div class = "productCamp">
                    <input :class="clase" type="text" :readonly="valEn === true"  v-model="nombre" placeholder="nombre">
                </div>
                <div class = "productCamp">
                    <input :class="clase" type="text" :readonly="valEn === true" v-model="categoria" :placeholder="categoria">
                </div>
                <div class = "productCamp">
                    <input :class="clase" type="text" :readonly="valEn === true" v-model="numStock" :placeholder="numStock">
                </div>                    
            </div>
            <div class = "btn-v">
                    <button @click= "modify"><img src="../assets/images/writing.svg" alt="modificar"></button>
                    <button @click= "elim" ><img src="../assets/images/delete.svg" alt="eliminar"></button>    
                
            </div>
        </div>
</template>

<script>
export default {
    name:'ProductView',
    /*data (){
        return{
            dir: require('../assets/images/logo.png'),
            nombre: 'primer producto 2',
            categoria: 'Categoria 1',
            numStock: '20'
        }
    },*/
    props:[
        'dir','nombre','categoria','numStock'
    ],
    data(){
        return {
            valEn: true,
            clase: 'atrr-prod'
        }
    },
    methods:{
        modify(){
            if(this.valEn===false){
                this.valEn = true;   
                this.clase = 'atrr-prod'; 
            }
            else{
                this.valEn = false;
                this.clase = 'atrr-prod_en';
            }
            var obj = new Object();
            obj.name = this.nombre;
            obj.cat = this.categoria;
            obj.dir = this.dir;
            obj.numStock = this.numStock;
            let editJson = JSON.stringify(obj);
            console.log(editJson);
            
        },
        elim(){

        }
    }
    
}
</script>

<style>

.showProduct{
    width: 50%;
    height: 150px;
    text-align: center;
    padding-top: 100px;
    padding-left: 0%;
    display: inline-block
}

.logoImg{
    width: 150px;
    height: 150px;
    padding-top: 0;
    float: left;
}

.logoImg img{
    width: 100%;
}

.atrr-prod{
    border: none;
    padding: 5px;
    font-size: 15px;
}

.atrr-prod_en{
    border: 1px solid;
    padding: 5px;
    border-radius: 4px;
    font-size: 15px;
}

.info {
    height: 100%;
    align-items: center;
    padding-top: 3vh;
    padding-left: 30vh;
    
}

.productCamp{
    width: 50%;
    padding-bottom: 3vh;    
}

.btn-v{
    padding-left: 15vh;
}

.btn-v button{
    height: 50px;
    width: 50px;
    background-color: #ffffff;
    border: none;
}

</style>
