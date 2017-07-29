{
	donor.donate = function(a,b,c,d) {
		let donations = donor.getdonate();
		donations.push({"E-mail":a,"Name":b,"Donation":c,"Type":d});
		return donations;
			
	}
}