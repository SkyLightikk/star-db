import React, { Component } from 'react';
import Spinner from '../spinner';


const withDataDetails = (View, getData, getImageUrl) => {
  return class extends Component {

    state = {
      data: null,
      imageUrl: null
    };

    componentDidMount() {
      this.updateItem();
    };  
    
    componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId) {
        this.updateItem();
      }
    };
    
    updateItem() {
      const { itemId } = this.props;
      if (!itemId) {
        return;
      }
  
      getData(itemId)
        .then((data) => {
          this.setState({
            data,
            imageUrl: getImageUrl(data)
          });
        });
    }

    render() {
      const { data, imageUrl } = this.state;

      if (!data) {
        return <Spinner />;
      }
      return <View {...this.props} data={data} imageUrl={imageUrl} />;
    }

  }
}

export default withDataDetails;