import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import { Container } from '@material-ui/core'

interface Todo {
    todos: { id: number; content: string; }[];
    cb: (id: number) => void;

}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);
const Todos: React.FC<Todo> = (todo) => {
    const classes = useStyles();
    const { todos, cb } = todo;

    const todoList = todos.length ? (
        todos.map(((todo) => {
            return (
                <div key={todo.id}>

                    <ListItem button >
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary={todo.content} />
                    </ListItem>
                </div>
                // <div key={todo.id}> 
                //     <ListItem button>
                //         <ListItemText primary={todo.content}></ListItemText>
                //     <span onClick={() => { cb(todo.id) }}>{todo.content}</span>
                //     </ListItem>
                // </div>
            )
        }))
    ) : (<p>You have no more todos left</p>);

    return (

        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Nested List Items
                    </ListSubheader>
            }
            className={classes.root}
        >

            {todoList}
        </List>


    )
}

export default Todos;