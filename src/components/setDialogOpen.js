import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import ProjectCard from "./ProjectDisplayCard";

const useStyles = makeStyles({
  button: {
    width: '130px',
    height: '50px',
    fontSize: "1.05em",
    fontFamily: "monospace",
    fontWeight: "500",
    color: "black",
    marginTop: "40px",
    marginLeft: "26%",
    background: "#B0B0B0",
    "&:hover": {
      background: "#D3D3D3",
    },
  },
});

const DialogContent = withStyles((theme) => ({
  root: {
    backgroundColor: "#B0B0B0",
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function CustomizedDialogs() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className={classes.button}
      >
        View Projects
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <ProjectCard />
        </DialogContent>
      </Dialog>
    </div>
  );
}
