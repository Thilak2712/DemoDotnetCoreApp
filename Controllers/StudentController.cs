using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DemoDotnetCoreApp.Models;
using DemoDotnetCoreApp.Data;

namespace DemoDotnetCoreApp.Controllers;

public class StudentController : Controller
{
    AppDbContext _context;
    public StudentController(AppDbContext Addcontext){

        _context = Addcontext;
    }
    public IActionResult Index(int id)
    {
        ViewBag.id = id;
        return View();
    }
    public JsonResult GetStudentDetails(int StudentID)
    {   
        tbStudent objstudent = new tbStudent();
        try
        {
            objstudent = _context.tbStudents.Find(StudentID);
        }
        catch(Exception ex)
        {
            objstudent = null;
        }
        return Json(objstudent);
    }
    public Boolean Setinformation(tbStudent objstudentDet)
    {
        if(objstudentDet.StudentID == 0)
        {
            _context.tbStudents.Add(objstudentDet);
            _context.SaveChanges();
        }
        else{
            _context.Entry(objstudentDet).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
        }
        return true;
    }
    public ActionResult Details()
    {
        return View();
    }
    public JsonResult GetInformation(string FindWhat)
    {
        List<tbStudent> lststudentDetails = new List<tbStudent>(); 
        try
        {
            lststudentDetails = _context.tbStudents.ToList();
            if(FindWhat != null)
            {
                lststudentDetails = lststudentDetails.Where(find => find.AdminNo == FindWhat ||  find.ContactNo == FindWhat || find.Name == FindWhat || find.ParentName == FindWhat).ToList();
            }
        }   
        catch(Exception ex)
        {

        } 
        return Json(lststudentDetails);    
    }
    public Boolean Delete(int StudentID)
    {
        bool IsValid = true;
        try{
            var objDelRecord = _context.tbStudents.Find(StudentID);
            _context.Remove(objDelRecord);
            _context.SaveChanges();
            IsValid=true;

        }
        catch(Exception ex)
        {
            IsValid = false;
        }
        return IsValid;
    }
}
