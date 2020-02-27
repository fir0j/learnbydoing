function sendEmail() {
	// getting inputs from the form
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var subject = document.getElementById('subject').value;
	var message = document.getElementById('message').value;
	var body = `
	<center>
		<div style='background-color: rgba(17, 17, 17, 0.8); border-radius: 5px; padding: 5px; max-width: 1024px;'>
			<center>
				<fieldset style='color:rgb(236, 236, 236); border: 2px rgba(24, 210, 110, 0.8) solid; '>
					<legend ><h3 style='margin: 0; padding: 0;'><span style='font-style: italic;color:rgba(24, 210, 110, 0.8);'>${name}</span> <span style='font-style: none; font-weight:normal;color:rgb(236, 236, 236);'>regarding </span><span style='font-style: italic;color:rgba(24, 210, 110, 0.8);'>${subject}</span></h3></legend>
					<label style='font-size: 1.2rem;'>
					${message}
					</label>
				</fieldset>
			</center>
			<p style='color:rgb(236, 236, 236); font-style: italic;'><a href=mailto:${email} style='display:inline; text-decoration:none; background-color:rgba(35, 58, 46, 0.8);  padding:5px; margin-right:5px; border-radius: 5px; border: 1px solid green; color:rgb(236, 236, 236);' target='_blank'> Reply to:</a> <a href="mailto:${email}" style='text-decoration:none; color:rgba(24, 210, 110, 0.8); cursor:auto; font-size: 1rem;' target="_blank">${email}</a></p>
			
		</div>
	</center>
	`;

	var senderEmail = 'firojvsfacebook@gmail.com';
	var senderEmailPass = 'ayixkdtogvohkhap';
	var receiverEmailBox = 'firoj.is.available@gmail.com';
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (!name || !email || !subject || !message) {
		alert('Some fields are missing!');
		return;
	} else if (!email.match(mailformat)) {
		alert('Incorrect email');
		return;
	}

	Email.send({
		Host: 'smtp.gmail.com',
		Username: senderEmail,
		Password: senderEmailPass,
		To: receiverEmailBox,
		From: senderEmail,
		Subject: subject,
		Body: body
	}).then(function(message) {
		alert('Thank you ! We have received your mail.');
	});
}
