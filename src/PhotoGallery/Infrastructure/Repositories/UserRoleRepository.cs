using PhotoGallery.Entities;
using PhotoGallery.Infrastructure.Repositories.Abstract;

namespace PhotoGallery.Infrastructure.Repositories
{
    public class UserRoleRepository : EntityBaseRepository<UserRole>, IUserRoleRepository
    {
        public UserRoleRepository(PhotoGalleryContext context)
            : base(context)
        { }
    }
}
