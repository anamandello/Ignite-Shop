import { styled } from "@stitches/react";
import * as Dialog from '@radix-ui/react-dialog';

export const CartButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$gray800',
  height: '3rem',
  width: '3rem',
  border: 0,
  borderRadius: '8px',
  cursor: 'pointer',
      
    div: {
      height: '1.5rem',
      width: '1.5rem',

      div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '$green500',
        fontSize: '0.75rem',
        width: '1.8rem',
        height: '1.8rem',
        borderRadius: '1rem',
        border: '5px solid $gray900',
        position: 'relative',
        top: '-50px',
        left: '20px',
        color: '$white',
        fontWeight: 'bold',

      }
    }  
})

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
    marginTop: '2rem',  
    gap: '1.25rem',
    height: 'calc(100vh - 310px)',
    overflow: 'auto',

    div: {
      display: 'flex',
      gap: '1.25rem',

      img: {
        objectFit: 'cover',
        background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
        borderRadius: 8,      
      },
  
      ':nth-child(2)': {
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
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
          textDecoration: 'none',
          fontSize: 16,
          color: '$green500',
          fontWeight: 'bold',
          marginTop: '0.5rem',
          cursor: 'pointer',

          '&:hover': {
            color: '$green300',
          }
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
        fontSize: '$md',

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