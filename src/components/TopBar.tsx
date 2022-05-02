import {Button, Grid, useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store/slices/rootSlice";

const TopBar = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const {user} = useSelector((state: RootState) => state.app);

    const navigateTo = (url: string) => {
        navigate(url, {replace: true});
    }

    return <>
        <Grid container sx={{height: '20em', justifyContent: 'center'}}>
            <div style={{
                height: '20em',
                width: '100em',
                overflow: 'hidden',
                background: `url(/images/background.png)`
            }}/>
        </Grid>
        {user && <div style={{position: 'absolute', right: 0, margin: '0.5em'}}>
            <Button
                sx={{
                    width: '100%',
                    color: theme.loginButton.color,
                    backgroundColor: theme.loginButton.background,
                    marginTop: '0.5em'
                }}
                variant={"outlined"}
                onClick={() => navigateTo("/")}>Home
            </Button>
            <Button
                sx={{
                    width: '100%',
                    color: theme.loginButton.color,
                    backgroundColor: theme.loginButton.background,
                    marginTop: '0.5em'
                }}
                variant={"outlined"}
                onClick={() => navigateTo("/about")}>About
            </Button>
        </div>}
    </>
}

export default TopBar