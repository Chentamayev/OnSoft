using Microsoft.EntityFrameworkCore;
using OnSoft.API.Models;

namespace OnSoft.API.Model.Data
{
    public class DataContext : DbContext
    {
        internal object banks;

        public DataContext(DbContextOptions<DataContext>options) :base (options){}
        
        
    public DbSet<Value> Values { get; set; }
    
    public DbSet<User> Users{ get; set; }

    public DbSet<Company> Companies { get; set; }

    public DbSet<Bank> Banks { get; set; }
    
    }
}