<template>
  <div class="accordion-item" :class="{ 'accordion-item--open': isOpen }">
    <button
      :id="`acc-btn-${id}`"
      class="accordion-item__button"
      @click="handleClick"
      @keydown.space.prevent="handleClick"
      @keydown.enter.prevent="handleClick"
      :aria-expanded="isOpen"
      :aria-controls="`acc-panel-${id}`"
    >
      <span class="accordion-item__title">{{ title }}</span>
      <span class="accordion-item__chevron" aria-hidden="true">▾</span>
    </button>

    <div
      :id="`acc-panel-${id}`"
      class="accordion-item__content"
      role="region"
      :aria-labelledby="`acc-btn-${id}`"
    >
      <p v-if="text" class="accordion-item__text">{{ text }}</p>
      <slot />

      <div class="accordion-item__image">
        <img v-if="image" :src="image" :alt="title" loading="lazy" width="280" height="120" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    id: { type: [String, Number], required: true },
    index: { type: Number, required: false },
    title: { type: String, required: true },
    text: { type: String, required: false, default: '' },
    image: { type: String, required: false, default: '' },
    isOpen: { type: Boolean, required: false, default: false }
  });

  const emit = defineEmits(['request-toggle'])

  function handleClick() {
    emit('request-toggle', typeof props.index === 'number' ? props.index : props.id)
  }
</script>