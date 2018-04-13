var images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: 'images/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: 'images/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: 'images/beast.jpg'
	}
};

for (var key in images) {
    var obj = images[key];
    for (var prop in obj) {
        // skip loop if the property is from prototype
        if(!obj.hasOwnProperty(prop)) continue;

        // your code
				var div = document.getElementById( 'picture-container' )
        var image = '<img src="' + obj[prop] + '">';

				div.innerHTML += image;

    }
}
