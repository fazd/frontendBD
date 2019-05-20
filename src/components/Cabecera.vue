<template>
    <nav class = "navB">
    
    <div>
        <ul>
            <li><router-link to="/login"  class="navText" >Login</router-link></li>
            <li><router-link to="/register" class="navText" >Register</router-link></li>
            <li><router-link to="/dashboard" class="navText" >DashBoard</router-link></li>
            
        </ul> 
        
        
    </div>
    </nav>
    
</template>

<script>
export default {
    name: 'cabecera'    
}
</script>

<style>
    .navB{
        background-color: #ffffff;
        padding:0;
        margin: 0;
        text-align: right;
        line-height: 50px;

    }
    ul{
        list-style-type: none;
    }
    li{
        display: inline;
    }
    .navText{
        color: #556080;
        padding-right: 20px;
    }
</style>
