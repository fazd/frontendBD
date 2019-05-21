<template>
    <div>
        <BarrasControl title="Categories"></BarrasControl>
        <div class="combobox">
            <select v-model="catinp">
                <option value="Cat1">Cat1</option>
                <option value="Cat2">Cat2</option>
                <option value="Cat3">Cat3</option>
                <option value="Cat4">Cat4</option>
            </select>     
        </div>
        <div class="elim-btn">
            <button @click="elm">eliminar</button>
        </div>
        <CategoryView :dir = "{ ruta: require('../assets/images/logo.png')}" nombre="producto 1"
        categoria="cat 1" numStock="20" ></CategoryView>
        <CategoryView :dir = "{ ruta: require('../assets/images/logo.png')}" nombre="producto 1"
        categoria="cat 1" numStock="20" ></CategoryView>
        <CategoryView :dir = "{ ruta: require('../assets/images/logo.png')}" nombre="producto 1"
        categoria="cat 1" numStock="20" ></CategoryView>
        <CategoryView :dir = "{ ruta: require('../assets/images/logo.png')}" nombre="producto 1"
        categoria="cat 1" numStock="20" ></CategoryView>
    </div>
</template>

<script>
import BarrasControl from '@/components/BarrasControl.vue'
import CategoryView from '@/components/CategoryView.vue'


export default {
    name: 'Categories',
    components: {
        BarrasControl,
        CategoryView
    },
    data(){
        return{
            catinp: ''
        }
    },
    methods: {
        elm(){
            let obj = new Object();
            obj.cat = this.catinp;
            let catJson = JSON.stringify(obj);
            console.log(catJson);
        }
    }
}
</script>

<style>
.combobox{
    padding-top:100px;
    padding-left: 50vh;
    text-align: center;
    width: 50%;

}

.combobox select{
    width: 50%;
}

.elim-btn{
    width: 50%;
    padding-left: 50vh;
    text-align: center;
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
