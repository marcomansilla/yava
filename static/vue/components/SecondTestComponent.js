export default{
    template:`
    <div class="card bg-faded">
	<h3> This comes from a second test component</h3>

	<p>{{lorem}}</p>
    </div>
    `,
    data(){
	return {
	    lorem:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl'
	};
    }
};
