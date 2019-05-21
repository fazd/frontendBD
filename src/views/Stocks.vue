<template>
    <div>
        <BarrasControl title="Stock"></BarrasControl>
        <StockView :dir = "{ ruta: require('../assets/images/logo.png')}" nombre="producto 1"
        categoria="cat 1" numStock="20" ></StockView>
        <StockView :dir = "{ ruta: require('../assets/images/logo.png')}" nombre="producto 1"
        categoria="cat 1" numStock="20" ></StockView>
        <StockView :dir = "{ ruta: require('../assets/images/logo.png')}" nombre="producto 1"
        categoria="cat 1" numStock="20" ></StockView>
        <StockView :dir = "{ ruta: require('../assets/images/logo.png')}" nombre="producto 1"
        categoria="cat 1" numStock="20" ></StockView>
        <StockView :dir = "{ ruta: require('../assets/images/logo.png')}" nombre="producto 1"
        categoria="cat 1" numStock="20" ></StockView>
    </div>
</template>

<script>
import BarrasControl from '@/components/BarrasControl.vue'
import StockView from '@/components/StockView.vue'

export default {
    name: 'Stock',
    components: {
        BarrasControl,
        StockView
    },
}
</script>

