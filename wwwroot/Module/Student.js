function Init(){
    Ready();

}
function Ready(){
    AddEvents();
    populate($("#hdnstudentid").val());

}
function AddEvents(){
    RemoveEvents();
    $("#btnsave").click(function(){
        save();
    });
    $("#btnclose").click(function(){
        window.history.back();
    });
}
function RemoveEvents(){
    $("#btnsave").off("click");
    $("#btnclose").off("click");
}
function save(){
    var parms = Getter();
    if(Validation(parms))
    {
        $.ajax({
            url:"/Student/Setinformation",
            type:"post",
            data : parms,
            success:function(Response){
                window.history.back();
            }
        });
    } 

}
function Getter()
{
    var ObjParams ={
        studentid : $("#hdnstudentid").val(),
        adminno : $("#txtadminno").val(),
        name : $("#txtname").val(),
        parentname : $("#txtparentname").val(),
        contactno : $("#txtcontactno").val(),
        Address : $("#txtAddress").val()
    }
    return ObjParams;
}
function Setter(Params)
{
    $("#txtadminno").val(Params.adminNo);
    $("#txtname").val(Params.name);
    $("#txtparentname").val(Params.parentName);
    $("#txtcontactno").val(Params.contactNo);
    $("#txtAddress").val(Params.address);
}
function Validation(parms){
    IsValid = true;
    if(parms.adminno == "")
    {
        alert("Admin no is Required");
        IsValid = false;
    }
    return IsValid;
}

function populate(StudentID){
    $.ajax({
        url:"/Student/GetStudentDetails",
        type:"post",
        data : {
            StudentID : StudentID
        },
        success:function(Response){
            if(Response){
                Setter(Response);
            }
        }
    });
}