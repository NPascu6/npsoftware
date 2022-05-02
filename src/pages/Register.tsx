import {Button, Grid, IconButton, InputAdornment, TextField, useTheme} from "@mui/material";
import {useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {registerWithEmailAndPassword} from "../services/firebase";
import {useDispatch} from "react-redux";
import {setFirebaseUser} from "../store/slices/appSlice";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const theme = useTheme()
    const [user, setUser] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        setShowPassword(prev => !prev);
    }

    const validateEmail = (text: string) => {
        return text.match(/^\S+@\S+\.\S+$/)
    }

    const validateUser = (text: string) => {
        return text.length > 3
    }

    const validatePassword = (text: string) => {
        return text.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/)
    }

    const register = async () => {
        let res: any = await registerWithEmailAndPassword(user, email, password);
        dispatch(setFirebaseUser(res))
        if (res) {
            navigate('/')
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
                sx={{
                    '& .MuiInput-input': {color: !validateUser(user) ? 'red' : 'green'},
                    '& .MuiInputLabel-root': {color: 'orange'}
                }}
                onChange={(e) => setUser(e.currentTarget.value)}
                size={"small"}
                value={user}
                helperText={!validateUser(user) && user.length > 0 ? "Please enter a valid user name(must be more than 3 characters long)." : ""}
                label={'User Name'}
                variant={"standard"}/>
        </Grid>
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
            <TextField
                onChange={(e) => setPassword(e.currentTarget.value)}
                sx={{
                    '& .MuiInput-input': {color: !validatePassword(password) ? 'red' : 'green'},
                    '& .MuiInputLabel-root': {color: 'orange'}
                }}
                type={showPassword ? 'text' : 'password'}
                value={password}
                size={"small"}
                label={'Password'}
                variant={"standard"}
                helperText={!validatePassword(password) && password.length > 0 ? "Please enter a valid password(must contain: Uppercase, Lowercase, Number and Special Character)." : ""}
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <IconButton
                            onClick={handleClick}
                            edge="end"
                        >
                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                }}
            />
        </Grid>
        <Grid item xs={12}>
            <Button disabled={(!validatePassword(password) && !validateUser(user) && !validateEmail(email)) ?? false}
                    onClick={register}
                    sx={{
                        width: '100%',
                        height: '100%',
                        color: theme.loginButton.color,
                        backgroundColor: theme.loginButton.background
                    }}>
                Register
            </Button>
        </Grid>
    </Grid>
}

export default Register