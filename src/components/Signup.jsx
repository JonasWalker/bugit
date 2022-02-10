import React from 'react'

export const Signup = () => (
  <React.Fragment>
    <head>
      <meta name='theme-color' content='#7952b3'></meta>
      <link href='signin.css' rel='stylesheet' />
      <link
        rel='icon'
        href='/BugItLogo.png'
        sizes='32x32'
        type='image/png'
      ></link>
    </head>
    <body class='text-center'>
      <main class='form-signin'>
        <form>
          <img
            rel='icon'
            href='/scr/BugItLogo.png'
            alt='bugitlogo'
            sizes='16x16'
            type='image/png'
          ></img>
          <h1 class='h3 mb-3 fw-normal'>Please Enter Your Info</h1>
          <div class='form-floating'>
            <input
              type='email'
              class='form-control'
              id='floatingInput'
              placeholder='name@example.com'
            ></input>
            <label for='floatingInput'>Email address</label>
          </div>

          <div class='form-floating'>
            <input
              type='password'
              class='form-control'
              id='floatingPassword'
              placeholder='Password'
            ></input>
            <label for='floatingPassword'>Password</label>
          </div>
          <a href='/#home' class='w-100 btn btn-lg btn-primary' type='submit'>
            Sign Up
          </a>
          <p class='mt-5 mb-3 text-muted'>&copy; 2022</p>
        </form>
      </main>
    </body>
  </React.Fragment>
)
