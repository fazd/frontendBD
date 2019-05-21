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


.navBar{
    width: 100%;
    padding: 5vh 0;
    padding-left: 30vh;
    text-align: left;
    position:fixed;
    background-color: #ffffff;
}

.verticalBar{
    height: 100vh;
    width: 15vh;
    z-index: 1;
    background-color: #6e7796;
    text-align: center;
    position:fixed;
}

.userLogo{
    height: 7vh;
    width: 7vh;
    padding-right: 30vh;
    top: 3vh;
    right: 11vh;
    position: absolute;

}

.box{
    width: 46%;
    margin: auto;
    padding:7vh 5vh 3vh 3vh;
    text-align: center;
}
#corner{
    background-color:#596286;
    padding-top: 3vh;
    padding-bottom: 2.3vh;
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

