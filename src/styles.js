const styles = {
    'Menu-link': {
        textDecoration: 'none',
        textTransform: 'uppercase'
    },
    'Dashboard-main-div': {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    'Dashboard-buttons-div': {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 80
    },
    'Dashboard-charts-div': {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 100,
        width: '100%',
        height: '100%',
    },
    'Dashboard-linkbutton': {
        margin: 20,
        textDecoration: 'none'
    },
    'OmdbDetails-paper': {
        display: 'flex',
        justifyContent: 'space-around',
        margin: 40,
        padding: 30,
    },
    'OmdbDetails-movieDetails__img': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    'OmdbDetails-movieDetails__desc': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: '20%',
        fontWeight: 'bold',
    },
    'OmdbDetails-movieDetails__text': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    'OmdbDetails-paragraph': {
        height: 30,
        padding: 5,
        margin: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    'OmdbDetails-plot-paragraph': {
        height: 'auto',
        padding: 5,
        margin: 5,
    },
    'OmdbDetails-button': {
        margin: 10,
    },
    'OmdbDetails-link': {
        textDecoration: 'none',
    },
    'MovieComments-paper': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 40,
        padding: 10,
    },
    'MovieComments-comments': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        margin: 10,
    },
    'MovieComments-comment': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 20,
        padding: 0,
        width: '600px',
    },
    'MovieComments-comment__div': {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: 0,
        margin: 10,
    },
    'MovieComments-comment__desc': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 10,
        color: '#71816D',
        width: '40%',
        padding: 0,
    },
    'MovieComments-comment__text': {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 10,
        width: '60%',
        padding: 0,
    },
    'MovieComments-comment__row': {
        display: 'flex',
        flexDirection: 'row',
        height: 40,
        width: '100%',
        margin: 0,
        padding: 0,
    },
    'MovieComments-comment__row-big': {
        display: 'flex',
        flexDirection: 'row',
        height: 'auto',
        width: '100%',
        margin: 0,
        padding: 0,
    },
    'AddRating-paper': {
        display: 'flex',
        flexDirection: 'column',
        margin: 30,
        padding: 30,
    },
    'AddRating-button': {
        width: '10%',
        margin: 20,
    },
    'AddRating-textfield': {
        width: '80%',
        margin: 20,
    },
    'FormSearch-container': {
        textAlign: 'center',
        width: '70%',
        margin: '15px auto',
        padding: '10px',
        boxShadow: '2px 2px 5px #333',
        borderRadius: '5px'
    },
    'FormSearch-textfield': {
        width: '60%',
        margin: '10px'
    },
    'FormSearch-nativeselect': {
        margin: '10px',
        width: '100px'
    },
    'FormSearch-range': {
        width: '90%',
        margin: '0 auto',
        padding: '10px',
    },
    'LogIn': {
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    'Register-container': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        padding: 20,
        margin: 10,
    },
    'LogIn-container': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        padding: 20,
        margin: 10,
    },
    'LogIn-container-row': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        margin: 10,
        height: 30,
    },
    'LogIn-textarea': {
        width: '75%',
        margin: '0px 10px',
    },
    'LogIn-text': {
        fontSize: '14px'
    },
    'LogIn-info': {
        fontSize: '14px',
        color: 'red',
        margin: 20,
    },
    'LogIn-button': {
        margin: 20,
    },
    'AppBar': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    'AppBar-logo': {
        padding: 10,
        height: 50,
        borderRadius: '50%',
    },
    'Loading-container': {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '99vw',
        height: '50vh'
    },
    'Loading': {
        width: '100px',
        height: '100px'
    },
    'UserProfile-button': {
        width: '200px',
        margin: 20,
    },
    'UserProfile-avatar': {
        width: '100px',
        height: '100px',
        margin: 20,
    },
};

export default styles;