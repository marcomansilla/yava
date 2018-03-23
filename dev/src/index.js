import TestComponent from './components/TestComponent.min.js';

var index = new Vue({
    components:{
	TestComponent
    },
    el:'#index',
    delimiters:['${','}'],
    data:{
	message:'This is a message from the main Vue Instance'
    }
});
