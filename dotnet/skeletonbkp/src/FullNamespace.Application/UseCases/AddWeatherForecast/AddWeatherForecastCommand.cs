using System;
using Super.Common.Mediator;

namespace FullNamespace.Application.UseCases.AddWeatherForecast;

public class AddWeatherForecastCommand : Request
{
    public DateTime? Date { get; set; }
    public string Summary { get; set; }
}
