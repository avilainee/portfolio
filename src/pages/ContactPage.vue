<template>
  <q-page>
    <!--about-->
    <q-banner class="flex flex-center q-pt-xl lg-width-4 md-width-4 margin-auto">
      <div class="text-h3 text-weight-medium q-pt-xl q-pb-md text-secondary text-center title-font">Contact</div>
      <div class="text-body1 q-pb-lg text-grey-9 text-justify">
        <span class="text-secondary text-weight-bold">Name</span>
        <q-input outlined dense v-model="text" label="Your name" />
        <span class="text-secondary text-weight-bold">Email</span>
        <q-input outlined dense v-model="text" label="Your email" />
        <span class="text-secondary text-weight-bold">Message</span>
        <q-input outlined dense v-model="text" label="Your message" type="textarea" />
      </div>

      
    </q-banner>
    
    <!--footer-->
    <FooterSection/>
  </q-page>
</template>
<script setup>
import FooterSection from 'src/components/FooterSection.vue'

</script>