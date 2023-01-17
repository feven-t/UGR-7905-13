const form = document.querySelector('#form');
const form_btn = form.querySelector('button');
const form_inputs = form.querySelectorAll('input');


form_btn.addEventListener('click',(e)=>{
	Array.from(form_inputs).every((item,index)=>{
		if(item.value == "") {
			alert("Please Fill all inputs");
			e.preventDefault();
		}
		

	})
})

