import {Button, Grid, Paper, TextField, useTheme} from "@mui/material";
import {makeStyles} from '@mui/styles';


const useStyles = makeStyles({
    input: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const Login = () => {
    const classes = useStyles();
    const theme = useTheme()

    return <Paper style={{width: '25em'}}>
        <Grid container spacing={2}>
            <Grid container item direction={"column"} xs={12} className={classes.input}>
                <TextField label={'User Name'} variant={"standard"}/>
            </Grid>
            <Grid container item direction={"column"} xs={12} className={classes.input}>
                <TextField label={'Email'} type={"email"} variant={"standard"}/>
            </Grid>
            <Grid container item direction={"column"} xs={12} className={classes.input}>
                <TextField label={'Password'} type={"password"} variant={"standard"}/>
            </Grid>
            <Grid container item direction={"column"} xs={12} className={classes.input}>
                <Button style={{
                    width: '100%',
                    color: theme.loginButton.color,
                    backgroundColor: theme.loginButton.background
                }}>
                    Login
                </Button>
            </Grid>
        </Grid>
    </Paper>
}

export default Login