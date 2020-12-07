import React, {Component} from 'react';

class PostComponent extends Component {

    render() {

        let {post} = this.props

        return (
            <div>

                {post.id} - {post.title}

                <button> chose </button>

            </div>
        );
    }
}

export default PostComponent;