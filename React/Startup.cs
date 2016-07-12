using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(React.Startup))]
namespace React
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
