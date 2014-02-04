var myApp = angular.module('myApp', []);

	myApp.controller('clickCtrl', ['$scope', function($scope){

		$scope.shapes = [
			{id:'1', color:'white', points:'20,20 200,20 200,100 20,100', stroke:'black', stroke_width:'1'},
			{id:'2', color:'#e8e8e8', points:'230,50 330,50 330,100 230,100', stroke:'black', stroke_width:'1'},
			{id:'3', color:'#e8e8e8', points:'350,20 700,20 700,100 350,100', stroke:'black', stroke_width:'1'},
			{id:'4', color:'white', points:'700,20 830,20 830,180 700,180', stroke:'black', stroke_width:'1'},
			{id:'5', color:'white', points:'700,180 830,180 830,330 700,330', stroke:'black', stroke_width:'1'},
			{id:'6', color:'#e8e8e8', points:'700,330 830,330 830,450 700,450', stroke:'black', stroke_width:'1'},
			{id:'7', color:'white', points:'400,400 630,400 630,450 400,450', stroke:'black', stroke_width:'1'},
			{id:'8', color:'#e8e8e8', points:'400,250 440,220 500,330 630,330 630,400 400,400', stroke:'black', stroke_width:'1'},
			{id:'9', color:'#e8e8e8', points:'20,150 200,150 200,250 20,250', stroke:'black', stroke_width:'1'},
			{id:'10', color:'#e8e8e8', points:'200,150 380,150 440,220 400,250 200,250', stroke:'black', stroke_width:'1'}
		]
		$scope.shapeClick = function(index){

			var myLake = document.getElementById('shape'+index);
			var lakeLength = document.getElementsByTagName('polygon');
			
			for(i=1;i<lakeLength.length+1;i++){
				var myLakes = document.getElementById('shape'+i);
				
				if(myLakes.getAttribute("stroke") == ("red")){
					myLakes.setAttribute("stroke", "black");
					myLakes.setAttribute("stroke-width",1);
				}
			}

			myLake.setAttribute("stroke", "red");
			myLake.setAttribute("stroke-width",3);

		};
	}]);

// myApp.controller('clickCtrl', ['$scope', function($scope){

// }]);

// myApp.directive("changeLine", function(){
// 	return function(scope, element, attrs){
// 		scope.lakeColor = function(index){
// 			// var myLake = element.find('lake'+index);
// 			alert(index);

			
// 		}
// 	}
// });