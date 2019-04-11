const styles = {
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
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        margin: 10,
    },
    'MovieComments-comment': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 20,
        padding: 0,
    },
    'MovieComments-comment__div': {
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
    },
    'MovieComments-comment__desc': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        margin: 10,
        color: 'blue',
    },
    'MovieComments-comment__text': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: 10,
    },
}

export default styles;