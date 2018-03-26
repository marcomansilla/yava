import TestComponent from './components/TestComponent.js';
import SecondTestComponent from './components/SecondTestComponent.js';

var index = new Vue({
    components:{
	TestComponent,
	SecondTestComponent
    },
    el:'#index',
    delimiters:['${','}'],
    data:{
	message:'This is a message from the main Vue Instance'
    }
});
