import { makeStyles } from '@material-ui/styles';

const buttonStyles = makeStyles(theme => ({
    submitButton: {
        display: 'flex',
        marginBottom: '0.5em',
        marginTop: '0.5em',
        marginRight: '0.5em',
        margin: theme.spacing(1),
        borderRadius: '10px',
        backgroundColor: "#549eff",
        backgroundImage: "linear-gradient(19deg, #549eff 0%, #05b7cd 50%, #00fff5 100%)",
        '&:hover': {          
            border: '0.5px solid rgb(0, 255, 0)',
            boxShadow: '10px 10px 10px rgba(0, 255, 0, 0.3)',
            border: '0.5px solid rgb(0, 255, 0)',
            transform: "translateY(-0.5px)",
            transition: "0.5s",        
        }
    }
}))

export default buttonStyles;