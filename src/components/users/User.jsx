import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner/Spinner'
import { Link } from 'react-router-dom';

export class User extends Component {
componentDidMount(){
    this.props.getUser(this.props.match.params.login)
}

static propTypes = {
    getUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    user:PropTypes.object.isRequired
}

    render() {
        const {name,
            login,
            avatar_url,
            bio,
            blog,
            company,
            company_url,
            location,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
            } = this.props.user;

        const {loading} = this.props;   
        
        if (loading) return <Spinner />
        return (
            <Fragment>
            <Link to='/' className='btn  btn-light'>Back to Homepage</Link>
            Hireable: {''}
            {hireable ? <i className='fas fa-check text-success'/> : <i className='fas fa-times-circle text-danger' />}
            </Fragment>
        )
    }
}

export default User
