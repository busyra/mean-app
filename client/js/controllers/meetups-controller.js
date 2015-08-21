app.controller('meetupsController',['$scope', '$resource',
  function($scope, $resource){
    var Meetup = $resource('/api/meetups');
    
    //find meet up and uses a get request
    Meetup.query(function(results){
      $scope.meetups = results;
    });
    $scope.meetups=[]
    $scope.createMeetup = function(){
      var meetup = new Meetup();
      meetup.name = $scope.meetupName;
      meetup.$save(function(result){
        $scope.meetups.push(result);
        $scope.meetupName="";
      });
    }
}]);
