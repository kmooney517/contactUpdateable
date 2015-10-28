let newContactTemplate = `
	
	<button class='backBtn whoops' data-to='people'>
		<i class='fa fa-arrow-left'></i> Whoops, Back to Contacts
	</button>

  <h2 class="newTitle">New Contact Information</h2>

	<div class='addNewContact'>
		<input type='text' placeholder='Name: First Last' id='name'></input>
		<input type='text' placeholder='Email: example@example.com' id='email'></input>
		<input type='text' placeholder='Phone Number: (###) ###-####' id='number'></input>
		<input type='text' placeholder='Location(City):' id='city'></input>
	</div>

	<button class="saveContact">Save Contact</button>

	`;

export default newContactTemplate;