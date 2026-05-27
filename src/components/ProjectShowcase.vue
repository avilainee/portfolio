<template>
  <div class="row justify-center">
    <q-card
      v-if="selectedProject?.category != 'academic'"
      class="no-shadow lg-width-2 md-width-8 width-8"
    >
      <q-card-section>
        <div class="text-h6 title-font">{{ selectedProject?.name }} <q-btn v-if="selectedProject.link" flat dense rounded color="primary" icon="link" :href="selectedProject.link" target="_blank" /></div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ selectedProject?.tagline }}
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        {{ selectedProject?.description }}
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-body1 text-weight-medium q-pb-xs">Tools</div>
        <q-chip
          v-for="tag in selectedProject.tools"
          :key="tag"
          square
          size="md"
          class="q-gutter-a-xs"
        >
          {{ tag }}
        </q-chip>
      </q-card-section>
    </q-card>
    <q-card
      v-if="selectedProject?.category === 'academic'"
      class="no-shadow lg-width-2 md-width-8 width-8"
    >
      <q-card-section>
        <div class="text-h6 text-weight-bold">{{ selectedCapstone?.academicTitle }}<q-btn flat dense rounded color="primary" icon="link" :href="selectedCapstone.link" target="_blank" /></div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <span class="text-weight-medium q-pb-xs">Role: </span>{{ selectedCapstone?.role }}<br />
        <span class="text-weight-medium q-pb-xs">Duration: </span>{{ selectedCapstone?.duration
        }}<br />
        <span class="text-weight-medium q-pb-xs">Target Administrative Users: </span
        >{{ selectedCapstone?.client }}
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <ul v-for="task in selectedCapstone.details" :key="task" class="text-grey-8">
          <li>{{ task }}</li>
        </ul>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-body1 text-weight-medium q-pb-xs">Languages</div>
        <div v-for="tool in selectedCapstone.tools" :key="tool.name">
          <div class="row justify-between text-caption">
            <span>{{ tool.name }}</span>
            <span>{{ tool.percent }}%</span>
          </div>

          <q-linear-progress size="8px" :value="tool.percent / 100" :color="tool.color" rounded />
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-body1 text-weight-medium q-pb-xs">Tools</div>
        <q-chip
          v-for="tag in selectedCapstone.software"
          :key="tag"
          square
          size="md"
          class="q-gutter-a-xs"
        >
          {{ tag }}
        </q-chip>
      </q-card-section>
    </q-card>
    <q-card
      v-if="selectedProject?.category === 'academic'"
      class="no-shadow lg-width-5 md-width-8 width-8"
    >
      <q-card-section v-for="vid in selectedCapstone.demo" :key="vid">
        <q-video class="rounded-borders" :ratio="16 / 8" :src="vid" />
      </q-card-section>
      <q-card-section v-for="img in selectedCapstone.gallery" :key="img">
        <q-img :src="img" :ratio="4 / 3" class="rounded-borders" />
      </q-card-section>
    </q-card>
    <q-card
      v-if="selectedProject?.category != 'academic'"
      class="no-shadow lg-width-5 md-width-8 width-8"
    >
      <q-card-section v-if="selectedProject.video" class="q-pa-none">
        <q-video :ratio="1" :src="selectedProject.video" />
      </q-card-section>
      <q-card-section v-for="img in selectedProject.gallery" :key="img" class="q-pa-none">
        <q-img :src="img" :ratio="1" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import projectsData from '../data/work-data.json'

const props = defineProps({
  selectedProj: String,
})

const projectsList = ref(projectsData.projects)
const capstoneList = ref(projectsData.capstone)

const selectedProject = computed(() => {
  return projectsList.value.find((proj) => proj.name === props.selectedProj)
})
const selectedCapstone = computed(() => {
  return capstoneList.value.find((capstone) => capstone.name === props.selectedProj)
})
</script>
