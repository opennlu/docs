<template>
  <div id="global-layout">
    <component :is="layout"/>
    <main class="page landing-page-footer" style="margin-top: -2rem;" v-if="$page.path !== '/'">
      <footer class="page-edit" style="font-size: .75rem; color: #999999;">
        Except as otherwise noted, the content of this page is licensed under the <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 License</a>,
        and code samples are licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0 License</a>.
        Some pages contains content from the Google Cloud Documentation that has been adapted to OpenNLU.
        Java is a registered trademark of Oracle and/or its affiliates.
      </footer>
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>