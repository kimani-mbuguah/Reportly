// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";


//  components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";


// NewUser page components
import FormField from "layouts/pages/users/new-user/components/FormField";
import FormField1 from "layouts/pages/users/new-user/components/FormField/Date"

import selectData from "layouts/pages/users/new-user/schemas/selectData"

function Profile({ formData }) {
  const { formField, values,  errors, touched  } = formData;
  const { activities, activitystatus } = formField;
  const { activities: activitiesV, activitystatus : activitystatusV } = values;

  return (
    <MDBox>
      <MDBox mt={1.625}>
        <Grid container spacing={1}>
          <Grid item xs={12} >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={5}>
                <Autocomplete
                  defaultValue="February"
                  options={selectData.birthDate}
                  renderInput={(params) => (
                    <FormField1
                      {...params}
                      label="Start Date"
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Autocomplete
                  defaultValue="1"
                  options={selectData.days}
                  renderInput={(params) => (
                    <FormField1 {...params} InputLabelProps={{ shrink: true }} />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Autocomplete
                  defaultValue={new Date().getFullYear().toString() }
                  options={selectData.years}
                  renderInput={(params) => (
                    <FormField1 {...params} InputLabelProps={{ shrink: true }} />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={5}>
                <Autocomplete
                  defaultValue="February"
                  options={selectData.birthDate}
                  renderInput={(params) => (
                    <FormField1
                      {...params}
                      label="End Date"
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Autocomplete
                  defaultValue="1"
                  options={selectData.days}
                  renderInput={(params) => (
                    <FormField1 {...params} InputLabelProps={{ shrink: true }} />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Autocomplete
                  defaultValue={new Date().getFullYear().toString() }
                  options={selectData.years}
                  renderInput={(params) => (
                    <FormField1 {...params} InputLabelProps={{ shrink: true }} />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <FormField
                type={activities.type}
                label={activities.label}
                name={activities.name}
                value={activitiesV}
                placeholder={activities.placeholder}
                multiline
                rows={5}
              />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Autocomplete
              options={["Done", "Not Done", "Rescheduled", "Cancelled" ]}
              renderInput={(params) => <MDInput 
                {...params} 
                variant="standard" 
                type={activitystatus.type}
                label={activitystatus.label} 
                name={activitystatus.name} 
                value={activitystatusV} 
                placeholder={activitystatusV}
                // error={errors.activity_status && touched.activity_status}
                // success={!errors.activity_status && activity_statusV.length > 0}
                />}
              />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for Profile
Profile.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Profile;
