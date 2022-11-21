import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  font: {
    fontFamily: "Roboto !important",
  },
});

export const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000'
