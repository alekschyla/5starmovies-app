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
        marginTop: 100
    },
    'Dashboard-linkbutton': {
        margin: '20px',
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
        width: '25%',
        margin: 20,
    },
    'OmdbDetails-movieDetails__desc': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: '20%',
        margin: 20,
        fontWeight: 'bold',
    },
    'OmdbDetails-movieDetails__text': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '50%',
        margin: 20,
    },
    'OmdbDetails-paragraph': {
        height: 30,
    },
    'OmdbDetails-plot-paragraph': {
        height: 'auto',
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
        margin: 10,
    },
    'MovieComments-comment__desc': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        margin: 10,
        color: '#71816D',
    },
    'MovieComments-comment__text': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: 10,
    },
    'MovieComments-comment__row': {
        height: 30,
    },
    'AddRating-paper': {
        display: 'flex',
        flexDirection: 'column',
        margin: 30,
        padding: 30,
        // backgroundColor: '#F8F0E4',
    },
    'AddRating-button': {
        width: '10%',
        margin: 20,
    },
    'AddRating-textfield': {
        width: '40%',
        margin: 20,
        // backgroundColor: '#F8F0E4',
    },
    'AddRating-rating': {
        width: '10%',
        margin: 20,
        // backgroundColor: '#F8F0E4',
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
    }
}

export default styles;