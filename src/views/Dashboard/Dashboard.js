import React from 'react';

import LinkButton from './LinkButton';
import AreaChart from './AreaChart';
import PieChart from './PieChart';
import styles from '../../styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { getDataForAreaChartFirebaseAsyncActionCreator, getDataForPieChartFirebaseAsyncActionCreator } from '../../state/dashboard';

const links = [
    { value: 'Wyszukaj filmy', to: '/search' },
    { value: 'Sprawdź filmy do obejrzenia', to: '/watch-list' },
    { value: 'Wyświetl ulubione filmy', to: '/fav-movies' }
];

class Dashboard extends React.Component {
    componentDidMount() {
        this.props._getDataForAreaChart();
        this.props._getDataForPieChart();
    };

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

                                <Grid
                                    key={el.value}
                                    item xs={12}
                                    md={Math.ceil(12 / links.length)}
                                    container
                                    justify={'center'}
                                >
                                    <LinkButton
                                        value={el.value}
                                        to={el.to}
                                    />
                                </Grid>
                            )
                        })}

                    </Grid>
                </div>

                <div
                    style={styles['Dashboard-charts-div']}
                >
                    <Grid container spacing={24}>
                        <Grid item xs={12} md={6}>
                            <AreaChart
                                data={this.props._dataForAreaChart}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <PieChart
                                data={this.props._dataForPieChart}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    _dataForAreaChart: state.dashboard.dataForAreaChart,
    _dataForPieChart: state.dashboard.dataForPieChart,
});

const mapDispatchToProps = dispatch => ({
    _getDataForAreaChart: () => dispatch(getDataForAreaChartFirebaseAsyncActionCreator()),
    _getDataForPieChart: () => dispatch(getDataForPieChartFirebaseAsyncActionCreator()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);