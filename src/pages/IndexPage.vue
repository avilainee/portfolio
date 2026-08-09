<template>
  <q-page>
    <!--hero-->
    <div class="flex flex-center q-py-xl">
      <div class="column flex-center q-gutter-y-lg">
        <!--<img
          alt="Avilaine Imbang"
          src="~assets/avi.svg"
          class="margin-auto round-corners"
          :style="$q.screen.lt.md ? 'width: 100%; max-width: 100%;' : ''"
        />-->
        <img src="~assets/img-avi-casual.svg" alt="Avilaine Imbang" style="width: 200px; max-width: 100%;"/>
        <div
          class="text-center text-weight-medium"
          :class="$q.screen.lt.md ? 'text-h2' : 'text-h1'"
        >
          <span class="text-weight-bold text-primary title-font">Avilaine Imbang</span>
          <br />—
          <span :class="$q.screen.lt.md ? 'text-h2' : 'text-h1'" class="text-weight-medium"
            >Creative Thinker
          </span>
          <q-chip
            color="accent"
            :size="$q.screen.lt.md ? 'md' : 'lg'"
            text-color="white"
            label="available for work"
          />
        </div>
        <div class="q-gutter-x-sm">
          <q-btn
            unelevated
            rounded
            no-caps
            color="dark"
            label="Contact me"
            :size="$q.screen.lt.md ? 'lg' : 'lg'"
            href="mailto:imbang.marieavilaine@gmail.com"
          >
            <q-icon right name="arrow_outward" size="sm"
          /></q-btn>
        </div>
      </div>
    </div>
    <!--hero
    <div class="flex flex-center q-py-xl bg-grey-2">
      <div class="column flex-center q-py-xl q-gutter-y-lg">
        <img alt="Avilaine Imbang" src="~assets/img-avi-casual.svg" class="height-2" />
        <div class="text-center text-h3 text-weight-medium">
          <span class="text-weight-bold text-primary title-font">Avilaine Imbang</span>
          —<br />Designer & Innovator
        </div>
        <div class="text-center text-body1 width-8 lg-width-4">
          Combining the discipline of an IT graduate with professional experience in graphic design
          and digital marketing. I specialize in creating high-impact visual assets and
          brand-consistent content for global markets. Give me a clear brief, and I’ll build the
          vision independently.
        </div>
        <div class="q-gutter-x-sm">
          <q-btn
            unelevated
            rounded
            no-caps
            color="dark"
            label="Contact me"
            href="mailto:imbang.marieavilaine@gmail.com"
          >
            <q-icon right name="arrow_outward" size="xs"
          /></q-btn>
        </div>
      </div>
    </div>-->
    <!--strip-->
    <q-banner class="text-white bg-primary">
      <div class="marquee text-h6 q-gutter-x-xl width-10">
        <div>
          <span>●</span>
          <span>Open for full-time remote roles</span>
          <span>●</span>
          <span>3+ years of experience</span>
          <span>●</span>
          <span>Based in Antipolo City, Rizal, Philippines</span>
          <span>●</span>
          <span>Open for full-time remote roles</span>
          <span>●</span>
          <span>3+ years of experience</span>
          <span>●</span>
          <span>Based in Antipolo City, Rizal, Philippines</span>
          <span>●</span>
          <span>Open for full-time remote roles</span>
        </div>
      </div>
    </q-banner>
    <!--services-->
    <q-banner class="flex flex-center q-py-xl text-white bg-dark ">
      <div class="row flex-center q-gutter-x-sm q-py-xl">
        <div class="col-12 col-md-3 q-pb-md" :class="$q.screen.lt.md ? 'text-center' : 'text-left'">
          <div class="reveal text-weight-bold text-white q-ma-none line-height-1" :class="$q.screen.lt.md ? 'text-h4' : 'text-h3'">
            Here's How I Can<br/>Help You Grow
          </div>
        </div>
        <div class="col-12 col-md-4" :class="$q.screen.lt.md ? 'text-center' : 'text-right'">
          <q-chip
            color="secondary"
            :size="$q.screen.lt.md ? 'lg' : 'xl'"
            text-color="white"
            label="Graphic Design"
            class="reveal"
          /><q-avatar color="warning" text-color="dark" class="reveal" icon="tag" :size="$q.screen.lt.md ? 'lg' : 'xl'" />
          <q-chip
            color="primary"
            :size="$q.screen.lt.md ? 'lg' : 'xl'"
            text-color="dark"
            label="Brand Consistency"
            class="reveal"
          />
          <br /><q-chip
            color="accent"
            :size="$q.screen.lt.md ? 'lg' : 'xl'"
            text-color="dark"
            label="Social Media Assets"
            class="reveal"
          /><q-avatar class="reveal" color="secondary" text-color="white" icon="bolt" :size="$q.screen.lt.md ? 'lg' : 'xl'" /> <br />
          <q-chip
            color="warning"
            :size="$q.screen.lt.md ? 'lg' : 'xl'"
            text-color="dark"
            label="Template Design"
            class="reveal"
          />
          <q-chip
            color="accent"
            :size="$q.screen.lt.md ? 'lg' : 'xl'"
            text-color="dark"
            label="Web Design"
            class="reveal"
          />
        </div>
      </div>
    </q-banner>
    <!--works-->
    <q-banner class="flex flex-center q-py-xl" id="works">
      <WorkSection />
    </q-banner>
    <!--toolkit-->
    <q-banner class="flex flex-center q-py-xl bg-grey-2">
      <div class="reveal text-center text-h3 text-weight-medium q-pt-xl q-pb-md text-grey-9 title-font">
        Creative & Technical Toolkit
      </div>
      <div class="reveal text-center text-body1 q-pb-lg text-grey-8 lg-width-4 md-width-4 margin-auto">
        A collection of tools and technologies I’ve worked with across design, development, and
        digital marketing—used to create, manage, and deliver effective solutions.
      </div>
      <div class="reveal q-pb-xl">
        <!-- Row 1 -->
        <div class="row justify-center margin-auto">
          <div class="col-6 col-sm-4 col-md-2 col-lg-1">
            <q-img src="~assets/logo-text/figma.svg" fit="contain" />
          </div>

          <div class="col-6 col-sm-4 col-md-2 col-lg-1">
            <q-img src="~assets/logo-text/canva.svg" fit="contain" />
          </div>

          <div class="col-6 col-sm-4 col-md-2 col-lg-1">
            <q-img src="~assets/logo-text/adobe-ps.svg" fit="contain" />
          </div>

          <div class="col-6 col-sm-4 col-md-2 col-lg-1">
            <q-img src="~assets/logo-text/mailchimp.svg" />
          </div>
          <div class="col-6 col-sm-4 col-md-2 col-lg-1">
            <q-img src="~assets/logo-text/microsoft.svg" />
          </div>
          <div class="col-6 col-sm-4 col-md-2 col-lg-1">
            <q-img src="~assets/logo-text/google.svg" />
          </div>
        </div>
        <!-- Row 2 -->
        <div class="row justify-center margin-auto">
          <div class="col-6 col-sm-4 col-md-2 col-lg-1">
            <q-img src="~assets/logo-text/html.svg" />
          </div>

          <div class="col-6 col-sm-4 col-md-2 col-lg-1">
            <q-img src="~assets/logo-text/sass.svg" />
          </div>

          <div class="col-6 col-sm-4 col-md-2 col-lg-1">
            <q-img src="~assets/logo-text/vuejs.svg" />
          </div>

          <div class="col-6 col-sm-4 col-md-2 col-lg-1">
            <q-img src="~assets/logo-text/quasar.svg" />
          </div>

          <div class="col-6 col-sm-4 col-md-2 col-lg-1">
            <q-img src="~assets/logo-text/gitlab.svg" />
          </div>
        </div>
      </div>
    </q-banner>
    <!--featured-->
    <!--<div class="flex flex-center q-py-xl">
      <div class="row flex-center q-py-xl">
        <div class="col-12">
          <div class="text-center text-h3 text-weight-medium q-pb-xl text-grey-9">
            <span class=" title-font">What I Build</span>
          </div>
          
          <div
            class="text-center text-body1 q-pb-lg text-grey-8 width-8 lg-width-4 md-width-8 margin-auto"
          >
            A showcase of full-stack web applications and digital solutions developed during my
            academic and professional journey—integrating technical reliability with intuitive user
            experience. This section also highlights the creative design projects I pursue to
            continuously refine my visual storytelling and UI/UX skills.
          </div>
        </div>
        <q-card
          class="col-10 col-sm-5 col-md-3 col-lg-3 q-ma-sm  card-border"
          flat
          bordered
          cursor-pointer
        >
          <q-img src="actdaan/login.png"  :ratio="4 / 3" />

          <q-card-section>
            <div class="text-h5 text-weight-medium q-mt-sm q-mb-xs">
              Technical Solutions & Development
            </div>
            <div class="text-caption text-grey">
              A collection of high-performance web applications and document processing systems,
              including my ACTDAAN capstone and a live Photobooth site, built using Vue 3, Quasar,
              and Node.js to prioritize technical reliability.
            </div>
          </q-card-section>
        </q-card>
        <q-card
          class="col-10 col-sm-5 col-md-3 col-lg-3 q-ma-sm card-border"
          flat
          bordered
        >
          <q-img src="img/mup-potty.jpg"  :ratio="4 / 3" />
          <q-card-section>
            <div class="text-h5 text-weight-medium q-mt-sm q-mb-xs">UI/UX & Digital Branding</div>
            <div class="text-caption text-grey">
              Modern interface mockups and product visualizations crafted in Figma to bridge the gap
              between abstract branding concepts and intuitive, aesthetic user experiences.
            </div>
          </q-card-section>
        </q-card>
        
        <q-card
          class="col-10 col-sm-5 col-md-3 col-lg-3 q-ma-sm card-border"
          flat
          bordered
        >
          <q-img src="img/ps-dusk.jpg" :ratio="4 / 3" />

          <q-card-section>
            <div class="text-h5 text-weight-medium q-mt-sm q-mb-xs">
              Digital Marketing & Creative Assets
            </div>
            <div class="text-caption text-grey">
              Professional marketing designs ranging from high-impact social media posts and
              Mailchimp EDM campaigns to specialized Adobe Photoshop real estate "dawn" edits for
              international stakeholders.
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn
              flat
              rounded
              no-caps
              color="primary"
              label="View More"
              icon-right="keyboard_arrow_right"
              to="/works"
            />
          </q-card-actions>
        </q-card>
        <div class="col-12 text-center q-mt-md">
        <q-btn
              unelevated 
              rounded
              no-caps
              color="primary"
              label="View Works"
              icon-right="keyboard_arrow_right"
              to="/works"
            /></div>
      </div>
    </div>-->
    <!--footer-->
    <FooterSection />
  </q-page>
</template>
<script setup>
import FooterSection from 'src/components/FooterSection.vue'
import WorkSection from 'src/components/WorkSection.vue'
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
<style>
.round-corners {
  border-radius: 8px;
}
</style>
