/**
 * Created by Administrator on 2018/6/22.
 */
'use strict';

var app = angular.module('demo', ['ngSanitize', 'ui.select']);


app.filter('propsFilter', function() {
    return function(items, props) {
        var out = [];

        if (angular.isArray(items)) {
            var keys = Object.keys(props);

            items.forEach(function(item) {
                var itemMatches = false;

                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            out = items;
        }

        return out;
    };
});

app.controller('DemoCtrl', ['$scope',function($scope){
    $scope.test = {};
    $scope.test2 = {};
    $scope.testArr = [
        {
            id: 1,
            name: "乐乐"
        },
        {
            id: 2,
            name: "博博"
        },
        {
            id: 3,
            name: "淘淘"
        }
    ];

    $scope.testArr2 = [{
        id: 10,
        name: "哈哈"
    },{
        id: 11,
        name: "嘻嘻"
    },{
        id: 12,
        name: "哇哇"
    }];

    $scope.testChange = function () {
        console.log($scope.testSelect);
        console.log($scope.testSelect2);
    }
}
]);
