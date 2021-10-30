function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;

      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];

      var PANEL = d3.select("#sample-metadata");
  
      
      PANEL.html("");
  
     
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
    }
}