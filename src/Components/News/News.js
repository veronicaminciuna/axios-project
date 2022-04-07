import React, {Component} from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        }
    }

    componentDidMount() {
        const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9eb93445df6e404cb10cc4cd9d202d9f';

        fetch(url)
        .then((response) => {
            
        })
    }


    renderItems() {
        return this.props.items.map((item)=> {
            <NewSingle key={item.id} item={item}/>
        })
    }
    render() {
        return(
            <ul>
                {this.renderItems()}
            </ul>
        )
    }
}

export default News;