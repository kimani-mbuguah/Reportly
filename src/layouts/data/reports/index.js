// @mui material components
import Grid from "@mui/material/Grid";

//  components
import MDBox from "components/MDBox";

// Settings page components
import BaseLayout from "layouts/data/components/BaseLayout";
import BasicInfo from "layouts/data/reports/components/Report-entry";


function Settings() {
  return (
    <BaseLayout>
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
    </BaseLayout>
  );
}

export default Settings;
