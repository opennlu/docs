<template>
  <div class="landing-page">
    <div class="heading">
      <h1>OpenNLU</h1>
      <h3>Open Source Conversational AI</h3>
      <p>OpenNLU is used to build next-generation bots and assistants that engage in human-like, layered conversations.</p>

      <div>
        <a href="/docs/" class="getting-started">
          Getting Started ->
        </a>
      </div>
    </div>

    <div class="footer">
      Except as otherwise noted, the content of this page is licensed under the <a href="https://creativecommons.org/licenses/by/4.0/" class="footer-link">Creative Commons Attribution 4.0 License</a>,
      and code samples are licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" class="footer-link">Apache 2.0 License</a>.
      Copyright © 2021-present René Preuß & Contributors
    </div>
  </div>
</template>

<script>
export default {
name: "LandingPage"
}
</script>

<style scoped>
  h1 {
    font-size: 5rem;
    margin-bottom: 10px;
  }
  h3 {
    margin-bottom: 30px;
  }
  p {
    padding-bottom: 1rem;
  }
  .heading {
    padding-top: 50px;
    padding-bottom: 25px;
    font-family: 'JetBrains Mono', 'Inter', sans-serif;
  }

  .getting-started {
    display: inline-block;
    margin: 1rem auto;
    padding: 1rem 2rem;
    color: black;
    background: white;
    border-radius: 4px;
    font-weight: bold;
  }
  .landing-page {
    text-align: center;
    width: 50%;
    margin: auto auto;
    color: white;
  }

  @media(max-width:768px){
    .landing-page {
      width: 90%!important;
    }
    .heading {
      padding: 1rem!important;
    }
    .footer {
      margin-top: 0!important;
    }
  }

  .footer {
    margin-top: 100px;
    padding: 1rem;
    color: rgba(255,255,255,.2);
  }
</style>
