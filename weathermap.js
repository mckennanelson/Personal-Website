var ourLoc;
var view;
var map;

function init(){
  ourLoc =ol.proj.fromLonLat([41.043316, 28.862457]);

  view = new ol.View({
    center: ourLoc,
    zoom: 4
  });
  map = new ol.Map({
    target : 'map',
    layers : [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    loadTileswhileAnimating: true,
    view: view
  });
}
window.onload = init;
