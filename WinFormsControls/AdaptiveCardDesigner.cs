using BlazorComponents;
using Microsoft.AspNetCore.Components.WebView.WindowsForms;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WinFormsControls;
public partial class AdaptiveCardDesigner : UserControl
{
    public AdaptiveCardDesigner()
    {
        InitializeComponent();

        var services = new ServiceCollection();
        services.AddBlazorWebView();
        blazorWebView1.HostPage = "wwwroot\\index.html";
        blazorWebView1.Services = services.BuildServiceProvider();
        blazorWebView1.RootComponents.Add<PlAdaptiveCardDesigner>("#app");
    }
}
