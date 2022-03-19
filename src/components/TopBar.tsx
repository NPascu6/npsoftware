import {useNavigate} from "react-router-dom";
import {Button, useTheme} from "@mui/material";

const TopBar = () => {
    const history = useNavigate();
    const theme = useTheme()

    function navigate(url: string) {
        history(url, {replace: true});
    }

    return <>
        <div style={{
            height: '30em',
            width: '100em',
            background: `url(/images/background.png)`
        }}/>
        <div style={{position: 'absolute', right: 0, margin: '0.5em'}}>
            <Button
                style={{
                    width: '100%',
                    color: theme.loginButton.color,
                    backgroundColor: theme.loginButton.background,
                    marginTop: '0.5em'
                }}
                variant={"outlined"}
                onClick={() => navigate("/")}>Home
            </Button>
            <Button
                style={{
                    width: '100%',
                    color: theme.loginButton.color,
                    backgroundColor: theme.loginButton.background,
                    marginTop: '0.5em'
                }}
                variant={"outlined"}
                onClick={() => navigate("/")}>More
            </Button>
            <Button
                style={{
                    width: '100%',
                    color: theme.loginButton.color,
                    backgroundColor: theme.loginButton.background,
                    marginTop: '0.5em'
                }}
                variant={"outlined"}
                onClick={() => navigate("../about")}>About
            </Button>
        </div>
    </>
}

export default TopBar