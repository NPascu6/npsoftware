import {Grid, Typography} from "@mui/material";

interface AboutProps {
    type: string
}

const About = ({type} : AboutProps) => {
    return <Grid container>
        <Grid item xs={12} sx={{marginTop: '5em'}}>
            <Typography variant={type === 'simple' ? 'h6' : "h4"}  sx={{display: 'flex', justifyContent: 'center', color: 'orange'}}>
                {'Created by Norbert Pascu'}
            </Typography>
            <Typography variant={type === 'simple' ? 'body2' : "h6"}  sx={{display: 'flex', justifyContent: 'center', color: 'orange'}}>
                {'0.0.0.1 / 2022'}
            </Typography>
        </Grid>
    </Grid>
}

export default About