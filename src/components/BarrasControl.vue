<template>
    <div>
         <div class = "navBar">
                <div class="title"><p>{{title}}</p></div>
                <div class = "userLogo"><img src="../assets/images/user.svg" alt="usuario"></div>     
                <div class = "dropdown"><button @click="logout" >LogOut</button></div>                
         </div>
         <div class="verticalBar">
             <div class ="box" id="corner" @click="gotoDash"><img src="../assets/images/pie-chart1.svg" alt="imagen conf"></div> 
             <div class ="box" @click="gotoware" ><img src="../assets/images/warehouse1.svg" alt="imagen conf"></div> 
             <div class ="box" @click="gotoreload" ><img src="../assets/images/reload.svg" alt="imagen conf"></div> 
             <div class ="box" @click="gotopie" ><img src="../assets/images/pie-chart1.svg" alt="imagen conf"></div>  
         </div>
        
        
    </div>
</template>

<script>
export default {
    name : 'BarrasControl',
    methods:{
        gotoware(){
            window.location = ('./#/stocks');
        },
        gotoreload(){
            window.location = ('./#/products');
        },
        gotopie(){
            window.location = ('./#/categories');
        },
        gotoDash(){
            window.location = ('./#/dashboard');
        },
        logout(){
             window.location = ('./#/login');
        }
    },
    props: ['title'],
    
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
    padding-right: 40vh;
    top: 3vh;
    right: 20vh;
    position: absolute;

}

.dropdown{
    height: 7vh;
    width: 7vh;
    padding-right: 30vh;
    top: 5vh;
    right: 11vh;
    position: absolute;
}

.dropdown button {
    width: 5px;
    padding-right: 14vh;
    margin: 3vh;
    margin-right: 3vh;
    top: 0vh;
    margin-bottom: 0;
    position: fixed;
}

.box{
    width: 46%;
    margin: auto;
    padding:7vh 5vh 3vh 3vh;
    text-align: center;
}

.box:hover{
    cursor:pointer;
}
#corner{
    background-color:#596286;
    padding-top: 3vh;
    padding-bottom: 2.3vh;
}

button{
    background-color: #556080;
    margin-top: 30px;
    color: #ffffff;
    width: 51%;
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    
}


</style>

