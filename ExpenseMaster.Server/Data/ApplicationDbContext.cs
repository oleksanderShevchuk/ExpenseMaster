using ExpenseMaster.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace ExpenseMaster.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<Expense> Expenses => Set<Expense>();
    }
}
