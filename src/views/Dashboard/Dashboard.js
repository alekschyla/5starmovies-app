import React from 'react';
import LinkButton from './LinkButton';
import Chart1 from './AreaChart';
import Chart2 from './PieChart';
import styles from '../../styles';
import Grid from '@material-ui/core/Grid';

const links = [
    { value: 'Wyszukaj filmy', to: '/search' },
    { value: 'Sprawdź filmy do obejrzenia', to: '/watch-list' },
    { value: 'Wyświetl ulubione filmy', to: '/fav-movies' }
];

class Dashboard extends React.Component {
    render() {
        return (
            <div
                style={styles['Dashboard-main-div']}
            >
                <div
                    style={styles['Dashboard-buttons-div']}
                >
                    <Grid container spacing={24}>
                        {links.map(el => {
                            return (
                                <Grid item xs={12} md={Math.ceil(12 / links.length)} container justify={'center'}>
                                    <LinkButton key={el.value} value={el.value} to={el.to} />
                                </Grid>
                            )
                        })}

                    </Grid>
                </div>

                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <Grid container spacing={24}>
                        <Grid item xs={12} md={6}>
                            <Chart1 />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Chart2 />
                        </Grid>
                    </Grid>
                </div>
            </div >
        )
    }
}

export default Dashboard