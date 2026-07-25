<template>
  <div
    class="text-center text-weight-medium q-pt-xl q-pb-lg text-grey-9 title-font"
    :class="$q.screen.lt.md ? 'text-h4' : 'text-h3'"
  >
    Personal Archive
  </div>
  <div class="text-center text-body1 q-pb-lg text-grey-8 lg-width-3 md-width-3 margin-auto">
    Selected concept work and speculative design projects exploring new tools, systems, and creative
    problem-solving.
  </div>
  <!--featured
  <div class="flex flex-center q-py-xl">
    <div class="row justify-center">
      <div>
        <q-card flat>
          <q-tabs
            v-model="tab"
            class="text-grey width-8"
            active-color="primary"
            indicator-color="primary"
            align="center"
          >
            <q-tab name="all" label="All Works" />
            <q-tab name="academic" label="Academic Works" />
            <q-tab name="creative" label="Creative Projects" />
          </q-tabs>

          <q-tab-panels v-model="tab" class="width-8">
            <q-tab-panel name="all">
              <WorksGrid :active-tab="tab" />
            </q-tab-panel>

            <q-tab-panel name="academic">
              <WorksGrid :active-tab="tab" />
            </q-tab-panel>

            <q-tab-panel name="creative">
              <WorksGrid :active-tab="tab" />
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </div>-->
  <WorksBento />
</template>

<script setup>
//import { ref } from 'vue'
//import WorksGrid from 'src/components/WorksGrid.vue'
import WorksBento from 'src/components/WorksBento.vue'

//const tab = ref('all')
</script>
