 margin = {top: 50, right: 100, bottom: 50, left: 50},
 width = 1000 - margin.left - margin.right,
 height = 500 - margin.top - margin.bottom;

var svg_line = d3.select("#viz1").select("#linechart")
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseTime = d3.timeParse("%Y");

var x = d3.scaleTime().range([0, width]),
    y = d3.scaleLinear().range([height, 0]);

var colorMap = {"hotel": d3.rgb("#7fc97f"), "residential":d3.rgb("#fdc086"), "office":d3.rgb("#beaed4"), "other":d3.rgb("#f0027f"), "all":d3.rgb("#386cb0")};

var xAxis_line = d3.axisBottom()
    .scale(x);

var yAxis_line = d3.axisLeft()
    .scale(y);

var line = d3.line()
    .curve(d3.curveBasis)
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.count); });

var purpMap = {};


