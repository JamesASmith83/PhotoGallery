using AutoMapper;

public class AutoMapperConfiguration 
{
    public static void Configure()
    {
        Mapper.Initialize(x => 
        {
            x.AddProfile<DomainToViewModelMappingProfile>();
        });
    }
}
