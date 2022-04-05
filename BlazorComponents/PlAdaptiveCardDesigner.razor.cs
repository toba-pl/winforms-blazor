using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlazorComponents;

public partial class PlAdaptiveCardDesigner
{
    private Guid _guid = Guid.NewGuid();

    [Inject]
    protected IJSRuntime? JsRuntime { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        await JsRuntime.InvokeVoidAsync("loadCardDesigner", _guid.ToString());

        await base.OnAfterRenderAsync(firstRender);
    }
}
