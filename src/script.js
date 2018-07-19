

	console.log("fwafaw");
	var dbRequest = indexedDB.open("OurStore", 1);
	dbRequest.onupgradeneeded = function(event) { 
		var db = event.target.result;
		var objectStore=db.createObjectStore('products', {keyPath: 'id'});
		objectStore.transaction.oncomplete = function(event) {
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange = function() {console.log("200+");
				if (this.readyState == 4 && this.status == 200) {
					console.log("20-+");
					window.myArr = JSON.parse(this.responseText);
					        // document.getElementById("demo").innerHTML = window.myArr[0];
					        console.log(window.myArr.products);
					        // var obj = window.myArr.cars;

					  		var trans = db.transaction('products', 'readwrite');

					  			// Handling Object Store
					  			var store = trans.objectStore('products');

					  			for (var i = 0; i < window.myArr.products.length; i++) {
					  				var request= store.add(window.myArr.products[i]);
					  			// console.log(window.myArr.products[i]);
					  		}
					  		x();

					  	// console.log(obj);
				}
			};
			xmlhttp.open("GET", "products.txt", true);
			xmlhttp.send();
		}

	};
	function x(){
			console.log("4545");

	}