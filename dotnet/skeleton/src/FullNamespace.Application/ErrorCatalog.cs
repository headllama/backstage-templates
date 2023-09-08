using Super.Common.Model;
namespace FullNamespace.Application;

public static class ErrorCatalog
{
    public static class AddWeatherForecast
    {
        public static ErrorCatalogEntry SummaryIsEmpty => ("CD-EMB-ADDWEATHER-01", "Summary must no be empty");
        public static ErrorCatalogEntry DateIsEmpty => ("CD-EMB-ADDWEATHER-02", "Date must not be empty");
        public static ErrorCatalogEntry DateLowerThanNow => ("CD-EMB-ADDWEATHER-03", "Date must be greathan than now");
    }
}
