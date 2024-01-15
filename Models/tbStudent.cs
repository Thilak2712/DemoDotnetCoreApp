using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DemoDotnetCoreApp.Models;

public class tbStudent
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Key]
    public int StudentID { get; set; }
    [Required]
    public string AdminNo { get; set; }
    public string Name { get; set; }
    public string ParentName { get; set; }
    public string ContactNo { get; set; }
    public string Address { get; set; }

}