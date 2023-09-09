using System.Reflection;

namespace EntrypointFullNamespace;

public static class HostingExtensions
{
    public static WebApplicationBuilder ConfigureServices(this WebApplicationBuilder builder)
    {
        Assembly.Load("FullNamespace.Application");

        builder.Services.AddControllers();
        builder.Services.AddSuperPresenter();

        var superAssemblies = AppDomain.CurrentDomain.GetSuperLoadedAssemblies();

        builder.Services.AddAutoMapper(superAssemblies);

        builder.Services.AddSuperMediator(superAssemblies, opt => opt.UseValidation());

        return builder;
    }
}