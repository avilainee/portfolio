<template>
  <div>
    <!-- Projects Grid -->
    <div class="row justify-center">
      <q-card
        v-for="proj in paginatedProjects"
        :key="proj.name"
        class="col-12 col-sm-5 col-md-3 col-lg-3 q-ma-sm cursor-pointer"
        flat
        bordered
        @click="openShowcase(proj)"
      >
        <q-img :src="proj.coverImage" :ratio="4 / 3" />

        <q-card-section class="q-pb-none row">
          <div class="text-h6 text-weight-medium">
            {{ proj.name }}
          </div>
          <q-space />
          <q-avatar
            v-if="proj.category === 'creative'"
            color="primary"
            text-color="white"
            icon="palette"
          />
          <q-avatar
            v-if="proj.category === 'academic'"
            color="accent"
            text-color="white"
            icon="school"
          />
        </q-card-section>

        <q-card-actions class="q-pt-none">
          <q-chip v-for="tag in proj.tags" :key="tag" square size="sm" class="q-ma-xs">
            {{ tag }}
          </q-chip>
        </q-card-actions>
      </q-card>
    </div>

    <q-dialog v-model="showShowcase" :backdrop-filter="'brightness(30%)'">
      <q-card style="width: 150vh; max-width: 95vw" class="q-px-none hide-scrollbar">
        <q-card-actions class="q-pa-none fixed-top-right">
          <q-btn flat color="grey" icon="close" v-close-popup />
        </q-card-actions>
        <q-card-section class="">
            <ProjectShowcase :selected-proj="selectedProject?.name" />
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Pagination -->
    <div class="row justify-center q-mt-md">
      <q-pagination
        v-model="page"
        :max="totalPages"
        :max-pages="6"
        direction-links
        flat
        color="grey"
        active-color="primary"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import projectsData from '../data/work-data.json'
import ProjectShowcase from 'src/components/ProjectShowcase.vue'

const props = defineProps({
  activeTab: String,
})

const projects = ref(projectsData.projects)

const page = ref(1)
const perPage = 6

const filteredProjects = computed(() => {
  const allProjects = projects.value || []

  let result = []

  if (props.activeTab === 'all') {
    result = allProjects
  } else {
    const filtered = allProjects.filter((n) => n.category === props.activeTab)
    result = filtered.length > 0 ? filtered : allProjects
  }

  // Sort A-Z by name
  return [...result].sort((a, b) => a.name.localeCompare(b.name))
})

const paginatedProjects = computed(() => {
  const start = (page.value - 1) * perPage
  const end = start + perPage
  return filteredProjects.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredProjects.value.length / perPage)
})

watch(
  () => props.activeTab,
  () => {
    page.value = 1
  },
)

const selectedProject = ref(null)
const showShowcase = ref(false)

function openShowcase(proj) {
  selectedProject.value = proj
  showShowcase.value = true
}
</script>
