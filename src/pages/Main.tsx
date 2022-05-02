import {Paper, Typography, useTheme} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../store/slices/rootSlice";

const MainPage = () => {
    const {firebaseUser} = useSelector((state: RootState) => state.app);
    console.log(firebaseUser)
    const theme = useTheme()

    return <Paper sx={{flex: 1, background: theme.palette.background.default}}>
        Main window
        <Typography sx={{color: 'orange'}}>Logged in as: {firebaseUser?.email ?? firebaseUser?.user.email}</Typography>
    </Paper>
}

export default MainPage