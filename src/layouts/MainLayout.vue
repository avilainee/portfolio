<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal unelevated class="bg-white">
      <q-toolbar class="text-dark q-py-none">
        <q-btn
          flat
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          class="hide-lg show-md show-sm"
        />
        <q-space class="hide-lg show-md show-sm" />
        <div>
          <q-btn no-caps dense flat unelevated to="/" class="text-h5 text-dark text-weight-bolder">
            avilainee
          </q-btn>
        </div>
        <q-space />
        <q-tabs align="left" class="hide-sm hide-md show-lg q-mr-lg">
          <q-route-tab label="About" @click="toggledrawerAbout" />
        </q-tabs>
        <q-btn
          unelevated
          rounded
          no-caps
          color="dark"
          label="Contact me"
          href="mailto:imbang.marieavilaine@gmail.com"
          class="show-lg hode-md hide-sm"
        >
          <q-icon right name="arrow_outward" size="xs"
        /></q-btn>

        <q-btn
          flat
          round
          href="mailto:imbang.marieavilaine@gmail.com"
          aria-label="Menu"
          icon="mail"
          class="hide-lg show-md show-sm"
        />
      </q-toolbar>
      <q-drawer v-model="leftDrawerOpen" bordered class="bg-white text-dark">
        <q-list padding>
          <div class="vertical-top">
            <!-- Logo / Brand -->
            <q-item class="q-mb-md q-mt-sm">
              <q-item-section>
                <q-item-label class="text-h5 text-weight-bold title-font text-primary">
                  Portfolio
                </q-item-label>
                <q-item-label caption>of Avilaine Imbang</q-item-label>
              </q-item-section>
            </q-item>

            <!-- Nav Links -->

            <q-item clickable v-ripple to="/about" active-class="text-primary text-weight-bold">
              <q-item-section>
                <q-item-label class="text-uppercase text-weight-medium">About</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <q-space />
          <div class="absolute-bottom q-pl-md q-pb-lg">
            <q-btn
              flat
              round
              color="primary"
              icon="fa-brands fa-facebook-f"
              clickable
              target="_blank"
              rel="noopener"
              href="https://www.facebook.com/crearebyavilaine"
            />
            <q-btn
              flat
              round
              color="primary"
              icon="fa-brands fa-instagram"
              clickable
              target="_blank"
              rel="noopener"
              href="https://www.instagram.com/crearebyavilaine/"
            />
            <q-btn
              flat
              round
              color="primary"
              icon="fa-brands fa-linkedin-in"
              clickable
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/imbang-marie-avilaine/"
            />
            <q-btn
              flat
              round
              color="primary"
              icon="fa-brands fa-whatsapp"
              clickable
              target="_blank"
              rel="noopener"
              href="tel:+639208004011"
            />
          </div>
        </q-list>
      </q-drawer>

      <q-drawer
        v-model="drawerAboutOpen"
        :width="900"
        :breakpoint="500"
        side="right"
        overlay
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <AboutSection />
      </q-drawer>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import AboutSection from 'src/components/AboutSection.vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'MyLayout',

  components: {
    AboutSection,
  },

  setup() {
    const leftDrawerOpen = ref(false)
    const drawerAboutOpen = ref(false)

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    function toggledrawerAbout() {
      drawerAboutOpen.value = !drawerAboutOpen.value
    }

    const router = useRouter()
    const route = useRoute()

    const goToSection = async (id) => {
      if (route.path !== '/') {
        await router.push({ path: '/', hash: `#${id}` })
      } else {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    return {
      leftDrawerOpen,
      drawerAboutOpen,
      toggleLeftDrawer,
      toggledrawerAbout,
      goToSection
    }
  },
}
</script>
