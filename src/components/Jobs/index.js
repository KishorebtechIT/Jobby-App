import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import JobItemDetailsCards from '../JobItemDetailsCards'
import './index.css'
import Header from '../Header'

class Jobs extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    const {salaryRangesList, employmentTypesList} = this.props

    return (
      <div className="Job-container">
        <Header />
        <div className="job-details-container">
          <JobItemDetailsCards
            salaryRangesList={salaryRangesList}
            employmentTypesList={employmentTypesList}
          />
        </div>
      </div>
    )
  }
}

export default Jobs
