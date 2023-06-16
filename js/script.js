console.log('Vue OK', Vue);

// Estrapolo il metodo creatApp
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
    data(){
        return{
            title: 'Hello Vue!',
            image: 'https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/vuel_870x220.png?sfvrsn=55532680_1'
        }
    }
});

// Monto nell'elemento (di partenza)
app.mount('#root');