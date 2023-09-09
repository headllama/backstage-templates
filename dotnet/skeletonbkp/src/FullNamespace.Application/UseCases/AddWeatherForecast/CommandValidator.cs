using FluentValidation;

namespace FullNamespace.Application.UseCases.AddWeatherForecast;

public class CommandValidator : AbstractValidator<AddWeatherForecastCommand>
{
    public CommandValidator()
    {
        RuleFor(x => x.Summary)
            .NotEmpty()
            .WithErrorCatalog(ErrorCatalog.AddWeatherForecast.SummaryIsEmpty);

        RuleFor(x => x.Date)
            .NotNull()
            .WithErrorCatalog(ErrorCatalog.AddWeatherForecast.DateIsEmpty);

        RuleFor(x => x.Date)
            .GreaterThan(System.DateTime.Now)
            .WithErrorCatalog(ErrorCatalog.AddWeatherForecast.DateLowerThanNow);
    }
}
