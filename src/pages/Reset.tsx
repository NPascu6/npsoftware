import {Button, Grid, TextField, useTheme} from "@mui/material";
import {useState} from "react";
import {sendPasswordReset} from "../services/firebase";
import {useNavigate} from "react-router-dom";

const Reset = () => {
    const theme = useTheme()
    const [email, setEmail] = useState<string>('')
    const navigate = useNavigate()

    const validateEmail = (text: string) => {
        return text.match(/^\S+@\S+\.\S+$/)
    }

    const reset = async () => {
        let res: any = await sendPasswordReset(email);
        if (res) {
            navigate('/login')
        }
        console.log(res)
    };

    return <Grid container
                 spacing={1}
                 sx={{
                     marginTop: '2em',
                     border: '1px solid gray',
                     width: '50%',
                     padding: '0.5em'
                 }}>
        <Grid item xs={12}>
            <TextField
                onChange={(e) => setEmail(e.currentTarget.value)}
                sx={{
                    '& .MuiInput-input': {color: !validateEmail(email) ? 'red' : 'green'},
                    '& .MuiInputLabel-root': {color: 'orange'}
                }}
                value={email}
                size={"small"} label={'Email'}
                type={"email"}
                helperText={!validateEmail(email) && email.length > 0 ? "Please enter a valid email address." : ""}
                variant={"standard"}/>
        </Grid>
        <Grid item xs={12}>
            <Button
                disabled={(!validateEmail(email)) ?? false}
                onClick={reset}
                sx={{
                    width: '100%',
                    height: '100%',
                    color: theme.loginButton.color,
                    backgroundColor: theme.loginButton.background
                }}>
                Send
            </Button>
        </Grid>
    </Grid>
}

export default Reset