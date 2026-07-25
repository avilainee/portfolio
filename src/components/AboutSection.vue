<template>
    <!--about-->
    <q-banner class="flex flex-center q-pt-xl">
      <div class=" lg-width-4 md-width-4 margin-auto">
      <div class="text-h3 text-weight-medium q-pt-xl q-pb-md text-secondary text-center title-font">About</div>
      <div class="text-body1 q-pb-lg text-grey-9 text-justify">
        I am <span class="text-secondary text-weight-bold">Marie Avilaine Imbang</span> , a
        <span class="text-weight-bold">Cum Laude Information Technology</span> graduate from the
        <span class="text-weight-bold">Polytechnic University of the Philippines</span> with a
        passion for bridging the gap between technical development and creative design. With a
        diverse background ranging from
        <span class="text-weight-bold">Full-Stack Development</span> to
        <span class="text-weight-bold">Graphic Design Support</span> , I specialize in building
        high-performance web applications while maintaining strong visual brand consistency. My
        approach combines analytical problem-solving with a keen eye for aesthetics, ensuring that
        every project is both technically reliable and user-centric.
      </div>
    </div>
    </q-banner>
    <!--expi-->
    <q-banner class="flex flex-center q-py-xl bg-grey-2">
      <div class="lg-width-4 md-width-4 margin-auto">
        <div class="text-h3 text-weight-medium q-pt-xl q-pb-md text-primary title-font">Work Experience</div>
        <q-timeline color="primary"  class="text-dark">
          <q-timeline-entry v-for="expi in workExperience" :key="expi.workid">
            <template v-slot:title
              >{{ expi.company }} | {{ expi.role }} <br />
              <q-chip
                v-for="tool in expi.tools"
                :key="tool"
                square
                size="sm"
                class="bg-primary text-weight-medium q-mt-md"
              >
                {{ tool }}
              </q-chip>
            </template>
            <template v-slot:subtitle>
              {{ expi.duration }}
            </template>

            <ul v-for="task in expi.details" :key="task" class="text-grey-8">
              <li>{{ task }}</li>
            </ul>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </q-banner>
    <!--educ-->
    <q-banner class="flex flex-center q-pt-xl">
      <div class="lg-width-4 md-width-4 margin-auto">
        <div class="text-h3 text-weight-medium q-pt-xl q-pb-md text-accent title-font">Education</div>
        <q-timeline color="accent" class="text-dark">
          <q-timeline-entry v-for="edu in education" :key="edu.degree" icon="school">
            <template v-slot:title
              >{{ edu.degree }} | {{ edu.duration }} <br />
              <q-chip v-if="edu.honors" square class="q-mt-md">
                <q-avatar icon="fa-solid fa-award" color="accent" text-color="white" />
                {{ edu.honors }}
              </q-chip>
            </template>
            <template v-slot:subtitle>
              {{ edu.institution }}
            </template>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </q-banner>
    <q-separator/>
    <!--capstone-->
    <q-banner class="flex flex-center q-pb-xl">
      <div class="lg-width-4 md-width-4 margin-auto">
        <div class="text-h3 text-weight-medium q-py-xl text-grey-9 title-font">
          Capstone Project
        </div>
        <q-card flat bordered v-for="caps in capstone" :key="caps.title" class="q-mb-md">
          <q-img :src="caps.coverImage" :ratio="16 / 9" class="rounded-borders" />

          <q-card-section>
            <div class="text-h6 text-weight-medium q-mt-sm q-mb-xs text-dark">
              {{ caps.academicTitle }}
            </div>
            <div class="text-caption text-grey">
              {{ caps.duration }}
            </div>
          </q-card-section>
          <q-card-actions>
            <q-avatar
              size="'xl'"
              class="absolute"
              style="bottom: 0; right: 12px; transform: translateY(-50%)"
            >
              <img :src="caps.clientLogo" />
            </q-avatar>
            <q-btn
              flat
              rounded
              no-caps
              color="primary"
              label="View Details"
              icon-right="keyboard_arrow_right"
              @click="openShowcase(caps)"
            />
          </q-card-actions>
        </q-card>
      </div>
    </q-banner>
    <q-separator />
    <!--certification-->
    <q-banner class="flex flex-center q-pb-xl">
      <div class="lg-width-4 md-width-4 margin-auto">
        <div class="text-h3 text-center text-weight-medium q-py-xl text-grey-9 title-font">Certifications</div>
        <div class="row justify-center">
          <q-card
            flat
            bordered
            v-for="cert in certification"
            :key="cert.title"
            class="col-12 col-sm-5 col-md-12 col-lg-5 q-ma-sm bg-secondary"
          >
            <q-card-section>
              <div class="row items-center">
                <div class="col"></div>

                <div class="col-auto">
                  <q-icon color="white" name="workspace_premium" size="40px" />
                </div>
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-h6 text-white">{{ cert.title }}</div>
              <div class="text-subtitle2 text-white">{{ cert.issuer }}</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-banner>

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
</template>
<script setup>
import { ref } from 'vue'
import profileData from '../data/work-data.json'
import ProjectShowcase from 'src/components/ProjectShowcase.vue'

const workExperience = ref(profileData.workExperience)
const education = ref(profileData.education)
const certification = ref(profileData.certifications)
const capstone = ref(profileData.capstone)

const selectedProject = ref(null)
const showShowcase = ref(false)

function openShowcase(proj) {
  selectedProject.value = proj
  showShowcase.value = true
}
</script>