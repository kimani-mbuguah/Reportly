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

function UserInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { department, objective, pillar} = formField;
  const {
    department: departmentV,
    objective: objectiveV,
    pillar: pillarV,
  } = values;

  return (
    <MDBox>
      <MDBox mt={1.625}>
      {/* <Grid item xs={12} sm={12}>
          <Autocomplete
              options={["Pastor", "Church Clerk", "Deaconny", "AMO" ]}
              renderInput={(params) => <MDInput 
                {...params} 
                variant="standard" 
                type={department.type}
                label={department.label} 
                name={department.name} 
                value={departmentV} 
                placeholder={departmentV}
                error={errors.department && touched.department}
                success={!errors.department && departmentV.length > 0}
               />}
            />
          </Grid> */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <FormField
              type={department.type}
              label={department.label}
              name={department.name}
              value={departmentV}
              placeholder={department.placeholder}
              error={errors.department && touched.department}
              success={departmentV.length > 0 && !errors.department}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <FormField
              type={objective.type}
              label={objective.label}
              name={objective.name}
              value={objectiveV}
              placeholder={objective.placeholder}
              error={errors.objective && touched.objective}
              success={objectiveV.length > 0 && !errors.objective}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <FormField
              type={pillar.type}
              label={pillar.label}
              name={pillar.name}
              value={pillarV}
              placeholder={pillar.placeholder}
              error={errors.pillar && touched.pillar}
              success={pillarV.length > 0 && !errors.pillar}
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for UserInfo
UserInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UserInfo;
