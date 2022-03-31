import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";


// @mui material components
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

//  components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

//  examples
import DashboardLayout from "layout-components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "layout-components/Navbars/DashboardNavbar";
import Footer from "layout-components/Footer";
import ComplexStatisticsCard from "layout-components/Cards/StatisticsCards/ComplexStatisticsCard";

//const auth = getAuth();


function Analytics() {
  const navigate = useNavigate();

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     const uid = user.uid;

  //     console.log(uid)
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //     navigate("/auth/sign-in")
  //   }
  // });
  // Action buttons for the BookingCard
  const actionButtons = (
    <>
      <Tooltip title="Refresh" placement="bottom">
        <MDTypography
          variant="body1"
          color="primary"
          lineHeight={1}
          sx={{ cursor: "pointer", mx: 3 }}
        >
          <Icon color="inherit">refresh</Icon>
        </MDTypography>
      </Tooltip>
      <Tooltip title="Edit" placement="bottom">
        <MDTypography variant="body1" color="info" lineHeight={1} sx={{ cursor: "pointer", mx: 3 }}>
          <Icon color="inherit">edit</Icon>
        </MDTypography>
      </Tooltip>
    </>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox mt={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={12}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="dark"
                  icon="weekend"
                  title="Edit Departments"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  icon="leaderboard"
                  title="Edit Objectives"
                  color="info"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon="store"
                  title="Edit Pillars"
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Analytics;
