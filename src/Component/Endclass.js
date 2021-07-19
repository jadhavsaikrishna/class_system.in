import React from "react";
import {
  Box,
  Grid,
  Select,
  MenuItem,
  FilledInput,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  IconButton,
  CircularProgress,
  Checkbox,
  TextField
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/styles";
import { Close as CloseIcon } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

function Endclass({ open, btnClick }) {
  const [checked, setChecked] = React.useState({});

  const handleChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Select a Reason to End Class</DialogTitle>
        <DialogContent>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={checked.Cc}
                onChange={handleChange}
                name="Cc"
              />
            }
            label="Class completed"
          />
          <div>
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={checked.Ci}
                  onChange={handleChange}
                  name="Ci"
                />
              }
              label="Class Interrupted/Aborted"
            />
          </div>
          {!!checked.Ci && (
            <>
              <div style={{ marginLeft: "30px" }}>
                <div>
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        checked={checked.sdsc}
                        onChange={handleChange}
                        name="sdsc"
                      />
                    }
                    label="Student didn't show up for the class"
                  />
                </div>
                <div>
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        checked={checked.sdsi}
                        onChange={handleChange}
                        name="sdsi"
                      />
                    }
                    label="Student didn't show any interest,"
                  />
                </div>
                <div>
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        checked={checked.sgd}
                        onChange={handleChange}
                        name="sgd"
                      />
                    }
                    label="student got disconnected"
                  />
                </div>
                <div>
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        checked={checked.igd}
                        onChange={handleChange}
                        name="igd"
                      />
                    }
                    label="I got disconnected"
                  />
                </div>
                <div>
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        checked={checked.or}
                        onChange={handleChange}
                        name="or"
                      />
                    }
                    label="Other Reason"
                  />
                </div>
                {checked.or && (
                  <div>
                    <FormControlLabel
                      control={
                        <TextField
                          multiline
                          placeholder="Type Here"
                          rows={4}
                          onChange={handleChange}
                          name="Reason"
                        />
                      }
                    />
                  </div>
                )}
              </div>
            </>
          )}
          <Box mt={2}>
            <Button
              onClick={btnClick}
              color="inherit"
              style={{ backgroundColor: "red" }}
            >
              End class
            </Button>
            <Button
              onClick={btnClick}
              color="inherit"
              style={{ backgroundColor: "white" }}
            >
              Cancel
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Endclass;
