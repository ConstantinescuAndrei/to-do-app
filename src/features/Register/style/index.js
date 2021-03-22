import { makeStyles } from '@material-ui/styles';
import { grey, lime } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    gridRoot: {
        height: "100vh"
    },
    gridSingUp: {
        backgroundColor: grey[200]
    },
    imageStyle: {
        backgroundImage: "url(https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    paper: {
        margin: theme.spacing("25vh", 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing("25vh", "20vh")
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: grey[300],
        color: theme.palette.primary[700],
    }   
}))

export default useStyles;