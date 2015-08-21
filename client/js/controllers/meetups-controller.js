app.controller('meetupsController',['$scope', '$resource',
  function($scope, $resource){
    var Meetup = $resource('/api/meetups');

    $scope.meetups=[
      { name: "MEET UP 1"},
      { name: "MEET UP 2"},
      { name: "MEET UP 3"}
    ]
    $scope.createMeetup = function(){
      var meetup = new Meetup();
      meetup.name = $scope.meetupName;
      meetup.$save(function(result){
        $scope.meetups.push(result);
        $scope.meetupName="";
      });
    }
}]);
