using System.Threading.Tasks;
using OnSoft.API.Models;

namespace OnSoft.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user,string password);
         Task<User> Login (string username,string password);
         Task<bool> UserExists (string username);
        Task Login(object username, object password);
    }
}