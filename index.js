document.addEventListener('DOMContentLoaded', function () {

  var gras = {
    src: 'grass.png'
  };

  var road = {
    src: 'road.png'
  };


  var map = [
    [ gras, gras, road, gras, gras ],
    [ gras, gras, road, gras, gras ],
    [ road, road, road, road, road ],
    [ gras, gras, road, gras, gras ],
    [ gras, gras, road, gras, gras ],
  ];

  var mosaic = function (map) {

    var canvas = document.getElementsByTagName('canvas')[0];

    canvas.width = 640;
    canvas.height = 640;

    var ctx = canvas.getContext('2d');

    var count = 0;
    var done = 0;

    map.forEach(function (row) {

      count += row.length;

      row.forEach(function (tile) {

        tile.img = new Image();

        tile.img.onload = function () {
          done += 1;

          if (done === count) {

            map.forEach(function (row, rowi) {

              row.forEach(function (tile, tilei) {
                ctx.drawImage(tile.img, tilei * 64, rowi * 64);
              });

            });

          }

        };

        tile.img.src = tile.src;

      });

    });

  };

  mosaic(map);

});
