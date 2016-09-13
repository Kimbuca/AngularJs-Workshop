var main = angular.module('myApp', []);



main.controller('FormController', function(){
	
	this.review = {};

	this.addReview = function(phone){
		phone.reviews.push(this.review);
		this.review = {};
	};

});



main.controller('ListController', function(){

 this.selectedItem;
 this.index;

 this.isSelected = function(item){
 	return item === this.selectedItem; 
 };

 this.setSelect = function(item, age){
 	this.selectedItem = item;
 	this.index = age;
 };

 this.phones = [
    {
        "age": 0, 
        "id": "motorola-xoom-with-wi-fi", 
        "imageUrl": "img/motorola-xoom-with-wi-fi.1.jpg", 
        "name": "Motorola XOOM\u2122 with Wi-Fi", 
        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
        "reviews":[
        	{
        		body: "Such a good model",
        		author: "kim@itesm.mx"
        	}
        ]
    }, 
    {
        "age": 1, 
        "id": "motorola-xoom", 
        "imageUrl": "img/motorola-xoom.0.jpg", 
        "name": "MOTOROLA XOOM\u2122", 
        "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb).",
        "reviews":[
        	{
        		body: "Dont like it that much, but it is pretty cheap",
        		author: "Cesar@itesm.mx"
        	},
        	{
        		body: "Its the best model out there people should try it it is awesome, really people try it",
        		author: "Fernando@itesm.mx"
        	}
        ]
    }, 
    {
        "age": 2, 
        "carrier": "AT&T", 
        "id": "motorola-atrix-4g", 
        "imageUrl": "img/motorola-atrix-4g.0.jpg", 
        "name": "MOTOROLA ATRIX\u2122 4G", 
        "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone.",
        "reviews":[
            {
                body: "Ya no se que mas inventar AIUDA",
                author: "Unusuariomas@itesm.mx"
            },
            {
                body: "Its the best model out there people should try it it is awesome, really people try it, All of us should try it",
                author: "Anonymu@yahoo.mx"
            }
        ]
    }, 
    {
        "age": 3, 
        "id": "dell-streak-7", 
        "imageUrl": "img/dell-streak-7.0.jpg", 
        "name": "Dell Streak 7", 
        "snippet": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around.",
        "reviews": []
    }, 
    {
        "age": 4, 
        "carrier": "Cellular South", 
        "id": "samsung-gem", 
        "imageUrl": "img/samsung-gem.0.jpg", 
        "name": "Samsung Gem\u2122", 
        "snippet": "The Samsung Gem\u2122 brings you everything that you would expect and more from a touch display smart phone \u2013 more apps, more features and a more affordable price.",
        "reviews": []
    }, 
    {
        "age": 5, 
        "carrier": "Dell", 
        "id": "dell-venue", 
        "imageUrl": "img/dell-venue.0.jpg", 
        "name": "Dell Venue", 
        "snippet": "The Dell Venue; Your Personal Express Lane to Everything",
         "reviews":[
            {
                body: "Such a good model congrats, esta chidi",
                author: "raul@itesm.mx"
            }
        ]
    }, 
    {
        "age": 6, 
        "carrier": "Best Buy", 
        "id": "nexus-s", 
        "imageUrl": "img/nexus-s.0.jpg", 
        "name": "Nexus S", 
        "snippet": "Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet.",
        "reviews": []
    }, 
    {
        "age": 7, 
        "carrier": "Cellular South", 
        "id": "lg-axis", 
        "imageUrl": "img/lg-axis.0.jpg", 
        "name": "LG Axis", 
        "snippet": "Android Powered, Google Maps Navigation, 5 Customizable Home Screens",
        "reviews": []
    }, 
    {
        "age": 8, 
        "id": "samsung-galaxy-tab", 
        "imageUrl": "img/samsung-galaxy-tab.0.jpg", 
        "name": "Samsung Galaxy Tab\u2122", 
        "snippet": "Feel Free to Tab\u2122. The Samsung Galaxy Tab\u2122 brings you an ultra-mobile entertainment experience through its 7\u201d display, high-power processor and Adobe\u00ae Flash\u00ae Player compatibility.",
        "reviews": []
    }, 
    {
        "age": 9, 
        "carrier": "Cellular South", 
        "id": "samsung-showcase-a-galaxy-s-phone", 
        "imageUrl": "img/samsung-showcase-a-galaxy-s-phone.0.jpg", 
        "name": "Samsung Showcase\u2122 a Galaxy S\u2122 phone", 
        "snippet": "The Samsung Showcase\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance, even outdoors",
        "reviews":[
            {
                body: "Me Gusta el sistema operativo de este artefacto",
                author: "Gloria_23e@hotmail.com"
            },
            {
                body: "Me Gusta el sistema operativo de este artefacto",
                author: "Gloria_23e@hotmail.com"
            }
        ]
    }, 
    {
        "age": 10, 
        "carrier": "Verizon", 
        "id": "droid-2-global-by-motorola", 
        "imageUrl": "img/droid-2-global-by-motorola.0.jpg", 
        "name": "DROID\u2122 2 Global by Motorola", 
        "snippet": "The first smartphone with a 1.2 GHz processor and global capabilities.",
         "reviews":[
            {
                body: "Such a good model",
                author: "raul@itesm.mx"
            }
        ]
    }
];

});