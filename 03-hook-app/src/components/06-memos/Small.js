import React  from 'react'

export const Small = React.memo(({value}) => {

    console.log(' Me volví a llamar :C ');


    return (
        <small>
            {value}
        </small>
    )
});
