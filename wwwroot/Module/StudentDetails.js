function Init(){
    Ready();

}
function Ready(){
    AddEvents();
    populate();
}
function AddEvents(){
    RemoveEvents();
    $("#btnSearch").on("click",function(){
        populate();
    });
    $("#btnAddNew").on("click",function(){
        window.location.href="/Student/Index/0";
    });
   
}
function RemoveEvents(){
   $("#btnSearch").off("click");
   $("#btnAddNew").off("click");
}
function Getter()
{
   var t_SearchWord = $("#txtsearch").val();
   var ObjResponse = {
        FindWhat : t_SearchWord
   }
   return ObjResponse;
}

/* retrive function */
function populate(){
    var ObjResponse = Getter();
    $.ajax({
        url:"/Student/GetInformation",
        type:"post",
        data : ObjResponse,
        success:function(Response){
            Setter(Response);
        }
    });

}
function Setter(Params)
{
    $("#tbStudentDetails").html("");
    for(var i = 0;  i < Params.length; i++)
    {
        var Datarow = '<tr id="Row_'+ Params[i].studentID +'">'+
                        '<td>'+ (i + 1) +'</td>'+
                        '<td>'+Params[i].adminNo +'</td>'+
                        '<td>'+Params[i].name +'</</td>'+
                        '<td>'+Params[i].parentName +'</td>'+
                        '<td>'+Params[i].contactNo +'</td>'+
                        '<td>'+
                        '<i onclick=Edit('+ Params[i].studentID +') class="fs-5 fa fa-pencil text-success" aria-hidden="true"></i>'+
                        '<i onclick=Delete('+ Params[i].studentID +') class="fs-5 fa fa-trash text-danger" aria-hidden="true"></i>'+
                        '</td>'+
                        '</tr>';

        $("#tbStudentDetails").append(Datarow); 
    }
    
}
function Delete(StudentID){
    $.ajax({
        url:"/Student/Delete",
        type:"post",
        data : {
            StudentID : StudentID
        },
        success:function(Response){
            if(Response){
                $("#Row_" + StudentID).remove();
                alert("Deleted Successfully");
            }else{
                alert("Deleted Failure");
            }
        }
    });
}

function Validation(parms){
    IsValid = true;
    return IsValid;
}

function Edit(StudentID)
{
    window.location.href="/Student/Index/" +StudentID;
}