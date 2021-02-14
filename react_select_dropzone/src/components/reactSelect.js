import React from 'react';

import Select from 'react-select';

const ReactSelect=(props)=> {
    return (
        <Select className="reactSelect"
          defaultValue={props.defaultValue}
          isMulti={props.isMulti}
          isDisabled={props.isDisabled}
          isLoading={props.isLoading}
          isClearable={props.isClearable}
          isRtl={props.isRtl}
          isSearchable={props.isSearchable}
          name="reactSelect"
          options={props.options}
          onChange={props.onChange}
        />
    );
}
export default ReactSelect;
