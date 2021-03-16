<template>
  <div class="projects">
    <h1>This is the projects page</h1>
    <ProjectCard
      v-for="project in projects"
      :id="project.id"
      :key="project.id"
      :title="project.title"
      :url="project.url"
      :gitHubUrl="project.gitHubUrl"
      :img="project.img"
    />
  </div>
</template>

<script>
// @ is an alias to /src
// import HeroBanner from "@/components/HeroBanner.vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "Projects",
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [
        {
          "id": 1,
          "title": "Project 1",
          "url": "This is a link",
          "gitHubUrl": "This is another link",
          "img": "This is an image"
        },
        {
          "id": 2,
          "title": "Project 2",
          "url": "This is a link",
          "gitHubUrl": "This is another link",
          "img": "This is an image"
        },
        {
          "id": 3,
          "title": "Project 3",
          "url": "This is a link",
          "gitHubUrl": "This is another link",
          "img": "This is an image"
        },
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
  .projects {
    width: 100%;
    min-height: 20rem;
    border: 1px solid black;
    border-radius: 2rem;
    box-shadow: inset 0 0 10px #000000;
    background-color: lightgrey;

    .project-card {
      display: flex;
      flex-direction: column;
      margin: 2rem 0;
      padding: 2rem;
      border: 1px solid black;
      border-radius: 2rem;
      background-color: white;
    }

    .project-card:nth-child(even) {
      color: red;
      margin-right: 2rem;
      border-left: 1px solid white;
      position: relative;
      left: -1px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      box-shadow: 5px 10px 10px -5px black;
    }

    .project-card:nth-child(odd) {
      color: blue;
      margin-left: 2rem;
      border-right: 1px solid white;
      position: relative;
      right: -1px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      box-shadow: -5px 10px 10px -5px black;
    }
  }
</style>
