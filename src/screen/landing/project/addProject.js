import React from 'react'
import TextField from '@material-ui/core/TextField';


function AddProject() {
    return (
        <div style={{display:'flex', justifyContent: 'center', height: '100vh', alignItems:'center'}}>
            <form style={{width: 120}} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>
        </div>
    )
}

export default AddProject
