using System.Threading;
using System.Threading.Tasks;
using Super.Common.Mediator;
using Super.Common.Model;

namespace FullNamespace.Application.UseCases.AddWeatherForecast;

public class Handler : Handler<AddWeatherForecastCommand>
{
    public override Task<Result> Handle(AddWeatherForecastCommand request, CancellationToken cancellationToken)
    {
        return Task.FromResult(Result.Success());
    }
}
