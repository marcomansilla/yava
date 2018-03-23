export default{
    template:`
    <div class="well">
	<h3> This comes from a test component</h3>

	<ul v-for="item in items">
	    <li v-text="item"></li>
	</ul>
    </div>
    `,
    data(){
	return {
	    items:['James Doe', 'Jane Doe', 'Homer Simpson']
	};
    }
};
