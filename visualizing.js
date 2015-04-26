function createPathList(remainder_array,win_size) {
  var remainders_length = remainder_array.length;
  var max = 0;
  for (var i = 0; i < remainders_length; i++) {
    if(remainder_array[i]>max) {
      max = remainder_array[i];
    } //Do something
	}
  var max = max+10;
  var scale = Math.floor(win_size/max);
  var last = remainder_array[0];
  var listOfAngles = []
  for (var i = 1; i < remainders_length; i++) {
    var lineData = [ { "x": last*scale,   "y": (win_size-last*scale)},  { "x": last*scale,  "y": (win_size-remainder_array[i]*scale)},
                 { "x": remainder_array[i]*scale,  "y": (win_size-remainder_array[i]*scale)} ]
    listOfAngles.push(lineData);
    last = remainder_array[i];
	}

  return listOfAngles;
}





function drawLines(remainder_array,line_data,svg_container) {
  //This is the accessor function we talked about above
  var lineFunction = d3.svg.line()
                           .x(function(d) { return d.x; })
                           .y(function(d) { return d.y; })
                           .interpolate("linear");

  <!-- var colorful = document.getElementById('num_input').value; -->


  var line_data_length = line_data.length;

  var color_list = ["aqua", "crimson", "limegreen", "darkorange", "darkslateblue",
  "firebrick", "fuchsia", "indigo", "lightsalmon", "mediumorchid",
  "mediumspringgreen", "royalblue", "tomato", "violet"]

  if(1==1){
    for (var i = 0; i < line_data_length; i++) {
    var lineGraph = svg_container.append("path")
                             .attr("d", lineFunction(line_data[i]))
                             .attr("stroke", color_list[i%color_list.length])
                            .attr("stroke-width", 2)
                            .attr("fill", "none");
  	}
  }
  else {
    for (var i = 0; i < line_data_length; i++) {
    var lineGraph = svg_container.append("path")
                             .attr("d", lineFunction(line_data[i]))
                             .attr("stroke", "blue")
                            .attr("stroke-width", 4)
                            .attr("fill", "none");
  	}
  }
}
