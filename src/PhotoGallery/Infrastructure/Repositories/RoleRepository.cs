using PhotoGallery.Entities;
using PhotoGallery.Infrastructure.Repositories.Abstract;

namespace PhotoGallery.Infrastructure.Repositories
{
    public class RoleRepository : EntityBaseRepository<Role>, IRoleRepository
    {
        public RoleRepository(PhotoGalleryContext context)
            : base(context)
        { }
    }
}
