import React, {Component} from 'react';
import PostComponent from "../user/PostComponent";

class AllPosts extends Component {

    state = {posts: []}

    render() {

        let {posts} = this.state

        return (
            <div>
                {
                    posts.map(value => {
                        return (<PostComponent post = {value} key = {value.id} />)
                    })

                }

            </div>
        );
    }




    componentDidMount() {
        this.posts = []
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(allPosts => {
                this.setState({posts: allPosts})
            })

    }
}

export default AllPosts;