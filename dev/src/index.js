import TestComponent from './components/TestComponent.min.js';
import SecondTestComponent from './components/SecondTestComponent.min.js';

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
