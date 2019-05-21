<template>
    <div id = "register">
        <cabecera/>
        <div class = "form">
            <img src="../assets/images/login-register_logo.svg" alt="Usuario">
            <div class= "camp_form">
                <h4>Nombre</h4>
                <input   type="text" :class= "[ nombreinp.length > 0 ? 'input' : 'input_w']" v-model.trim="nombreinp" placeholder="Nombre" v-on:input="validateAll"> 
            </div>
            <div class= "camp_form">
                <h4>Apellido</h4>
                <input type="text" :class= "[ apellidoinp.length > 0 ? 'input' : 'input_w']" v-model.trim="apellidoinp" placeholder="Apellido" v-on:input=" validateAll" >
            </div>

            <div class= "camp_form">
                <h4>E-mail</h4>
                <input type="email" :class= "[enableEmail ? 'input' : 'input_w']" v-model.trim="emailinp" placeholder="example@email.com" v-on:input="validateEmail">
            </div>
            
            <div class ="camp_form">
                <h4>Phone</h4>
                <input type="text" :class = "[enableTel ? 'input' : 'input_w' ]" v-model.trim="phoneinp" placeholder="1234567890" v-on:input="hasLetter">
            </div>

            <div class ="camp_form">
                <h4>Password</h4>
                <input type="password" :class = "[enablePass ? 'input' : 'input_w' ]" v-model.trim="passinp" placeholder="••••••••" v-on:input="isValidPassword">
            </div>
            
            <div class ="camp_form">
                <h4>Repeat password</h4>
                <input type="password" :class = "[enablePass2 ? 'input' : 'input_w' ]"  v-model.trim="pass2inp" placeholder="•••••••• " v-on:input="isPasswordMatch">
            </div>
            <button :disabled="!enableButton" @click="changeWindow">Register</button>
        </div>
    </div>
</template>

<script>
import cabecera from '@/components/Cabecera.vue'
export default {
    name: 'register',
    components: {
        cabecera
    },  
    data (){
        return {
            nombreinp: '',
            apellidoinp: '',
            emailinp:'',
            phoneinp:'',
            passinp: '',
            pass2inp: '',
            enableTel : false,
            enablePass: false,
            enablePass2: false,
            enableEmail: false,
            enableButton: true
        }
    },
    methods: {
        hasLetter() {
            this.enableTel = this.phoneinp.match(/^\d+$/);
            this.validateAll();
        },
        isValidPassword(){
            this.enablePass = this.passinp.length >=8;   
            this.validateAll();
            this.isPasswordMatch();
        },
        isPasswordMatch(){
            this.enablePass2 = this.passinp === this.pass2inp;
            this.validateAll();

        },
        validateEmail() {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.enableEmail =  re.test(String(this.emailinp).toLowerCase());
            this.validateAll();
        },
        isEmpty(param){
            return param.length === 0;   
        },
        validateAll(){
            //this.enableButton = (this.enableTel && this.enablePass && this.enableEmail &&  this.enablePass2 && this.nombreinp.length>0 && this.apellidoinp > 0 );
            //console.log(this.enableButton);
        },
        changeWindow(){
            var obj = new Object ();
            obj.name = this.nombreinp;
            obj.apellido = this.apellidoinp;
            obj.phone = this.phoneinp;
            obj.email = this.emailinp;
            obj.password = this.passinp;
            var regisJson = JSON.stringify(obj); 
            console.log(regisJson);
            let reci = true;
            if(reci){
                window.location = ('./#/login');
            }
            
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
