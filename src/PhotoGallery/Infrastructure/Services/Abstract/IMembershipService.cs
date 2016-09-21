using PhotoGallery.Entities;
using System.Collections.Generic;
using PhotoGallery.Infrastructure.Core;

namespace PhotoGallery.Infrastructure.Services.Abstract
{
    public interface IMembershipService
    {
        MembershipContext ValidateUser(string username, string password);
        User CreateUser(string username, string email, string password, int[] roles);
        User GetUser(int userId);
        List<Role> GetUserRoles(string username);
    }
}
