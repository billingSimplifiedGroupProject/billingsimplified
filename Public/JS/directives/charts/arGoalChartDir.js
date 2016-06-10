angular.module('app')
	.directive('arGoalChart', function(){

		return {
			scope: {
				arGoalChartData: '='
			},
			templateUrl: './JS/directives/charts/arGoalChart.html',
			link: function(scope, element, attrs){

				var arGoalChartData = scope.arGoalChartData;
				
				var data = [
					{ "Period": "Current", "Actual": 71.0, "Goal": 62.0 },
					{ "Period": "31-60", "Actual": 6.5, "Goal": 16.0 },
					{ "Period": "61-90", "Actual": 13.0, "Goal": 8.0 },
					{ "Period": "91+", "Actual": 9.5, "Goal": 14.0 }
				];
				// STYLING //
				var margin = {top: 40, right: 20, bottom: 40, left: 50},
					width = 576 - margin.left - margin.right, // 960
					height = 300 - margin.top - margin.bottom; // 500

				var yScale = d3.scale.linear()
					.domain([0, d3.max(data)])
					.range([0, height]);

				var axisFormatter = d3.format("s");

				var color = d3.scale.ordinal()
					.range(["#D7625E", "#4682B4"]); // 4C8EC4

				var x0 = d3.scale.ordinal().rangeRoundBands([0, width], 0.25, 0.2);
				var x1 = d3.scale.ordinal();
				var y = d3.scale.linear().range([height, 0]);

				var xAxis = d3.svg.axis()
					.scale(x0)
					.orient("bottom");
				var yAxis = d3.svg.axis()
					.scale(y)
					.orient("left")
					.tickFormat(function(d) { return axisFormatter(d) + "%"; });

				// CREATE CHART CONTAINER //
				var svg = d3.select(".ar-goal-chart")
					.attr("width", width + margin.left + margin.right)
					.attr("height", height + margin.top + margin.bottom)
				  .append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

				// DEFINE GROUPS & SERIES
				var measNames = d3.keys(data[0]).filter(function(key) {	return key !== "Period"; }); // measNames = current, 31-60, etc

				data.forEach(function(d) {
					d.measurements = measNames.map(function(name) { return {name: name, value: +d[name]}; });
				});
				// Groups scale, x axis
				x0.domain(data.map(function(d) { return d.Period; }));
				// Series scale, x axis, child of x0
				x1.domain(measNames).rangeRoundBands([0, x0.rangeBand()]);
				// Values scale, y axis
				y.domain([0, d3.max(data, function(d) {
					return d3.max(d.measurements, function(d) { return d.value; });
				})]);

				svg.append("g")
					.attr("class", "x axis")
					.attr("transform", "translate(0," + height + ")")
					.call(xAxis);

				svg.append("g")
					.attr("class", "y axis")
					.call(yAxis)
				  .append("text")
					.attr("transform", "rotate(-90)")
					.attr("y", 6)
					.attr("dy", ".71em")
					.style("text-anchor", "end")
					.text("Collected");

				var state = svg.selectAll(".state")
					.data(data)
					.enter()
				  .append("g")
					.attr("class", "state")
					.attr("transform", function(d) { return "translate(" + x0(d.Period) + ",0)"; });

				// BARS
				state.selectAll("rect")
					.data(function(d) { return d.measurements; })
					.enter()
				  .append("rect")
					.attr("width", x1.rangeBand())
					.attr("x", function(d) { return x1(d.name); })
					.attr("y", function(d) { return height; })
					.attr("height", 0) //function(d) { return height - y(d.value); })
					.style("fill", function(d) { return color(d.name); })
				  .transition()
					.duration(800)
					// .delay(function (d, i) { return i * 100; })
					.attr('y', function (d, i) { return y(d.value); })
					.attr('height', function (d, i) { return height - y(d.value); });

				// LEGEND //
				var legend = svg.selectAll(".legend")
					.data(measNames.slice().reverse())
				  .enter().append("g")
					.attr("class", "legend")
					.attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; })
					.style("fill", "#fff");

				legend.append("rect")
					.attr("x", width - 18)
					.attr("width", 18)
					.attr("height", 18)
					.style("fill", color);

				legend.append("text")
					.attr("x", width - 24)
					.attr("y", 9)
					.attr("dy", ".35em")
					.style("text-anchor", "end")
					.text(function(d) { return d; });

			}

		};

	});
