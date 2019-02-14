/**
 * Created by Administrator on 2018/6/23.
 */
var module = angular.module('shopflagselect', []);

module.directive('shopFlagSelect',function () {
    return{
        restrict : 'E',
        templateUrl : 'demo-multi-select-tpl.html',
        scope:{
            flagValue : '=ngModel',
            report : '='
        },
        link:function (scope,element,attrs) {
            console.log('scope.reportId',scope.report)
            scope.itemArray =[
                {re: 'f', name: '多鲜'},
                {re: 'e', name: '银桥'},
                {re: 'ff', name: '蒙牛'},
                {re: 'ff', name: '纯甄'},
                {re: 's', name: '安慕希'},
            ];
            var itemArray =scope.itemArray
            var i =1
for(var key in itemArray ){
    itemArray[key].id = i++
}
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
