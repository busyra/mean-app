app.controller('meetupsController',['$scope', '$resource',
  function($scope, $resource){
    $scope.meetups=[
      { name: "MEET UP 1"},
      { name: "MEET UP 2"},
      { name: "MEET UP 3"}
    ]
    $scope.createMeetup = function(){
      $scope.meetups.push({ name: $scope.meetupName });
      $scope.meetupName ='';
    }
}]);
