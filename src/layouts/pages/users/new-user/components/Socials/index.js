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

function Socials({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { kpi, budget } = formField;
  const { kpi: kpiV, budget: budgetV } = values;

  return (
    <MDBox>
      <MDBox mt={1.625}>
        <Grid container spacing={1}>
        <Grid item xs={12}>
            <FormField
                type={kpi.type}
                label={kpi.label}
                name={kpi.name}
                value={kpiV}
                placeholder={kpi.placeholder}
                multiline
                rows={5}
              />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Autocomplete
              options={["Planned", "Utilized" ]}
              renderInput={(params) => <MDInput 
                {...params} 
                variant="standard" 
                type={budget.type}
                label={budget.label} 
                name={budget.name} 
                value={budgetV} 
                placeholder={budgetV}
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

// typechecking props for Socials
Socials.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Socials;
