
function loadCardDesigner(id) {
	let hostContainers = [];

	// Optional: add the default Microsoft Host Apps (see docs below)
	hostContainers = ACDesigner.defaultMicrosoftHosts;

	let designer = new ACDesigner.CardDesigner(hostContainers);

	// The designer requires various CSS and image assets to work properly, 
	// If you've loaded the script from a CDN it needs to know where these assets are located
	// Use the same <VERSION> that you used above
	designer.assetPath = "./_content/BlazorComponents/adaptivecards/external/adaptivecards-designer@latest/dist";

	// Initialize monaco-editor for the JSON-editor pane. The simplest way to do this is use the code below
	require.config({ paths: { 'vs': './_content/BlazorComponents/adaptivecards/external/monaco-editor@0.17.1/min/vs' } });
	require(['vs/editor/editor.main'], function () {
		designer.monacoModuleLoaded();
	});

	designer.attachTo(document.getElementById(id));
}

//export { loadCardDesigner }