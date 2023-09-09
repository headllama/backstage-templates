using AutoMapper;
using FullNamespace.Application.UseCases.AddWeatherForecast;

namespace EntrypointFullNamespace.UseCases.AddWeatherForecast;

class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<AddWeatherForecastRequest, AddWeatherForecastCommand>();
    }
}
