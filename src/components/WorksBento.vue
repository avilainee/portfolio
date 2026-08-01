<template>
  <div class="q-pb-xl">
    <div class="row justify-center">
      <div :class="$q.screen.lt.md ? 'col-12' : 'col-10'">
        <div
          v-for="(group, groupIndex) in projectGroups"
          :key="groupIndex"
          class="row q-col-gutter-sm q-pb-sm"
        >
          <div class="col-12 col-md-8 col-sm-6">
                <q-card
                  flat
                  bordered
                  class="reveal cursor-pointer bento-card"
                  @click="openShowcase(group[2])"
                >
                  <q-img :src="group[2].coverImage" :ratio="$q.screen.lt.md ? (16 / 9) : (18.2 / 9)" class="bento-img">
                    <div class="absolute-bottom bento-overlay">
                      <div class="text-caption text-uppercase">{{ group[2].tags }}</div>
                      <div class="text-h5 text-weight-medium">{{ group[2].name }}</div>
                    </div>
                  </q-img>
                </q-card>
          </div>
          <div class="col-12 col-md-4 col-sm-6">
                <q-card
                  flat
                  bordered
                  class="reveal cursor-pointer bento-card"
                  @click="openShowcase(group[3])"
                >
                  <q-img :src="group[3].coverImage" :ratio="$q.screen.lt.md ? (16 / 9) : 1" class="bento-img">
                    <div class="absolute-bottom bento-overlay">
                      <div class="text-caption text-uppercase">{{ group[3].tags }}</div>
                      <div class="text-h5 text-weight-medium">{{ group[3].name }}</div>
                    </div>
                  </q-img>
                </q-card>
          </div>
      </div>
      </div>
    </div>
    <div class="row justify-center">
      <!-- Projects Bento -->
      <div :class="$q.screen.lt.md ? 'col-12' : 'col-10'">
        <div
          v-for="(group, groupIndex) in projectGroups"
          :key="groupIndex"
          class="row q-col-gutter-sm"
        >
          <!-- Left column: 1 big, 2 small on middle, 1 big below -->
          <div class="col-12 col-sm-6">
            <!--<div class="row q-col-gutter-sm q-pb-sm" v-if="group[2]">
              <div class="col-12">
                <q-card
                  flat
                  bordered
                  class="reveal cursor-pointer bento-card"
                  @click="openShowcase(group[2])"
                >
                  <q-img :src="group[2].coverImage" :ratio="$q.screen.lt.md ? (16 / 9) : (16 / 9)" class="bento-img">
                    <div class="absolute-bottom bento-overlay">
                      <div class="text-caption text-uppercase">{{ group[2].tags }}</div>
                      <div class="text-h5 text-weight-medium">{{ group[2].name }}</div>
                    </div>
                  </q-img>
                </q-card>
              </div>
            </div>-->

            <div class="row q-col-gutter-sm">
              <div class="col-12 col-md" v-if="group[0]">
                <q-card
                  flat
                  bordered
                  class="reveal cursor-pointer bento-card"
                  @click="openShowcase(group[7])"
                >
                  <q-img :src="group[7].coverImage" :ratio="$q.screen.lt.md ? (16 / 9) : 1" class="bento-img">
                    <div class="absolute-bottom bento-overlay">
                      <div class="text-caption text-uppercase">{{ group[7].tags }}</div>
                      <div class="text-subtitle1 text-weight-medium">{{ group[7].name }}</div>
                    </div>
                  </q-img>
                </q-card>
              </div>
              <div class="col-12 col-md" v-if="group[6]">
                <q-card
                  flat
                  bordered
                  class="reveal cursor-pointer bento-card"
                  @click="openShowcase(group[6])"
                >
                  <q-img :src="group[6].coverImage" :ratio="$q.screen.lt.md ? (16 / 9) : 1" class="bento-img">
                    <div class="absolute-bottom bento-overlay">
                      <div class="text-caption text-uppercase">{{ group[6].tags }}</div>
                      <div class="text-subtitle1 text-weight-medium">{{ group[6].name }}</div>
                    </div>
                  </q-img>
                </q-card>
              </div>
            </div>

            <div class="row q-col-gutter-sm q-pt-sm" v-if="group[0]">
              <div class="col-12">
                <q-card
                  flat
                  bordered
                  class="reveal cursor-pointer bento-card"
                  @click="openShowcase(group[0])"
                >
                  <q-img :src="group[0].coverImage" :ratio="$q.screen.lt.md ? (16 / 9) : (16 / 9)" class="bento-img">
                    <div class="absolute-bottom bento-overlay">
                      <div class="text-caption text-uppercase">{{ group[0].tags }}</div>
                      <div class="text-h5 text-weight-medium">{{ group[0].name }}</div>
                    </div>
                  </q-img>
                </q-card>
              </div>
            </div>
          </div>

          <!-- Right column: 1 big on top, 3 small below -->
          <div class="col-12 col-sm-6">
            <!--<div class="row q-col-gutter-sm" v-if="group[3]">
              <div class="col-12">
                <q-card
                  flat
                  bordered
                  class="reveal cursor-pointer bento-card"
                  @click="openShowcase(group[3])"
                >
                  <q-img :src="group[3].coverImage" :ratio="$q.screen.lt.md ? (16 / 9) : (16 / 9)" class="bento-img">
                    <div class="absolute-bottom bento-overlay">
                      <div class="text-caption text-uppercase">{{ group[3].tags }}</div>
                      <div class="text-h5 text-weight-medium">{{ group[3].name }}</div>
                    </div>
                  </q-img>
                </q-card>
              </div>
            </div>-->

            <div class="row q-col-gutter-sm" v-if="group[1]">
              <div class="col-12">
                <q-card
                  flat
                  bordered
                  class="reveal cursor-pointer bento-card"
                  @click="openShowcase(group[1])"
                >
                  <q-img :src="group[1].coverImage" :ratio="$q.screen.lt.md ? (16 / 9) : (16 / 9)" class="bento-img">
                    <div class="absolute-bottom bento-overlay">
                      <div class="text-caption text-uppercase">{{ group[1].tags }}</div>
                      <div class="text-h5 text-weight-medium">{{ group[1].name }}</div>
                    </div>
                  </q-img>
                </q-card>
              </div>
            </div>

            <div class="row q-col-gutter-sm q-pt-sm">
              <div
                class="col-12 col-md"
                v-for="proj in [group[4], group[5]].filter(Boolean)"
                :key="proj.name"
              >
                <q-card flat bordered class="reveal cursor-pointer bento-card" @click="openShowcase(proj)">
                  <q-img :src="proj.coverImage" :ratio="$q.screen.lt.md ? (16 / 9) : 1" class="bento-img">
                    <div class="absolute-bottom bento-overlay">
                      <div class="text-caption text-uppercase">{{ proj.tags }}</div>
                      <div class="text-subtitle1 text-weight-medium">{{ proj.name }}</div>
                    </div>
                  </q-img>
                </q-card>
              </div>
            </div>

          </div>
        </div>
      </div>
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

const filteredProjects = computed(() => {
  const allProjects = projects.value || []

  let result = []

  const filtered = allProjects.filter((n) => n.category != 'academic')
  result = filtered.length > 0 ? filtered : allProjects

  // Sort A-Z by name
  return [...result].sort((a, b) => a.name.localeCompare(b.name))
})

const projectGroups = computed(() => {
  const groups = []
  for (let i = 0; i < filteredProjects.value.length; i += 8) {
    groups.push(filteredProjects.value.slice(i, i + 8))
  }
  
  return groups
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

import { onMounted } from 'vue'
import ScrollReveal from 'scrollreveal'

onMounted(() => {
  ScrollReveal().reveal('.reveal', {
    distance: '80px',
    origin: 'bottom',
    duration: 800,
    easing: 'ease-out'
  })
})
</script>

<style scoped>
.bento-card {
  overflow: hidden;
}

.bento-img :deep(img) {
  transition: transform 0.3s ease;
}

.bento-card:hover .bento-img :deep(img) {
  transform: scale(1.05);
}

.bento-overlay {
  padding: 16px;
  color: white;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 60%);
}
</style>
