import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Container, TextField, Grid, Button, Typography } from '@mui/material';
import contactImg from '../../../images/contact.jpg'
import codeImg from '../../../images/code.jpg'
import { Box } from '@mui/system';

const styles ={
    content: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(255,255,255, 0.3)',
        marginTop:'100px'
      }
}

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('myPortfolio', 'template_9q12426', form.current, 
      'user_XbsR6kYveBHf6kkhG7m43')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
    return (

        <Box style={{backgroundImage: `url(${codeImg})`,
                    width: "100%",
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
    }}>
        <Box style={styles.content}>
        <Container style={{paddingTop:'110px'}}>
        <Typography variant='h1' style={{color:'#2d3436',padding:'30px'}}>
        
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={8}>
        <Grid item xs={12} md={6}>
        <img style={{width:'100%'}} src={contactImg} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
        <form style={{ marginTop:'50px' }} ref={form} onSubmit={sendEmail}>
        <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid item xs={12} md={6}>
        <TextField
        style={{width:'100%', marginTop:'10px'}}
        id="outlined-multiline-flexible"
        label="Your Name"
        name="user_name"
        type="text"
        maxRows={4}/>
        </Grid>
        <br />
        <Grid item xs={12} md={6}>
        <TextField
        style={{width:'100%',marginTop:'10px'}}
        id="outlined-multiline-flexible"
        label="Your Email"
        name="user_email"
        type="email"
        maxRows={4}/>
        </Grid>
        <br />
        <Grid item xs={12} md={12}>
        <TextField
        style={{width:'100%',marginTop:'10px'}}
        id="outlined-multiline-static"
        label="Message"
        name="message"
        type="text"
        multiline
        rows={6}/>
        </Grid>
        </Grid>
        <Button 
        type='submit' 
        variant='contained'
        style={{margin:'10px', padding:'10px 30px'}}
        >Send</Button>
        </form>
        </Grid>
        </Grid>
        </Container>
        </Box>
        </Box>
    );
};

export default ContactForm;

/* 

        <label>Name</label>
        <input   />
        <label>Email</label>
        <input   />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
*/