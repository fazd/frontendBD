<template>
    <div class="showProduct">
        <div class="logoImg"><img :src="dir.ruta" :alt="dir"></div>
            <div class="info">
                <div class = "productCamp">
                    <input :class="clase" type="text" :readonly="valEn === true"  :placeholder="nombre">
                </div>
                <div class = "productCamp">
                    <input :class="clase" type="text" :readonly="valEn === true"  :placeholder="categoria">
                </div>
                <div class = "productCamp">
                    <input :class="clase" type="text" :readonly="valEn === true" :v-model="numStock" :placeholder="numStock">
                </div>                    
            </div>
            <div class = "btn-v">
                <div id ="aum">
                    <p>Retirar de Stock</p>
                    <button @click= "numStock--"><img src="../assets/images/delete.svg" alt="modificar"></button>
                </div>
                <div id="decr">
                    <p>Aumentar de Stock</p>
                    <button @click= "numStock++"><img src="../assets/images/plus.svg" alt="modificar"></button>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name:'StockView',
    props:[
        'dir','nombre','categoria','numStock'
    ],
    data(){
        return {
            valEn: true,
            clase: 'atrr-prod',
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
            
        },
        elim(){

        }
    }
    
}
</script>

<style scoped >

.showProduct{
    width: 50%;
    height: 150px;
    text-align: center;
    margin: 100px;
    padding-left: 15%;
    display: inline-block;
    background-color: #f2f3f7;
    border-radius: 10px;
    padding-bottom: 100px;
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
    background-color: #f2f3f7;
}

.atrr-prod_en{
    border: 1px solid;
    padding: 5px;
    border-radius: 4px;
    font-size: 15px;
    background-color: #f2f3f7;
}

.info {
    height: 100%;
    align-items: center;
    padding-top: 3vh;
    padding-left: 30vh;
    background-color: #f2f3f7;
    
}

.productCamp{
    width: 50%;
    padding-bottom: 3vh;  
    background-color: #f2f3f7;  
}

.btn-v{
    padding-left: 2vh;
    display: center;
}

.btn-v button{
    height: 50px;
    width: 50px;
    border: none;
    background-color: #f2f3f7;
    margin: 0;
}
#aum{
    float:left;
}
#decr{
    float:right;
}

button:hover{
    cursor: pointer;
}

</style>
