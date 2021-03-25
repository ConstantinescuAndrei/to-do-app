import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import PendingChip from './PendingChip/PendingChip';
import CompleteChip from './CompleteChip/CompleteChip';
import FinishTodoButton from '../buttons/FinishTodoButton/FinishTodoButton';

const ChipComponent = ({ id, username, status }) => {
    return (
        <Box style={{display: 'flex', alignItems: 'center'}}>
            {
                status === 'pending' ? (
                    <>
                        <Box style={{flexGrow: '1'}}>
                            <PendingChip />
                        </Box>
                        <FinishTodoButton id={id} username={username}/>    
                    </>
                ) : (
                    <CompleteChip />
                )
            }
        </Box>
    )
}

export default ChipComponent
