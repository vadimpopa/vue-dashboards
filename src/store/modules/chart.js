import apollo from '../apollo'

// const apollo = Apollo.apollo
const gql = apollo.gql

export default {
  state: {
    chartOptions: {}
  },
  actions: {
    GET_CHART_OPTIONS (context) {
      context.commit('setChartOptions', {
        title: {
          text: 'Monthly Average Temperature',
          x: -20
        },
        subtitle: {
          text: 'Source: WorldClimate.com',
          x: -20
        },
        tooltip: {
          valueSuffix: '°C'
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        }
      })
    },

    GET_CHART: ({commit}, id) => {
      return apollo.apollo.query({
        query: gql`
          query getChart($id: ID!) {
          Chart(id: $id) {
            createdAt, 
            updatedAt, 
            id, 
            options
            }
          }
        `,
        variables: {
          id
        }
      }).then(res => {
        const ret = res.data.Chart

        if (ret) {
          let data = {
            ...ret.options,
            title: {
              text: 'Monthly Average Temperature',
              x: -20
            },
            subtitle: {
              text: 'Source: WorldClimate.com',
              x: -20
            },
            tooltip: {
              valueSuffix: '°C'
            },
            legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0
            }
          }

          commit('setChartOptions', data)

          return data
        } else {
          Promise.reject(ret.msg)
        }
      })
    }
  },
  mutations: {
    setChartOptions (state, newOptions) {
      state.chartOptions = newOptions
    }
  },
  getters: {
    chartOptions: state => {
      return state.chartOptions
    }
  }
}
