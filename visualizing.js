function createPathList(remainder_array,win_size) {
  var remainders_length = remainder_array.length;
  var max = 0;
  for (var i = 0; i < remainders_length; i++) {
    if(remainder_array[i]>max) {
      max = remainder_array[i];
    } //Do something
	}
  var max = max+10;
  if(win_size<max) {
    var scale = Math.floor(max/win_size)+1;
    var scale = 1/scale;
  }
  else{
    var scale = Math.floor(win_size/max);
  }
  var last = remainder_array[0];
  var listOfAngles = []
  var listOfJumps = []
  for (var i = 1; i < remainders_length; i++) {
    var lineData = [ { "x": Math.floor(last*scale),
    "y": Math.floor(win_size-last*scale)},  { "x": Math.floor(last*scale),
    "y": Math.floor(win_size-remainder_array[i]*scale)},
                 { "x": Math.floor(remainder_array[i]*scale),
                 "y": Math.floor(win_size-remainder_array[i]*scale)} ]
    listOfAngles.push(lineData);
    listOfJumps.push(Math.abs(remainder_array[i]-last));
    last = remainder_array[i];
	}
  return [listOfAngles, listOfJumps];
}





function drawLines(remainder_array,line_data,jump_data,svg_container) {
  //This is the accessor function we talked about above
  var lineFunction = d3.svg.line()
                           .x(function(d) { return d.x; })
                           .y(function(d) { return d.y; })
                           .interpolate("linear");

  <!-- var colorful = document.getElementById('num_input').value; -->


  var line_data_length = line_data.length;
  var mod = parseInt(document.getElementById('mod_input').value);

  var color_list = ["aqua", "crimson", "limegreen", "darkorange", "darkslateblue",
  "firebrick", "fuchsia", "indigo", "lightsalmon", "mediumorchid",
  "mediumspringgreen", "royalblue", "tomato", "violet"];

  var color_ordered = ["maroon", "red", "darkorange", "gold", "greenyellow",
    "lime", "cyan", "royalblue", "indigo", "fuchsia"]

  //random (except not)
  if(1==2) {
    for (var i = 0; i < line_data_length; i++) {
    var lineGraph = svg_container.append("path")
                             .attr("d", lineFunction(line_data[i]))
                             .attr("stroke", color_list[i%color_list.length])
                            .attr("stroke-width", 2)
                            .attr("fill", "none");
    }
  }
  else if (1==1) {
    for (var i = 0; i < line_data_length; i++) {
    var lineGraph = svg_container.append("path")
                             .attr("d", lineFunction(line_data[i]))
                             .attr("stroke", color_list[jump_data[i]%10])
                            .attr("stroke-width", 2)
                            .attr("fill", "none");
    }
  }
  else{
    for (var i = 0; i < line_data_length; i++) {
    var lineGraph = svg_container.append("path")
                             .attr("d", lineFunction(line_data[i]))
                             .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");
    }
  }
}
