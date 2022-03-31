// @mui material components
import Grid from "@mui/material/Grid";

//  components
import MDBox from "components/MDBox";

// Settings page components
import DashboardLayout from "layout-components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "layout-components/Navbars/DashboardNavbar";
import BasicInfo from "layouts/data/reports/components/Report-entry";


function Settings() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <MDBox mb={3}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <BasicInfo />
                </Grid>
              </Grid>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Settings;
