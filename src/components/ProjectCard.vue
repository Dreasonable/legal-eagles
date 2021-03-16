<template>
  <div class="project-card">
    <span>{{ title }}</span>
    <span>{{ url }}</span>
    <span>{{ gitHubUrl }}</span>
    <span>{{ img }}</span>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    gitHubUrl: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
