$(function(){
	$(".circular-1").circleChart({
		size: 260,
		color:"#ddded3",
		value: 75,
		speed:5000,
		counterclockwise:true,
		widthRatio: 0.2,
		startAngle:25,
		lineCap: "butt",
		backgroundColor:"#3bbe7a",
		
	});
	$(".circular-2").circleChart({
		size: 260,
		color:"#ddded3",
		value: 25,
		speed:4500,
		counterclockwise:true,
		widthRatio: 0.2,
		startAngle:25,
		lineCap: "butt",
		backgroundColor:"#3bbe7a",
		
	});
	$(".circular-3").circleChart({
		size: 260,
		color:"#ddded3",
		value: 85,
		speed:5500,
		counterclockwise:true,
		widthRatio: 0.2,
		startAngle:25,
		lineCap: "butt",
		backgroundColor:"#3bbe7a",
	});
	$(".circular-4").circleChart({
		size: 260,
		color:"#ddded3",
		value: 45,
		speed:5000,
		counterclockwise:true,
		widthRatio: 0.2,
		startAngle:25,
		lineCap: "butt",
		backgroundColor:"#3bbe7a",
	});
	
	$(".number1").numberRock({
	    speed:60,
	    count:-10000
    })
    $(".number2").numberRock({
	    speed:35,
	    count:-3691
    })
    $(".number3").numberRock({
	    speed:50,
	    count:-12000
    })
    $(".number4").numberRock({
	    speed:10,
	    count:-30
    })
	
});