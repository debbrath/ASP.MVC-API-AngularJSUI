using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CommunityCenter.Startup))]
namespace CommunityCenter
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
