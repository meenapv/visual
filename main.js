/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


require(['tree', 'stackedArea'], function (tree, stackedArea) {

  // Fetch the data as an AMD module.
  var tableURL = 'http://cdn.rawgit.com/praveenkumar07/VA/master/mortality.js',
      hierarchyURL =  'http://cdn.rawgit.com/praveenkumar07/VA/master/hierarchy.js';
  require([tableURL, hierarchyURL], function(table, hierarchy){

    // The dimensionsions of the SVG shared by both visualizations.
    var outerWidth = 960,
        outerHeight = 500,

        // The number of pixels from the left where the
        // two visualizations meet.
        horizontalSplit = 350,

        // The margins for each visualization.
        margins = {
          tree: {
            top: 20,
            right: outerWidth - horizontalSplit + 160,
            bottom: 27,
            left: 8
          },
          stackedArea: {
            top: 27,
            right: 170,
            bottom: 30,
            left: horizontalSplit
          }
        },

        // Create the SVG element that will contain both visualizations.
        svg = d3.select('body').append('svg')
          .attr('width', outerWidth)
          .attr('height', outerHeight),

        // Add the title of the plot.
        title = svg.append('text')
          .attr('x', outerWidth / 2 )
          .attr('y', 20)
          .attr('class', 'title');

    // Initialize the tree visualization.
    tree.init(svg, outerWidth, outerHeight, margins.tree, hierarchy);

    // Initialize the stacked area visualizaiton.
    stackedArea.init(svg, outerWidth, outerHeight, margins.stackedArea, table);

    // Set up the stacked area to respond to tree navigations.
    // Called with the cause of death names to show.
    tree.onNavigate(function (newRoot, names){
      stackedArea.update(names);
      title.text('Disease Analysis for USA: ' + newRoot.name);
    });

  }, function(err){
    // If we are here, the data failed to load.
    console.log(err);
  });
});
