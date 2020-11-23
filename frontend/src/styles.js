import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap:'wrap',
    border: "solid",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  h2 : {
    maxWidth: "max-content",
    maxHeight:"max-content",
  },
  image: {
    marginLeft: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
