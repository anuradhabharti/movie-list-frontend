import React, { Component } from 'react';
import propsType from 'prop-types'
import {connect} from "react-redux"
class Movie extends Component {
    state = {  }
    componentWillMount(){
        this.setState(this.props.movies.filter(movie=>movie.movie_id===Number(this.props.match.params.id))[0])
    }
    render() { 
        console.log(this.state)
        return (<div>
            
        </div>  );
    }
}
 
const mapStatetoProps=state=>({
    movies:state.movies.movies,
 
})

export default connect(mapStatetoProps)(Movie);