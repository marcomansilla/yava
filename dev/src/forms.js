class Errors {
    constructor() {
	this.errors={};
    }
    any(){
	return Object.keys(this.errors).length>0;
    }
    clear(field) {
	delete this.errors[field];
    }
    get(field) {
	if (this.errors[field]){
	    return this.errors[field];
	}else{
	    return null;
	}
    }
    has(field) {
	return this.errors.hasOwnProperty(field);
    }
    record(errors) {
	this.errors=errors;
    }
}

class Form {
    constructor(data){
	this.originalData=data;
	for (let field in data){
	    this[field]=data[field];
	}
	this.errors=new Errors();
    }
    reset(){
	for (let field in this.originalData){
	    this[field]='';
	}
    }
    data(){
	let data = Object.assign({}, this);
	delete data.originalData;
	delete data.errors;

	return data;
    }
    submit(req, url){
	axios[req](url, this.data())
	    .then((response)=>{
		let checkError=Object.keys(response.data.count.errors).length;
		if (checkError>0){
		    this.errors.record(response.data.count.errors);
		} else{
		    this.reset();
		    this.onSuccess();
		};
	    });
    };
    onSuccess(){
	eventBus.$emit('submitted');
    }
}
