<template>
    <div>
        <cabecera/>
        <div class="form ">
            <img src="../assets/images/login-register_logo.svg" alt="Usuario">
            <div class= "camp_form">
                <h4>E-mail</h4>
                <input type="email" v-model.trim="emailinp" placeholder="example@something.com" id = "correoprueba">
            
            </div>
            
            <div class ="camp_form">
                <h4>Password</h4>
                <input type="password" placeholder="••••••••" v-model.trim="passwordinp">
            </div>
            
            <button @click="execute">Log In</button>

        </div>
    </div>
</template>


<script src="../../api/routes/users.js"></script>

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
    },
    methods: {
        execute(){
            var obj = new Object();
            obj.email = this.emailinp;
            obj.password = this.passwordinp;
            let logJson = JSON.stringify(obj);
            console.log(logJson);
            fetch('http://localhost:2000/user/login', {
                method: 'POST',
                mode: 'cors',
                headers: {
                "Content-type": "application/json; charset=UTF-8",
                'Access-Control-Allow-Origin':'*',
                },
                body: logJson
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
                });
            }
            )
            .catch(function(err) {
            console.log('Fetch Error :-S', err);
            });
            let reci = true;
            if(reci){
                window.location =  ('./#/dashboard');
            }
        }
    },

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

