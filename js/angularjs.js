	var app=angular.module("myApp",[]);
	app.controller('myCtrl',function($scope){
    	$scope.todolist=[{"item":"milk" , "status": "pending" , "id":"1"}];
	$scope.error="";
	$scope.add=function(){
		if(!$scope.item){return ;}
        	var status=0;
        	for(var i=0;i<$scope.todolist.length;i++)
        		{ 
				if($scope.todolist[i].item==$scope.item)
        			{
            				$scope.error="already in list";
            				status=1;
            				$scope.item="";
            				break;
        			}
        
    			}
      			if(status==0)
       			{ 
				var obj={'item':$scope.item,'status':'Pending'};
        			$scope.todolist.push(obj);
       			}
	}

    		$scope.changeStatus=function(x)
    		{
        		if($scope.todolist[x].status=='Done')
        		{
            			$scope.todolist[x].status='Pending';
				
        		}
			else{
				$scope.todolist[x].status='Done';
				
        		}

        
    		}
		$scope.removeitem=function(x)
		{
			$scope.todolist.splice(x,1);
		}

});
