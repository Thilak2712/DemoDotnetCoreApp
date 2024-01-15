using DemoDotnetCoreApp.Models;
using Microsoft.EntityFrameworkCore;

namespace DemoDotnetCoreApp.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions Options) : base(Options)
    {

    }
    public DbSet<tbStudent> tbStudents { get; set; }

}