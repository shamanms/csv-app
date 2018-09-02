import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

class CsvUploader extends React.Component {
  onDrop = (files) => {
    this.props.onUpload(files);
  }

  render() {
    const { isFetching } = this.props;
    return (
      <div>
        <Dropzone
          className='bg-success rounded pt-3 pb-1 mb-3 mr-3'
          disabledClassName='bg-danger'
          disabled={isFetching}
          multiple={false}
          onDrop={this.onDrop}>
          <p className='text-center'>Upload your CSV files</p>
        </Dropzone>
      </div>
    );
  }
}

CsvUploader.propTypes = {
  isFetching: PropTypes.bool,
};

export default CsvUploader;