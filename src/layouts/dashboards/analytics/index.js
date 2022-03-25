// @mui material components
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

//  components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

//  examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import BookingCard from "examples/Cards/BookingCard";

// Anaytics dashboard components
import SalesByCountry from "layouts/dashboards/analytics/components/SalesByCountry";

// Data
import reportsBarChartData from "layouts/dashboards/analytics/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboards/analytics/data/reportsLineChartData";

// Images
import booking1 from "assets/images/products/product-1-min.jpg";
import booking2 from "assets/images/products/product-2-min.jpg";
import booking3 from "assets/images/products/product-3-min.jpg";

function Analytics() {
  const { sales, tasks } = reportsLineChartData;

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
