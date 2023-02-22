import { styled } from "@stitches/react";
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: '0',
  background: 'rgba(0, 0, 0, 0.75)'
})

export const Content = styled(Dialog.Content, {
  width: '30rem',
  padding: '4.5rem 3rem',
  background: '$gray300',

  position: 'fixed',
  top: '0%',
  right: '0%',
  backgroundColor: '$gray800',
  minHeight: '100vh',

  h2: {
    fontSize: '$lg'
  },

  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: '2rem',  
    
    div: {
      display: 'flex',
      gap: '1.25rem',  
      img: {
        width: 100,
        height: 93,
        objectFit: 'cover',
        background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
        borderRadius: 8,      
      },
  
      div: {
        display: 'flex',
        flexDirection: 'column',
        lineHeight: 1.6,
        
        h3: {
          fontSize: '$md',
          fontWeight: 400,
          color: '$gray300'
        },
        span: {
          marginTop: '0.125rem',
          fontWeight: 'bold',
          fontSize: '$md',
        },
        
        a: {
          fontSize: 16,
          color: '$green500',
          fontWeight: 'bold',
          marginTop: '0.5rem',
        }
      }
    }, 
    
    footer: {
      position: 'fixed',
      bottom: 48,

      div:{
        display: 'flex',
        justifyContent: 'space-between',
      },
      'div:nth-child(1)':{
        fontSize: 'md',
        color: '$gray300',
      },
      'div:nth-child(2)':{
        fontSize: '$lg',
        fontWeight: 'bold',
  
        'span:nth-child(2)':{
          fontSize: '$xl',
        }
      },
      button: {
        backgroundColor: '$green500',
        color: '$white',
        padding: '1rem 8rem',
        borderRadius: 8,
        border: 'none',
        cursor: 'pointer',
        
        '&:hover':{
          backgroundColor: '$green300',
        }
      }
    }
  }
})

export const Close = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  cursor: 'pointer',
  color: '$gray300',
})