import React from "react";
import Box from "@src/components/Box/box";
import Button from "@src/components/Button/button";
import Image from "@src/components/Image/image";
import Text from "@src/components/Text/text";
import { BaseComponent } from "@src/theme/baseComponent";
import ThemeProvider, { useTheme } from "@src/theme/themeProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'



const RESEND_API_KEY = process.env.RESEND_KEY


function useForm({ initialValues }) {
  const [values, setValues] = React.useState(initialValues)
  return {
    values,
    handleChange: (event: { target: { name: string; value: any; }; }) => {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value
      })
    }
  }
}

interface NewsLetterTextFieldProps {
  placeholder: string;
  values?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}
function NewsLetterTextField(props: NewsLetterTextFieldProps) {
  const theme = useTheme();
  return (
    <ThemeProvider>
      <Box
        styleSheet={{
          width: '100%',
          marginBottom: '16px',
          maxWidth: '315px',
        }}
      >

        <BaseComponent
          as="input"
          styleSheet={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: `1px solid ${theme.colors.neutral.x100}`,
          }}
          {...props}
        />
      </Box>
    </ThemeProvider>
  )
}


export default function NewsletterScreen() {
  const theme = useTheme();
  const router = useRouter()
  const timeRedirect = 5000;

  function handleRedirect() {
    setTimeout(() => {
      router.push('/');
    }, timeRedirect);
  }

  const form = useForm({
    initialValues: {
      emailNewsletter: ''
    }
  });

  return (

    <Box
      styleSheet={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        styleSheet={{
          alignItems: 'center',
          width: '100%',
          maxWidth: '400px',
          padding: '16px'
        }}
      >
        <Image
          src="https://github.com/leonardojaques.png"
          alt="imagem de rosto"
          styleSheet={{
            borderRadius: '100%',
            width: { xs: '64px', sm: '80px', md: '96px', lg: '112px', xl: '128px' },
            height: { xs: '64px', sm: '80px', md: '96px', lg: '112px', xl: '128px' },
            marginTop: '16px',
            marginBottom: '16px',
          }}
        />
        <Text variant="heading4" styleSheet={{
          color: theme.colors.neutral.x900,
          marginBottom: '16px',

        }}>
          Newsletter do Leonardo Jaques
        </Text>
        <NewsLetterTextField
          placeholder="Digite seu email"
          name="emailNewsletter"
          values={form.values.emailNewsletter}
          onChange={form.handleChange}
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (form.values.emailNewsletter.includes('@') || form.values.emailNewsletter.includes('.')) {
              try {
                fetch('/api/newsletter/optin', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${RESEND_API_KEY}`,
                  },
                  body: JSON.stringify({
                    emailNewsletter: form.values.emailNewsletter
                  })
                }).then(async (response) => {
                  if (response.status === 200) {
                    toast.success('Email cadastrado com sucesso!', {
                      position: "top-center",
                      autoClose: timeRedirect,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,

                    })
                    handleRedirect()
                  }
                  if (response.status === 500) {
                    toast.error('Email já cadastrado!', {
                      position: "top-center",
                      autoClose: timeRedirect,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    })
                    handleRedirect()
                  }

                })

              } catch (error) {
                toast.error('Erro ao cadastrar email!', {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                handleRedirect()
              }
            }
          }}
        >
          <Button
            fullWidth
            styleSheet={{
              marginTop: '16px',
            }}
          >
            cadastre-se
          </Button>
          <ToastContainer />
        </form>
      </Box>
    </Box >

  )
}
