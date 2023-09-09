using Template.Controllers;

namespace TemplateTests
{
    [TestClass]
    public class TestWeatherForecast
    {
        [TestMethod]
        public void TestGetWeatherForecast()
        {
            var controller = new WeatherForecastController();

            var result = controller.Get();

            Assert.IsNotNull(result);
        }
    }
}