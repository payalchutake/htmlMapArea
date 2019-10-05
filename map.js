function interactiveMap(img) {
	$(img).each(function() {
			$('<img/>')[0].src = this;
		});
	}
	interactiveMap(["map-yellow.png",
			"map-red.png",
			"map-pink.png",
			"map-green.png",
			"map-blue.png"
		]);
			
			
	jQuery(document).ready(function() {
		$(".title-blue").mouseout(function(){
			$("#map").attr("src", "map-original.png");
		}),
		$(".title-blue").mouseover(function(){
			$("#map").attr("src", "map-blue.png");
		});
		$(".title-red").mouseout(function(){
			$("#map").attr("src", "map-original.png");
		}),
		$(".title-red").mouseover(function(){
			$("#map").attr("src", "map-red.png");
		});
		$(".title-green").mouseout(function(){
			$("#map").attr("src", "map-original.png");
		}),
		$(".title-green").mouseover(function(){
			$("#map").attr("src", "map-green.png");
		});	
		$(".title-yellow").mouseout(function(){
			$("#map").attr("src", "map-original.png");
		}),
		$(".title-yellow").mouseover(function(){
			$("#map").attr("src", "map-yellow.png");
		});
		$(".title-pink").mouseout(function(){
			$("#map").attr("src", "map-original.png");
		}),
		$(".title-pink").mouseover(function(){
			$("#map").attr("src", "map-pink.png");
		});	
	});		