<template>
    <div>
        <BarrasControl title="Categories"></BarrasControl>
        <div class="combobox">
            <select v-model="catinp">
                <option v-for="cat of Categories" :key="cat.nombre" v-bind:value="cat.nombre">{{cat.nombre}}</option>
                
            </select>     
        </div>
        <div class="elim-btn">
            <button @click="elm">eliminar</button>
        </div>
        <CategoryView v-for="prod of filterArray " :key="prod.name" v-bind:dir = "prod.dir" v-bind:nombre="prod.nombre"
        v-bind:categoria="prod.categoria" v-bind:numStock="prod.numStock" ></CategoryView>
        
    </div>
</template>

<script>
import BarrasControl from '@/components/BarrasControl.vue'
import CategoryView from '@/components/CategoryView.vue'
import {mapState} from 'vuex'

export default {
    name: 'Categories',
    components: {
        BarrasControl,
        CategoryView
    },
    data(){
        return{
            catinp: 'Categoria 1'
        }
    },
    methods: {
        elm(){
            let obj = new Object();
            obj.cat = this.catinp;
            let catJson = JSON.stringify(obj);
            console.log(catJson);
            this.Categories.filter(x=> x.categoria !== this.catinp);
        }
    },
    computed:{
        ...mapState(['Categories', 'elemCat']),
        filterArray(){
            console.log(this.elemCat.filter(x => x.categoria === this.catinp));
            console.log('este es catinp '+ this.catinp);
            return this.elemCat.filter(x => x.categoria === this.catinp);
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
