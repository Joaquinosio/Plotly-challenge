var url = "/samples.json";

// Fetch the JSON data and console log it
function buildPlot() {
d3.json(url).then(function(data) {
   
    // Grab values from the data json object to build the plots
    var values = data.dataset.sample_values;
    var id = data.dataset.otu_ids;
    var labels  = data.dataset.otu_labels;

    // Horizantal Bar chart
    var trace1 = [{
        type: "bar",
        x: values,
        y: id,
        orientation: "h"
    }];
    
    // Bublle chart
    var trace2 = {
        x: id,
        y: values,
        text: labels,
        mode: 'markers',
        marker: {
            color:id,
            size: values
        }
      };
      
      var data = [trace2];
      
      var layout = {
        title: 'Samples Bubble chart',
        showlegend: false,
        height: 600,
        width: 600
      };

      // Display the sample metadata
      // Display each key-value pair from the metadata JSON
      // Update all of the plots any time that a new sample is selected.

  });
} 

Plotly.newPlot('myDiv', data, layout);