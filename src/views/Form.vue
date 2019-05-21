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
                <select>
                    <option value="Cat1">Cat1</option>
                    <option value="Cat2">Cat2</option>
                    <option value="Cat3">Cat3</option>
                    <option value="Cat4">Cat4</option>
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
export default {
    name: 'Form',
    data (){
        return {
            nombreinp: '',
            catinp: '',
            precioinp: '',
            urlinp: ''
        }
    },
    methods:{
        agreg(){
            window.location = ('./#/products');
        }
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
