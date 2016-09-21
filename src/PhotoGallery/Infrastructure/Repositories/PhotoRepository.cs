using PhotoGallery.Entities;
using PhotoGallery.Infrastructure.Repositories.Abstract;

namespace PhotoGallery.Infrastructure.Repositories
{
    public class PhotoRepository : EntityBaseRepository<Photo>, IPhotoRepository
    {
        public PhotoRepository(PhotoGalleryContext context)
            : base(context)
        { }
    }

}
