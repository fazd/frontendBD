<template>
    <div>
        <div class = "form">
            <img src="../assets/images/box.svg" alt="Usuario">
            <div class= "camp_form">
                <h4>Nombre</h4>
                <input   type="text" class ="input" v-model.trim="nombreinp" placeholder="Nombre"> 
            </div>
            <div class= "camp_form" id="categoria">
                <h4>Categoria</h4>
                <select v-model.trim="catinp" >
                    <option v-for="cat of Categories" :key="cat.nombre" value="Cat1">{{cat.nombre}}</option>
                </select> 
            </div>
            <div class= "camp_form">
                <h4>Precio</h4>
                <input type="text" class ="input" v-model.trim="precioinp" placeholder="0000" >
            </div>
            
            <div class ="camp_form">
                <h4>url</h4>
                <input type="file" name="myFile">
            </div>
            
            <button @click="agreg">Agregar</button>

        </div>

    </div>

</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Form',
    data (){
        return {
            nombreinp: '',
            catinp: 'Categoria 1',
            precioinp: '',
            urlinp: ''
        }
    },
    methods:{
        agreg(){
            let obj = new Object();
            obj.name=this.nombreinp;
            obj.category = this.catinp;
            obj.price = this.precioinp;
            obj.urlinp = this.urlinp;
            obj.auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImQiLCJpZCI6IlVNSkRFcCIsImlhdCI6MTU1ODQ1Mzg0NSwiZXhwIjoxNTU4NDU3NDQ1fQ.JB9jA2QJdppG80IHTO5j4oEoNr1PBzTv2CWZhq2c02Y';
            let formJson = JSON.stringify(obj);
            console.log(formJson);
            fetch('http://localhost:2000/products', {
                method: 'POST',
                mode: 'cors',
                headers: {
                "Content-type": "application/json; charset=UTF-8",
                'Access-Control-Allow-Origin':'*'
                },
                body: formJson
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
                window.location = ('./#/products');
            }
        }
    },
    computed:{
        ...mapState(['Categories'])
    }
}
</script>
<style scoped >
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
    width: 20%;
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

.camp_form select {
    float: right;
    width: 40%;
    margin: 20;
    
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

#categoria{

    width: 100%;
}

</style>
