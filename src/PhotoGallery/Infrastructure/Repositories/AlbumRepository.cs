using PhotoGallery.Entities;
using PhotoGallery.Infrastructure.Repositories.Abstract;

namespace PhotoGallery.Infrastructure.Repositories
{
    public class AlbumRepository : EntityBaseRepository<Album>, IAlbumRepository
    {
        public AlbumRepository(PhotoGalleryContext context)
            : base(context)
        { }
    }
}
