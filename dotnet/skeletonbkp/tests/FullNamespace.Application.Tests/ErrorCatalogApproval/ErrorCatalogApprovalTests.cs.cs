using ApprovalTests;
using ApprovalTests.Reporters;
using Super.Common.Model.ErrorCatalogs;
using Xunit;

namespace FullNamespace.Application.Tests.ErrorCatalogApproval
{
    [UseReporter(typeof(ClipboardReporter), typeof(DiffReporter))]
    public sealed class ErrorCatalogApprovalTests
    {
        [Fact]
        public void ErrorCatalog()
        {
            // Arrange

            // Act
            var catalogDescription = ErrorCatalogDescription.For(typeof(ErrorCatalog)).SerializeAsMarkdown();

            // Assert
            Approvals.Verify(catalogDescription);
        }
    }
}
