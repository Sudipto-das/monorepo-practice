import { Card, TextField, Typography ,Button} from "@mui/material";

export const Signup = () => {
    return (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5em ",
            }}
          >
            <Typography
              variant="h6"
              style={{
                fontFamily: "Courier New",
                fontSize: "1.2em",
                color: "Highlight",
                fontWeight: "bold",
              }}
            >
              Wellcome to JobErina! SignUp bellow
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2em",
              color: "white",
            }}
          >
            <Card
              variant={"outlined"}
              style={{
                width: 300,
                
                padding: "1em",
                background: "#EBF5FB",
                color: "whitesmoke",
                fontFamily: "Courier New",
              }}
            >
              <TextField
                fullWidth={true}
                id="outlined-basic"
                label="Username"
                variant="outlined"
                
            
              />
              <br />
              <br />
              <TextField
                fullWidth={true}
                id="outlined-basic"
                label="Password"
                
                variant="outlined"
              
              />
              <br />
              <br />
              <Button
                variant="contained"
                style={{
                  fontFamily: "Courier New",
                  fontSize: "1em",
                  fontWeight: "bold",
                }}
                
              >
                Signup
              </Button>
              <br />
              <br />
              Already Register?{" "}
              
            </Card>
          </div>
        </>
      );
};
