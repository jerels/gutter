import React from 'react';
import { Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: '#E14F5D'
    },
    container: {
        marginLeft: '0px'
    },
    links: {
        marginRight: '14px'
    }
}));


const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg" className={classes.container}>
                <Link href='https://github.com/jerels/gutter' variant='button' target='_blank' rel='noopener' className={classes.links}>
                    Github Repo
                </Link>
                <Link href='https://www.linkedin.com/in/jerel-smith-a42aaa1b7/' variant='button' target='_blank' rel='noopener' className={classes.links}>
                    LinkedIn
                </Link>
            </Container>
        </footer>
    )
};

export default Footer;