/*Generic Function for the pie*/
function createPie(activePie,pieColor){
	var pie = $(activePie).get(0).getContext('2d');
	var pieVal =parseInt($(activePie).siblings('.caption').text());
	new Chart(pie).Doughnut([
		{ value: pieVal, color: pieColor },
		{ value: 100 - pieVal, color: 'rgba(0,0,0,0)' }
	], {
	  segmentShowStroke: false,
	  percentageInnerCutout : 80, /*Pie border width*/
	});
}
 
/*CreatePie(Pie canvas id, border color) - Value fetched from caption class in html*/
createPie(pie01,'#12edd4');
createPie(pie02,'#fe0151');
createPie(pie03,'#ff0004');
createPie(pie04,'#f94f06');

