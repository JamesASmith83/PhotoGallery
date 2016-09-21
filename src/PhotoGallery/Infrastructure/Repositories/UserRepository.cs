using System;
using System.Collections.Generic;
using PhotoGallery.Entities;
using PhotoGallery.Infrastructure.Repositories.Abstract;

namespace PhotoGallery.Infrastructure.Repositories
{
    public class UserRepository : EntityBaseRepository<User>, IUserRepository
    {
        IRoleRepository _roleRepository;
        public UserRepository(PhotoGalleryContext context, IRoleRepository roleRepository) : base(context)
        {
            _roleRepository = roleRepository;
        }

        public User GetSingleByUsername(string username)
        {
            return this.GetSingle(x => x.Username == username);
        }

        public IEnumerable<Role> GetUserRoles(string username)
        {
            List<Role> _roles = null;

            User _user = this.GetSingle(u => u.Username == username, u => u.UserRoles);
            if (_user != null)
            {
                _roles = new List<Role>();
                foreach (var _userRole in _user.UserRoles)
                    _roles.Add(_roleRepository.GetSingle(_userRole.RoleId));
            }

            return _roles;
        }
    }
}
