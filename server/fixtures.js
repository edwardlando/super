
if (Stylists.find().count() === 0) {
	Stylists.insert({
		title: 'Michael, the dandy',
	    imageLink: 'man1.png',
	    fullName: 'Michael Clayton',
	    bio: 'Part-time stylist, full-time legend'
	});
	Stylists.insert({
		title: 'Veronica, the lady',
	    imageLink: 'woman1.png',
	    fullName: 'Veronica Jones',
	    bio: 'Part-time stylist, full-time legend'
	});
	Stylists.insert({
		title: 'William, the philosophe',
	    imageLink: 'man2.png',
	    fullName: 'William Butler',
	    bio: 'Part-time stylist, full-time legend'
	});
	Stylists.insert({
		title: 'Rebecca, the Parisienne',
	    imageLink: 'woman2.png',
	    fullName: 'Rebecca Clay',
	    bio: 'Part-time stylist, full-time legend'
	});
}