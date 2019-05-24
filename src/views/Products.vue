<template>
    <div >
        <BarrasControl title="Products"></BarrasControl>
        <div class="botonagre">
            <button @click="gotoform">Agregar Productos</button>
        </div>
        
        <ProductView  v-for="prod of productos" :key="prod.nombre" v-bind:dir = "prod.dir" v-bind:nombre="prod.nombre"
        v-bind:categoria="prod.categoria" v-bind:numStock="prod.numStock" ></ProductView>
        <ProductView  v-for="prod of this.data2" :key="prod.name" v-bind:dir = "prod.url" v-bind:nombre="prod.name"
        v-bind:categoria="prod.category" v-bind:numStock="prod.price" ></ProductView>
        
        
    </div>
</template>

<script>
import BarrasControl from '@/components/BarrasControl.vue'
import ProductView from '@/components/ProductView.vue'
import {mapState} from 'vuex'

export default {

    name: 'Products',
    components: {
        BarrasControl,
        ProductView
    },
    data() {
        return {
            data2:{} 
        }
    },
    methods: {
    change(){
            console.log('hola');
            fetch('http://localhost:2000/products', {
                method: 'GET',
                mode: 'cors',
                headers: {
                "Content-type": "application/json; charset=UTF-8",
                'Access-Control-Allow-Origin':'*'
                },
                
            })
            .then((response) => {
                console.log(response);
                if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
                }

                // Examine the text in the response
                response.json().then((data) => {
                console.log(data);
                this.data2= data;
                console.log(this.data2);
                });
            }
            )
            .catch(function(err) {
            console.log('Fetch Error :-S', err);
            });
            

    },
    gotoform(){
            window.location = ('./#/form');
            this.change();
    }
    },
    computed: {
        ...mapState(['productos']),
        

    }
}
</script>

<style >

.showProduct{
    width: 50%;
    height: 150px;
    text-align: center;
    padding-top: 100px;
    padding-left: 15%;
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
}

.botonagre{
    width: 40%;
    padding: 20vh;
    text-align: center;
    padding-left: 60vh;
    
}

.botonagre button{
    width: 20%;
    background-color: #556080;
    margin-top: 30px;
    color: #ffffff;
    width: 100%;
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    
}

</style>

