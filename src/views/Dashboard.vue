<template>
    <div>
        <BarrasControl/>
        
        <div class="center-btn">
            <img class ="img-btn" @click="gotoCat" src="../assets/images/categories-card.svg" alt="categoryCard">
            <img class ="img-btn" @click="gotoProd" src="../assets/images/product-card.svg" alt="productCard">
            <img class ="img-btn" @click="gotoSto" src="../assets/images/stock-card.svg" alt="stockCard">

        </div>
    </div>
    


</template>

<script>
import BarrasControl from '@/components/BarrasControl.vue'
export default {
    name: 'Dashboard',
    components: {
        BarrasControl
    },
    methods:{
        gotoCat(){
            window.location = ('./#/categories');
        },
         gotoProd(){
            window.location = ('./#/products');
        },
         gotoSto(){
            window.location = ('./#/stocks');
        }
    }
}
</script>


<style>
*{
    margin: 0;
}


html, body{
    margin:0px;
    padding:0px;
}



.center-btn{
    width: 92.9%;
    float: right;
    top: 10vh; 
    padding-top: 10%;
    background-color: #f2f3f7;
}

.img-btn{
    height: 200px;
    width: 500px;
    padding-bottom: 40px;

}

.img-btn:hover{
    cursor:pointer;
}

</style>

