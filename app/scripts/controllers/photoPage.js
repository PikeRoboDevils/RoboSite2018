(function() {
  'use strict';
  angular
    .module('yoApp')
    .controller('PhotopageCtrl', PhotopageCtrl);

    //all the stuff you want
  PhotopageCtrl.$inject = ['$scope', '$location', '$routeParams', 'PhoTo'];

  function PhotopageCtrl($scope, $location, $routeParams, PhoTo){
  //example
    var vm = $scope;

    vm.movie = {};

    vm.event = ($routeParams.match);
    vm.truffle = vm.event;

    vm.isStatus = function(photo){
    return (photo.match == vm.event);
}

    vm.photoObject = [
        {
    _id : "5a55733e3744b406d21bdb31",
    image : "IMG_0522.jpg",
    title : "dadams.jpg",
    match : "Worlds",
    v : 0
},
{
    _id : "5a5573543744b406d21bdb32",
    image : "IMG_0843.jpg",
    title : "dadams.jpg",
    match : "Worlds",
    v : 0
},
{
    _id : "5a55735d3744b406d21bdb33",
    image : "IMG_1310.jpg",
    title : "dadams.jpg",
    match : "Worlds",
    v : 0
},
{
    _id : "5a5573693744b406d21bdb34",
    image : "IMG_1312.jpg",
    title : "dadams.jpg",
    match : "Worlds",
    v : 0
},
{
    _id : "5a5573843744b406d21bdb35",
    image : "IMG_1314.jpg",
    title : "dadams.jpg",
    match : "Worlds",
    v : 0
},
{
    _id : "5a55738a3744b406d21bdb36",
    image : "IMG_1318.jpg",
    title : "dadams.jpg",
    match : "Worlds",
    v : 0
},
{
    _id : "5a5573923744b406d21bdb37",
    image : "IMG_1325.jpg",
    title : "dadams.jpg",
    match : "Worlds",
    v : 0
},
{
    _id : "5a55739d3744b406d21bdb38",
    image : "IMG_1379.jpg",
    title : "dadams.jpg",
    match : "Worlds",
    v : 0
},
{
    _id : "5a5573ac3744b406d21bdb39",
    image : "IMG_1751.jpg",
    title : "dadams.jpg",
    match : "Worlds",
    v : 0
},
{
    _id : "5a5573b83744b406d21bdb3a",
    image : "IMG_9282.jpg",
    title : "dadams.jpg",
    match : "Worlds",
    v : 0
},
{
    _id : "5a5573be3744b406d21bdb3b",
    image : "IMG_9288.jpg",
    title : "dadams.jpg",
    match : "Worlds",
    v : 0
},
{
    _id : "5a5573c63744b406d21bdb3c",
    image : "IMG_9297.jpg",
    title : "dadams.jpg",
    match : "Worlds",
    v : 0
},
{
    _id : "5a5574973744b406d21bdb3d",
    image : "IMG_0424.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5574aa3744b406d21bdb3e",
    image : "IMG_0433.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5574b53744b406d21bdb3f",
    image : "IMG_0435.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5574be3744b406d21bdb40",
    image : "IMG_0445.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5574c43744b406d21bdb41",
    image : "IMG_0448.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5574d03744b406d21bdb42",
    image : "IMG_0453.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5574d73744b406d21bdb43",
    image : "IMG_0465.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5574de3744b406d21bdb44",
    image : "IMG_0468.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5574e73744b406d21bdb45",
    image : "IMG_0476.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5574ee3744b406d21bdb46",
    image : "IMG_0489.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5574f73744b406d21bdb47",
    image : "IMG_0500.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5575003744b406d21bdb48",
    image : "IMG_0503.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5575083744b406d21bdb49",
    image : "IMG_0508.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a55750e3744b406d21bdb4a",
    image : "IMG_0511.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5575163744b406d21bdb4b",
    image : "IMG_0520.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a55751b3744b406d21bdb4c",
    image : "IMG_0524.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5575223744b406d21bdb4d",
    image : "IMG_0525.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5575283744b406d21bdb4e",
    image : "IMG_0527.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5575313744b406d21bdb4f",
    image : "IMG_0532.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5575383744b406d21bdb50",
    image : "IMG_0537.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5575403744b406d21bdb51",
    image : "IMG_0789.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5575473744b406d21bdb52",
    image : "IMG_0790.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5576273744b406d21bdb57",
    image : "IMG_6883.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a55762e3744b406d21bdb58",
    image : "IMG_6888.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5576373744b406d21bdb59",
    image : "IMG_6890.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5576433744b406d21bdb5a",
    image : "IMG_6895.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5576643744b406d21bdb5b",
    image : "IMG_6901.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a55766b3744b406d21bdb5c",
    image : "IMG_6915.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5576733744b406d21bdb5d",
    image : "IMG_6926.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a55767d3744b406d21bdb5e",
    image : "IMG_6927.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5576cf3744b406d21bdb60",
    image : "IMG_6926.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5576d43744b406d21bdb61",
    image : "IMG_6927.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5576db3744b406d21bdb62",
    image : "IMG_6928.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5576e23744b406d21bdb63",
    image : "IMG_6955.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5576e93744b406d21bdb64",
    image : "IMG_6993.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a55770c3744b406d21bdb67",
    image : "IMG_7000.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5577183744b406d21bdb68",
    image : "IMG_7011.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a55771e3744b406d21bdb69",
    image : "IMG_7014.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a5577223744b406d21bdb6a",
    image : "IMG_7017.jpg",
    title : "dadams.jpg",
    match : "State",
    v : 0
},
{
    _id : "5a55774d3744b406d21bdb6b",
    image : "IMG_0666.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5577553744b406d21bdb6c",
    image : "IMG_0669.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a55775c3744b406d21bdb6d",
    image : "IMG_0678.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5577623744b406d21bdb6e",
    image : "IMG_0689.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5577693744b406d21bdb6f",
    image : "IMG_0695.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5577713744b406d21bdb70",
    image : "IMG_0702.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5577793744b406d21bdb71",
    image : "IMG_0719.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5577843744b406d21bdb72",
    image : "IMG_0734.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a55778e3744b406d21bdb73",
    image : "IMG_0746.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5577963744b406d21bdb74",
    image : "IMG_0770.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a55779b3744b406d21bdb75",
    image : "IMG_0776.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5577a63744b406d21bdb76",
    image : "IMG_0826.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5577ad3744b406d21bdb77",
    image : "IMG_0827.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5577b53744b406d21bdb78",
    image : "IMG_0828.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5577bc3744b406d21bdb79",
    image : "IMG_0832.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5577c83744b406d21bdb7a",
    image : "IMG_0861.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5577cc3744b406d21bdb7b",
    image : "IMG_0865.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5577e03744b406d21bdb7c",
    image : "IMG_7040.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5577ec3744b406d21bdb7d",
    image : "IMG_7086.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5577f33744b406d21bdb7e",
    image : "IMG_7088.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5577fc3744b406d21bdb7f",
    image : "IMG_7096.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a55780a3744b406d21bdb80",
    image : "IMG_7101.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a55780f3744b406d21bdb81",
    image : "IMG_7105.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5578153744b406d21bdb82",
    image : "IMG_7110.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a55781f3744b406d21bdb83",
    image : "IMG_7114.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5578253744b406d21bdb84",
    image : "IMG_7117.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a55782e3744b406d21bdb85",
    image : "IMG_7151.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5578353744b406d21bdb86",
    image : "IMG_7187.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a55783e3744b406d21bdb87",
    image : "IMG_7192.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5578463744b406d21bdb88",
    image : "IMG_7193.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5578523744b406d21bdb89",
    image : "IMG_7203.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5578573744b406d21bdb8a",
    image : "IMG_7215.jpg",
    title : "dadams.jpg",
    match : "Perry",
    v : 0
},
{
    _id : "5a5579473744b406d21bdb8d",
    image : "IMG_7624.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a55795c3744b406d21bdb90",
    image : "IMG_7658.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a55796f3744b406d21bdb92",
    image : "IMG_7686.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a5579e93744b406d21bdb93",
    image : "IMG_7760.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a5579f83744b406d21bdb95",
    image : "IMG_7772.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a557a003744b406d21bdb96",
    image : "IMG_7787.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a557a113744b406d21bdb98",
    image : "IMG_7849.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a557a183744b406d21bdb99",
    image : "IMG_7890.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a557a203744b406d21bdb9a",
    image : "IMG_7918.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a557a263744b406d21bdb9b",
    image : "IMG_7922.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a557a2e3744b406d21bdb9c",
    image : "IMG_7923.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a557a373744b406d21bdb9d",
    image : "IMG_7991.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a557a3d3744b406d21bdb9e",
    image : "IMG_8001.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a557a433744b406d21bdb9f",
    image : "IMG_8005.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a557a4a3744b406d21bdba0",
    image : "IMG_8044.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a557a513744b406d21bdba1",
    image : "IMG_8054.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a557a583744b406d21bdba2",
    image : "IMG_8063.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a557a6f3744b406d21bdba3",
    image : "IMG_8124.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a557a783744b406d21bdba4",
    image : "IMG_8126.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a55887f3744b406d21bdbaf",
    image : "IMG_7617.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a5588923744b406d21bdbb0",
    image : "IMG_7633.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a5588a23744b406d21bdbb1",
    image : "IMG_7636.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a5588b23744b406d21bdbb2",
    image : "IMG_7676.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a5588ea3744b406d21bdbb4",
    image : "IMG_7768.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a5588f93744b406d21bdbb5",
    image : "IMG_7792.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
},
{
    _id : "5a5589143744b406d21bdbb6",
    image : "IMG_7614.jpg",
    title : "dadams.jpg",
    match : "Tippecanoe",
    v : 0
}
        ]

    vm.getDots = function() {



      var foo = (Object.keys(vm.photoObject).length);
      console.log(foo);
      console.log('yur mom');
    }

    //     $scope.getPrizes = function () {
    //    console.log ("GetPrizes");
    //     console.log($scope.photoObject);



    //     return $scope.photoObject; //PrizeService.getCurrentWeekList();
    // };

  }
})();