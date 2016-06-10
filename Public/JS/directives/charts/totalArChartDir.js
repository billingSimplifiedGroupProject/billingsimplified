angular.module('app')
	.directive('totalArChart', function(){

		return {
			scope: {
				dailyArChartData: '=',
				weeklyArChartData: '=',
				monthlyArChartData: '='
			},
			templateUrl: './JS/directives/charts/totalArChart.html',
			link: function(scope, element, attrs){

				var dailyChartData = scope.dailyArChartData.data[0];
				var weeklyChartData = scope.weeklyArChartData;
				var monthlyChartData = scope.monthlyArChartData;

				// dailyChartData.data[0].date
				// dailyChartData.data[0].ARcurrent
				// dailyChartData.data[0].ARthirtySixty
				// dailyChartData.data[0].ARsixtyNinety
				// dailyChartData.data[0].ARninetyUp
				var dailyData = [
					{
						"date": dailyChartData.date,
						"Current": dailyChartData.ARcurrent,
						"31-60": dailyChartData.ARthirtySixty,
						"61-90": dailyChartData.ARsixtyNinety,
						"91+": dailyChartData.ARninetyUp
					},
				];

				// var weeklyData = [
				// 	{ "date": data[6].date, "Current": data[6].ARcurrent, "31-60": data[6].ARthirtySixty, "61-90": data[6].ARsixtyNinety, "91+": data[6].ARninetyUp },
				// 	{ "date": data[5].date, "Current": data[5].ARcurrent, "31-60": data[5].ARthirtySixty, "61-90": data[5].ARsixtyNinety, "91+": data[5].ARninetyUp },
				// 	{ "date": data[4].date, "Current": data[4].ARcurrent, "31-60": data[4].ARthirtySixty, "61-90": data[4].ARsixtyNinety, "91+": data[4].ARninetyUp },
				// 	{ "date": data[3].date, "Current": data[3].ARcurrent, "31-60": data[3].ARthirtySixty, "61-90": data[3].ARsixtyNinety, "91+": data[3].ARninetyUp },
				// 	{ "date": data[2].date, "Current": data[2].ARcurrent, "31-60": data[2].ARthirtySixty, "61-90": data[2].ARsixtyNinety, "91+": data[2].ARninetyUp },
				// 	{ "date": data[1].date, "Current": data[1].ARcurrent, "31-60": data[1].ARthirtySixty, "61-90": data[1].ARsixtyNinety, "91+": data[1].ARninetyUp },
				// 	{ "date": data[0].date, "Current": data[0].ARcurrent, "31-60": data[0].ARthirtySixty, "61-90": data[0].ARsixtyNinety, "91+": data[0].ARninetyUp },
				// ];

				// var monthlyData = [

				// ];

				var data = [
					{ "date": "2015-11", "Current": "69.0", "31-60": "8.7", "61-90": "13.4", "91+": "8.9" },
					{ "date": "2015-12", "Current": "67.9", "31-60": "7.6", "61-90": "14.6", "91+": "9.9" },
					{ "date": "2016-01", "Current": "72.0", "31-60": "7.0", "61-90": "13.5", "91+": "7.5" },
					{ "date": "2016-02", "Current": "71.5", "31-60": "7.5", "61-90": "14.0", "91+": "7.0" },
					{ "date": "2016-03", "Current": "70.0", "31-60": "9.0", "61-90": "12.5", "91+": "8.5" },
					{ "date": "2016-04", "Current": "69.0", "31-60": "9.5", "61-90": "13.0", "91+": "8.5" },
					{ "date": "2016-05", "Current": "69.5", "31-60": "8.0", "61-90": "14.5", "91+": "8.0" },
					{ "date": "2016-06", "Current": "71.0", "31-60": "6.5", "61-90": "13.0", "91+": "9.5" }
				];
				// STYLING
				var margin = {top: 40, right: 60, bottom: 40, left: 50},
					width = 576 - margin.left - margin.right,
					height = 300 - margin.top - margin.bottom;

				var parseDate = d3.time.format("%Y-%m").parse,
					formatPercent = d3.format(".0%");

				var x = d3.time.scale()
					.range([0, width]);

				var y = d3.scale.linear()
					.range([height, 0]);

				// var color = d3.scale.category10();
				var color = d3.scale.ordinal()
					.range(["#1F77B4", "#F7E100", "#FF7F0E", "#D62728"]);

				var xAxis = d3.svg.axis()
					.scale(x)
					.orient("bottom")
					.ticks(d3.time.month).tickFormat(d3.time.format("%b"));

				var yAxis = d3.svg.axis()
					.scale(y)
					.orient("left")
					.tickFormat(formatPercent);

				var line = d3.svg.area()
					.interpolate("cardinal")
					.x(function(d) { return x(d.date); })
					.y0(function(d) { return y(d.y); })
					.y1(function(d) { return y(d.y); });

				function line_to_stacked(t) {
					return d3.svg.area()
						.interpolate("cardinal")
						.x(function(d) { return x(d.date); })
						.y0(function(d) { return y(t * d.y0 + d.y); })
						.y1(function(d) { return y(t * d.y0 + d.y); });
				}

				function area_to_stacked(t) {
					return d3.svg.area()
						.interpolate("cardinal")
						.x(function(d) { return x(d.date); })
						.y0(function(d) { return y(d.y0 + (1 - t) * d.y); })
						.y1(function(d) { return y(d.y0 + d.y); });
				}

				var stack = d3.layout.stack()
					.values(function(d) { return d.values; });

				// CREATE CHART CONTAINER //
				var svg = d3.select(".total-ar-chart")
					.attr("width", width + margin.left + margin.right)
					.attr("height", height + margin.top + margin.bottom)
				  .append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

				// DEFINITIONS
				color.domain(d3.keys(dailyData[0]).filter(function(key) { return key !== "date"; }));

				dailyData.forEach(function(d) {
					d.date = parseDate(d.date);
				});

				var collPeriods = stack(color.domain().map(function(name) {
					return { name: name, values: dailyData.map(function(d) {
						return {date: d.date, y: d[name] / 100};
					})};
				}));

				x.domain(d3.extent(dailyData, function(d) { return d.date; }));

				var collPeriod = svg.selectAll(".collPeriod")
					.data(collPeriods)
				  .enter().append("g")
					.attr("class", "collPeriod");

				collPeriod.append("path")
					.attr("class", "area")
					.attr("d", function(d) { return line(d.values); })
					.style("stroke", function(d) { return color(d.name); })
					.style("stroke-width", "3px")
					.style("fill", function(d) { return color(d.name); });
				collPeriod.append("text")
					.datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
					.attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.y) + ")"; })
					.attr("x", 4)
					.attr("dy", ".35em")
					.style("fill", function(d) { return color(d.name); })
					.text(function(d) { return d.name; });

				svg.append("g")
					.attr("class", "x axis")
					.attr("transform", "translate(0," + height + ")")
					.call(xAxis);
				svg.append("g")
					.attr("class", "y axis")
					.call(yAxis);

				// TRANSITIONS //
				var is_area_plot = false;
				scope.transitionLineStacked = function() {
					var duration = 1500;
					var collPeriod = svg.selectAll(".collPeriod");
					var transition = collPeriod.transition()
						.delay(function(d, i) { return i * 500; })
						.duration(duration);
					var postTransition = transition.transition();
					if (!is_area_plot) {
						transition.selectAll("path")
							.attrTween("d", shapeTween(line_to_stacked, 1));
						transition.selectAll("text")
							.attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.y0 + d.value.y) + ")"; });
						postTransition.selectAll("path")
							.attrTween("d", shapeTween(area_to_stacked, 1))
							.style("stroke-opacity", 0.0);
						postTransition.selectAll("text")
							.attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.y0 + d.value.y / 2) + ")"; });
					} else {
						transition.selectAll("path")
							.style("stroke-opacity", 1.0)
							.attrTween("d", shapeTween(area_to_stacked, 0));
						transition.selectAll("text")
							.attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.y0 + d.value.y) + ")"; });
						postTransition.selectAll("path")
							.attrTween("d", shapeTween(line_to_stacked, 0));
						postTransition.selectAll("text")
							.attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.y) + ")"; });
					}
					is_area_plot = !is_area_plot;
				};

				function shapeTween(shape, direction) {
					return function(d, i, a) {
						return function(t) {
							return shape(direction ? t : 1.0 - t)(d.values);
						};
					};
				}

			}

		};

	});
