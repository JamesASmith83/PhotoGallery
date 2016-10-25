using Microsoft.AspNetCore.Mvc;
using PhotoGallery.Infrastructure.Repositories.Abstract;
using PhotoGallery.Infrastructure.Services.Abstract;
using PhotoGallery.ViewModels;
using System.Threading.Tasks;

namespace PhotoGallery.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly IMembershipService _membershipService;
        private readonly IUserRepository _userRepository;
        private readonly ILoggingRepository _loggingRepository;

        public AccountController(IMembershipService membershipService, IUserRepository userRepository, ILoggingRepository _errorRepository)
        {
            _membershipService = membershipService;
            _userRepository = userRepository;
            _loggingRepository = _errorRepository;
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Login([FromBody] LoginViewModel user)
        {

        }




    }
}
