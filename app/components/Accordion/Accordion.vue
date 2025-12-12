<template>
  <section class="accordion" aria-labelledby="accordion-title">
    <div class="accordion__layout">
      <div class="accordion__column accordion__visual" aria-hidden="true">
        <img v-if="currentVisual" :src="currentVisual" alt="" width="650" height="540" class="accordion__visual-img" loading="lazy" />
      </div>

      <div class="accordion__column">
        <div class="accordion__subheading">{{ accordionData?.tag }}</div>
        <h2 id="accordion-title" class="accordion__title">{{ accordionData?.title }}</h2>
        <div class="accordion__list">
          <AccordionItem
            v-for="(item, i) in accordionData?.items || []"
            :key="i"
            :id="i"
            :index="i"
            :title="item.title"
            :text="item.text"
            :image="item.image"
            :isOpen="activeIndex === i"
            @request-toggle="handleRequestToggle"
          >
            <div v-html="item.content"></div>
          </AccordionItem>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  if (typeof useHead !== 'undefined') {
    useHead({
      title: 'Accordion Section',
      meta: [
        {
          name: 'description',
          content: 'Explore our accordion section with dynamic content'
        }
      ]
    });
  }

  import { ref, computed, onMounted, type PropType } from 'vue'
  import AccordionItem from '../AccordionItem/AccordionItem.vue'

  const props = defineProps({
    endpoint: { type: String, required: false, default: 'https://eoyge3duj7xtdqd.m.pipedream.net' },
    visual: { type: String, required: false, default: '' },
    data: { type: Object as PropType<any>, required: false, default: null }
  });

  const accordionData = ref<any>(null)
  const activeIndex = ref<number | null>(0)

  onMounted(async () => {
    if (props.data) {
      accordionData.value = props.data
      if (accordionData.value?.items?.length && activeIndex.value === null) activeIndex.value = 0
      return
    }

    try {
      const res = await $fetch(props.endpoint)
      accordionData.value = res
      if (accordionData.value?.items?.length && activeIndex.value === null) activeIndex.value = 0
    } catch (err) {
      console.error('Failed to load content', err)
    }
  });

  const currentVisual = computed(() => {
    if (!accordionData.value?.items?.length) return props.visual || ''
    const idx = activeIndex.value ?? 0
    return accordionData.value.items[idx]?.image || props.visual || ''
  });

  function handleRequestToggle(index: number) {
    if (activeIndex.value !== index) {
      activeIndex.value = index
    }
  };
</script>

