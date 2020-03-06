import { 
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
}  from '@material-ui/core';
import {
    Image,
    Work,
    BeachAccess,
    CodeRounded,
    CodeOutlined
} from '@material-ui/icons'
import React from 'react';

export default function InformationCards() {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant='h5'>
                                Python 3
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <CodeOutlined />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Introduction" secondary="June 8, 2020" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <CodeOutlined />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Coding with Jupyter" secondary="June 9, 2020" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <CodeOutlined />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Data Manipulation" secondary="June 10, 2020" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                <Card>
                        <CardContent>
                            <Typography gutterBottom variant='h5'>
                                Jupyter Notebook
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <CodeOutlined />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Introduction" secondary="June 9, 2020" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <CodeOutlined />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Project setup" secondary="June 10, 2020" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <CodeOutlined />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Data Manipulation" secondary="June 11, 2020" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant='h5'>
                                AI Project
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <CodeOutlined />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Introduction" secondary="June 10, 2020" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <CodeOutlined />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Project Design" secondary="June 11, 2020" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <CodeOutlined />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Project Completion" secondary="June 12, 2020" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}