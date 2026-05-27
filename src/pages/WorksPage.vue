<template>
  <q-page>
    <!--toolkit-->
    <q-banner class="flex flex-center q-py-xl bg-grey-2">
      <div class="text-center text-h3 text-weight-medium q-pt-xl q-pb-md text-primary title-font">
        Academic and Creative Works
      </div>
      <div class="text-center text-body1 q-pb-lg text-grey-8 lg-width-4 md-width-4 margin-auto">
        A look at the projects that shaped my perspective. This portfolio spans my academic journey
        and my creative portfolio, illustrating a consistent commitment to excellence and a passion
        for pushing technical boundaries.
      </div>
    </q-banner>
    <!--featured-->
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
                <WorksGrid :active-tab="tab"/>
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
    </div>
    <!--footer-->
    <FooterSection />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import FooterSection from 'src/components/FooterSection.vue'
import WorksGrid from 'src/components/WorksGrid.vue'

const tab = ref('all')

</script>
