import {Button, Grid, useTheme} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setFirebaseUser} from "../store/slices/appSlice";
import {RootState} from "../store/slices/rootSlice";
import {logout} from "../services/firebase";

const TopBar = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const {firebaseUser} = useSelector((state: RootState) => state.app);

    const navigateTo = (url: string) => {
        navigate(url, {replace: true});
    }

    return <>
        <Grid container sx={{height: '20em', justifyContent: 'center'}}>
            <div style={{
                height: '12em',
                width: '100em',
                overflow: 'hidden',
                background: `url(/images/background.png)`
            }}/>
        </Grid>
        <div style={{position: 'absolute', right: 0, margin: '0.5em', display: 'flex', flexDirection: 'column'}}>
            <Button
                sx={{
                    width: '8em',
                    color: theme.loginButton.color,
                    backgroundColor: theme.loginButton.background,
                    marginTop: '0.5em'
                }}
                variant={"outlined"}
                onClick={() => navigateTo("/")}>Home
            </Button>
            {!firebaseUser && location.pathname !== '/login' && <Button
                sx={{
                    width: '8em',
                    color: theme.loginButton.color,
                    backgroundColor: theme.loginButton.background,
                    marginTop: '0.5em'
                }}
                variant={"outlined"}
                onClick={() => navigateTo("/login")}>
                {'Login'}
            </Button>}
            {!firebaseUser && location.pathname !== '/register' && <Button
                sx={{
                    width: '8em',
                    color: theme.loginButton.color,
                    backgroundColor: theme.loginButton.background,
                    marginTop: '0.5em'
                }}
                variant={"outlined"}
                onClick={() => navigateTo("/register")}>
                {'Register'}
            </Button>}
            <Button
                sx={{
                    width: '8em',
                    color: theme.loginButton.color,
                    backgroundColor: theme.loginButton.background,
                    marginTop: '0.5em'
                }}
                variant={"outlined"}
                onClick={() => navigateTo("/about")}>About
            </Button>
            {firebaseUser && <Button
                sx={{
                    width: '8em',
                    color: theme.loginButton.color,
                    backgroundColor: theme.loginButton.background,
                    marginTop: '0.5em'
                }}
                variant={"outlined"}
                onClick={async () => {
                    dispatch(setFirebaseUser(null))
                    await logout()
                    navigateTo("/login")
                }}>Log Out
            </Button>}
        </div>
    </>
}

export default TopBar