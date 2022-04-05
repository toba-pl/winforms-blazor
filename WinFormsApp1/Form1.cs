using System.Windows.Forms.Integration;
using WinFormsControls;

namespace WinFormsApp1;

public partial class Form1 : Form
{
    public Form1()
    {
        InitializeComponent();
    }

    private void Form1_Load(object sender, EventArgs e)
    {
        // Create the WPF UserControl.
        AdaptiveCardDesigner uc = new();
        uc.Dock = DockStyle.Fill;

        // Add the ElementHost control to the form's
        // collection of child controls.
        this.Controls.Add(uc);
    }
}
