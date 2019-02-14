/**
 * Created by Administrator on 2018/6/23.
 */
var module = angular.module('shopflagselect', []);

module.directive('shopFlagSelect',function () {
    return{
        restrict : 'E',
        templateUrl : 'demo-multi-select-tpl.html',
        scope:{
            flagValue : '=ngModel'
        },
        link:function (scope,element,attrs) {
            scope.itemArray =[
                {id: 1, name: '多鲜'},
                {id: 2, name: '银桥'},
                {id: 3, name: '蒙牛'},
                {id: 4, name: '纯甄'},
                {id: 5, name: '安慕希'},
                {id: 6, name: '特仑苏'}
            ];

            scope.selected = {
                value:[ ]
            };

            // 转换flag属性到下拉框的选项
            attrs.$observe('ngModel', function (value) {
                var target = scope.flagValue;

                $.each(scope.itemArray, function (index, result) {
                    //将下拉选项的id字符串转换为2进制数
                    var itemValue =  parseInt(result.id,2);
                    if( target & itemValue){
                        scope.selected.value.push(result);
                    }
                });
            });
            //下拉多选时，及时计算flag属性
            scope.$watch('selected',function(newValue,oldValue) {
                var flag = 0;
                $.each(scope.selected.value, function (index, result) {
                    flag = flag + parseInt(result.id, 2);
                });

                scope.flagValue = flag;

            },true);
        }
    }
});
