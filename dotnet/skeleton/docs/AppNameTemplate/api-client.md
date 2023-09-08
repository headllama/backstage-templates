# How to install api client

Add package

```
dotnet add package EntrypointFullNamespace.Client --nuget-source https://pkgs.dev.azure.com/Superdigital-HoldCo/_packaging/Superdigital-HoldCo/nuget/v3/index.json
```

And then add following code to project service collection

```csharp
services.AddApiClientNameApiClient();
```

Configure you app settings:

```json
{
  "ConnectionStrings": {
    "EntrypointFullNamespace.Client.IApiClientNameApiClient": "https://foo.bar"
  }
}
```

And in repo-config:

```yaml
ConnectionStrings:
  Super\.ProjectName\.Api\.Client\.IApiClientNameApiClient: https://foo.bar
```