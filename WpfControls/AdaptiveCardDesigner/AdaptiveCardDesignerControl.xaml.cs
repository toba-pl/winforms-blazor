using Microsoft.Extensions.DependencyInjection;
using System.Windows.Controls;

namespace WpfControls.AdaptiveCardDesigner;

/// <summary>
/// Interaction logic for AdaptiveCardDesignerControl.xaml
/// </summary>
public partial class AdaptiveCardDesignerControl : UserControl
{
    public AdaptiveCardDesignerControl()
    {
        var serviceCollection = new ServiceCollection();
        serviceCollection.AddBlazorWebView();
        Resources.Add("services", serviceCollection.BuildServiceProvider());

        InitializeComponent();
    }
}
