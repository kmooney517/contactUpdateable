export default function(data) {
	return `
		<div class='person'>
			<button class='backBtn abc' data-to='people'>
				<i class='fa fa-arrow-left'></i>
			</button>

			<h2>Contact Information</h2>

			<ul>
				<li><i class='fa fa-rocket'></i><span>Name:</span> ${data.Name}</li>
				<li><i class='fa fa-envelope'></i><span>Email:</span> ${data.Email}</li>
				<li><i class='fa fa-phone'></i><span>Phone Number:</span> ${data.PhoneNumber}</li>
				<li><i class='fa fa-globe'></i><span>Current City:</span> ${data.Location}</li>
			</ul>
		</div>


	`;


};