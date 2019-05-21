<template>
    <div>
        <BarrasControl title="Stock"></BarrasControl>
        <StockView  v-for="prod of elemStock" :key="prod.nombre" v-bind:dir = "{ ruta: require('../assets/images/logo.png')}" v-bind:nombre="prod.nombre"
        v-bind:categoria="prod.categoria" v-bind:numStock="prod.numStock" ></StockView>
        
    </div>
</template>

<script>
import BarrasControl from '@/components/BarrasControl.vue'
import StockView from '@/components/StockView.vue'
import {mapState} from 'vuex';
export default {
    name: 'Stock',
    components: {
        BarrasControl,
        StockView
    },
    computed:{
        ...mapState(['elemStock'])
    }
}
</script>

