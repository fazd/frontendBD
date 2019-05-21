import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: [
      {
        dir: {ruta: require('./assets/images/logo.png')
        },
        nombre: "producto 1",
        categoria: "categoria 1",
        numStock: "20"
      },
      {
        dir: {
          ruta: require('./assets/images/logo.png')
        },
        nombre: "producto 2",
        categoria: "categoria 2",
        numStock: "20"
      },
      {
        dir: {
          ruta: require('./assets/images/logo.png')
        },
        nombre: "producto 3",
        categoria: "categoria 3",
        numStock: "20"
      },
      {
        dir: {
          ruta: require('./assets/images/logo.png')
        },
        nombre: "producto 4",
        categoria: "categoria 4",
        numStock: "20"
      },
      {
        dir: {
          ruta: require('./assets/images/logo.png')
        },
        nombre: "producto 5",
        categoria: "categoria 5",
        numStock: "20"
      },
    ],
    elemStock: [
      {
        dir: {ruta: require('./assets/images/logo.png')
        },
        nombre: "producto 1",
        categoria: "categoria 1",
        numStock: "20"
      },
      {
        dir: {
          ruta: require('./assets/images/logo.png')
        },
        nombre: "producto 2",
        categoria: "categoria 2",
        numStock: "20"
      },
      {
        dir: {
          ruta: require('./assets/images/logo.png')
        },
        nombre: "producto 3",
        categoria: "categoria 3",
        numStock: "20"
      },
      {
        dir: {
          ruta: require('./assets/images/logo.png')
        },
        nombre: "producto 4",
        categoria: "categoria 4",
        numStock: "20"
      },
      {
        dir: {
          ruta: require('./assets/images/logo.png')
        },
        nombre: "producto 5",
        categoria: "categoria 5",
        numStock: "20"
      } 
    ],
    Categories: [
      {
        nombre: 'categoria 1'
      },
      {
        nombre: 'categoria 2'
      },
      {
        nombre: 'categoria 3'
      },
      {
        nombre: 'categoria 4'
      },
      {
        nombre: 'categoria 5'
      }
    ],
    elemCat: [
      {
        dir: {ruta: require('./assets/images/logo.png')
        },
        nombre: "producto 1",
        categoria: "categoria 1",
        numStock: "20"
      },
      {
        dir: {
          ruta: require('./assets/images/logo.png')
        },
        nombre: "producto 2",
        categoria: "categoria 2",
        numStock: "20"
      },
      {
        dir: {
          ruta: require('./assets/images/logo.png')
        },
        nombre: "producto 3",
        categoria: "categoria 3",
        numStock: "20"
      },
      {
        dir: {
          ruta: require('./assets/images/logo.png')
        },
        nombre: "producto 4",
        categoria: "categoria 4",
        numStock: "20"
      },
      {
        dir: {
          ruta: require('./assets/images/logo.png')
        },
        nombre: "producto 5",
        categoria: "categoria 5",
        numStock: "20"
      },
    ],
  },
  mutations: {
    
  },
  actions: {

  }
})
