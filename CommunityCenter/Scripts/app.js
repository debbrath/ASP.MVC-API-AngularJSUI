var app = angular.module("bookingApp", []);

app.controller("BookingController", function ($scope, $http) {
    const apiUrl = "/api/bookings";

    $scope.bookings = [];
    $scope.newBooking = {};

    // Load all bookings
    $scope.loadBookings = function () {
        $http.get(apiUrl)
            .then(function (response) {
                $scope.bookings = response.data;
            }, function (error) {
                alert("Error loading bookings.");
            });
    };

    // Add booking
    $scope.addBooking = function () {
        $http.post(apiUrl, $scope.newBooking)
            .then(function (response) {
                alert("Booking added.");
                $scope.newBooking = {};
                $scope.loadBookings();
            }, function (error) {
                alert("Error adding booking.");
            });
    };

    // Delete booking
    $scope.deleteBooking = function (id) {
        if (confirm("Are you sure you want to delete this booking?")) {
            $http.delete(apiUrl + "/" + id)
                .then(function (response) {
                    alert("Booking deleted.");
                    $scope.loadBookings();
                }, function (error) {
                    alert("Error deleting booking.");
                });
        }
    };

    $scope.loadBookings(); // Initial load
});