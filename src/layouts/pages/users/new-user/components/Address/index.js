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

function Address({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { achievements, challenges, comments } = formField;
  const { achievements: achievementsV, challenges: challengesV, comments: commentsV} = values;

  return (
    <MDBox>
  
      <MDBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField
              type={achievements.type}
              label={achievements.label}
              name={achievements.name}
              value={achievementsV}
              placeholder={achievements.placeholder}
              error={errors.achievements && touched.achievements}
              success={achievementsV.length > 0 && !errors.achievements}
            />
          </Grid>
          <Grid item xs={12}>
            <MDBox mt={-1.625}>
              <FormField
                type={challenges.type}
                label={challenges.label}
                name={challenges.name}
                value={challengesV}
                placeholder={challenges.placeholder}
              />
            </MDBox>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={comments.type}
              label={comments.label}
              name={comments.name}
              value={commentsV}
              placeholder={comments.placeholder}
              error={errors.comments && touched.comments}
              success={commentsV.length > 0 && !errors.comments}
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for Address
Address.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Address;
