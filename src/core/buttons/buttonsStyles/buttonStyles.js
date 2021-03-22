import { makeStyles } from '@material-ui/styles';
import lime from '@material-ui/core/colors/lime';

const buttonStyles = makeStyles(theme => ({
    submitButton: {
        display: 'flex',
        marginBottom: '0.5em',
        marginTop: '0.5em',
        marginRight: '0.5em',
        margin: theme.spacing(1),
        borderRadius: '10px',
        backgroundColor: lime[500],
        '&:hover': {
            backgroundColor: theme.palette.primary[500],
            border: '0.5px solid rgb(0, 255, 0)',
            boxShadow: '10px 10px 10px rgba(0, 255, 0, 0.3)',
            border: '0.5px solid rgb(0, 255, 0)',
            transform: "translateY(-0.5px)",
            transition: "0.5s",
        }
    }
}))

export default buttonStyles;