using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;
using System.Data;
using System.Drawing;
using System.Configuration;

namespace Car
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            string ConString = ConfigurationManager.ConnectionStrings["ConString"].ConnectionString;
            MySqlConnection con = new MySqlConnection(ConString);

            if (con != null)
            {
                con.Open();
            }
            MySqlCommand cmd = con.CreateCommand();
            cmd.CommandType = CommandType.Text;
            cmd.CommandText = "insert into login(Name,Email,Contact_no,Address,crdd,Password) values('" + TextBox6.Text + "','" + TextBox1.Text + "','" + TextBox2.Text + "','" + TextBox3.Text + "','" + TextBox4.Text + "','" + TextBox5.Text + "')";
            cmd.ExecuteNonQuery();
            Response.Write("<script type=\"text/javascript\">alert('Sucessfull');</script>");
            Response.Redirect("index.html");

        }
    }
}