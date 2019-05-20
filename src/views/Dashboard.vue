<template>
    <div>
         <div class = "navBar">
                <div class="title"><p>Inventory Management</p></div>
                <div class = "userLogo"><img src="../assets/images/user.svg" alt="usuario"></div>                
            
         </div>
         <div class="verticalBar">
             <div class ="box"><img src="../assets/images/pie-chart1.svg" alt="imagen conf"></div> 
             <div class ="box"><img src="../assets/images/pie-chart1.svg" alt="imagen conf"></div> 
             <div class ="box"><img src="../assets/images/pie-chart1.svg" alt="imagen conf"></div> 
             <div class ="box"><img src="../assets/images/pie-chart1.svg" alt="imagen conf"></div>  


         </div>
        <!--
        <div>
            <img src="../assets/images/categories-card.svg" alt="categoryCard">
            <img src="../assets/images/product-card.svg" alt="productCard">
            <img src="../assets/images/stock-card.svg" alt="stockCard">

        </div>-->
    </div>
    


</template>

<script>
export default {
    name: 'Dashboard'
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
    background-color: silver;

    
    
}

.verticalBar{
    height: 100vh;
    width: 5vh;
    z-index: 1;
    background-color: blue;
    
    position:fixed;
}

.userLogo{
    height: 5vh;
    width: 5vh;
    top: 4vh;
    right: 11vh;
    position: absolute;
}

.box{
    width: 80%;
    margin: auto;
    padding:5vh;
}

</style>

