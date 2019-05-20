<template>
    <div>
        <cabecera/>
        <div class="form ">
            <img src="../assets/images/login-register_logo.svg" alt="Usuario">
            <div class= "camp_form">
                <h4>E-mail</h4>
                <input type="email" v-model.trim="emailinp" placeholder="example@something.com" >
            
            </div>
            
            <div class ="camp_form">
                <h4>Password</h4>
                <input type="password" placeholder="••••••••" v-model.trim="passwordinp">
            </div>
            
            <button>Log In</button>

        </div>
    </div>
</template>

<script>
import cabecera from '@/components/Cabecera.vue'
export default {
    name: 'login',
    components: {
        cabecera
    },
    data(){
        return{
            emailinp: '',
            passwordinp: ''
        }
    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap%27');
    
*{
    font-family: 'Open Sans', sans-serif;
}

.form{
    padding-top: 2%;  
    width: 25%;
    margin: auto;
}
img{
    padding-bottom: 20px;    
}

input{
    
    border:none;
    outline: none;
    border-bottom:2px solid ;
    width: 100%;
    color: #556080;
    
}

.input_w {
    border:none;
    outline: none;
    border-bottom:2px solid ;
    width: 100%;
    color:  #ec0808;

}

.camp_form {
    text-align: center;
    padding-bottom: 20px;
}

.camp_form h4{
    text-align: left; 
}
button{
    width: fit-content;
    background-color: #556080;
    margin-top: 30px;
    color: #ffffff;
    width: 100%;
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    
}

</style>

